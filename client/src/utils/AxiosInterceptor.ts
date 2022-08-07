import axios, {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  HeadersDefaults,
} from 'axios';
import { setCookie, getCookie } from './cookie';

// 요청 성공 직전 호출됩니다.
// axios 설정값을 넣습니다. (사용자 정의 설정도 추가 가능)
const onRequest = (config: AxiosRequestConfig): AxiosRequestConfig => {
  // console.info(`[요청] [${JSON.stringify(config)}]`);
  // config.baseURL = 'https://i7a403.p.ssafy.io/be';
  // config.headers['Content-Type'] = 'application/json';
  // console.log(config.headers);

  config.timeout = 1000;
  return config;
};
// let accessToken = '';
let accessToken = getCookie('jwt-accessToken');

// 요청 에러 직전 호출됩니다.
const onRequestError = (error: AxiosError): Promise<AxiosError> => {
  // console.error(`[요청 에러] [${JSON.stringify(error)}]`);
  return Promise.reject(error);
};

/*
        http status가 200인 경우
        응답 성공 직전 호출됩니다. 
        .then() 으로 이어집니다.
    */
const onResponse = (response: AxiosResponse): AxiosResponse => {
  console.info(`[response] [${JSON.stringify(response)}]`);
  return response;
};

/*
        http status가 200이 아닌 경우
        응답 에러 직전 호출됩니다.
        .catch() 으로 이어집니다.    
    */
const onResponseError = (error: AxiosError): Promise<AxiosError> => {
  // console.log('응답 에러');
  const { config, response } = error;
  if (response?.status === 401) {
    const originalRequest = config;
    // console.log(config);

    let accessToken = getCookie('jwt-accessToken');
    let refreshToken = getCookie('jwt-refreshToken');

    axios
      .post(
        `/auth/reissue`, // token refresh api
        {
          grantType: 'Bearer',
          accessToken: accessToken,
          refreshToken: refreshToken,
        },
      )
      .then((res) => {
        const { accessToken: newAccessToken, refreshToken: newRefreshToken } =
          res.data;
        // sessionStorage.multiSet([
        //   ['jwt-accessToken', newAccessToken],
        //   ['jwt-refreshToken', newRefreshToken],
        // ]);
        setCookie('jwt-accessToken', newAccessToken, {
          path: '/',
          secure: true,
          sameSite: 'none',
        });
        setCookie('jwt-refreshToken', newRefreshToken, {
          path: '/',
          // secure: true,
          sameSite: 'Lax',
          // httpOnly: true,
        });
        axios.defaults.headers.common.Authorization = `Bearer ${newAccessToken}`;
        originalRequest.headers!.Authorization = `Bearer ${newAccessToken}`;
        // 401로 요청 실패했던 요청 새로운 accessToken으로 재요청
        accessToken = newAccessToken;
        // console.log('JWT 토큰 갱신 성공');
        return axios.request(originalRequest);
      });
    // 새로운 토큰 저장
    return axios.request(originalRequest);
  }
  console.error(`[response error] [${JSON.stringify(error)}]`);
  return Promise.reject(error);
};

export function setupInterceptorsTo(
  axiosInstance: AxiosInstance,
): AxiosInstance {
  axiosInstance.interceptors.request.use(onRequest, onRequestError);
  axiosInstance.interceptors.response.use(onResponse, onResponseError);
  axiosInstance.defaults.headers.common.Authorization = `Bearer ${accessToken}`;

  return axiosInstance;
}

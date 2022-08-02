/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import IosModal from '../../Common/IosModal';
// import Modal from '../components/Common/Modal';

/*
모달 사용법
  <IosModal
        renderCenter={true}
        isRelative={true}
        absolutePos={{ top: '0', left: '0' }}
        relativePos={{ top: '0', left: '0' }}
        width="1000px"
        height="300px"s
  >
*/

const InputPassword = () => (
  <div>
    <IosModal
      renderCenter={false}
      isRelative={false}
      relativePos={{ top: '0', left: '0' }}
      width="50vw"
      height="60vh"
    >
      <div css={ModalCSS}>
        <p> 이 개가튼 모달</p>
      </div>
    </IosModal>
  </div>
);

const ModalCSS = css`
  display: flex;
  flex-direction: row;
`;

export default InputPassword;

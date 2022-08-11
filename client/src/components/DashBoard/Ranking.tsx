/** @jsxImportSource @emotion/react */
import React, { useState, useEffect } from 'react';
import { css } from '@emotion/react';
import axios from 'axios';
import { setupInterceptorsTo } from '@src/utils/AxiosInterceptor';
import { useAppSelector } from '@src/store/hooks';

interface RankingInterface {
  rankNum: number;
  studentId: number;
  name: string;
  totalPoing: number;
  introduce: string;
}

const Ranking = () => {
  const AXIOS = setupInterceptorsTo(axios.create());
  const memberStore = useAppSelector((state) => state.member);
  const [visible, setVisible] = useState(false);
  const [rankingList, setRankingList] = useState<RankingInterface[]>([]);
  const loadRankingList = async () => {
    await AXIOS.get(`/students/ranking/`)
      .then(function (response) {
        setRankingList(response.data);
        console.log(response.data);
      })
      .catch(function (error) {
        console.log('실패', error);
      });
  };

  useEffect(() => {
    loadRankingList();
  }, [memberStore]);

  const toggleNotice = (e: React.MouseEvent<HTMLElement>) => {
    // onCLick 이벤트
    setVisible(!visible);
  };

  return (
    <div css={totalContainer}>
      <div className="ranking">
        <div className="rankingInfo">
          <div className="rankBox">위</div>
          <div className="nameBox"></div>
          <div className="myBio"></div>
        </div>
        {memberStore.userId && <button>수정하기</button>}
        <button onClick={toggleNotice}>펼치기</button>
      </div>
      {/* <div className="rankingLow">
            <div className="rankingInfo">
              <div className="rankBox">{rankingList[1].rankNum}위</div>
              <div className="nameBox">{rankingList[1].name}</div>
              <div className="myBio">
                {rankingList[1].introduce
                  ? rankingList[1].introduce
                  : '자기소개가 없습니다.'}
              </div>
            </div>
            {rankingList[1].studentId === memberStore.userId && (
              <button>수정하기</button>
            )}
          </div>
          {visible && (
            <div className="ranking">
              <div className="rankingInfo">
                <div className="rankBox">{rankingList[2].rankNum}위</div>
                <div className="nameBox">{rankingList[2].name}</div>
                <div className="myBio">
                  {rankingList[2].introduce
                    ? rankingList[2].introduce
                    : '자기소개가 없습니다.'}
                </div>
              </div>
              {rankingList[2].studentId === memberStore.userId && (
                <button>수정하기</button>
              )}
            </div>
          )}
          {visible && (
            <div className="rankingLow">
              <div className="rankingInfo">
                <div className="rankBox">{rankingList[3].rankNum}위</div>
                <div className="nameBox">{rankingList[3].name}</div>
                <div className="myBio">
                  {rankingList[3].introduce
                    ? rankingList[3].introduce
                    : '자기소개가 없습니다.'}
                </div>
              </div>
              {rankingList[3].studentId === memberStore.userId && (
                <button>수정하기</button>
              )}
            </div>
          )}
          {visible && (
            <div className="ranking">
              <div className="rankingInfo">
                <div className="rankBox">{rankingList[4].rankNum}위</div>
                <div className="nameBox">{rankingList[4].name}</div>
                <div className="myBio">
                  {rankingList[4].introduce
                    ? rankingList[4].introduce
                    : '자기소개가 없습니다.'}
                </div>
              </div>
              {rankingList[4].studentId === memberStore.userId && (
                <button>수정하기</button>
              )}
            </div>
          )}
          {visible && (
            <div className="rankingLow">
              <div className="rankingInfo">
                <div className="rankBox">{rankingList[5].rankNum}위</div>
                <div className="nameBox">{rankingList[5].name}</div>
                <div className="myBio">
                  {rankingList[5].introduce
                    ? rankingList[5].introduce
                    : '자기소개가 없습니다.'}
                </div>
              </div>
              {rankingList[5].studentId === memberStore.userId && (
                <button>수정하기</button>
              )}
            </div>
          )}
          {visible && (
            <div className="ranking">
              <div className="rankingInfo">
                <div className="rankBox">{rankingList[6].rankNum}위</div>
                <div className="nameBox">{rankingList[6].name}</div>
                <div className="myBio">
                  {rankingList[6].introduce
                    ? rankingList[6].introduce
                    : '자기소개가 없습니다.'}
                </div>
              </div>
              {rankingList[6].studentId === memberStore.userId && (
                <button>수정하기</button>
              )}
            </div>
          )}
          {visible && (
            <div className="rankingLow">
              <div className="rankingInfo">
                <div className="rankBox">{rankingList[7].rankNum}위</div>
                <div className="nameBox">{rankingList[7].name}</div>
                <div className="myBio">
                  {rankingList[7].introduce
                    ? rankingList[7].introduce
                    : '자기소개가 없습니다.'}
                </div>
              </div>
              {rankingList[7].studentId === memberStore.userId && (
                <button>수정하기</button>
              )}
            </div>
          )}
          {visible && (
            <div className="ranking">
              <div className="rankingInfo">
                <div className="rankBox">{rankingList[8].rankNum}위</div>
                <div className="nameBox">{rankingList[8].name}</div>
                <div className="myBio">
                  {rankingList[8].introduce
                    ? rankingList[8].introduce
                    : '자기소개가 없습니다.'}
                </div>
              </div>
              {rankingList[8].studentId === memberStore.userId && (
                <button>수정하기</button>
              )}
            </div>
          )}
          {visible && (
            <div className="rankingLow">
              <div className="rankingInfo">
                <div className="rankBox">{rankingList[9].rankNum}위</div>
                <div className="nameBox">{rankingList[9].name}</div>
                <div className="myBio">
                  {rankingList[9].introduce
                    ? rankingList[9].introduce
                    : '자기소개가 없습니다.'}
                </div>
              </div>
              {rankingList[9].studentId === memberStore.userId && (
                <button>수정하기</button>
              )}
            </div> */}
    </div>
  );
};

const totalContainer = css`
  width: inherit;

  .rankBox {
    width: 50px;
  }
  .myBio {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
  .nameBox {
    width: 100px;
    display: flex;
    flex-direction: row;
    justify-content: end;
  }

  .ranking {
    width: 100%;
    height: 40px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    transition: all 0.1s ease-in-out;
  }
  .ranking:hover {
    transform: scale(1.04);
  }

  .rankingLow {
    width: 100%;
    height: 40px;
    background-color: #f2f2f2;
    border-top: #d0d0d0 1px solid;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    transition: all 0.1s ease-in-out;
  }
  .rankingLow:hover {
    transform: scale(1.04);
  }

  .rankingInfo {
    width: 80%;
    display: flex;
    flex-direction: row;
    align-items: center;
  }
`;

export default Ranking;

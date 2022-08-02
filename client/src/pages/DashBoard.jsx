/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import BackGround from '../components/DashBoard/BackGround';
import IosModal from '../components/Common/IosModal';

function DashBoard() {
  return (
    <div css={totalContainer}>
      <BackGround />
      <div className="dashBoardContainer">
        <div className="navBar">
          <h1>navBar</h1>
        </div>
        <div className="userInfo">
          <IosModal
            renderCenter={true}
            isRelative={true}
            width="50%"
            height="60%"
          >
            <div css={ModalCSS}>
              <p>이 개가튼 모달</p>
            </div>
          </IosModal>
        </div>
      </div>
    </div>
  );
}

const totalContainer = css`
  .dashBoardContainer {
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    background-color: transparent;
    position: absolute;
  }

  .navBar {
    height: 100%;
    width: 20%;
    margin: 20px;
    background: rgba(144, 186, 194, 0.633);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .userInfo {
    height: 100vh;
    width: 80%;
    margin: 20px;
    background: rgba(130, 101, 136, 0.404);
  }

  .infoBar {
    height: 10%;
    width: 95%;
    margin: 20px;
    background: #7fddb3;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .infoContent {
    height: 70%;
    width: 95%;
    margin: 20px;
    background: #c8b97c;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const ModalCSS = css`
  display: flex;
  height: 100%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export default DashBoard;

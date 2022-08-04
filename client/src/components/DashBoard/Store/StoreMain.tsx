/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useState } from 'react';
import ItemList from './ItemListTap/ItemList';
import ReactionList from './ItemListTap/ReactionList';
import BobkkiCapsule from '../../../assets/images/bobkkiCapsule.png';

const StoreMain = () => {
  const [tap, setTap] = useState('itemTap');

  // 클릭 이벤트 핸들러
  const onClickTap = (prop: string) => {
    setTap(prop);
  };

  return (
    <div css={totalContainer}>
      <div className="drawContainer">
        <div className="pageTitle">뽑기</div>
        <hr />
        <div className="sideContainer">
          <div className="draw">
            <p>랜덤 뽑기</p>
            <img src={BobkkiCapsule} alt="뽑기캡슐" className="bobkkiCapsule" />
            <button type="button" className="bbobkkiBtn">
              퐁 X 15
            </button>
          </div>
          <div className="itemList">
            <div className="item-tap">
              <div
                className={tap === 'itemTap' ? 'store1 selected' : 'store1'}
                onClick={() => onClickTap('itemTap')}
              >
                아이템
              </div>
              <div
                className={tap === 'reactionTap' ? 'store2 selected' : 'store2'}
                onClick={() => onClickTap('reactionTap')}
              >
                리액션
              </div>
            </div>
            <div className="item-main">
              {tap === 'itemTap' && <ItemList />}
              {tap === 'reactionTap' && <ReactionList />}
            </div>
          </div>
          <div className="pongCount">
            <span>퐁 X 보유개수</span>
          </div>
        </div>
      </div>
      <div className="myItemContainer">
        <div className="pageTitle">보유 목록</div>
        <hr />
      </div>
    </div>
  );
};

const totalContainer = () => css`
  /* 전역 */
  text-align: center;
  width: inherit;
  height: 100%;
  position: relative;
  overflow: hidden;
  max-height: inherit;
  max-width: inherit;
  display: flex;
  flex-direction: column;

  ul {
    list-style: none;
    padding: 0;
  }

  .itemList {
    width: 55%;
    height: 28vh;
    margin: auto;
    border-radius: 20px;
  }

  .item-tap {
    display: flex;
    flex-direction: row;
    justify-content: stretch;
    height: 2rem;
    border-bottom: dashed 1px gray;

    .store1,
    .store2 {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 33.33%;
      border-top-left-radius: 10px;
      border-top-right-radius: 10px;
      background-color: #fcc97d;
    }
    .store1:hover,
    .store2:hover {
      cursor: pointer;
    }

    .selected {
      background-color: white;
      font-weight: 700;
    }
  }

  .item-main {
    background-color: white;
    height: calc(100% - 2rem);
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    text-align: left;
  }

  .pageTitle {
    text-align: left;
    font-size: calc(0.5rem + 1vw);
    font-weight: 700;
  }

  .drawContainer {
    height: 55%;
    justify-content: center;
  }

  .sideContainer {
    display: inline-flex;
    flex-direction: row;
    vertical-align: middle;
    margin-top: 1rem;
    justify-content: center;
    width: 100%;
  }

  .myItemContainer {
    height: 45%;
    justify-content: center;
  }

  hr {
    margin: 0 auto;
  }

  .draw {
    width: 22%;
    height: 28vh;
    display: inline-flex;
    margin: 0;
    justify-content: center;
    background: #fff1bd;
    flex-direction: column;
    align-items: center;
    border-radius: 20px;
    border: 1px solid lightgray;

    p {
      font-weight: 700;
    }

    .bobkkiCapsule {
      width: 50%;
      height: auto;
    }
  }

  .pongCount {
    width: 15%;
    background-color: white;
    justify-content: center;
    height: 5vh;
    display: inline-flex;
    border-radius: 5px;
    border: 1px solid lightgray;
    font-weight: 700;

    span {
      margin: auto;
    }
  }

  .bbobkkiBtn {
    width: 50%;
    background-color: white;
    height: 4vh;
    border-radius: 5px;
    border: 1px solid lightgray;
    margin: 16px 0 16px 0;
    font-family: 'NanumSquareRound';
    font-weight: 700;
  }
`;

export default StoreMain;

/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import LeftSide from '../components/Home/LeftSide';
import RightSide from '../components/Home/RightSide';

function Home() {
  return (
    <div css={totalContainer}>
      <div className="parent">
        <div className="child">
          <div style={{ width: '100%' }}>
            <div style={{ height: '5%' }} className="circles">
              <div className="circle1" />
              <div className="circle2" />
              <div className="circle3" />
            </div>
            <hr style={{ border: '0', height: '2px', background: '#000000' }} />
            <div style={{ display: 'flex' }}>
              <LeftSide />
              <RightSide />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
const totalContainer = css`
  background-image: url('../images/grid_pattern.jpeg');

  .child {
    position: absolute;
    width: 79.8vw;
    height: 83vh;
    left: 0.5vw;
    top: -0.5vh;

    border-radius: 20px;
    display: flex;
    flex-direction: row;

    background-color: white;

    border: 2px solid #000000;
  }

  .parent {
    position: relative;
    width: 80vw;
    height: 84vh;
    left: 9.8vw;
    top: 8vh;

    border-radius: 20px;
    display: flex;
    flex-direction: row;

    background-color: #fff1bf;

    border: 2px solid #001111;
  }

  .circles {
    margin-top: 0.8rem;
    margin-bottom: -1rem;
    margin-left: 1rem;

    div {
      border: 2px solid black;
      width: 1%;
      height: 34%;
      border-radius: 75px;
      background-color: #000000;
      float: left;
    }

    .circle1 {
      background-color: #ef8181;
    }

    .circle2 {
      background-color: #ffe381;
      margin-left: 0.3rem;
    }

    .circle3 {
      background-color: #96ba85;
      margin-left: 0.3rem;
    }
  }
`;

export default Home;

/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useState } from 'react';
import IosModal from '../components/Common/IosModal';
import LeftSide from '../components/Home/LeftSide';
import RightSide from '../components/Home/RightSide';
import Login from '../components/Home/Login/Login';

// tap === "main";
// tap === "Login";

const Home = () => {
  const [tap, setTap] = useState('main');

  return (
    <div css={totalContainer}>
      <IosModal>
        <LeftSide />
        {tap === 'main' && <RightSide setTap={setTap} />}
        {tap === 'Login' && <Login />}
      </IosModal>
    </div>
  );
};

const totalContainer = css`
  background-color: #ffffff;
  opacity: 0.8;
  background-image: linear-gradient(#929292 1px, transparent 1px),
    linear-gradient(to right, #929292 1px, #ffffff 1px);
  background-size: 30px 30px;
  height: 100vh;
  position: relative;

  .triangles {
    position: absolute;
    width: 100%;
    height: 100%;

    div {
      width: 0px;
      height: 0px;
    }

    .triangle1 {
      border-bottom: 40vh solid #bdcde5;
      border-left: 0px solid transparent;
      border-right: 100vw solid transparent;
      transform: scaleY(-1);
    }

    .triangle2 {
      position: absolute;
      top: 60%;
      border-bottom: 40vh solid #f8cbd3;
      border-left: 100vw solid transparent;
      border-right: 0px solid transparent;
    }
  }

  .child {
    position: absolute;
    width: 79.8vw;
    height: 83vh;
    left: 0.5vw;
    top: -0.5vh;

    border-radius: 20px;

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

    background-color: #fff1bf;

    border: 2px solid #001111;
  }

  .container {
    display: flex;
    flex-direction: column;
    justify-content: start;
    width: 100%;
  }

  .sideContainer {
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 78vh;
    vertical-align: center;
  }

  hr {
    width: 100%;
    height: 2px;
    border: 0;
    background-color: black;
  }

  .circles {
    margin: 10px 0 0 10px;
    div {
      border: 2px solid black;
      width: 10px;
      height: 10px;
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

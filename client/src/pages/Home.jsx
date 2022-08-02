/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useState } from 'react';
import backgroundImg from '../assets/images/homeBackground.png';
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
  background-image: url(${backgroundImg});
  background-size: cover;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row;
`;

export default Home;

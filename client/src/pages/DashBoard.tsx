/** @jsxImportSource @emotion/react */
import React, { useState } from 'react';
import { css } from '@emotion/react';
import IconGroup from '../components/DashBoard/IconGroup';
import MainContent from '../components/DashBoard/MainContent';
import NavBar from '../components/DashBoard/NavBar';
import dashboardBackground from '../assets/images/dashboardBackground.png';
import InputPassword from '../components/DashBoard/MyPage/InputPassword';
import NoticeBoard from '../components/DashBoard/Board/NoticeBoard';

interface NoticeBoardProps {
  articles: [
    {
      noticeId: number;
      writer: string;
      classTitle: string;
      title: string;
      content: string;
      regtime: string;
    },
  ];
}

function DashBoard() {
  const [content, setContent] = useState('mainContent');
  const changeContent = (toGo) => {
    setContent(toGo);
  };
  return (
    <div css={totalContainer}>
      <div className="dashBoardContainer">
        <div className="navBar">
          <NavBar changeContent={changeContent} />
        </div>
        <div className="userInfo">
          <div className="infoBar">
            <IconGroup />
          </div>
          <div className="infoContent">
            {
              {
                mainContent: <MainContent />,
                timeTable: <h1>시간표</h1>,
                notice: <NoticeBoard articles={dummy} />,
                shop: <h1>상점</h1>,
                myPage: <InputPassword />,
              }[content]
            }
          </div>
          <div className="footer">
            <h1>핑퐁클래스 파이팅</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

const dummy = [
  {
    noticeId: 1,
    writer: '이선생',
    classTitle: '국어',
    title:
      '2학년 3반 국어 중간고사 범위aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa22222222222222222222222222222222222222222',
    content:
      '공부 열심히 해aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
    regtime: '2022/07/15',
  },
  {
    noticeId: 2,
    writer: '김선생',
    classTitle: '국어',
    title: '2학년 3반 국어 중간고사 범위12321312312312312312312312',
    content: '공부 열심히 해',
    regtime: '2022/07/15',
  },
  {
    noticeId: 3,
    writer: '김선생',
    classTitle: '국어',
    title: '2학년 3반 국어 중간고사 범위',
    content: '공부 열심히 해',
    regtime: '2022/07/15',
  },
  {
    noticeId: 4,
    writer: '김선생',
    classTitle: '국어',
    title: '2학년 3반 국어 중간고사 범위',
    content: '공부 열심히 해',
    regtime: '2022/07/15',
  },
  {
    noticeId: 5,
    writer: '김선생',
    classTitle: '국어',
    title: '2학년 3반 국어 중간고사 범위',
    content: '공부 열심히 해',
    regtime: '2022/07/15',
  },
  {
    noticeId: 6,
    writer: '김선생',
    classTitle: '국어',
    title: '2학년 3반 국어 중간고사 범위',
    content: '공부 열심히 해',
    regtime: '2022/07/15',
  },
  {
    noticeId: 7,
    writer: '이선생',
    classTitle: '국어',
    title: '2학년 3반 국어 중간고사 범위',
    content: '공부 열심히 해',
    regtime: '2022/07/15',
  },
  {
    noticeId: 8,
    writer: '김선생',
    classTitle: '국어',
    title: '2학년 3반 국어 중간고사 범위',
    content: '공부 열심히 해',
    regtime: '2022/07/15',
  },
  {
    noticeId: 9,
    writer: '김선생',
    classTitle: '국어',
    title: '2학년 3반 국어 중간고사 범위',
    content: '공부 열심히 해',
    regtime: '2022/07/15',
  },
  {
    noticeId: 10,
    writer: '김선생',
    classTitle: '국어',
    title: '2학년 3반 국어 중간고사 범위',
    content: '공부 열심히 해',
    regtime: '2022/07/15',
  },
  {
    noticeId: 11,
    writer: '김선생',
    classTitle: '국어',
    title: '2학년 3반 국어 중간고사 범위',
    content: '공부 열심히 해',
    regtime: '2022/07/15',
  },
  {
    noticeId: 100,
    writer: '김선생',
    classTitle: '국어',
    title: '2학년 3반 국어 중간고사 범위',
    content: '공부 열심히 해',
    regtime: '2022/07/15',
  },
  {
    noticeId: 1000,
    writer: '이선생',
    classTitle: '국어',
    title: '2학년 3반 국어 중간고사 범위',
    content: '공부 열심히 해',
    regtime: '2022/07/15',
  },
  {
    noticeId: 10000,
    writer: '김선생',
    classTitle: '국어',
    title: '2학년 3반 국어 중간고사 범위',
    content: '공부 열심히 해',
    regtime: '2022/07/15',
  },
  {
    noticeId: 100000,
    writer: '김선생',
    classTitle: '국어',
    title: '2학년 3반 국어 중간고사 범위',
    content: '공부 열심히 해',
    regtime: '2022/07/15',
  },
  {
    noticeId: 1000000,
    writer: '김선생',
    classTitle: '국어',
    title: '2학년 3반 국어 중간고사 범위',
    content: '공부 열심히 해',
    regtime: '2022/07/15',
  },
  {
    noticeId: 10000000,
    writer: '김선생',
    classTitle: '국어',
    title: '2학년 3반 국어 중간고사 범위',
    content: '공부 열심히 해',
    regtime: '2022/07/15',
  },
  {
    noticeId: 100000000,
    writer: '김선생',
    classTitle: '국어',
    title: '2학년 3반 국어 중간고사 범위',
    content: '공부 열심히 해',
    regtime: '2022/07/15',
  },
];

const totalContainer = css`
  background-image: url(${dashboardBackground});
  background-size: cover;
  height: 100vh;

  .dashBoardContainer {
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background-color: transparent;
  }

  .navBar {
    height: 100%;
    width: 20%;
    max-width: 300px;
    min-width: 200px;
    background: rgba(144, 186, 194, 0.633);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
  }

  .userInfo {
    height: 100%;
    width: 80%;
    max-width: 1100px;
    min-width: 500px;
    background: rgba(130, 101, 136, 0.404);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
  }

  .infoBar {
    height: 5%;
    width: 95%;
    margin: 10px;
    padding: 0px 20px;
    background: #7fddb3;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: end;
    box-sizing: border-box;
  }

  .infoContent {
    height: 85%;
    width: 95%;
    margin: 10px;
    padding: 20px;
    background: #c8b97c;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    box-sizing: border-box;
    gap: 30px;
  }

  .footer {
    height: 5%;
    width: 95%;
    margin: 10px;
    padding: 0px 20px;
    background: #4ab0d9;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
  }
`;

export default DashBoard;

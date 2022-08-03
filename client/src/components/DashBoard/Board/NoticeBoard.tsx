/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import NoticeBoardAccordion from './NoticeBoardArticle';

interface NoticeBoardProps {
  articles: {
    noticeId: number;
    writer: string;
    classTitle: string;
    title: string;
    content: string;
    regtime: string;
  }[];
}

const NoticeBoard = ({ articles }: NoticeBoardProps) => {
  return (
    <div css={totalContainer}>
      <div className="upperModalArea">
        <div className="pageTitle">공지사항</div>
        <form>
          <select
            value="수업"
            onChange={(e) => {
              console.log(e);
            }}
          >
            <option value="1">국어</option>
            <option value="2">수학</option>
            <option value="3">사회</option>
            <option value="4">영어</option>
          </select>
          <input type="search" name="" id="" />
          <button type="submit">검색</button>
        </form>
      </div>
      <div className="tableArea">
        <div className="row titleRow">
          <div className="col noticeId">번호</div>
          <div className="col classTitle">수업명</div>
          <div className="col title">제목</div>
          <div className="col writer">작성자</div>
          <div className="col regtime">작성일</div>
        </div>

        <div className="articleArea">
          {articles.map((notice) => {
            return (
              <NoticeBoardAccordion key={notice.noticeId} article={notice} />
            );
          })}
        </div>
      </div>
    </div>
  );
};

const totalContainer = () => css`
  /* 전역 */
  text-align: center;
  width: inherit;
  height: inherit;
  position: relative;
  overflow: hidden;
  max-height: inherit;
  max-width: inherit;

  /* table 영역 */
  .tableArea {
    border-spacing: 0;
    width: inherit;
    height: inherit;
    position: absolute;
    overflow-y: scroll;
  }

  /* 스크롤 바 숨기기 */
  .tableArea::-webkit-scrollbar {
    display: none;
  }

  .tableArea div {
    display: inline-block;
  }

  .row,
  .article-btn {
    width: -webkit-fill-available;
    max-width: inherit;
    border: none;
    background-color: transparent;
  }

  .col {
    overflow: hidden;
    text-overflow: ellipsis;
    width: 15%;
    max-width: 30%;
    height: 1.3rem;
  }
  /* 제목 행 */
  .titleRow {
    background-color: #c0d2e5;
  }

  /* 구분선 */
  /* .titleRow .col {
    border-right: 0.5rem solid black;
    vertical-align: middle;
    padding: 1rem 0;
  } */

  /* 게시글 항목 영역 */
  .articleArea {
    /* padding: 1% 0; */
    max-width: 100%;

    /* 제목줄 1줄 */
    .articleRow {
      padding: 0.5rem 0;
      border-bottom: 0.15rem solid black;
    }

    /* 하이라이트 */
    .articleRow:hover,
    .highlited {
      background-color: #dfe9f2;
      border-bottom: 0.15rem solid black;
    }

    /* 아코디언 내용 */
    .detailRow {
      display: block;
      padding: 0.5rem 0;

      margin: 0.5rem 0 -0.5rem 0;
      background-color: #f9f9f9;
      height: -webkit-max-content;
    }

    /* 안 보이는 요소 */
    .hide {
      display: none;
    }

    /*  */
    .detailRow div {
      display: block;
    }

    /* 토글 내용 본문 영역 */
    .detailContent {
      padding: 0 2%;
      text-align: left;
      width: inherit;
      word-wrap: break-word;
    }

    /* 토글 내용 바닥 영역 */
    .detailFooter {
      background-color: #f9f9f9;
      padding: 1% 0;
      position: relative;
      left: 38%;
      button {
        border-radius: 3rem;
        color: white;
        border: none;
        padding: 0.5rem;
        margin: 0 0.5rem;
        width: 5rem;
      }
    }

    .detailWriter {
      max-width: 10%;
    }

    .edit-btn {
      background-color: #a1b9ce;
    }

    .del-btn {
      background-color: #bbbbbb;
    }
  }
  /* 특정 열 별 설정 */
  .noticeId {
    text-overflow: ellipsis;
    max-width: 4%;
  }
  .classTitle,
  .writer,
  .regtime {
    text-overflow: ellipsis;
    min-width: 14%;
    max-width: 17%;
  }
  .classTitleIcon {
    display: inline-block;
    border-radius: 0.5rem;
    background-color: #ffe790;
    align-self: center;
    width: 50%;
    min-width: max-content;
    vertical-align: top;
  }
  .title {
    text-overflow: ellipsis;
    min-width: 46%;
    width: 46%;
    max-width: 50%;
  }
`;

export default NoticeBoard;

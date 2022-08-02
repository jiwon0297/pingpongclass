/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import PropTypes from 'prop-types';
import NoticeBoardAccordion from './NoticeBoardAccordion';

const NoticeBoard = ({ articles }) => {
  return (
    <div css={totalContainer}>
      <div className="upperModalArea">
        <div className="pageTitle">공지사항</div>
        <form>
          <select value="수업">
            <option value="1">국어</option>
            <option value="2">수학</option>
            <option value="3">사회</option>
            <option value="4">영어</option>
          </select>
          <input type="search" name="" id="" />
          검색창
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
            return <NoticeBoardAccordion notice={notice} />;
          })}
        </div>
      </div>
    </div>
  );
};

NoticeBoard.propTypes = {
  articles: PropTypes.arrayOf(
    PropTypes.shape({
      noticeId: PropTypes.number,
      writer: PropTypes.string,
      classTitle: PropTypes.string,
      title: PropTypes.string,
      content: PropTypes.string,
      regtime: PropTypes.string,
    }),
  ).isRequired,
};

const totalContainer = () => css`
  /* 전역 */
  text-align: center;
  width: inherit;
  height: inherit;
  position: relative;
  overflow: hidden;
  max-height: inherit;

  /* 스크롤 바 숨기기 */
  *::-webkit-scrollbar {
    display: none;
  }

  /* table 영역 */
  .tableArea {
    border-spacing: 0;
    width: inherit;
    height: inherit;
    position: absolute;
    overflow-y: scroll;
  }

  .tableArea div {
    display: inline-block;
  }

  .row,
  .article-btn {
    width: -webkit-fill-available;
    max-width: -webkit-fill-available;
    height: 40px;
    border: none;
  }

  .article-btn {
    background-color: transparent;
  }

  .col {
    overflow: hidden;
    text-overflow: ellipsis;
    width: 15%;
    max-width: 30%;
    height: 20px;
    /* justify-content: stretch; */
    padding: 0 20px;
    vertical-align: -webkit-baseline-middle;
  }
  /* 제목 행 */
  .titleRow {
    background-color: #c0d2e5;
  }

  /* 게시글 항목 영역 */
  .articleArea {
    max-width: inherit;
    height: inherit;
    padding: 0;
    /* 1줄 */

    .articleRow {
      border-bottom: 0.15rem solid black;
    }

    .articleRow:hover,
    .articleRowOn {
      background-color: #dfe9f2;
      border-bottom: 0.15rem solid black;
    }

    .detailRow {
      display: inline-block;
      padding: 2rem;
    }

    .hide {
      display: none;
    }

    .detailTitle {
      text-overflow: ellipsis;
      max-width: 10rem;
    }
  }
  /* 특정 열 별 설정 */
  .noticeId {
    text-overflow: ellipsis;
    max-width: 4rem;
  }
  .classTitle,
  .writer,
  .regtime {
    text-overflow: ellipsis;
    max-width: 8rem;
  }
  .classTitleIcon {
    display: inline-block;
    border-radius: 0.5rem;
    background-color: #ffe790;
    align-self: center;
    width: 50%;
    min-width: max-content;
  }
  .title {
    text-overflow: ellipsis;
    min-width: 15rem;
    width: 28rem;
    max-width: 28rem;
  }
`;

export default NoticeBoard;

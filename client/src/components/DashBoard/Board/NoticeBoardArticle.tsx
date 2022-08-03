/** @jsxImportSource @emotion/react */
import React, { useState } from 'react';

interface NoticeBoardArticleProps {
  article: {
    noticeId: number;
    writer: string;
    classTitle: string;
    title: string;
    content: string;
    regtime: string;
  };
}

const NoticeBoardAccordion = ({ article }: NoticeBoardArticleProps) => {
  const [visibility, setVisibility] = useState(false);

  const toggleNotice = () => {
    setVisibility(!visibility);
  };

  return (
    <div className={visibility ? 'row articleRow highlited' : 'row articleRow'}>
      <button className="row article-btn" onClick={() => toggleNotice()}>
        <div className="col noticeId">{article.noticeId}</div>
        <div className="col classTitle">
          <div className="col classTitleIcon">{article.classTitle}</div>
        </div>
        <div className="col title">{article.title}</div>
        <div className="col writer">{article.writer}</div>
        <div className="col regtime">{article.regtime}</div>
      </button>
      <div className={visibility ? 'row detailRow' : 'row detailRow hide'}>
        <div className="detailContent">{article.content}</div>
        <div className="detailWriter">- {article.writer}</div>
        <div className="detailFooter">
          <button className="edit-btn" onClick={() => toggleNotice()}>
            수정
          </button>
          <button className="del-btn" onClick={() => toggleNotice()}>
            삭제
          </button>
        </div>
      </div>
    </div>
  );
};

export default NoticeBoardAccordion;

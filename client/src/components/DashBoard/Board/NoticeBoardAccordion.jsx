/** @jsxImportSource @emotion/react */
import PropTypes from 'prop-types';
import React, { useState } from 'react';

const NoticeBoardAccordion = ({ notice }) => {
  const [visibility, setVisibility] = useState(false);

  const toggleNotice = (key) => {
    setVisibility(!visibility);
    console.log(visibility);
    console.log(key);
  };
  return (
    <div className="row articleRow">
      <button
        className="row articleButton"
        onClick={() => toggleNotice(notice.noticeId)}
      >
        <div className="col noticeId">{notice.noticeId}</div>
        <div className="col classTitle">
          <div className="col classTitleIcon">{notice.classTitle}</div>
        </div>
        <div className="col title">{notice.title}</div>
        <div className="col writer">{notice.writer}</div>
        <div className="col regtime">{notice.regtime}</div>
      </button>
      <div className={visibility ? 'row detailRow' : 'row detailRowHide'}>
        <div className="detailTitle">{notice.title}</div>
        <div className="detailWriter">{notice.writer}</div>
        <div className="detailRegtime">{notice.regtime}</div>
        <div className="detailContent">{notice.content}</div>
      </div>
    </div>
  );
};

NoticeBoardAccordion.propTypes = {
  notice: PropTypes.shape({
    noticeId: PropTypes.number,
    writer: PropTypes.string,
    classTitle: PropTypes.string,
    title: PropTypes.string,
    content: PropTypes.string,
    regtime: PropTypes.string,
  }).isRequired,
};

export default NoticeBoardAccordion;

import { css } from '@emotion/react';
const ReactionList = () => {
  return (
    <div css={totalContainer}>
      <div className="reaction-div-row">
        <div className="reaction-div">
          <img src="../reactions/heart.gif" className="reaction-img" />
        </div>
        <div className="reaction-div">
          <img src="../reactions/laghing.gif" className="reaction-img" />
        </div>
        <div className="reaction-div">
          <img src="../reactions/cry.gif" className="reaction-img" />
        </div>
        <div className="reaction-div">
          <img src="../reactions/question.gif" className="reaction-img" />
        </div>
        <div className="reaction-div">
          <img src="../reactions/sweat.gif" className="reaction-img" />
        </div>
      </div>
      <div className="reaction-div-row">
        <div className="reaction-div">
          <img src="../reactions/clap.gif" className="reaction-img" />
        </div>
        <div className="reaction-div">
          <img src="../reactions/100.gif" className="reaction-img" />
        </div>
        <div className="reaction-div">
          <img src="../reactions/fire.gif" className="reaction-img" />
        </div>
        <div className="reaction-div">
          <img src="../reactions/good.gif" className="reaction-img" />
        </div>
        <div className="reaction-div">
          <img src="../reactions/disappointed.gif" className="reaction-img" />
        </div>
      </div>
    </div>
  );
};

const totalContainer = () => css`
  display: flex;
  flex-direction: column;
  padding: 7px 0px;

  .reaction-div-row {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin: 4px;
  }

  .reaction-div {
    width: calc(86% / 5);
    overflow: hidden;
    background: #ffffff;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 20px;
    box-shadow: 2px 2px 8px -5px;
    transition: all 0.1s ease-in-out;
    border: 1px solid lightgray;
    margin-right: 6px;

    :hover {
      transform: scale(1.05);
      cursor: pointer;
    }

    p {
      font-size: calc(0.5vw);
    }
    .reaction-img {
      width: 60%;
    }
  }
`;

export default ReactionList;

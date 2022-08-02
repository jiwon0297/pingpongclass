/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

function RightSide() {
  return (
    <div css={totalContainer}>
      <h2>
        함께 만들어가는, <br />
        <span className="programName">&nbsp;핑퐁클래스.&nbsp;</span>
      </h2>
      <p>
        핑퐁클래스는 20년간의 노하우가 담긴
        <br />
        선생님들과 학생분들의 각종 요청들을 받아서
        <br />
        모두가 꿈꾸는 온라인 교육 세상을
        <br />
        만들기 위해 제작했어요.
      </p>
      <div className="buttons">
        <button className="teacher">선생님이신가요?</button>
        <button className="student">학생이신가요?</button>
      </div>
    </div>
  );
}

const totalContainer = css`
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: right;
  padding: 4rem;

  h2 {
    color: #56497c;
    text-align: right;
    font-size: 48px;
    margin: 2rem;
    span {
      color: #ffffff;
      background-color: #f48397;
    }
  }

  p {
    color: #56497c;
    text-align: right;
    font-size: 1.5rem;
    font-weight: 600;
    margin: 2rem;
  }

  .buttons {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin: 2rem 0;

    button {
      width: 300px;
      height: 50px;
      border-radius: 20px;
      border: none;
      font-weight: 600;
      cursor: pointer;
      color: #ffffff;
      font-size: 1rem;
    }

    .teacher {
      background-color: #7c99c6;
    }

    .student {
      background-color: #e978a0;
      margin-left: 1rem;
    }
  }
`;

export default RightSide;

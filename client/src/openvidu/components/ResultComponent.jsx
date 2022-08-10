import { css } from '@emotion/react';
import { Link } from 'react-router-dom';
import TeacherResult from './result/TeacherResult';
import StudentResult from './result/StudentResult';
import './SetupComponent.css';

const Result = (props) => {
  const { whoami, myData, othersData } = props;
  return (
    <>
      <div css={TotalContainer}>
        {whoami === 'teacher' ? (
          <>
            <TeacherResult
              whoami={whoami}
              myData={myData}
              othersData={othersData}
            />
            <Link to={`/teacher`}>
              <div className="btn-items">
                <button>대시보드로</button>
              </div>
            </Link>
          </>
        ) : (
          <>
            <StudentResult
              whoami={whoami}
              myData={myData}
              othersData={othersData}
            />
            <Link to={`/student`}>
              <div className="btn-items">
                <button>대시보드로</button>
              </div>
            </Link>
          </>
        )}
      </div>
    </>
  );
};

const TotalContainer = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100vw;
  height: 100vh;

  .btn-items {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export default Result;

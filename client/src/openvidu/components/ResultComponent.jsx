import React from 'react';
import { Link } from 'react-router-dom';
import TeacherResult from './result/TeacherResult';
import StudentResult from './result/StudentResult';
import './SetupComponent.css';

const Result = (props) => {
  const { whoami, myData, othersData } = props;
  return (
    <>
      <div>Result</div>
      <div>
        {whoami === 'teacher' ? (
          <>
            <TeacherResult
              whoami={whoami}
              myData={myData}
              othersData={othersData}
            />
            <Link to={`/teacher`}>
              <button>대시보드로</button>
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
              <button>대시보드로</button>
            </Link>
          </>
        )}
      </div>
    </>
  );
};

export default Result;

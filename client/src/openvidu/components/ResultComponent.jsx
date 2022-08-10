import React from 'react';
import { Link } from 'react-router-dom';
import TeacherResult from './result/TeacherResult';
import StudentResult from './result/StudentResult';
import './SetupComponent.css';

const Result = (props) => {
  const { whoami } = props;
  return (
    <>
      <div>Result</div>
      <div>
        {whoami === 'teacher' ? (
          <>
            <TeacherResult />
            <Link to={`/teacher`}>
              <button>대시보드로</button>
            </Link>
          </>
        ) : (
          <>
            <StudentResult />
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

import { useEffect } from 'react';

const TeacherResult = ({ whoami, myData, othersData }) => {
  useEffect(() => {
    console.log(whoami);
    console.log(myData);
    console.log(othersData);
  }, [whoami, myData, othersData]);

  return (
    <div>
      <h2>TeacherResult</h2>
    </div>
  );
};

export default TeacherResult;

import { useEffect } from 'react';

const StudentResult = ({ whoami, myData, othersData }) => {
  useEffect(() => {
    console.log(whoami);
    console.log(myData);
    console.log(othersData);
  }, [whoami, myData, othersData]);

  return (
    <div>
      <h2>StudentResult</h2>
    </div>
  );
};

export default StudentResult;

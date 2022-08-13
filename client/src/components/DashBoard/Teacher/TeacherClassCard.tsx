import { css } from '@emotion/react';
import { useEffect, useState } from 'react';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const TeacherClassCard = ({ clsList }: any) => {
  const [img, setImg] = useState('');
  const [isMouseOn, setIsMouseOn] = useState(false);

  useEffect(() => {
    if (clsList)
      setImg('/subject/' + clsList.subjectEntity.classSubjectCode + '.jpeg');
  }, [clsList]);

  if (clsList) {
    return (
      <div
        css={TotalContainer}
        onMouseEnter={() => setIsMouseOn(true)}
        onMouseLeave={() => setIsMouseOn(false)}
      >
        <img src={img} className="classImg" alt="수업" />
        <hr />
        <h2>{clsList.classTitle}</h2>
        <p>
          [{clsList.subjectEntity.name}] {clsList.classDesc}
        </p>
        <p>
          [{clsList.timetableId}교시] {clsList.teacherName} 선생님
        </p>
        {isMouseOn ? (
          <div onMouseEnter={() => setIsMouseOn(true)}>
            <div className="editbtn">
              <label htmlFor="profile-image">
                <EditIcon className="edit-icon-btn" />
              </label>
            </div>
            <DeleteIcon className="delete-icon-btn" />
          </div>
        ) : null}
      </div>
    );
  } else {
    return <div css={EmptyContainer}> </div>;
  }
};

const TotalContainer = () => css`
  width: 233px;
  height: 215px;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: end;
  border-radius: 20px;
  padding: 10px;
  box-sizing: border-box;
  transition: all 0.1s ease-in-out;
  border: 1px solid lightgray;
  box-shadow: 2px 2px 8px -5px;
  background: #fffbf2;
  color: black;

  :hover {
    transform: scale(1.05);
    cursor: pointer;
  }

  h2 {
    padding-top: 2px;
    padding-bottom: 4px;
    font-size: 15pt;
  }
  p {
    padding-bottom: 2px;
    font-size: 10pt;
  }

  hr {
    width: 200px;
  }

  .classImg {
    width: 100%;
    height: 120px;
    background: white;
    border-radius: 10px;
    align-items: center;
  }
`;

const EmptyContainer = () => css`
  width: 233px;
  height: 210px;
  background: #ffffff;
  border-radius: 20px;
  padding: 10px;
  border: dashed 1.5px gray;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export default TeacherClassCard;

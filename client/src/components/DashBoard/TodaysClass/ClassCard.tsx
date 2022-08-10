import { css } from '@emotion/react';

const ClassCard = ({ clsList, isActive }: any) => {
  if (clsList) {
    return (
      <div css={totalContainer}>
        <h2>{clsList.classTitle}</h2>
        <p>{clsList.classDesc}</p>
      </div>
    );
  } else {
    return <div css={totalContainer}> </div>;
  }
};

const totalContainer = (isActive: boolean) => css`
  width: 233px;
  height: 233px;
  background: #fdfcf3;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: end;
  border-radius: 20px;
  box-shadow: 2px 2px 15px -5px;
  padding: 10px;
  box-sizing: border-box;
  transition: all 0.1s ease-in-out;
  filter: ${isActive ? 'brightness(100%)' : 'brightness(50%)'};

  :hover {
    transform: scale(1.05);
    cursor: pointer;
  }
`;

export default ClassCard;

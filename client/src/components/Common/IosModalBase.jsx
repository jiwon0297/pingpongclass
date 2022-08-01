/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import PropTypes from 'prop-types';

const IosModalBase = ({ width, height }) => {
  console.log('여기', width, height);
  return (
    <div css={totalContainer({ width, height })}>
      <div css={YellowBackground({ width, height })} />
      <div css={WhiteBackground({ width, height })} />
    </div>
  );
};

const totalContainer = ({ width, height }) => css`
  width: ${width};
  height: ${height};
`;

const YellowBackground = () => css`
  position: absolute;
  width: 100%;
  height: 100%;
  background: #fff1bf;
  border: 5px solid #000000;
  border-radius: 30px;
`;

const WhiteBackground = () => css`
  position: absolute;
  width: 99%;
  height: 99%;
  left: 2%;
  top: 1%;
  background: #ffffff;
  border: 5px solid #000000;
  border-radius: 20px;
`;

IosModalBase.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
};

IosModalBase.defaultProps = {
  width: '1000px',
  height: '600px',
};

export default IosModalBase;

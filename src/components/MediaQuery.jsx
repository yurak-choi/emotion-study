/** @jsxImportSource @emotion/react */
import { css, jsx } from '@emotion/react';

const fontStyle = css`
  color: red;
  font-size: 15px;

  @media (min-width: 1200px) {
    color: blue;
    font-size: 50px;
  }
`;

function MediaQuery() {
  return (
    <div css={fontStyle}>MediaQuery</div>
  );
}

export default MediaQuery;
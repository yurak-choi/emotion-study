/** @jsxImportSource @emotion/react */
import { css, jsx } from '@emotion/react';

const paragraph = css`
  color: turquoise;

  a {
    border-bottom: 1px solid currentColor;
    cursor: pointer;
  }
`;

function NestedSelector() {
  return (
    <p css={paragraph}>
      Some text.
      <a>A link with a bottom border.</a>
    </p>
  );
}

export default NestedSelector;
/** @jsxImportSource @emotion/react */
import { css, jsx } from '@emotion/react';

const danger = css`
  color: red;
`;

const base = css`
  background-color: darkgreen;
  color: turquoise;
`;

function Composition() {
  return (
    <div>
      <div css={base} className="global">This will be turquoise</div>
      <div css={[danger, base]}>
        This will be also be turquoise since the base styles overwrite the danger styles.
      </div>
      <div css={[base, danger]}>This will be red</div>
    </div>
  );
}

export default Composition;
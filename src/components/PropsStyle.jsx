/** @jsxImportSource @emotion/react */
import { css, jsx } from '@emotion/react';

const buttonStyle = (backgroundColor) => {
  return css`
    background: ${backgroundColor};
    color: #fff;
    border: 0 none;
    padding: 8px; 
    margin: 5px;
    border-radius: 3px;
  `;
};

function PropsStyle() {
  return (
    <div>
      <button css={buttonStyle('darkorange')}>CLICK</button>
      <button css={buttonStyle('lightcoral')}>CLICK</button>
    </div>
  );
}

export default PropsStyle;
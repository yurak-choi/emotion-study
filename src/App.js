import { Global, css } from '@emotion/react';
import Composition from './components/Composition';
import NestedSelector from './components/NestedSelector';
import MediaQuery from './components/MediaQuery';
import PropsStyle from './components/PropsStyle';

const globalStyle = css`
  .global {
    font-size: 20px;
    font-weight: bold;
  }
`;

function App() {
  return (
    <div>
      <Global styles={globalStyle} />
      <Composition />
      <NestedSelector />
      <MediaQuery />
      <PropsStyle />
    </div>
  );
}

export default App;

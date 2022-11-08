import { Provider } from "react-redux";
import styled from "styled-components";

import "./reset.css"

import Header from './layout/Header';
import Main from "./layout/Main";


import store from "./redux/store";
import 'antd/dist/antd.min.css';

const WrapperStyles = styled.div`
 max-width: 1440px;
 margin: auto;
 .container {
  max-width: 100%;
  padding: 0px 10px;
  margin: auto;
 }
`

function App() {
  return (
    <Provider store={store}>
      <WrapperStyles>
        <div className="container">
          <Header />
          <Main />
        </div>
      </WrapperStyles>
    </Provider >
  );
}

export default App;

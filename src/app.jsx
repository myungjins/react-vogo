import React from "react";
import Routes from "routes/routes";
import GlobalStyle from "components/shared/global/globalStyle";
import { UserContextProvider } from "store/userContext";

const App = (props) => (
  <>
    <GlobalStyle />
    <UserContextProvider>
      {/* context는 컴포넌트안에서 전역적으로 데이터를 공유하도록 나온 개념입니다 */}
      <Routes />
    </UserContextProvider>
  </>
);

export default App;

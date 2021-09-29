import React from "react";
import Header from "components/header/header";
import Footer from "components/footer/footer";
import Tabbar from "components/tab/tabbar";
import MainTemplate from "templates/main";

const Main = (props) => (
  <>
    <Header />
    <MainTemplate />
    <Footer />
    <Tabbar />
  </>
);

export default Main;

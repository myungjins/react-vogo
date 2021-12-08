import React from "react";
import Form from "components/organism/user/login/form";
import GoBackArrow from "components/header/goBackArrow";
import Sns from "components/organism/user/login/sns";

const UserTemplate = () => {
  return (
    <>
      <GoBackArrow />
      <Form />
      <Sns />
    </>
  );
};

export default UserTemplate;

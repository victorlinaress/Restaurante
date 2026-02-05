import React from "react";
import * as C from "./styles";

const ResumeItem = ({ title, icon, value}) => {
  return (
    <C.Container>
      <C.Header>
        <C.HeaderTitle>{title}</C.HeaderTitle>
        {icon}
      </C.Header>
      <C.Total>{value}</C.Total>
    </C.Container>
  );
};
  
export default ResumeItem;

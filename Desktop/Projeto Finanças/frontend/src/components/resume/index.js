import React from "react";
import * as C from "./styles";
import ResumeItem from "../resumeItem";

import {
  FaRegArrowAltCircleUp,
  FaRegArrowAltCircleDown,
  FaDollarSign,

} from "react-icons/fa";

const Resume = () => {
  return (
    <C.Container>
      <ResumeItem title = "Entradas" icon={<FaRegArrowAltCircleUp />} value={1000} />
      <ResumeItem title = "Saidas" icon={<FaRegArrowAltCircleDown />} value={500} />
      <ResumeItem title = "Total" icon={<FaDollarSign />} value={500} />
    </C.Container>
  );
};

export default Resume;

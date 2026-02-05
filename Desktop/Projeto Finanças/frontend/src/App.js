import React from "react";
import Global from "./styles/global";
import Resume from "./components/resume";
import Header from "./components/header";
import Form from "./components/Form";

const App = () => {
  return (
    <>
      <Global />
      <Header></Header>
      <Resume></Resume>
      <Form></Form>
    </>
  );
};
export default App;

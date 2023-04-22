import React from "react";
import MyParagraph from "./MyParagraph";

const DemoOutput = (props) => {
  // props changes with every click
  console.log("DemoOutput RUNNING");
  return <MyParagraph>{props.show ? "This is new!" : ""}</MyParagraph>;
};

export default React.memo(DemoOutput);

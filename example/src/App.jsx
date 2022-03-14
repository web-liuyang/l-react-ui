import React from "react";
// import * as L from "./l-react-ui/index.js";
import { Button as LButton } from "./l-react-ui/index.js";
// console.log(Button);
const App = () => {
  // console.log(A);
  return (
    <div className="App">
      <h1>APP</h1>
      {/* <L.Button>按钮</L.Button> */}
      {/* <Button>按钮</Button> */}
      <LButton>按钮123</LButton>
      {/* <AButton>按钮2</AButton> */}
      {/* {Button({ mode: "theme" })} */}
      {/* <div><Button>按钮</Button></div> */}
    </div>
  );
};

export default App;

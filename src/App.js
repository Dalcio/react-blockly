import "./App.css";
import "./customBlocks/customBlocks";

import Blockly from "blockly";
import React, { useState } from "react";
import { BlocklyWorkspace } from "react-blockly";

import toolboxCategories from "./toolboxCategories";

const App = () => {
  const [xml, setXml] = useState("");
  const [javascriptCode, setJavascriptCode] = useState("");

  const initialXml =
    '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="text" x="70" y="30"><field name="TEXT"></field></block></xml>';

  const workspaceDidChange = (workspace) => {
    console.log(workspace);
    const code = Blockly.JavaScript.workspaceToCode(workspace);
    setJavascriptCode(code);
  };

  return (
    <>
      <BlocklyWorkspace
        toolboxConfiguration={toolboxCategories}
        initialXml={initialXml}
        className="fill-height"
        workspaceConfiguration={{
          grid: {
            spacing: 20,
            length: 3,
            colour: "#ccc",
            snap: true,
          },
        }}
        onWorkspaceChange={workspaceDidChange}
        onXmlChange={setXml}
      />
      <pre id="generated-xml">{xml}</pre>
      <textarea
        id="code"
        style={{ height: "200px", width: "400px" }}
        value={javascriptCode}
        readOnly
      ></textarea>
    </>
  );
};

export default App;

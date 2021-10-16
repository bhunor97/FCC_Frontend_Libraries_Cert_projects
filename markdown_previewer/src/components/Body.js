import React from "react";
import { useState, useEffect } from "react";
import marked from "marked";
import style from "./style/style.css";
import resets from "./style/resets.css";

const Body = () => {
  const [currentText, setText] = useState("");

  const textUpdateFunc = (event) => {
    setText(event.target.value);
  };

  let plcHolder = ` 
  # Largest Heading
  ## Second Largest
  ### Heading Three
  #### Heading Four
  ##### Heading Five
  ###### Heading Six

  [Personal Portfolio Bartha Hunor](https://bhunor97.github.io/Portfolio/)

  \`\`\`
  javascript
  function add(num1, num2) {
      return num1 + num2
  }
  \`\`\` 

  *This text is italic*

  _This is also italic_

  **This is bold**

  __This is also bold__

  ~~This text is strike through~~


  > This is a quote

  * item 1
  * item 2
  * item 3
  * item 4
  
    * nested item 1
    * nested item 2
    * nested item 3
  
  \`<p>This is a paragraph</p>\`

  ![random_picture](https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Markdown-mark.svg/1200px-Markdown-mark.svg.png)
  `;

  useEffect(() => {
    setText(plcHolder);
  }, []);

  return (
    <div className="container">
      <h1>Markdown Previewer</h1>
      {/* Editor */}
      <section className="editor-section">
        <h2>Editor</h2>
        <textarea
          onChange={textUpdateFunc}
          id="editor"
          name=""
          cols="30"
          rows="10"
        >
          {plcHolder}
        </textarea>
      </section>
      {/* Preview */}
      <section className="preview-section">
        <h2>Previewer</h2>
        <div
          id="preview"
          className="preview"
          dangerouslySetInnerHTML={{ __html: marked(currentText) }}
        ></div>
      </section>
    </div>
  );
};

export default Body;

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

  // Markdown content
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
      <div className="title-div">
        <h1>Markdown Previewer</h1>
      </div>
      <div className="editor-prew-container">
        {/* Editor */}
        <section className="editor-section">
          <div className="sub-title-div">
            <h2 className="h2-titles">Editor</h2>
          </div>
          <textarea onChange={textUpdateFunc} id="editor" name="">
            {plcHolder}
          </textarea>
        </section>
        {/* Preview */}
        <section className="preview-section">
          <div className="sub-title-div">
            <h2 className="h2-titles">Previewer</h2>
          </div>
          <div className="preview-container">
            <div
              id="preview"
              className="preview"
              dangerouslySetInnerHTML={{ __html: marked(currentText) }}
            ></div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Body;

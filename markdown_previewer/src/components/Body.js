import React from "react";
import { useState } from "react";
import marked from "marked";

const Body = () => {
  const [currentText, setText] = useState("");

  const textUpdateFunc = (event) => {
    setText(event.target.value);
  };

  const markedText = marked(
    "~~This text is strike through~~ __This is also bold__ _This is also italic_"
  );
  console.log(typeof markedText);

  const testDiv = document.getElementById("testDiv");

  return (
    <div>
      {/* Editor */}
      <section className="editor-section">
        <textarea
          onChange={textUpdateFunc}
          id="editor"
          name=""
          cols="30"
          rows="10"
          placeholder="Text Area Right Here asd"
        ></textarea>
      </section>
      {/* Preview */}
      <section className="preview-section">
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

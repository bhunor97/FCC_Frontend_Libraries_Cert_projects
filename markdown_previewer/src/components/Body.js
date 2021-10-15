import React from "react";
import { useState, useEffect } from "react";

const Body = () => {
  const [currentText, setText] = useState("");

  const textUpdateFunc = (event) => {
    setText(event.target.value);
  };

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
          placeholder="Text Area Right Here"
        ></textarea>
      </section>
      {/* Preview */}
      <section className="preview-section">
        <div id="preview" className="preview">
          {currentText}
        </div>
      </section>
    </div>
  );
};

export default Body;

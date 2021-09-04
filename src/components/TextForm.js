import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    };
    const handleDownClick = () => {
      console.log("Lowecase was clicked" + text);
      let newText = text.toLowerCase();
      setText(newText);
    };
  const handleOnChange = (event) => {
    console.log("Uppercase was changed");
    setText(event.target.value);
  };
  const [text, setText] = useState("");

  return (
    <>
      <div className="container">
        <h3>{props.heading}</h3>
        {/* text = "new text"; //!Wrong Way
          setText("new text"); //* Correct Way */}
        <div className="mb-3">
          <label htmlFor="MyBox" className="form-label"></label>
          <textarea
            className="form-control"
            onChange={handleOnChange}
            value={text}
            id="MyBox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>
          Convert to uppercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleDownClick}>
          Convert to lowercase
        </button>
      </div>
      <div class="container my-3">
        <h2>Your text summary </h2>
        <p>
          <b>{text.split(" ").length}</b> words and <b>{text.length}</b> characters{" "}
        </p>
        <p><b>{0.008 * text.split(" ").length}</b> Minutes read</p>
        <h2>Preview </h2>
        <p>{text}</p>
      </div>
    </>
  );
}

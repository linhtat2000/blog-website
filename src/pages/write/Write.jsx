import React from "react";
import "./write.css";

const Write = () => {
  return (
    <div className="write">
      <img className="writeImg" src="" alt="post image" />
      <form className="writeForm">
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <i className="writeIcon fas fa-plus"></i>
          </label>
          <input type="file" id="fileInput" style={{ display: "none" }} />
          <input
            type="text"
            placeholder="Title"
            className="writeInput"
            autoFocus={true}
          />
        </div>
        <div className="writeFormGroup">
          <textarea
            className="writeInput writeText"
            type="text"
            placeholder="Tell your story..."
          ></textarea>
        </div>
        <button type="submit" className="writeSubmit">
          Publish
        </button>
      </form>
    </div>
  );
};

export default Write;

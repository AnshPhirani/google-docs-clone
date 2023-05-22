import React, { useEffect, useRef } from "react";
import "quill/dist/quill.snow.css";

import { setupQuill } from "../util/quill";

const TextEditor = () => {
  const wrapperRef = useRef();

  useEffect(() => {
    const container = wrapperRef.current;
    const editor = document.createElement("div");
    container.append(editor);
    setupQuill(editor);
    return () => {
      console.log("cleanup");
      container.innerHTML = "";
    };
  }, []);

  return (
    <>
      <div ref={wrapperRef} className="container"></div>{" "}
    </>
  );
};

export default TextEditor;

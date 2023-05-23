import React, { useState, useEffect, useRef } from "react";
import "quill/dist/quill.snow.css";
import { io } from "socket.io-client";
import { setupQuill } from "../util/quill";
import Sidebar from "./Sidebar";

const TextEditor = () => {
  const [socket, setSocket] = useState(null);
  const [quill, setQuill] = useState(null);
  const wrapperRef = useRef();

  // setup socket connection
  useEffect(() => {
    console.log("ansh");
    const s = io("http://localhost:3001");
    setSocket(s);
    s.on("connect", () => {
      console.log("connected");
    });
    return () => {
      s.disconnect();
    };
  }, []);

  // send changes to server
  useEffect(() => {
    if (socket == null || quill == null) return;
    const handler = (delta, oldDelta, source) => {
      if (source !== "user") return;
      socket.emit("send-changes", delta);
    };
    quill.on("text-change", handler);

    return () => {
      quill.off("text-change", handler);
    };
  }, [socket, quill]);

  // receive changes from server
  useEffect(() => {
    if (socket == null || quill == null) return;
    const handler = (delta) => {
      quill.updateContents(delta);
    };
    socket.on("receive-changes", handler);

    return () => {
      socket.off("receive-changes", handler);
    };
  }, [socket, quill]);

  // setup quill editor
  useEffect(() => {
    if (wrapperRef === null) return;
    const container = wrapperRef.current;
    const editor = document.createElement("div");
    container.append(editor);
    const q = setupQuill(editor);
    setQuill(q);
    return () => {
      console.log("cleanup");
      container.innerHTML = "";
    };
  }, []);

  return (
    <>
      <Sidebar />
      <div ref={wrapperRef} className="container"></div>{" "}
    </>
  );
};

export default TextEditor;

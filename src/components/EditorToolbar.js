import React from "react";
import "quill/dist/quill.snow.css";
import "./editorToolbar.css";

// Custom Undo button icon component for Quill editor.
const CustomUndo = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height="24"
    viewBox="0 96 960 960"
    width="24"
  >
    <path d="M274.078 863.999v-85.998h291.999q63.231 0 109.616-39.193Q722.078 699.616 722.078 638q0-61.616-46.385-100.808-46.385-39.193-109.616-39.193H314.229L418.23 602l-60.153 58.153L151.924 455l206.153-206.153L418.23 308 314.229 412.001h251.848q98.384 0 170.192 65.115Q808.076 542.231 808.076 638q0 95.769-71.807 160.884-71.808 65.115-170.192 65.115H274.078Z" />
  </svg>
);

// Redo button icon component for Quill editor
const CustomRedo = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height="24"
    viewBox="0 96 960 960"
    width="24"
  >
    <path d="M393.923 863.999q-98.384 0-170.192-65.115Q151.924 733.769 151.924 638q0-95.769 71.807-160.884 71.808-65.115 170.192-65.115h251.848L541.77 308l60.153-59.153L808.076 455 601.923 660.153 541.77 602l104.001-104.001H393.923q-63.231 0-109.616 39.193Q237.922 576.384 237.922 638q0 61.616 46.385 100.808 46.385 39.193 109.616 39.193h291.999v85.998H393.923Z" />
  </svg>
);

const CustomPrint = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height="24"
    viewBox="0 96 960 960"
    width="24"
  >
    <path d="M644 418.309v-124H316v124h-85.999V208.31h499.998v209.999H644Zm-492.461 85.998h656.922-656.922Zm541.268 120q20.5 0 35-15t14.5-35.5q0-20.5-14.375-35t-35.625-14.5q-20 0-35 14.375t-15 35.625q0 20 15 35t35.5 15ZM644 870V747.23H316V870h328Zm85.999 85.999H230.001v-154H65.541V544.307q0-52.499 37.038-89.249 37.038-36.749 88.96-36.749h576.922q52.499 0 89.249 36.749 36.749 36.75 36.749 89.249v257.692h-164.46v154ZM808.461 716V544.691q0-17.384-11.213-28.884-11.212-11.5-27.787-11.5H191.539q-17 0-28.5 11.5t-11.5 28.5V716h78.462v-54.769h499.998V716h78.462Z" />
  </svg>
);

const EditorToolbar = () => {
  return (
    <div id="toolbar" className="ql-toolbar ql-snow">
      <span className="ql-formats">
        <button className="ql-undo">
          <CustomUndo />
        </button>
        <button className="ql-redo">
          <CustomRedo />
        </button>
        <button className="ql-print">
          <CustomPrint />
        </button>
      </span>
      <span className="ql-formats">
        <select className="ql-font " defaultValue="arial">
          <option selected value="arial">
            Arial
          </option>
          <option value="impact">Impact</option>
          <option value="courier">Courier</option>
          <option value="comic">Comic</option>
          <option value="monoSpace">Monospace</option>
        </select>
        <select className="ql-size" defaultValue="medium">
          <option value="extra-small">Size 1</option>
          <option value="small">Size 2</option>
          <option value="medium">Size 3</option>
          <option value="large">Size 4</option>
        </select>
        <select className="ql-header" defaultValue="3">
          <option value="1">Heading</option>
          <option value="2">Subheading</option>
          <option value="3">Normal</option>
        </select>
      </span>
      <span className="ql-formats">
        <button type="button" className="ql-bold" />
        <button className="ql-italic" />
        <button className="ql-underline" />
        <button className="ql-strike" />
      </span>
      <span className="ql-formats">
        <button className="ql-list" value="ordered" />
        <button className="ql-list" value="bullet" />
        <button className="ql-indent" value="-1" />
        <button className="ql-indent" value="+1" />
      </span>
      <span className="ql-formats">
        <button className="ql-script" value="super" />
        <button className="ql-script" value="sub" />
        <button className="ql-blockquote" />
        <button className="ql-direction" />
      </span>
      <span className="ql-formats">
        <select className="ql-align" />
        <select className="ql-color" />
        <select className="ql-background" />
      </span>
      <span className="ql-formats">
        <button className="ql-link" />
        <button className="ql-image" />
        <button className="ql-video" />
      </span>
      <span className="ql-formats">
        <button className="ql-formula" />
        <button className="ql-code-block" />
        <button className="ql-clean" />
      </span>
    </div>
  );
};

export default EditorToolbar;

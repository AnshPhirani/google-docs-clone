// setting up quill editor
import Quill from "quill";

let quill;

// Undo and redo functions for Custom Toolbar
function undoChange() {
  quill?.history.undo();
}
function redoChange() {
  quill?.history.redo();
}
function print() {
  window.print();
}

// Modules object for setting up the Quill editor
const modules = {
  toolbar: {
    container: "#toolbar",
    handlers: {
      undo: undoChange,
      redo: redoChange,
      print: print,
    },
  },
  history: {
    delay: 500,
    maxStack: 100,
    userOnly: true,
  },
};

// Formats objects for setting up the Quill editor
const formats = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "align",
  "strike",
  "script",
  "blockquote",
  "background",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
  "color",
  "code-block",
];

// Add sizes to whitelist and register them
const Size = Quill.import("formats/size");
Size.whitelist = ["extra-small", "small", "medium", "large"];
Quill.register(Size, true);

// Add fonts to whitelist and register them
const Font = Quill.import("formats/font");
Font.whitelist = ["arial", "impact", "courier", "comic", "monospace"];
Quill.register(Font, true);

export function setupQuill(editor) {
  quill = new Quill(editor, {
    theme: "snow",
    placeholder: "Type @ to insert",
    modules,
    formats,
  });
  return quill;
}

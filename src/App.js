import "./App.css";
import "./styles.css";
import TextEditor from "./components/TextEditor";
import EditorToolbar from "./components/EditorToolbar";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <EditorToolbar />
      <TextEditor />
    </div>
  );
}

export default App;

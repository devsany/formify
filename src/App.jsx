import InputSection from "./components/InputSection";
import MainFile from "./components/MainFile";

function App() {
  return (
    <>
      <div className="grid grid-cols-2">
        <div className="border">
          {" "}
          <InputSection />
        </div>
        <div>
          {" "}
          
          <MainFile />
        </div>
      </div>
    </>
  );
}

export default App;

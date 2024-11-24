import FormPreview from "./components/FormPreview";
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

      <div>
        <h2 className="text-3xl">Preview Form Code</h2>
        <div>
          <FormPreview />
        </div>
      </div>
    </>
  );
}

export default App;

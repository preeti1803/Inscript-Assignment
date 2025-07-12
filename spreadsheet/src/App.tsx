import React from "react";
import Header from "./components/Header";
import Tabs from "./components/Tabs";
import ActionToolbar from "./components/Toolbar";
import SpreadsheetTable from "./components/SpreadsheetTable";
import SpreadsheetHeaderFull from "./components/SpreadSheetHeader";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div className="flex flex-col h-screen">
        <Header />
        <ActionToolbar />
        <SpreadsheetHeaderFull />
        <div className="flex-1 min-h-0 flex flex-col">
          <SpreadsheetTable />
        </div>

        <Tabs />
      </div>
    </>
  );
}

export default App;

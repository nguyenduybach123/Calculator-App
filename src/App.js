
import { Calculator } from "./components/Calculator.tsx";
import { History } from "./components/History.tsx";

function App() {
  return (
    <div className="App relative p-3 min-h-full min-w-full md:min-h-80 md:min-w-72">
      <Calculator />
      <History />
    </div>
  );
}

export default App;

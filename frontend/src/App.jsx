import AppRouters from "./AppRouters";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <div className="header">
        <Header />
      </div>
      <div className="appRouters">
        <AppRouters />
      </div>
    </div>
  );
}

export default App;

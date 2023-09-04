import "./App.css";
import Wrapper from "./components/wrapper/wraper";
import { RootStoreContext } from "./root-store-context";
import RootStore from "./stores/root-store";

function App() {
  return (
    <RootStoreContext.Provider value={new RootStore()}>
      <div>
        <Wrapper />;
      </div>
    </RootStoreContext.Provider>
  );
}

export default App;

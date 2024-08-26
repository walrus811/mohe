import { createSignal, type Component } from "solid-js";
import { appDataSignal } from "./appData";

const App: Component = () => {
  const [appData, setAppData] = appDataSignal;

  return (
    <div>
      <h1 class="text-red-600">이름 : {appData().name}</h1>
    </div>
  );
};

export default App;

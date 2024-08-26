import { createEffect, createSignal } from "solid-js";

const KEY_APP_DATA = "APP_DATA";

export interface AppData {
  name: string;
}

const appDataSignal = createSignal<AppData>({ name: "default" });

createEffect(() => {
  console.log("update appData", appDataSignal[0]());
});

(function init() {
  const initData = getAppData();
  if (initData) {
    appDataSignal[1](JSON.parse(initData));
  }
})();

function getAppData() {
  return window?.localStorage.getItem(KEY_APP_DATA);
}

function setAppData() {
  window?.localStorage.setItem(
    KEY_APP_DATA,
    JSON.stringify(appDataSignal[0]())
  );
}

export { appDataSignal };

/* @refresh reload */
import "./global.css";
import { render } from "solid-js/web";

import App from "./App";

const root = document.getElementById("root");

if (root instanceof HTMLElement) {
  render(() => <App />, root);
} else if (import.meta.env.DEV) {
  throw new Error(
    "Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?",
  );
}

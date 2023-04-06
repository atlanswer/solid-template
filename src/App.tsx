import type { Component } from "solid-js";

const App: Component = () => {
  return (
    <div
      id="content-div"
      class="min-h-screen w-screen flex flex-col place-content-center place-items-center gap-4"
    >
      <p class="from-blue-3 to-blue-6 bg-gradient-to-br bg-clip-text text-center align-middle font-sans text-4xl font-bold text-transparent">
        Solid Template
      </p>
    </div>
  );
};

export default App;

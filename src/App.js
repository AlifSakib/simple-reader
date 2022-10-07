import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./Routes";

function App() {
  return (
    <div className="App font-poppins">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;

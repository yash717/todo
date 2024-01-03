import "./App.css";
import { lazy, Suspense } from "react";

import { BrowserRouter as Switch, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Categories/homepage";
const Login = lazy(() => import("./pages/Login/login"));

function App() {
  return (
    <Switch>
      <Suspense fallback={"hello"}>
        <Routes>
          <Route path="/" name="homepage" element={<Home />} />
          <Route path="/login" name="login" element={<Login />} />
        </Routes>
      </Suspense>
    </Switch>
  );
}

export default App;

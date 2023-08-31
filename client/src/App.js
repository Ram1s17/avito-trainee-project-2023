import React from "react";
import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import { messageByStatus } from "./utils/utils";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="*" element={<ErrorPage status={404} message={messageByStatus[404]} />} />
      </Routes>
    </div>
  )
}

export default App;

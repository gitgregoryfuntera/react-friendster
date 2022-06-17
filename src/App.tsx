import React from 'react';
import "./App.scss";
import { Routes, Route } from "react-router-dom";
import ProfilePage from "./pages/Profile";
import NavHeader from "./components/NavHeader";

function App() {
  return (
    <div className="App">
      <NavHeader />
      <Routes>
        <Route path="/" element={<ProfilePage />} />
      </Routes>
    </div>
  );
}

export default App;

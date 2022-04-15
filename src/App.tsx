import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import ProfilePage from "./pages/profile/profile-page.component";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<ProfilePage />} />
      </Routes>
    </div>
  );
}

export default App;

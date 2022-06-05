import "./App.scss";
import { Routes, Route, Link } from "react-router-dom";
import ProfilePage from "./pages/profile/profile-page.component";
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

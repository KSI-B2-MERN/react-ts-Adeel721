//import SignUp from "./pages/sign-up";

// import LogIn from "./pages/loginKS";
import { Routes, Route } from "react-router-dom";
import SignUp from "./pages/sign-up";
import Landing from "./pages/landing";
import Check from "./pages/check";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/landing" element={<Landing />} />
      </Routes>
    </>
  );
}

export default App;

import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Active from "./pages/active";
import InActive from "./pages/inactive";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/active" element={<Active />} />
      <Route path="/inactive" element={<InActive />} />
    </Routes>
  );
};

export default App;

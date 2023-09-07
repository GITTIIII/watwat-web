import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  BrowserRouter,
} from "react-router-dom";
import Login from "./page/login";
import Register from "./page/register";
import MainWeb from "./page/mainweb";
import Place from "./page/place"; 
import Placeform from "./page/place-form";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<MainWeb />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/place" element={<Place />} />
          <Route path="/placeform" element={<Placeform />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Login from "./page/login";
import Register from "./page/register";
import MainWeb from "./page/mainweb";
import Place from "./page/place"; 
import Placeform from "./page/place-form";
import Event from "./page/event";
import Item from "./page/item";
import Donate from "./page/donate";
import Wat from "./page/wat";
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
          <Route path="/event" element={<Event />} />
          <Route path="/item" element={<Item />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/wat" element={<Wat />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;

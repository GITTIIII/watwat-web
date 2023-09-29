import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Login from "./page/user/login";
import Register from "./page/user/register";
import MainWeb from "./page/user/mainweb";
import Place from "./page/user/place"; 
import Placeform from "./page/user/place-form";
import Event from "./page/user/event";
import Item from "./page/user/item";
import Donate from "./page/user/donate";
import Wat from "./page/user/wat";
const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/main" element={<MainWeb />} />
          <Route path="/" element={<Login />} />
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

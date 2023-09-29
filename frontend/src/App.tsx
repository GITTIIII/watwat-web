import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Login from "./page/user/login";
import Register from "./page/user/register";
import MainWeb from "./page/user/mainweb";
import Place from "./page/user/place/place"; 
import Placeform from "./page/user/place/place-form";
import Event from "./page/user/eventRequest/eventRequest";
import Item from "./page/user/item/item";
import Donate from "./page/user/donate/donate";
import Wat from "./page/user/wat/wat";
const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/main" element={<MainWeb />} />
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/placeRequest" element={<Place />} />
          <Route path="/placeform" element={<Placeform />} />
          <Route path="/eventRequest" element={<Event />} />
          <Route path="/item" element={<Item />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/wat" element={<Wat />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;

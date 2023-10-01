import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./page/login";
import Register from "./page/register";
import Place from "./page/user/place";
import Placeform from "./page/user/place/place-form";
import Event from "./page/user/eventRequest";
import Item from "./page/user/item";
import Donate from "./page/user/donate";
import Search from "./page/user/search";
import Profile from "./page/user/profile";
import Main from "./page/user/mainWat";
import RegisWatCreator from "./page/user/regis-watCreator";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/search" element={<Search />} />
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/placeRequest" element={<Place />} />
          <Route path="/placeform" element={<Placeform />} />
          <Route path="/eventRequest" element={<Event />} />
          <Route path="/item" element={<Item />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/main" element={<Main />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/regisWatCreator" element={<RegisWatCreator />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;

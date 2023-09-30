import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Login from "./page/user/login";
import Register from "./page/user/register";
import Place from "./page/user/place/place"; 
import Placeform from "./page/user/place/place-form";
import Event from "./page/user/eventRequest/eventRequest";
import Item from "./page/user/item/item";
import Donate from "./page/user/donate/donate";
import Search from "./page/user/search";
import UserProfile from "./page/user/userProfile";
import Main from "./page/user/main/mainWat";
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
          <Route path="/userProfile" element={<UserProfile/>}/>
        </Routes>
      </Router>
      </>
  );
};

export default App;

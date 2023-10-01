import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Login from "./page/login";
import Register from "./page/register";
import Place from "./page/user/place";
import Placeform from "./page/user/place/place-form";
import Event from "./page/user/eventRequest";
import Item from "./page/user/item";
import Donate from "./page/user/donate";
import Search from "./page/user/search";
import Profile from "./page/user/profile";
import RegisWatCreator from "./page/user/regis-watCreator";
import UserLayout from "./layouts/userLayout"
import LoginLayout from "./layouts/loginLayout";
import AdminLayout from "./layouts/adminLayout";
import Main from "./page/user/mainWat";
import CreatorLayout from "./layouts/creatorLayout";
import SearchLayout from "./layouts/searchLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<LoginLayout/>}>
        <Route index element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
      </Route>
      <Route path="" element={<SearchLayout/>}>
        <Route path="/search" element={<Search />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/regisWatCreator" element={<RegisWatCreator />} />
      </Route>
      <Route path="" element={<UserLayout/>}>
          <Route path="/main" element={<Main />} />
          <Route path="/eventRequest" element={<Event />} />
          <Route path="/placeRequest" element={<Place />} />
          <Route path="/placeform" element={<Placeform />} />
          <Route path="/item" element={<Item />} />
          <Route path="/donate" element={<Donate />} />
      </Route>
      <Route path="/admin" element={<AdminLayout/>}>
        
      </Route>
      <Route path="/creator" element={<CreatorLayout/>}>
        
      </Route>
    </>
  )
)

function App () {
  return (
    <RouterProvider router={router}/>
  );
};

export default App;

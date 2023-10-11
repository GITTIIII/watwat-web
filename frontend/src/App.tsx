import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

//user
import Login from "./page/login/login";
import Register from "./page/register/register";
import Search from "./page/user/search";

import MainUser from "./page/user/main";
import EventRequest from "./page/user/eventRequest";
import CreateEventRequest from "./page/user/eventRequest/createEventRequest";
import UpdateEventRequest from "./page/user/eventRequest/editEventRequest";
import DetailEvent from "./page/user/eventRequest/detailEvent";
import ItemRequest from "./page/user/itemRequest";
import PlaceRequest from "./page/user/placeRequest";
import Placeform from "./page/user/placeRequest/place-form";
import Donate from "./page/user/donate";

//creater ส่วน แจ้งใช้งานเอง
import MainCreater from "./page/user/main";
import AddEvent from "./page/creator/addEvent";
import CreateEvent from "./page/creator/addEvent/createEvent";
import AddPlaceUse from "./page/creator/addPlaceUse";
import AddItemLoan from "./page/creator/addItemLoan";

//creator ส่วนเพิ่มข้อมูล
import CreatorGeneral from "./page/creator/createWatData/general";
import CreatorMonk from "./page/creator/createWatData/monk";
import CreatorPlace from "./page/creator/createWatData/place";
import CreatorItem from "./page/creator/createWatData/item";
import CreatorDonate from "./page/creator/createWatData/donate";

//creater ส่วน Approve
import RequsetEvent from "./page/creator/approveEvent";
import EventDetails from "./page/creator/approveEvent/eventDetails.tsx";

//Layout
import UserLayout from "./layouts/userLayout";
import LoginLayout from "./layouts/loginLayout";
import AdminLayout from "./layouts/adminLayout";
import CreatorLayout from "./layouts/creatorLayout";
import SearchLayout from "./layouts/searchLayout";
import Profile from "./page/user/profile";
import RegisWatCreator from "./page/user/regis-watCreator";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="" element={<LoginLayout />}>
        <Route index element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Route>

      <Route path="" element={<SearchLayout />}>
        <Route path="/search" element={<Search />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/regisWatCreator" element={<RegisWatCreator />} />{" "}
      </Route>

      <Route path="" element={<UserLayout />}>
        <Route path="/main" element={<MainUser />} />
        <Route path="/eventRequest" element={<EventRequest />} />
        <Route
          path="/eventRequest/createEventRequest"
          element={<CreateEventRequest />}
        />
        <Route path="/eventRequest/edit/:id" element={<UpdateEventRequest />} />
        <Route path="/eventRequest/detail/:id" element={<DetailEvent />} />
        <Route path="/itemRequest" element={<ItemRequest />} />
        <Route path="/placeRequest" element={<PlaceRequest />} />
        <Route path="/placeForm" element={<Placeform />} />
        <Route path="/donate" element={<Donate />} />
      </Route>

      <Route path="" element={<AdminLayout />}></Route>

      <Route path="" element={<CreatorLayout />}>
        <Route path="/maincreater" element={<MainCreater />} />
        <Route path="/addEvent" element={<AddEvent />} />
        <Route path="/addEvent/createEvent" element={<CreateEvent />} />
        <Route path="/addItemLoan" element={<AddItemLoan />} />
        <Route path="/addPlaceUse" element={<AddPlaceUse />} />

        <Route path="/creatorGeneral" element={<CreatorGeneral />} />
        <Route path="/creatorMonk" element={<CreatorMonk />} />
        <Route path="/creatorPlace" element={<CreatorPlace />} />
        <Route path="/creatorItem" element={<CreatorItem />} />
        <Route path="/creatorDonate" element={<CreatorDonate />} />

        <Route path="/approveEvent" element={<RequsetEvent />} />
        <Route path="/approveEvent/eventDetails" element={<EventDetails />} />
      </Route>
    </>
  )
);
function App() {
  return <RouterProvider router={router} />;
}

export default App;

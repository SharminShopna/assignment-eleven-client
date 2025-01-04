import {
    createBrowserRouter,
  } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Error from "../pages/Error";
import Home from "../pages/Home";
import Register from "../pages/Register";
import Login from "../pages/Login";
import AddTutorials from "../pages/AddTutorials";
import TutorsCategory from "../pages/TutorsCategory";
import FindTutors from "../pages/FindTutors";
import TutorDetails from "../pages/TutorDetails";
import PrivateRouter from "./PrivateRouter";
import BookedTutors from "../pages/BookedTutors";
import MyTutors from "../pages/MyTutors";
import UpdateTutor from "../pages/UpdateTutor";
import Question from "../pages/Question";
import Success from "../pages/Success";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement: <Error></Error>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
          path: 'register',
          element:<Register></Register>
        },
        {
          path:'logIn',
          element:<Login></Login>
        }
      ]
    },
    {
      path:'addTutorials',
      element:(<PrivateRouter><AddTutorials></AddTutorials></PrivateRouter>)
    },
    {
      path:'findTutors/:category',
      element:<TutorsCategory></TutorsCategory>
    },
    {
      path:'allTutors',
      element:<FindTutors></FindTutors>
    },
    {
      path:'tutor/:details',
      element:(<PrivateRouter><TutorDetails></TutorDetails></PrivateRouter>)
    },
    {
      path:'bookTutors',
      element:(<PrivateRouter><BookedTutors></BookedTutors></PrivateRouter>)
    },
    {
      path:'myEmail',
      element:(<PrivateRouter><MyTutors></MyTutors></PrivateRouter>)
    },
    {
      path:'update/:id',
      element:(<PrivateRouter><UpdateTutor></UpdateTutor></PrivateRouter>)
    },
    {
      path:'question',
      element:<Question></Question>
    },
    {
      path:'success',
      element:<Success></Success>
    }
  ]);

  export default router;
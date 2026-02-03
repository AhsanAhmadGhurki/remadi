import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/auth/home";
import Gender from "./pages/auth/gender";
import Age from "./pages/auth/age";
import AllDone from "./pages/auth/alldone";
import AuthLayout from "./pages/auth/layout";
import Login from "./pages/auth/layout/login";
import Signup from "./pages/auth/layout/signup";
import JournalingLayout from "./pages/Journaling/layout";
import Situation from "./pages/Journaling/situation";
import Bothering from "./pages/Journaling/bothering";
import Job from "./pages/Journaling/job";
import Circumstances from "./pages/Journaling/circumstances";
import Financial from "./pages/Journaling/financial";
import Looking from "./pages/Journaling/looking";
import Scale from "./pages/Journaling/scale";
import Results from "./pages/Journaling/results";
// import Job from "./pages/Journaling/job";

const router = createBrowserRouter([
  {
    path: "/", // root "/" route
    element: <Home />, // redirect to /auth
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      { path: "login", element: <Login /> },
      { path: "signup", element: <Signup /> },
      { path: "gender", element: <Gender /> },
      { path: "age", element: <Age /> },
      { path: "alldone", element: <AllDone /> },
    ],
  },
  {
    path: "/Journaling",
    element: <JournalingLayout />,
    children: [
      { path: "situation", element: <Situation /> },
      { path: "bothering", element: <Bothering /> },
      { path: "job", element: <Job /> },
      { path: "circumstances", element: <Circumstances /> },
      { path: "financial", element: <Financial /> },
      { path: "looking", element: <Looking /> },
      { path: "scale", element: <Scale /> },
      { path: "results", element: <Results /> },
      // { path: "alldone", element: <AllDone /> },
    ],
  }, 
]);

export default function App() {
  return <RouterProvider router={router} />;
}
// Journaling
// {
//   path: "/",
//   element: <WebLayout />,
//   children: [
//     {
//       index: true,
//       element: <About />,
//     },
//     {
//       path: "Workshop",
//       element: <Workshop />,
//     },
//     {
//       path: "Swag",
//       element: <Swag />,
//     },
//   ],
// },
// {
//   path: "/user",
//   element: <UserLayout />,
//   children: [
//     {
//       index: true,
//       element: <Profile />,
//     },
//     {
//       path: "Demographics",
//       element: <Demographics />,
//     },
//     {
//       path: "SavedPolls",
//       element: <SavedPolls />,
//     },
//     {
//       path: "Settings",
//       element: <Settings />,
//     },
//   ],
// },
// {
//   path: "/creator",
//   element: <CreatorLayout />,
//   children: [
//     {
//       index: true,
//       element: <Dashboard />,
//     },
//     {
//       path: "NewPolls",
//       element: <NewPolls />,
//     },
//     {
//       path: "ActivePolls",
//       element: <ActivePolls />,
//     },
//     {
//       path: "ActivePolls/ClosePoll",
//       element: <ClosePoll />,
//     },
//     {
//       path: "Profile",
//       element: <Profile />,
//     },
//     {
//       path: "Demographics",
//       element: <Demographics />,
//     },
//     {
//       path: "SavedPolls",
//       element: <SavedPolls />,
//     },
//     {
//       path: "Settings",
//       element: <Settings />,
//     },
//   ],
// },
// {
//   path: "/admin",
//   element: <AdminLayout />,
//   children: [
//     {
//       index: true,
//       element: <AdminDashboard />,
//     },
//     {
//       path: "NewPolls",
//       element: <NewPolls />,
//     },
//     {
//       path: "PollManagement",
//       element: <PollManagement />,
//     },
//     {
//       path: "Moderation",
//       element: <Moderation />,
//     },
//     {
//       path: "Users",
//       element: <Users />,
//     },
//     {
//       path: "CreatorApprovals",
//       element: <CreatorApprovals />,
//     },
//     {
//       path: "Categories",
//       element: <Categories />,
//     },
//     {
//       path: "Analytics",
//       element: <Analytics />,
//     },
//   ],
// },

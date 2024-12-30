import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Layout from "./layout.jsx";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "./components/Home/Home.jsx";
import About from "./components/About/About.jsx";
import Contact from "./components/Contact/Contact.jsx";
import User from "./components/User/User.jsx";
import Appointments from "./components/Appointments.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
import Patients from "./components/Patients.jsx";
import Doctors from "./components/Doctors.jsx";
import DoctorProfile from "./components/DoctorProfile.jsx";
import Admin from "./components/Admin.jsx";
import LoginContext from './components/Context/LoginContext.jsx';
import SignUp from "./components/Signup.jsx";
import Login from "./components/Login.jsx";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/appointments" element={<Appointments />} />
      <Route path="/patients" element={<Patients />} />
      <Route path="/doctors" element={<Doctors />} />
      <Route path="/doctor/:id" element={<DoctorProfile  />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <LoginContext.Provider>
  <StrictMode>
    <App />
    <RouterProvider router={router} />
  </StrictMode>
  </LoginContext.Provider>
);

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "../_components/home/HomePage";
import ErrorPage from "../_components/error/ErrorPage";
import SuperAdminPage from "../_components/superAdmin/SuperAdminPage";
import AddHostel from "../_components/superAdmin/AddHostel";
import EditHostel from "../_components/superAdmin/EditHostel";
import AddWarden from "../_components/superAdmin/AddWarden";
import EditWarden from "../_components/superAdmin/EditWarden";
import ShowHostels from "../_components/superAdmin/ShowHostels";
import ShowWardens from "../_components/superAdmin/ShowWardens";
import StudentPage from "../_components/students/StudentPage";
import EditDetails from "../_components/students/EditDetails";
import FileComplaint from "../_components/students/FileComplaint";
import Profile from "../_components/students/Profile";
import CanteenPage from "../_components/canteens/CanteenPage";
import LoginPage from "../_components/login/LoginPage";
import GuardPage from "../_components/guards/GuardPage";
import CheckInCheckOut from "../_components/guards/CheckInCheckOut";
import StudentOutside from "../_components/guards/StudentOutside";
import HostelPage from "../_components/hostels/HostelPage";
import AddStudent from "../_components/hostels/AddStudent";
import AllStudents from "../_components/hostels/AllStudents";
import Complaints from "../_components/hostels/Complaints";
import EditStudent from "../_components/hostels/EditStudent";

import SuperAdminPrivateRoute from "./SuperAdminPrivateRoute";

const App = () => {

  const superAdminRoutes = () => {
    return (
      <React.Fragment>
          <Route path = "/superAdmin/addHostel" element = { <SuperAdminPrivateRoute> <AddHostel/> </SuperAdminPrivateRoute> } />  
          <Route path = "/superAdmin/editHostel/:hostelName" element = { <SuperAdminPrivateRoute> <EditHostel/> </SuperAdminPrivateRoute> } />  
          <Route path = "/superAdmin/addWarden" element = { <SuperAdminPrivateRoute> <AddWarden/> </SuperAdminPrivateRoute>} />  
          <Route path = "/superAdmin/editWarden/:wardenId" element = { <SuperAdminPrivateRoute> <EditWarden/> </SuperAdminPrivateRoute>} />  
          <Route path = "/superAdmin/showHostels" element = { <SuperAdminPrivateRoute> <ShowHostels/> </SuperAdminPrivateRoute> } />
          <Route path = "/superAdmin/showWardens" element = { <SuperAdminPrivateRoute> <ShowWardens/> </SuperAdminPrivateRoute> } />
      </React.Fragment>
    );
  }

  const hostelRoutes = () => {
    return (
      <React.Fragment>
          <Route path = "/hostels/:hostelName/addStudent" element = { <AddStudent/>} />  
          <Route path = "/hostels/:hostelName/allStudents" element = { <AllStudents />} />  
          <Route path = "/hostels/:hostelName/complaints" element = { <Complaints />} />  
          <Route path = "/hostels/:hostelName/editStudent" element = { <EditStudent />} />  
      </React.Fragment>
    )
  }

  const studentRoutes = () => {
    return (
      <React.Fragment>
          <Route path = "/students/:regNo/editDetails" element = { <EditDetails/>} />
          <Route path = "/students/:regNo/fileComplaint" element = { <FileComplaint/>} />
          <Route path = "/students/:regNo/profile" element = { <Profile/>} />
      </React.Fragment>
    )
  }

  const guardRoutes = () => {
    return (
      <React.Fragment>
          <Route path = "/guards/:hostelName/checkInCheckOut" element = { <CheckInCheckOut /> } />
          <Route path = "/guards/:hostelName/studentOutside" element = { <StudentOutside/>} />
      </React.Fragment>
    )
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path = "/" element = { <HomePage /> } />
        <Route path = "/login/:loginAs" element = { < LoginPage /> } />
        <Route path = "/superAdmin" element = { <SuperAdminPage /> } >
          {superAdminRoutes()}
        </Route>
        <Route path = "/hostels/:hostelName" element = { <HostelPage /> } >
          {hostelRoutes()}
        </Route>
        <Route path = "/students/:regNo" element = { <StudentPage />} >
          {studentRoutes()}
        </Route>
        <Route path = "/canteens/:canteenName" element = { <CanteenPage /> } />
        <Route path = "/guards/:hostelName" element = { <GuardPage /> } >
          {guardRoutes()}
        </Route>
        <Route path = "*" element = { <ErrorPage /> } />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
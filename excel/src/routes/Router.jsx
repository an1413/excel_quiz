import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
import HomeFeed from "../pages/HomeFeed/HomeFeed";
import Expert from "../pages/Expert/Expert";
import Dictionary from "../pages/Dictionary/Dictionary";
import Beginer from "../pages/Beginer/Beginer";
import Intern from "../pages/Intern/Intern";
import Test from '../pages/Test/Test';
import UserAccount from '../pages/Signup/userAccount/UserAccount';
import ProfileSettingUI from '../pages/Signup/profileSetting/ProfileSetting.presenter';
import LoginPresenter from '../pages/Login/login.presenter';
import FunctionKnow from '../pages/FunctionKnow/FunctionKnow';
import FunctionProblem from '../pages/FunctionProblem/FunctionProblem'; 

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeFeed/>}/>
        <Route path='/login' element={<LoginPresenter/>}/>
        <Route path='/signup/*' element={<Outlet/>}>
          <Route path='' element={<UserAccount/>}/>
          <Route path='profileSetting/' element={<ProfileSettingUI/>}/>
          </Route>
        <Route path="/dictionary" element={<Dictionary/>}/>
        <Route path="/beginer/*" element={<Outlet/>}>
          <Route path="" element={<Beginer />} />
        </Route>
        <Route path="/intern/*" element={<Outlet/>}>
          <Route path="" element={<Intern />} />
        </Route>
        <Route path="/expert/*" element={<Outlet/>}>
          <Route path="" element={<Expert />} />
        </Route>
        <Route path='/test/*' element={<Test/>}/>
        <Route path='/function/*' element={<FunctionKnow/>}/>
        <Route path="/function-problem" element={<FunctionProblem />} />
      </Routes>
    </BrowserRouter>
  )
}
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
import Completion from '../pages/Completion/Completion';
import Test from '../pages/Test/Test';
import UserAccount from '../pages/Signup/userAccount/UserAccount';
import ProfileSettingUI from '../pages/Signup/profileSetting/ProfileSetting.presenter';
import LoginPresenter from '../pages/Login/login.presenter';
import Score from '../component/Score';
import FunctionKnow from '../pages/FunctionKnow/FunctionKnow';

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
          <Route path='completion/' element={<Completion level="Beginer"/> }/>
        </Route>
        <Route path="/intern/*" element={<Outlet/>}>
          <Route path="" element={<Intern />} />
          <Route path='completion/' element={<Completion level="Intern"/>}/>
        </Route>
        <Route path="/expert/*" element={<Outlet/>}>
          <Route path="" element={<Expert />} />
          <Route path='completion/' element={<Completion level="Expert"/>}/>
        </Route>
        <Route path='/test/*' element={<Test/>}/>
        <Route path='/score/*' element={<Score/>}/>
        <Route path='/function/*' element={<FunctionKnow/>}/>
      </Routes>
    </BrowserRouter>
  )
}
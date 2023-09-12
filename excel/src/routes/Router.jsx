import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,
  Navigate,
} from "react-router-dom";
import HomeFeed from "../pages/HomeFeed/HomeFeed";
import Expert from "../pages/Expert/Expert";
import Dictionary from "../pages/Dictionary/Dictionary";
import Beginner from "../pages/Beginner/Beginner";
import Intern from "../pages/Intern/Intern";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeFeed/>}/>
        <Route path="/dictionary" element={<Dictionary/>}/>
        <Route path="/beginner" element={<Beginner/>}></Route>
        <Route path="/intern" element={<Intern/>}></Route>
        <Route path="/expert" element={<Expert/>}></Route>
        
      </Routes>
    </BrowserRouter>
  )
}

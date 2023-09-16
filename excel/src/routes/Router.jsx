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
import Completion from '../pages/Completion/Completion';
import TestRandom from '../pages/TestRandom/TestRandom';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeFeed/>}/>
        <Route path="/dictionary" element={<Dictionary/>}/>
        <Route path="/beginner/*" element={<Outlet/>}>
          <Route path="" element={<Beginner />} />
          <Route path='completion/' element={<Completion level="Beginner"/> }/>
        </Route>
        <Route path="/intern/*" element={<Outlet/>}>
          <Route path="" element={<Intern />} />
          <Route path='completion/' element={<Completion level="Intern"/>}/>
        </Route>
        <Route path="/expert/*" element={<Outlet/>}>
          <Route path="" element={<Expert />} />
          <Route path='completion/' element={<Completion level="Expert"/>}/>
        </Route>
        <Route path='/test/*' element={<TestRandom/>}/>
      </Routes>
    </BrowserRouter>
  )
}

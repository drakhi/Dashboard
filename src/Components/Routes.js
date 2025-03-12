import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Experience from './Experience'
import Getintouch from './Getintouch'
import Profile from './Profile'
import Projects from './Projects'
import Skills from './Skills'
import Body from "./Body";

function AppRoutes(){
    return(
        <>
        <Routes>
            <Route path="/" element={<Body />} />
            <Route path="/body" element={<Body/>} />
            <Route path="/experience" element={<Experience/>} />
            <Route path="/getintouch" element={<Getintouch/>} />
            <Route path="/profile" element={<Profile/>} />
            <Route path="/projects" element={<Projects/>} />
            <Route path="/skills" element={<Skills/>} />
        </Routes>
        </>
    )
}
export  default AppRoutes
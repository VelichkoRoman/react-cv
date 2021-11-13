import React from 'react';
import { Routes, Route } from 'react-router-dom';

import PagesHome from "../components/pages/Home";

const ScreensRoot = () => (
    <Routes>
        <Route exact path="/" element={<PagesHome />} />
        
        {/* < Route 
        path = "*"
        element ={ 
            < main  style = { {  padding : "1rem"  } } > 
            < p > Здесь ничего нет! < / p > 
            < / main > 
        } 
        / >  */}
    </Routes>
);

export default ScreensRoot;
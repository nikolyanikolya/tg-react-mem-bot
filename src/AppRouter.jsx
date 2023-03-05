import React from 'react';
import {Routes, Route} from 'react-router-dom'
import Images from "./Images";

const AppRouter = () => {
    return (
        <Routes>
            <Route path={"/images"} element={<Images data={["https://api.memegen.link/images/panik-kalm-panik.png"]} />} />
        </Routes>
    )
}

export default AppRouter

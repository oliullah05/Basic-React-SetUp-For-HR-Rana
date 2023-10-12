import React from 'react';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>
            Navbar
            <Outlet></Outlet>
            Fotter
        </div>
    );
};

export default Main;
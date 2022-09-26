import React from "react";
import HeaderPost from "../../templates/HeaderPost";
import { Outlet } from "react-router-dom";


const Layout = () => {
    return (
        <>
            <HeaderPost />
            <Outlet />
        </>
    )
}

export default Layout;
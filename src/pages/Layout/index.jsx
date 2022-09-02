import React from "react";
import HeaderNavPost from "../../templates/HeaderNavPost";
import { Outlet } from "react-router-dom";


const Layout = () => {
    return (
        <>
            <HeaderNavPost />
            <Outlet />
        </>
    )
}

export default Layout;
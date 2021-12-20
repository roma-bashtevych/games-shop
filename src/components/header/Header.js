import React from "react";
import './Header.css'
import {NavLink} from "react-router-dom";
import {CartBlock} from "../cartBlock";

export const Header = () => {
    return (
        <div className={'header'}>
            <div className="wrapper">
                <NavLink className={'header__store-title'} to={'/'}>
                    Game Store
                </NavLink>
            </div>
            <div className={'wrapper header__cart-btn-wrapper'}>
                <CartBlock/>
            </div>
        </div>
    )
}

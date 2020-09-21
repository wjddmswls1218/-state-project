import React from "react";
import { NavLink } from "react-router-dom";
import footer from "./footer";

class Navigation extends React.Component {
    render() {
        return(
            <div>
                <ul>
                    <li>
                        <NavLink to="/jyr">정예림화면</NavLink> 
                    </li>

                    <li>
                        <NavLink to="/bhj">방효진화면</NavLink>
                    </li>

                    <li>
                        <NavLink to="/kkm">김경민화면</NavLink>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Navigation;
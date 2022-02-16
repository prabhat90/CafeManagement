import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidenavbar = () => {
    return (
        <div className='sidenav'>
            <h3>Side Navbar</h3>

            <ul>
                <li>
                    <NavLink to="/home">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/admin/dashboard">Dashboard</NavLink>
                </li>
                <li>
                    <NavLink to="/admin/employees">Employees</NavLink>
                </li>
            </ul>
        </div>
    );
}

export default Sidenavbar;

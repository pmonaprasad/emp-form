import React from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';

export default class Navbar extends React.Component {
    render() {
        return(
            <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
                <ul>
                    <li><Link to='/' className="nav-link">Add Employee</Link></li>               
                    <li><Link to='/EmpData' className="nav-link">Employee Data</Link></li>
                </ul>
            </nav>
        )
    }
}

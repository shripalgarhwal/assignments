import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from '../../features/home';

const AppRoutes = () => {
    return (
        <Router>
            {/* <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/topics">Topics</Link></li>
            </ul> */}
    
            <Route exact path="/" component={Home}/>
        </Router>
    );
}

export default AppRoutes;

import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Dashboard from '../components/Dashboard';
import Home from '../components/Home';
import NotFoundPage from '../components/NotFoundPage';
import RedirectPage from '../components/RedirectPage';


class AppRouter extends React.Component {
    render() {
        return (
            <BrowserRouter>
            <div className="main">
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/redirect" element ={<RedirectPage/>}/>
                    <Route path="/dashboard" element={<Dashboard/>}/>
                    <Route element={<NotFoundPage/>}/>
                </Routes>
            </div>
                
            </BrowserRouter>
        )
    }
}

export default AppRouter

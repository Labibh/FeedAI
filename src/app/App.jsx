import {useState, useEffect} from 'react'
import './App.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from "../components/Navbar.jsx";
import Home from "../pages/Home/index.jsx";
import Liked from "../pages/Liked/index.jsx";
import Create from "../pages/PostCreate/index.jsx";
import MyPosts from "../pages/MyPosts/index.jsx";
import { useDispatch } from 'react-redux';
import {generateOrRetrieveUserID, getPost} from "../redux/mainSlice.jsx";

function App() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(generateOrRetrieveUserID());
    }, [dispatch])

    return (
        <div className="App">
            <Router>
                <Navbar/>
                <Routes>
                    <Route path="/" exact Component={Home}/>
                    <Route path="/liked" Component={Liked}/>
                    <Route path="/create" Component={Create}/>
                    <Route path="/myposts" Component={MyPosts}/>
                </Routes>
            </Router>
        </div>
    )
}

export default App

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

function Home() {

    const [user, setUser] = useState({});

    const navigate = useNavigate();

    const token = localStorage.getItem("token");

    const fetchData = async () => {
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`
        await axios.post('http://127.0.0.1:8000/api/auth/me')
            .then((response) => {
                setUser(response.data);
            })
    }

    // Middleware
    useEffect(() => {
        if (!token) {
            navigate('/login');
        }

        fetchData();
    }, []);

    const logoutHandler = async () => {
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`
        await axios.post('http://127.0.0.1:8000/api/auth/me')
            .then(() => {
                localStorage.removeItem("token");

                navigate('/login');
            })
    }

    return (
        <div className="h-screen w-screen bg-slate-700 text-white flex justify-center items-center">
            <div className=" w-1/4 border border-white rounded-2xl p-2">
                <div className="border-b text-center text-2xl">
                    <h5>Home, {user.name}</h5>
                    <p>{user.email}</p>
                </div>
                <div>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged..</p>
                </div>
                <button className="py-1 px-4 bg-black" onClick={logoutHandler}>Logout</button>
            </div>
        </div>
    )
}

export default Home;
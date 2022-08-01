import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';

function Register() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [PasswordConfirmation, setPasswordConfirmation] = useState("");

    // Validation
    const [validation, setValidation] = useState([]);

    const navigate = useNavigate();

    // Middleware
    useEffect(() => {
        if (localStorage.getItem('token')) {
            navigate('/home');
        }
    }, []);

    const registerHandler = async (e) => {
        e.preventDefault();

        const formData = new FormData();

        formData.append('name', name);
        formData.append('email', email);
        formData.append('password', password);
        formData.append('password_confirmation', PasswordConfirmation);

        await axios.post('http://127.0.0.1:8000/api/auth/register', formData)
            .then(() => {
                navigate('/login');
            }).catch(error => {
                // console.log(error.response.data);
                // setValidation(error.response.data.errors);
                setValidation(error.response.data);
            })
    }

    return (
        <div className="h-screen w-screen bg-slate-700 text-white flex justify-center items-center">
            <div className="w-1/4 border border-white rounded-2xl p-2">
                <div className="border-b text-center text-2xl">
                    <h5>Register</h5>
                </div>
                <div>
                    <form onSubmit={registerHandler} className="px-10 py-2">
                        <div className="grid">
                            <label>Nama Lengkap:</label>
                            <input type="text" className="bg-slate-400 py-1 px-4" placeholder="Masukan nama lengkap" id="name" value={name} onChange={(e) => setName(e.target.value)} />
                            {
                                validation.name && (
                                    <div className="text-red-500">{validation.name[0]}</div>
                                )
                            }
                        </div>
                        <div className="grid">
                            <label>Alamat Email:</label>
                            <input type="email" className="bg-slate-400 py-1 px-4" placeholder="Masukan email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                            {
                                validation.email && (
                                    <div className="text-red-500">{validation.email[0]}</div>
                                )
                            }
                        </div>
                        <div className="grid">
                            <label>Kata Sandi:</label>
                            <input type="password" className="bg-slate-400 py-1 px-4" placeholder="Masukan kata sandi" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                            {
                                validation.password && (
                                    <div className="text-red-500">{validation.password[0]}</div>
                                )
                            }
                        </div>
                        <div className="grid">
                            <label>Ulangi Kata Sandi:</label>
                            <input type="password" className="bg-slate-400 py-1 px-4" placeholder="Ulangi kata sandi" id="PasswordConfirmation" value={PasswordConfirmation} onChange={(e) => setPasswordConfirmation(e.target.value)} />
                        </div>
                        <div className="flex justify-center">
                            <button className="bg-black text-white py-2 px-8 text-center my-2">Daftar</button>
                        </div>
                        <div className="flex justify-center">
                            <Link to="/register" className="bg-black text-white py-2 px-8 text-center my-2">Register</Link>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register;
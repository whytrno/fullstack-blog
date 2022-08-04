import React, { useState } from "react";
import { Link } from "react-router-dom";
import person from './person.png';

function Welcome() {
    const [search, setSearch] = useState(false);
    const [login, setLogin] = useState(false);

    return (
        <div className="font-playfair">
            <div className="h-screen 2xl:w-24 md:w-20 grid fixed text-white content-between justify-center py-10 bg-[#0a0a0a]">
                <div>

                    {search ?
                        <button onClick={() => setSearch(false)}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                        :
                        <button onClick={() => setSearch(true)}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" />
                            </svg>
                        </button>
                    }

                </div>
                <div>
                    {login ?
                    <button onClick={() => setLogin(false)}>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                    :
                    <button onClick={() => setLogin(true)}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                        </svg>
                    </button>
                    }
                </div>
            </div>
            <div className="relative 2xl:ml-24 md:ml-20 bg-[#171717] text-white h-screen">
                <div className="grid content-between h-full 2xl:ml-72 md:ml-24 py-14 mr-32 absolute z-10">
                    <div className="flex justify-between">
                        <div className="2xl:text-2xl 2xl:space-x-20 md:space-x-10">
                            <Link to="https://lazy2.codes" className="text-[#9d03fe]">Portfolio</Link>
                            <Link to="/blog">Blog</Link>
                            <Link to="https://lazy2.codes">Contact</Link>
                        </div>
                        <div className="flex items-center space-x-2">
                            <h5 className="2xl:text-xl">
                                Selamat datang, Wahyu
                            </h5>
                            <svg xmlns="http://www.w3.org/2000/svg" className="2xl:h-9 2xl:w-9 md:h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                    </div>
                    <div className="space-y-2">
                        <h1 className="2xl:text-6xl md:text-5xl font-bold">Welcome to <span className="text-[#9d30fe]">Lazy2.Blog</span></h1>
                        <p className="bg-black px-4 w-min whitespace-nowrap">By Wahyu Triono</p>
                    </div>
                    <div className="grid grid-cols-3 gap-10">
                        <div className="space-y-1">
                            <h1 className="font-bold 2xl:text-xl">Ini adalah judul blog pertama, hallo selamat datang di blog saya</h1>
                            <p className="md:text-sm">5 min read</p>
                        </div>
                        <div className="space-y-1">
                            <h1 className="font-bold 2xl:text-xl">Ini adalah judul blog pertama, hallo selamat datang di blog saya</h1>
                            <p className="md:text-sm">5 min read</p>
                        </div>
                        <div className="space-y-1">
                            <h1 className="font-bold 2xl:text-xl">Ini adalah judul blog pertama, hallo selamat datang di blog saya</h1>
                            <p className="md:text-sm">5 min read</p>
                        </div>
                    </div>
                </div>
                <img className="absolute top-0 right-0 h-screen" src={person} alt="person" />

                {search ?
                    <div className="absolute backdrop-blur-sm z-50 flex justify-center items-center h-screen w-full top-0">
                        <form className="w-1/4 flex">
                            <input type="text" autoFocus placeholder="Search..." className="2xl:py-5 md:py-3 px-5 text-xl bg-black w-full outline-0" />
                            <button type="submit" className="bg-black px-5">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" />
                                </svg>
                            </button>
                        </form>
                    </div>
                    : null}

                {login ?
                <div className="absolute backdrop-blur-sm z-50 flex justify-center items-center h-screen w-full top-0">
                    <form className="w-1/4 bg-black p-5 2xl:space-y-10 md:space-y-7">
                        <div className="text-center 2xl:text-2xl md:text-xl border-b pb-4">
                            <h2>Lazy2.Blog | Login</h2>
                        </div>
                        <div className="space-y-5">
                            <div>
                                <label>Email</label>
                                <input type="text" autoFocus placeholder="Enter your email" className="2xl:py-2 md:py-1 px-5 2xl:text-xl bg-white w-full outline-0" />
                            </div>
                            <div>
                                <label>Password</label>
                                <input type="password" autoFocus placeholder="Enter your password" className="2xl:py-2 md:py-1 px-5 2xl:text-xl bg-white w-full outline-0" />
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <button className="2xl:py-2 md:py-1 px-7 bg-white text-black">Login</button>
                        </div>
                    </form>
                </div>
                : null}
            </div>
        </div>
        // <div className="h-screen w-screen bg-slate-700 text-white flex justify-center items-center">
        //     <div className=" w-1/4 border border-white rounded-2xl p-2">
        //         <div className="border-b text-center text-2xl">
        //             <h5>Welcome</h5>
        //         </div>
        //         <div>
        //             <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged..</p>
        //             <Link to="/login" className="py-1 px-4 bg-black text-white mr-2">Login</Link>
        //             <Link to="/register" className="py-1 px-4 bg-black text-white">Register</Link>
        //         </div>
        //     </div>
        // </div>
    )
}

export default Welcome;

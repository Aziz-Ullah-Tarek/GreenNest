import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import { toast } from 'react-toastify';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogout = () => {
        logOut()
            .then(() => {
                toast.success('Logged out successfully!');
            })
            .catch(error => {
                toast.error('Error logging out: ' + error.message);
            });
    };

    const navLinks = (
        <>
            <li>
                <NavLink 
                    to="/" 
                    className={({ isActive }) => 
                        isActive ? "text-white font-bold bg-green-700 rounded-lg px-3 py-2" : "text-white hover:text-yellow-300 transition-colors px-3 py-2"
                    }
                >
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink 
                    to="/plants" 
                    className={({ isActive }) => 
                        isActive ? "text-white font-bold bg-green-700 rounded-lg px-3 py-2" : "text-white hover:text-yellow-300 transition-colors px-3 py-2"
                    }
                >
                    All Plants
                </NavLink>
            </li>
            <li>
                <NavLink 
                    to="/about" 
                    className={({ isActive }) => 
                        isActive ? "text-white font-bold bg-green-700 rounded-lg px-3 py-2" : "text-white hover:text-yellow-300 transition-colors px-3 py-2"
                    }
                >
                    About Us
                </NavLink>
            </li>
            <li>
                <NavLink 
                    to="/contact" 
                    className={({ isActive }) => 
                        isActive ? "text-white font-bold bg-green-700 rounded-lg px-3 py-2" : "text-white hover:text-yellow-300 transition-colors px-3 py-2"
                    }
                >
                    Contact
                </NavLink>
            </li>
            <li>
                <NavLink 
                    to="/support" 
                    className={({ isActive }) => 
                        isActive ? "text-white font-bold bg-green-700 rounded-lg px-3 py-2" : "text-white hover:text-yellow-300 transition-colors px-3 py-2"
                    }
                >
                    Support
                </NavLink>
            </li>
            {user && (
                <li>
                    <NavLink 
                        to="/profile" 
                        className={({ isActive }) => 
                            isActive ? "text-white font-bold bg-green-700 rounded-lg px-3 py-2" : "text-white hover:text-yellow-300 transition-colors px-3 py-2"
                        }
                    >
                        My Profile
                    </NavLink>
                </li>
            )}
        </>
    );

    return (
        <nav className="bg-linear-to-r from-green-400 to-blue-500 shadow-xl sticky top-0 z-50">
        <div className="navbar container mx-auto px-4 lg:px-8 py-2">
            {/* Navbar Start - Mobile Dropdown + Logo */}
            <div className="navbar-start">
                {/* Mobile Dropdown Menu */}
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            className="h-6 w-6" 
                            fill="none" 
                            viewBox="0 0 24 24" 
                            stroke="currentColor"
                        >
                            <path 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                strokeWidth="2" 
                                d="M4 6h16M4 12h8m-8 6h16" 
                            />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow-lg"
                    >
                        {navLinks}
                    </ul>
                </div>
                
                {/* Logo */}
                <Link to="/" className="btn btn-ghost text-xl lg:text-2xl font-bold text-white hover:text-yellow-300 transition-colors">
                    🌱 GreenNest
                </Link>
            </div>

           
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-2">
                    {navLinks}
                </ul>
            </div>

            
            <div className="navbar-end gap-2">
                {user ? (
                    
                    <div className="dropdown dropdown-end">
                        <div 
                            tabIndex={0} 
                            role="button" 
                            className="btn btn-ghost btn-circle avatar"
                        >
                            <div className="w-10 rounded-full ring ring-green-500 ring-offset-base-100 ring-offset-2">
                                <img
                                    alt={user.displayName}
                                    src={user.photoURL || "https://ui-avatars.com/api/?name=" + user.displayName}
                                />
                            </div>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow-lg"
                        >
                            <li className="menu-title">
                                <span className="text-green-600 font-semibold">
                                    {user.displayName}
                                </span>
                            </li>
                            <li>
                                <Link to="/profile" className="justify-between">
                                    Profile
                                    <span className="badge badge-sm">New</span>
                                </Link>
                            </li>
                            <li><a>Settings</a></li>
                            <li>
                                <button onClick={handleLogout} className="text-red-600">
                                    Logout
                                </button>
                            </li>
                        </ul>
                    </div>
                ) : (
                    // User is logged out - Show Login/Register Buttons
                    <>
                        <NavLink 
                            to="/login" 
                            className={({ isActive }) => 
                                isActive 
                                    ? "btn btn-sm lg:btn-md bg-white text-green-700 border-none hover:bg-yellow-300" 
                                    : "btn btn-sm lg:btn-md btn-ghost text-white hover:bg-white hover:text-green-700 border-2 border-white"
                            }
                        >
                            Login
                        </NavLink>
                        <NavLink 
                            to="/register" 
                            className={({ isActive }) => 
                                isActive 
                                    ? "btn btn-sm lg:btn-md bg-yellow-400 text-green-800 border-none hover:bg-yellow-500" 
                                    : "btn btn-sm lg:btn-md bg-white text-green-700 hover:bg-yellow-400 hover:text-green-800 border-none"
                            }
                        >
                            Register
                        </NavLink>
                    </>
                )}
            </div>
        </div>
        </nav>
    );
};

export default Navbar;
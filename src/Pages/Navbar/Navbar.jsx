import React from 'react';
import { FaUserCircle, FaWallet } from 'react-icons/fa';
import cat from '../../assets/cat.png'
import connect from '../../assets/connect.png';

const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="flex-1">
                    <a className="btn btn-ghost normal-case text-xl">Faucets</a>
                </div>
                <div className="flex-none">

                    <label htmlFor="my-modal-3" className="">
                        <div className='flex items-center border-4 rounded text-[#9b1fe9] font-bold gap-2 px-3 py-1 border-[#9b1fe9]'>
                            <span><FaWallet></FaWallet></span>
                            <span>Connect wallet</span>
                        </div>
                    </label>

                    <input type="checkbox" id="my-modal-3" className="modal-toggle" />
                    <div className="modal">
                        
                        <div className="modal-box relative">
                            <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                            <h3 className="text-2xl font-bold">Connect your wallet</h3>


                            <div className='my-5 grid justify-items-center lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 justify-items-center'>
                                <div className='bg-gray-200 p-8'>
                                    <img className='mr-5' src="https://faucets.netlify.app/static/media/MetaMask.551edf10.svg" alt="" />
                                    <h1 className='text-2xl text-[#9b1fe9] font-bold'>Metamask</h1>

                                </div>

                                <div className='bg-gray-200 p-8'>
                                    <img src="https://faucets.netlify.app/static/media/WalletConnect.d0b10794.svg" alt="" />
                                    <h1 className='text-2xl text-[#9b1fe9] font-bold'>WalletConnect</h1>
                                </div>
                            </div>





                        </div>
                    </div>








                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <FaUserCircle className='text-3xl' />
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a>Login</a> </li>
                            <li><a>Sign Up</a></li>
                            <li><a>FAQ</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
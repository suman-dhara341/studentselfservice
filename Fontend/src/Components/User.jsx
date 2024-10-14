import React from 'react';
import { useNavigate } from 'react-router-dom';

const UserInterfacePanel = () => {
    const navigate = useNavigate();
    const userData = JSON.parse(localStorage.getItem('user')) || {};

    const handleLogout = () => {
        localStorage.removeItem('user'); 
        navigate('/login'); 
    };

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                <h2 className="text-2xl font-bold mb-6 text-gray-900">User Information</h2>

                <div className="mb-4">
                    <label className="block text-gray-700 font-semibold mb-2">
                        Class
                    </label>
                    <p className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-200">
                        {userData.userClass || 'N/A'} 
                    </p>
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 font-semibold mb-2">
                        Section
                    </label>
                    <p className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-200">
                        {userData.section || 'N/A'} 
                    </p>
                </div>

                <div className="mb-6">
                    <label className="block text-gray-700 font-semibold mb-2">
                        Roll Number
                    </label>
                    <p className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-200">
                        {userData.rollNumber || 'N/A'}
                    </p>
                </div>

                <button
                    onClick={handleLogout}
                    className="w-full bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 transition duration-300 mt-4"
                >
                    Logout
                </button>
            </div>
        </div>
    );
};

export default UserInterfacePanel;

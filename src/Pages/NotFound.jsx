import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { IoAlertCircleOutline } from 'react-icons/io5';

function NotFound() {
    const location = useLocation();

    return (
        <div className="flex flex-col items-center justify-center py-20 text-center">
            <div className="bg-red-50 p-6 rounded-full mb-8">
                <IoAlertCircleOutline className="w-16 h-16 text-red-500" />
            </div>
            <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
            <p className="text-stone-500 mb-2">
                The page you are looking for does not exist.
            </p>
            <div className="bg-stone-100 px-4 py-2 rounded-lg text-sm font-mono text-stone-600 mb-8">
                Path: {location.pathname}
            </div>
            <Link
                to="/"
                className="bg-stone-900 text-white px-8 py-3 rounded-full font-bold hover:bg-stone-800 transition-colors"
            >
                Go Back Home
            </Link>
        </div>
    );
}

export default NotFound;
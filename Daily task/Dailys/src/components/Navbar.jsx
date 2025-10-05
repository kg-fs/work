
import { useNavigate } from 'react-router-dom';
function Navbar() {
    const navigate = useNavigate();

    return (

        <div className="flex gap-7 justify-center mt-8">
            <a href="" className=" hover:scale-105 transition-transform flex items-center gap-2 text-gray-800 ">
                {/* Checklist icon */}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m1 7H6a2 2 0 01-2-2V7a2 2 0 012-2h8" />
                </svg>
                Task 
            </a>
            <a href="" className="hover:scale-105 transition-transform flex items-center gap-2 text-gray-800 ">
                {/* Plus / add task icon */}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
                </svg>
                Add Task
            </a>
            <a href="" onClick={() => navigate('/adduser')} className="hover:scale-105 transition-transform flex items-center gap-2 text-gray-800 ">
                {/* User add icon */}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path d="M8 9a3 3 0 100-6 3 3 0 000 6z" />
                    <path fillRule="evenodd" d="M2 16a6 6 0 1112 0H2zm14-5a1 1 0 011 1v1h1a1 1 0 110 2h-1v1a1 1 0 11-2 0v-1h-1a1 1 0 110-2h1v-1a1 1 0 011-1z" clipRule="evenodd" />
                </svg>
                Add Users
            </a>
            <a href="" className="hover:scale-105 transition-transform flex items-center gap-2 text-gray-800 ">
                {/* Users list icon */}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a4 4 0 00-4-4h-1M9 20H4v-2a4 4 0 014-4h1m0-4a4 4 0 11-8 0 4 4 0 018 0zm8 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
                Users List
            </a>
        </div>
    );
}

export default Navbar;

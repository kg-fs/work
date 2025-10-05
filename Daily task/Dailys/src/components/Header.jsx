import { useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();
  const user = localStorage.getItem('user');
  return (

    <div className="h-[50px] flex items-center justify-between mx-5 my-5">
      <h1 className="text-xl text-black font-bold m-3 text-center">
        Welcome, {user}
      </h1>

      <button
        className="bg-black text-white m-3 p-2 rounded  hover:scale-105 transition-transform"
        onClick={() => {
          localStorage.removeItem('user');
          navigate('/');
        }}
      >
        log out
      </button>

    </div>
  );
}

   export default Header;
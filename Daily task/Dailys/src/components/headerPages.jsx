import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function HeaderPages() {
  const location = useLocation();
  const navigate = useNavigate();

  const formatPath = (pathname) => {
    if (!pathname || pathname === '/') return 'Login';
    const p = pathname.replace(/^\//, '').split('/')[0];
    return p.charAt(0).toUpperCase() + p.slice(1);
  };

  const pageName = formatPath(location.pathname);

  return (
    <div className="h-[50px] flex items-center justify-between mx-5 my-5">
      <h1 className="text-xl text-black font-bold m-3 text-center">{pageName}</h1>

      <a
        href="/Home"
        className="bg-black text-white m-3 p-2 rounded hover:scale-105 transition-transform"
        onClick={() => {
          // redirigir al menú
          navigate('/Home');
        }}
      >
        Home
      </a>
    </div>
  );
}

export default HeaderPages;
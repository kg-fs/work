import HeaderPages from '../components/headerPages'; // Asegúrate de importar el componente Header
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
function Adduser() {
  const navigate = useNavigate();
  useEffect(() => {
    const user = localStorage.getItem('user');
    if (!user) {
      navigate('/');
    }
  }, [navigate]);

  return (
    <div className="min-h-screen flex-col bg-white flex ">
      <HeaderPages/>
      
      
      
      
    </div>
  );
}

export default Adduser;
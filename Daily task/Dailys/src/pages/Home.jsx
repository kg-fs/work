import Header from '../components/Header'; // Asegúrate de importar el componente Header
import { useEffect } from 'react';
import Navbar from '../components/navbar';
import { useNavigate } from 'react-router-dom';
function Home() {
  const navigate = useNavigate();
  useEffect(() => {
    const user = localStorage.getItem('user');
    if (!user) {
      navigate('/');
    }
  }, [navigate]);

  return (
    <div className="min-h-screen flex-col bg-white flex ">
      <Header />
      <Navbar />



    </div>
  );
}

export default Home;
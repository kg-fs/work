import { useState, useEffect } from 'react';
import { client } from '../../supabase/client';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  // Redirigir a /home si ya hay usuario en localStorage
  useEffect(() => {
    const user = localStorage.getItem('user');
    if (user) {
      navigate('/home');
    }
    
  }, [navigate]);

  const handleLogin = async () => {
    try {
      const { data, error } = await client.auth.signInWithPassword({
        email,
        password,
      });
      if(error) {
        throw error;
      }
      if(data.user) {
        localStorage.setItem('user', data.user.email);
        navigate('/home');
      }
  
      console.log(localStorage.getItem('user'));
    } catch (error) {
      console.error('Error during login:', error);

    }

  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className=" p-6 bg-white w-full max-w-md">
        <h2 className="text-3xl text-center font-bold text-gray-900 mb-12">Welcome back</h2>
        <input
          type="text"
          className=" w-full px-4 py-3 text-center border-b mb-12 focus:outline-none"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          className="w-full px-4 py-3 text-center border-b mb-12 focus:outline-none"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          className="w-full bg-white text-black p-2 rounded hover:scale-105 transition-transform"
          onClick={handleLogin}
        >
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;
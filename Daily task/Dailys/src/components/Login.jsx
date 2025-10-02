import { useState, useEffect } from 'react';
   import { useNavigate } from 'react-router-dom';
   import users from '../data/user.json';

   function Login() {
     const [username, setUsername] = useState('');
     const [password, setPassword] = useState('');
     const [error, setError] = useState('');
     const [success, setSuccess] = useState('');
     const navigate = useNavigate();

     // Redirigir a /home si ya hay usuario en localStorage
     useEffect(() => {
       const user = localStorage.getItem('user');
       if (user) {
         navigate('/home');
       }
     }, [navigate]);

     const handleLogin = () => {
       setError('');
       setSuccess('');

       if (!username || !password) {
         setError('Completa todos los campos');
         return;
       }

       const foundUser = users.find(
         (u) => u.username === username && u.password === password
       );

       if (foundUser) {
         localStorage.setItem('user', JSON.stringify({ username }));
         setSuccess('Login exitoso, usuario guardado en localStorage');
         navigate('/home');
       } else {
         setError('Usuario o contraseña incorrectos');
       }
     };

     return (
       <div className="min-h-screen bg-black flex items-center justify-center">
         <div className=" p-6  w-full max-w-md">
           <img src="inicio.png" className='rounded-2xl ' alt="" />
           <input
             type="text"
             className="w-full p-2 focus:outline-none text-white text-center border-b mt-12 mb-12"
             placeholder="Usuario"
             value={username}
             onChange={(e) => setUsername(e.target.value)}
           /> 
           <input
             type="password"
             className="w-full focus:outline-none text-white p-2 text-center border-b border-white mb-12"
             placeholder="Contraseña"
             value={password}
             onChange={(e) => setPassword(e.target.value)}
           />
           {error && <p className="text-blue-300 text-center mb-2">{error}</p>}
           {success && <p className="">{success}</p>}
           <button
             className="w-full bg-transparent text-white p-2 rounded hover:scale-105 transition-transform"
             onClick={handleLogin}
           >
             Iniciar Sesión
           </button>
         </div>
       </div>
     );
   }

   export default Login;
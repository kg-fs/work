function Header() {
     const user = JSON.parse(localStorage.getItem('user') || '{}');

     return (
      
       <div className=" w-full h-[50px] flex items-center justify-between mx-5 my-5">
           <h1 className="text-2xl text-white font-bold mb-4 text-center">
             Bienvenido, {user?.username || 'Usuario'}
           </h1>
           <a href=""></a>
           <a href=""></a>
           <a href=""></a>
           <button
             className="w-[200px text-white p-2 rounded  hover:scale-105 transition-transform"
             onClick={() => {
               localStorage.removeItem('user');
               window.location.href = '/';
             }}
           >
             Cerrar Sesión
           </button>
         
       </div>
     );
   }

   export default Header;
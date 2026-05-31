import { Outlet } from 'react-router-dom';

export const AuthLayout = () => {
  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
      <div className="hidden h-screen w-1/2 items-center justify-center bg-indigo-700 lg:flex lg:flex-col">
        <span className="text-9xl font-bold text-white">Zustand</span>
        {/* <img src="https://placehold.co/1440/667fff/ffffff.png?text=Zustand&font=Montserrat"
          alt="Placeholder Image"
          className="object-cover w-full h-full" /> */}
      </div>
      <div className="sm:20 w-full p-8 md:p-52 lg:w-1/2 lg:p-36">
        <Outlet />
      </div>
    </div>
  );
};

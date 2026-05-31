import { SideMenu } from '../components';
import { Outlet } from 'react-router-dom';

export const DashboardLayout = () => {
  return (
    <div className="h-screen w-screen overflow-y-scroll bg-slate-200 text-slate-900 antialiased selection:bg-blue-900 selection:text-white">
      <div className="relative flex w-screen flex-row">
        <SideMenu />

        <div className="w-full p-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

import type { IconType } from 'react-icons';
import {
  IoSpeedometerOutline,
  IoPawOutline,
  IoLogOutOutline,
  IoHeartOutline,
  IoListOutline,
  IoAccessibilityOutline,
} from 'react-icons/io5';
import { NavLink } from 'react-router-dom';
import './SideMenu.css';
import { SideMenuItem } from './SideMenuItem';

interface MenuItem {
  title: string;
  subTitle: string;
  href: string;
  Icon: IconType;
}

const menuItems: MenuItem[] = [
  {
    title: 'Dashboard',
    subTitle: 'Visualizar data',
    href: '/dashboard',
    Icon: IoSpeedometerOutline,
  },
  { title: 'Osos', subTitle: 'Manejador de osos', href: '/dashboard/bears', Icon: IoPawOutline },
  {
    title: 'Persona',
    subTitle: 'Nombre y apellido',
    href: '/dashboard/person',
    Icon: IoAccessibilityOutline,
  },
  { title: 'Tareas', subTitle: 'Listado de tareas', href: '/dashboard/tasks', Icon: IoListOutline },
  {
    title: 'Boda',
    subTitle: 'Invitados a la boda',
    href: '/dashboard/wedding-invitation',
    Icon: IoHeartOutline,
  },
];

export const SideMenu = () => {
  return (
    <div
      className="left-0 z-10 min-h-screen w-80 overflow-y-scroll bg-gray-900 text-slate-300"
      id="menu"
    >
      <div className="my-4 px-6" id="logo">
        {/* Title */}
        <h1 className="text-lg font-bold text-white md:text-2xl">
          Zustand
          <span className="text-xs text-blue-500"> StateManager</span>.
        </h1>
        <p className="text-sm text-slate-500">Manejador de estados simple pero poderoso.</p>
      </div>

      {/*  Profile */}
      <div className="px-6 py-10" id="profile">
        <p className="text-slate-500">Bienvenido,</p>
        <a className="inline-flex items-center space-x-2" href="#">
          <span>
            <img
              alt=""
              className="h-8 w-8 rounded-full"
              src="https://placehold.co/200x200/orange/white"
            />
          </span>
          <span className="text-sm font-bold md:text-base">Edward Tompson</span>
        </a>
      </div>

      {/* Menu Items */}
      <nav className="w-full px-6" id="nav">
        {menuItems.map((item) => (
          <SideMenuItem key={item.href} {...item} />
        ))}

        {/* Logout */}
        <NavLink className="mt-10" to={'/auth/login'}>
          <div>
            <IoLogOutOutline />
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-bold leading-5 text-slate-300">Logout</span>
            <span className="hidden text-sm text-slate-500 md:block">Cerrar sesión</span>
          </div>
        </NavLink>
      </nav>
    </div>
  );
};

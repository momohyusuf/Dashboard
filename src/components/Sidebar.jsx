import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaShopware } from 'react-icons/fa';
import { MdOutlineCancel } from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import { links } from '../data/dummy';
const Sidebar = () => {
  const activeMenu = true;
  const activeLink =
    'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-white bg-slate-800 text-lg m-2';
  const normalLink =
    'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg  text-lg text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2';
  return (
    <section className="ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10">
      {activeMenu && (
        <>
          <div className="flex justify-between items-center">
            <Link
              to="/"
              onClick={() => {}}
              className="items-center gap-3 ml-3 mt-4 flex text-xl font-extrabold tracking-tight dark:text-white text-slate-900"
            >
              <FaShopware /> <span>Shoppy</span>
            </Link>
            <TooltipComponent content="Menu" position="BottomCenter">
              <button
                onClick={() => {}}
                className="text-xl rounded-full p-3 
              hover:bg-light-gray mt-4 block md:hidden
              "
              >
                <MdOutlineCancel />
              </button>
            </TooltipComponent>
          </div>
          <div className="mt-10">
            {links.map((item, index) => {
              return (
                <div key={index}>
                  <p className="text-gray-400 m-3 mt-4 uppercase">
                    {item.title}
                  </p>{' '}
                  {item.links.map((link, index) => (
                    <NavLink
                      to={`/${link.name}`}
                      key={index}
                      onClick={() => {}}
                      className={({ isActive }) =>
                        isActive ? activeLink : normalLink
                      }
                    >
                      {link.icon}
                      <span className="capitalize">{link.name}</span>
                    </NavLink>
                  ))}
                </div>
              );
            })}
          </div>
        </>
      )}
    </section>
  );
};

export default Sidebar;

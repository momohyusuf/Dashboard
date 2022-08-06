import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { Navbar, Footer, Sidebar, ThemeSettings } from './components';
import {
  Ecommerce,
  Orders,
  Calender,
  Employees,
  Stacked,
  PyramidChart,
  Customers,
  Kanban,
  AreaChart,
  BarChart,
  PieChart,
  Financial,
  ColorPicker,
  ColorMapping,
  Editor,
  LineChart,
} from './pages';

import './App.css';

const App = () => {
  const activeMenu = true;
  return (
    <section className="underline text-3xl">
      <BrowserRouter>
        <div className="flex relative dark:bg-main-dark-bg">
          <div className="fixed right-4 bottom-4" style={{ zIndex: '1000' }}>
            <TooltipComponent content="Settings" position="Top">
              <button
                type="button"
                className="text-3xl p-3 hover:drop-shadow-xl
                hover:bg-light-gray text-white
                "
                style={{ background: 'blue', borderRadius: '50%' }}
              >
                <FiSettings />
              </button>
            </TooltipComponent>
          </div>
          {activeMenu ? (
            <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white">
              <Sidebar />
            </div>
          ) : (
            <div className="w-0 dark:bg-secondary-dark-bg">
              <Sidebar />
            </div>
          )}
          <div
            className={`
              activeMenu
            dark:bg-main-bg bg-main-bg min-h-screen w-full${
              activeMenu ? 'md:ml-72' : 'flex-2'
            }
                `}
          >
            <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full">
              <Navbar />
            </div>
          </div>
          <Routes>
            {/* Dashboard routes*/}
            <Route path="/" element={<Ecommerce />} />
            <Route path="/ecommerce" element={<Ecommerce />} />
            {/* ************** */}

            {/* Pages Routes*/}
            <Route path="/orders" element={<Orders />} />
            <Route path="/employees" element={<Employees />} />
            <Route path="/customers" element={<Customers />} />
            {/* *********************** */}

            {/* Apps Routes*/}

            <Route path="/kanban" element={<Kanban />} />
            <Route path="/editor" element={<Editor />} />
            <Route path="/calender" element={<Calender />} />
            <Route path="color-picker" element={<ColorPicker />} />
            {/* **************/}
            {/* Chart Routes */}

            <Route path="/line" element={<LineChart />} />
            <Route path="/area" element={<AreaChart />} />
            <Route path="/bar" element={<BarChart />} />
            <Route path="/pie" element={<PieChart />} />
            <Route path="/financial" element={<Financial />} />
            <Route path="/color-mapping" element={<ColorMapping />} />
            <Route path="/pyramid" element={<PyramidChart />} />
            <Route path="/stacked" element={<Stacked />} />

            {/* ************** */}
          </Routes>
        </div>
      </BrowserRouter>
    </section>
  );
};

export default App;

import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';

function Layout() {
  //Basic layout for the page
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default Layout;

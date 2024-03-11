import BottomNavigationBar from './BottomNavigationBar';
import { Outlet } from 'react-router-dom';

export default () => (
    <>
        <Outlet />
        <BottomNavigationBar />
    </>
);
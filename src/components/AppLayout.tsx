import { Outlet } from 'react-router-dom';
import BottomNavigationBar from './BottomNavigationBar';

export default () => (
    <>
        <div style={{ marginBottom: "56px" }}>
            <Outlet />
        </div>
        <BottomNavigationBar />
    </>
);
import BottomNavigationBar from './BottomNavigationBar';
import { Outlet } from 'react-router-dom';

export default () => (
    <>
        <div style={{ marginBottom: "56px" }}>
            <Outlet />
        </div>
        <BottomNavigationBar />
    </>
);
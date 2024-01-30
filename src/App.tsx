import { CssBaseline, Fab } from '@mui/material';
import BottomNavigationBar from './components/BottomNavigationBar';
import ListComponent from './components/ListComponent';
import { Add } from '@mui/icons-material';
import { useState } from 'react';
import { BottomDrawer } from './components/BottomDrawer';

function App() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <CssBaseline />
      <ListComponent />
      <BottomNavigationBar />
      <BottomDrawer drawerState={open} setDrawerState={setOpen} />
      <Fab color="secondary" sx={{ position: "fixed", bottom: 60, right: 10 }} onClick={() => setOpen(true)}>
        <Add />
      </Fab >
    </>
  )
}

export default App;

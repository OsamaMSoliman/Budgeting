import { Autocomplete, Button, Container, CssBaseline, Drawer, Fab, Grid, TextField } from '@mui/material';
import BottomNavigationBar from './components/BottomNavigationBar';
import ListComponent from './components/ListComponent';
import { Add } from '@mui/icons-material';
import { useState } from 'react';
import { BottomDrawer } from './components/BottomDrawer';
import Filter from './components/Filter';
import FreeSoloCreateOption from './components/FreeSoloCreateOption';
import FreeSoloCreateOptionDialog from './components/FreeSoloCreateOptionDialog';

function App() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <CssBaseline />
      <Filter />
      <FreeSoloCreateOption />
      <FreeSoloCreateOptionDialog />
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

import { Autocomplete, Button, Container, CssBaseline, Drawer, Fab, Grid, TextField } from '@mui/material';
import BottomNavigationBar from './components/BottomNavigationBar';
import ListComponent from './components/ListComponent';
import { Add } from '@mui/icons-material';
import { useState } from 'react';

const data = ["item 1", "item 2", "item 3", "item 4", "item 5", "item 6", "item 7"];

function App() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <CssBaseline />
      <ListComponent />
      <BottomNavigationBar />
      <Drawer
        anchor={"bottom"}
        open={open}
        onClose={handleClose}
      >
        <Container sx={{ padding: 2, marginBottom: 25 }}>
          <Grid container spacing={1}>
            <Grid item xs={8}>
              <Autocomplete
                options={data}
                renderInput={(params) => <TextField {...params} label="Category" />}
                freeSolo
                disableClearable
                defaultValue={data[0]}
                disablePortal
              />
            </Grid>
            <Grid item xs={4}>
              <TextField type='number' label="Quantity" />
            </Grid>
            <Grid item xs={12}>
              <Autocomplete
                options={data}
                renderInput={(params) => <TextField {...params} label="Item" />}
                freeSolo
                autoSelect
                disablePortal
              />
            </Grid>
            <Grid item xs={12}>
              <Button variant="contained">add</Button>
            </Grid>
          </Grid>
        </Container>
      </Drawer>
      <Fab color="secondary" sx={{ position: "fixed", bottom: 60, right: 10 }} onClick={handleClickOpen}>
        <Add />
      </Fab>
    </>
  )
}

export default App;

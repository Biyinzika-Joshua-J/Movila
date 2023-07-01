import './App.css';
import { CssBaseline } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import {Movies, MovieInformation, Actors, Profile, NavBar} from './components/index.js'
import useStyles from './styles';


function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline/>
      <NavBar/>
      <main className={classes.content}>
        <div className={classes.toolbar}/>
        <Routes>
          <Route path='/' element={<Movies/>}/>
          <Route path='/movie/:id' element={<MovieInformation/>}/>
          <Route path='/actors/:id' element={<Actors/>}/>
          <Route path='/profile/:id' element={<Profile/>}/>
        </Routes>
      </main>
    </div>
  );
}

export default App;

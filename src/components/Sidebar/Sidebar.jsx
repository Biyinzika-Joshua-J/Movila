import React, {useEffect} from 'react'
import { Divider, List, ListItem, ListItemText,ListItemButton, ListSubheader, ListItemIcon, Box, CircularProgress } from '@mui/material';
import { Link } from 'react-router-dom';
import {useTheme} from '@mui/material';
import useStyles from './styles';
import { useGetGenresQuery } from '../../services/TMDB';
import genreIcons from '../../assets/genres'
import { useDispatch, useSelector } from 'react-redux';
import { selectGenreOrCategory } from '../../features/currentGenreOrCategory';
import Loader from './Loader';
import MovillaLightLogo from '../../assets/logo/movilla.png';
import MovillaRedLogo from '../../assets/logo/movilla-red.png';

const redLogo = MovillaLightLogo;
const blueLogo = MovillaRedLogo;

const categories = [
  { label: 'Popular', value: 'popular' },
  { label: 'Top Rated', value: 'top_rated' },
  { label: 'Upcoming', value: 'upcoming' },
];




const Sidebar = ({setMobileOpen}) => {
    const theme = useTheme();
    const classes =  useStyles()
    const {data, error, isFetching} = useGetGenresQuery();
    const dispatch = useDispatch();
    const {genreIdOrCategoryName} = useSelector(state => state.currentGenreOrCategory);

   

    if (isFetching){
      return (
        <Box>
          <Loader/>
        </Box>
      )
    }

    if (error){
      return (
        <Box>
          Error occured while fetching genres
        </Box>
      )
    }



  return (
    <>
        <Link to={'/'} className={classes.imageLink}>
            <img src={theme.palette.mode === 'light'?redLogo:blueLogo} alt='Logo' className={classes.image}/>
        </Link>
        <Divider/>
        <List>
          <ListSubheader>
            Categories
          </ListSubheader>
          {
            categories.map(({label, value}) => (
              <Link key={value} className={classes.links} to='/' onClick={()=>{}}>
                <ListItemButton onClick={()=>dispatch(selectGenreOrCategory(value))} >
                <ListItemIcon>
                    <img src={genreIcons[label.toLowerCase()]} alt='icon' className={classes.genreImages} height={30}/>
                  </ListItemIcon>
                  <ListItemText primary={label}/>
                </ListItemButton>
              </Link>
            ))
          }
        </List>
        <Divider/>
        <List>
          <ListSubheader>
            Genres
          </ListSubheader>
          {
            data.genres.map(({name, id}) => (
              <Link key={id} className={classes.links} to='/' onClick={()=>dispatch(selectGenreOrCategory(id))}>
                <ListItemButton onClick={()=>{}} >
                  <ListItemIcon>
                    <img src={genreIcons[name.toLowerCase()]} alt='icon' className={classes.genreImages} height={30}/>
                  </ListItemIcon>
                  <ListItemText primary={name}/>
                </ListItemButton>
              </Link>
            ))
          }
        </List>
       
    </>
  )
}

export default Sidebar
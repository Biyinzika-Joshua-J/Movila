import { makeStyles } from "@mui/styles";

const drawerWidth = 240;

export default makeStyles((theme)=>({
   
    movie:{
        padding:'10px',
    },

    title:{
        color: theme.palette.text.primary,
        textOverflow:'ellipsis',
        width:'230px',
        whiteSpace:'nowrap',
        overflow:'hidden',
        marginTop:'10px',
        marginBottom:'0',
        textAlign:'center',
        textDecoration:'none',
    },
    image:{
        borderRadius:'20px',
        height:'300px',
        marginBottom:'10px',
        transition:'ease-in-out all .3s',
        '&:hover':{
           transform:'scale(1.05)'
        }
    },
    links:{
        alignItems:'center',
        fontWeight:'bolder',
        textDecoration:'none',
        [theme.breakpoints.up('xs')]:{
            display:'flex',
            flexDirection:'column',
            '&:hover':{
                cursor:'pointer',
            }
        }
    },
    
}))
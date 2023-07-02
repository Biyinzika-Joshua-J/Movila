import { makeStyles } from "@mui/styles";


export default makeStyles((theme)=>({
    searchContainer:{
      [theme.breakpoints.down('sm')]:{
        display:'flex',
        justifyContent:'center',
        width:'100%',
      }
    },
    input:{
        [theme.breakpoints.down('sm')]:{
            marginTop:'-10px',
            marginBottom:'10px',
            color:theme.palette.mode === 'light'?'#fff':'#000',
            filter:theme.palette.mode==='light' && 'invert(1)',

        }
    },

}))
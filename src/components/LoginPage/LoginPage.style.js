import { makeStyles } from "@mui/styles";
import aside from '../../assets/aside-background.jpg'


export const useLoginPageStyles = makeStyles({
    root: {
        width : '100vw',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundImage: 'linear-gradient(to top right, #1A4CAB, #10BDBB)',
    },

    box: {
        width: '81rem',
        height: '45rem',
        backgroundColor: 'white',
        boxShadow: '0 0 20px rgba(0, 0, 0, 0.61)' ,
        borderRadius: '10px',
        display: 'flex',

    },

    content: {
        padding: '10px',
        width: '40%',
        backgroundColor: '#eeefea'
    },

    asideBackground: {
        width: '60%',
        backgroundImage: `url(${aside})`,
        backgroundSize : 'cover'
    },

    contentOptions: {
        padding: '30px',
        height: '70%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around'
    },

    tittle: {
       textAlign: 'center', 
       color: '#353839',
    },

    form: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        
        height: '30%',
    },

    formSignUp: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        width: '100%',
        height: '70%',
    },

    options: {
        display: 'flex',
        justifyContent: 'space-between'
    },

    submit: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
    }

})
import { makeStyles } from "@mui/styles";

export const useHomePageStyles = makeStyles({
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
        backgroundColor: '#eeefea',
        boxShadow: '0 0 20px rgba(0, 0, 0, 0.61)' ,
        borderRadius: '10px',
        display: 'flex',
        flexDirection: 'column'

    },

    title: {
        width: '100%',
        textAlign: 'center'
    },

    subTitle: {
        width: '100%',
        padding: '30px',
        textAlign: 'left',
    },

    fields: {
        width: '90%',
        padding: '50px',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: "center",
        textAlign: 'left',

    },
})
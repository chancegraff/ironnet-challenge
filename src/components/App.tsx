import React from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Box from '@material-ui/core/Box';
import background from './Background.svg';
import logo from './Logo.svg';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Link from "@material-ui/core/Link";

const theme = createMuiTheme({
  palette: {
    text: {
      secondary: '#FFFFFF',
      primary: '#403E45',
    },
  },
  typography: {
    fontFamily: 'Montserrat',
    body1: {
      fontSize: '18px',
      fontWeight: 500,
      lineHeight: '18px',
      color: '#403E45',
    },
    h1: {
      fontSize: '48px',
      fontWeight: 800,
      lineHeight: '56px',
    },
    h3: {
      fontSize: '36px',
      fontWeight: 800,
      lineHeight: '44px',
    },
    h5: {
      fontSize: '20px',
      fontWeight: 500,
      lineHeight: '30px',
    },
    caption: {
      fontSize: '14px',
      fontWeight: 500,
      lineHeight: '20px',
    },
  },
  overrides: {
    MuiTextField: {
      root: {
        backgroundColor: '#F7F4F5',
        borderColor: '#C9C0C0',
        borderRadius: '5px',
      },
    },
    MuiInputLabel: {
      root: {
        fontFamily: 'Montserrat',
        fontWeight: 300,
        fontSize: '18px',
      },
    },
    MuiButton: {
      root: {
        fontFamily: 'Montserrat',
        fontWeight: 800,
        fontSize: '18px',
        color: 'white',
      },
      text: {
        padding: '12px 8px',
      },
    },
    MuiLink: {
      root: {
        color: '#F857A6',
      }
    }
  },
});

const useStyles = makeStyles((theme) =>
  createStyles({
    gradient: {
      background: 'linear-gradient(145deg, #F857A6, #FF5858)',
    },
    divider: {
      background: theme.palette.divider,
      height: '5px',
      borderRadius: '5px',
      margin: '50px 0',
    },
    spaced: {
      marginBottom: '20px',
    },
  }),
);

export default function App() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box display="flex" height="100%">
        <Box width={600 / 1920} minWidth={600} className={classes.gradient} height="100%" position="relative">
          <Box position="absolute" top="0" right="0" bottom="0" left="0" overflow="hidden">
            <img src={background} width="100%" alt="Background" />
          </Box>
          <Box margin="auto 75px" height="100%" display="flex" justifyContent="center" flexDirection="column">
            <img src={logo} alt="Logo" style={{ marginBottom: '100px', alignSelf: 'flex-start' }} />
            <Typography variant="h1" color="textSecondary" style={{ marginBottom: '50px' }}>Sign in and start saving your time today.</Typography>
            <Typography variant="h5" color="textSecondary">We provide 24/7 support with our highly dedicated professional team.</Typography>
          </Box>
        </Box>
        <Box width={1320 / 1920} display="flex" flexDirection="column" alignItems="center" justifyContent="center">
          <Box width={360 / 1320} minWidth="360px" minHeight="390px" display="flex" alignItems="center" flexDirection="column" flexGrow={1} justifyContent="center">
            <Typography variant="h3">Sign In</Typography>
            <Box width="38px" className={classes.divider} />
            <TextField className={classes.spaced} label="Email" variant="outlined" fullWidth />
            <TextField className={classes.spaced} label="Password" variant="outlined" fullWidth />
            <Button className={`${classes.gradient} ${classes.spaced}`} fullWidth>Sign In</Button>
            <Box display="flex">
              <Typography variant="caption">Forgot your password?</Typography>
              <Link style={{ marginLeft: '4px' }} href="#">Reset it here.</Link>
            </Box>
          </Box>
          <Box marginBottom="50px">
            <Typography variant="caption" color="textPrimary" style={{ opacity: 0.5, }}>© Copyright ACME 2020</Typography>
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

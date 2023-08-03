import React from 'react';
import { ThemeProvider, CssBaseline, createTheme } from '@mui/material';
import './App.css';

import Intro from './pages/intro/Intro';
import About from './pages/about/About';
import Experience from './pages/experience/Experience';
import Projects from './pages/projects/Projects';

import SidebarNav from './components/sidebarNav/SidebarNav';
import Footer from './components/footer/Footer';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#08d665',
      contrastText: '#e6f1ff'
    },
    secondary: {
      main: '#8892b0'
    },
    background: {
      default: '#0a192f',
      paper: '#112240',
    },
    text: {
      primary: '#e6f1ff'
    }
  }
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div id="content">
        <Intro />
        <About />
        <Experience />
        <Projects />
        <Footer />
      </div>
      <SidebarNav />
    </ThemeProvider>
  );
}

export default App;
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import * as React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';


import { Home } from './Home';

import './App.scss';

// const renderAbout = (props: any) => <About {...props} extra={someVariable} />;
class App extends React.Component {
  public render() {
    return (
      <BrowserRouter>
        <div>
          <AppBar color={'primary'}>

            <Toolbar>
              <IconButton color="inherit" aria-label="Menu">
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" color="inherit">
                News
          </Typography>
              <Button color="inherit">Login</Button>
            </Toolbar>
          </AppBar>
          <Route exact={true} path="/" component={Home} />
          <Route exact={true} path="/about" component={Home} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

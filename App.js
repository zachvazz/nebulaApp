import React, {Component} from 'react';
import { Router, Scene, Drawer } from 'react-native-router-flux';

import CategoriesScreens from './screens/CategoriesScreens';
import Arthritis from './screens/Arthritis';
import DrawerContent from './screens/DrawerContent';
import Login from './screens/Login/Login';
import Welcome from './screens/Login/Welcome';
import Register from './screens/Login/Register';

export default class App extends Component {
  render() {
    return (
      <Router>
        <Scene key='root' headerMode='none'>
          <Drawer contentComponent={DrawerContent} drawerWidth={280}>
            <Scene 
              key='CategoriesScreens' 
              component={CategoriesScreens}
              initial
            />
            <Scene 
              key='Arthritis'
              component={Arthritis}
            />
            <Scene 
              key='Login'
              component={Login}
            />
            <Scene
              key='Welcome'
              component={Welcome}
            />
            <Scene 
              key='Register'
              component={Register}
            />
          </Drawer>
        </Scene>
      </Router>
    );
  }

}
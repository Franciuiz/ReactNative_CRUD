/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

import Home from './src/Home'; //app de crud

AppRegistry.registerComponent(appName, () => Home);

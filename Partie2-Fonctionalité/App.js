// React Native Navigation Drawer – Example using Latest Navigation Version //
// https://aboutreact.com/react-native-navigation-drawer //
import 'react-native-gesture-handler';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Container, Header, Left, Body, Right } from 'native-base';


import * as React from 'react';
import { Button, View, Text , TextInput ,StyleSheet ,ScrollView , SafeAreaView } from 'react-native';


import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator, DrawerContentScrollView } from '@react-navigation/drawer';

import FirstPage from './pages/FirstPage';
 import SecondPage from './pages/SecondPage';
 import ThirdPage from './pages/ThirdPage';
import Drawer_nav from './Components/Drawer_nav';
 import Tab_nav from './Components/Tab_nav';
 import InvitationPage from './pages/InvitationPage';



function App() {
   return (
      
     <Drawer_nav/>
  
   );
 }

 export default App;


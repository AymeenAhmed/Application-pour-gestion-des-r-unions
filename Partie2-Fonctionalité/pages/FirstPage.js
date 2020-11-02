// React Native Navigation Drawer – Example using Latest Navigation Version //
// https://aboutreact.com/react-native-navigation-drawer //
import * as React from 'react';
import { Button, View, Text, SafeAreaView, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Search from '.././Components/Search';
import Liste_réunions from '.././Components/Liste_réunions';
import Tab_nav from '../Components/Tab_nav';
import CategoryScreen from '.././Components/CategoryScreen';
import Menu_Liste from '.././Components/Menu_liste';
import Exemple from '.././Components/Exemple';

const FirstPage = ({ navigation }) => {
    return (

        <SafeAreaView style={{ flex: 5 }}>  
          
            <View style={{ flex: 10 }}>    
                <View style={{ flex: 2 }}>
                    <View style={{  margin: 10 }}>
                        <Search />
                    </View>
                   
                    <ScrollView>
                        <Menu_Liste />
                        <Menu_Liste />
                        <Menu_Liste />
                        <Menu_Liste />
                        <Menu_Liste />
                        <Menu_Liste />
                        <Menu_Liste />
                        <Menu_Liste />
                    </ScrollView>
                </View>
                
                </View>
                
                <Tab_nav />
                
        </SafeAreaView>
        
        
    );
}

export default FirstPage;
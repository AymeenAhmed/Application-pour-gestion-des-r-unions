import React from 'react'
import { StyleSheet, View, TextInput, Button, Text, TouchableOpacity, Image } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

function Talent() {
    return null;
}

function Pilotage() {
    return null; }


function Quality() {
    return null;
}

const Tab = createBottomTabNavigator();

class Tab_nav extends React.Component {
    render() {
        return (
            <Tab.Navigator
            
                tabBarOptions={{
                    activeTintColor: '#ffe4c4',
                    inactiveTintColor: '#fff',

                    style: {
                        backgroundColor: '#48A5F3',
                    },
                }}
                initialRouteName="Pilotage"
            >
                <Tab.Screen name="Talent" component={Talent} options={{
                    tabBarLabel: 'Talent',
                    tabBarIcon: ({ color }) => (
                        <Image
                            source={require('.././img/hr.png')}
                            style={{ width: 35, height: 35, marginRight: 5 }}
                        />
                    ),
                }} />
                <Tab.Screen name="Quality" component={Quality} options={{
                    tabBarLabel: 'Quality',
                    tabBarIcon: ({ color }) => (
                        <Image
                            source={require('.././img/quality.png')}
                            style={{ width: 40, height: 40, marginRight: 5 }}
                        />
                    ),
                }} />
                <Tab.Screen name="Pilotage" component={Pilotage} options={{
                    tabBarLabel: 'Pilotage',
                     tabBarBadge: 3 ,
                    tabBarIcon: ({ color }) => (
                        <Image
                            source={require('.././img/settings.png')}
                            style={{ width: 29, height: 29, marginRight: 5 }}
                        />
                    ),
                }} />

            </Tab.Navigator>
        )
    }
}

export default Tab_nav
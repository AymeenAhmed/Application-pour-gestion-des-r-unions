// React Native Navigation Drawer – Example using Latest Navigation Version //
// https://aboutreact.com/react-native-navigation-drawer //
import 'react-native-gesture-handler';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Button, Container, Header, Left, Body, Right, Content, Accordion} from 'native-base';


import * as React from 'react';
import {  View, Text, TouchableOpacity, Image } from 'react-native';

import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem
} from '@react-navigation/drawer';

import FirstPage from '.././pages/FirstPage';
import SecondPage from '.././pages/SecondPage';
import ThirdPage from '.././pages/ThirdPage';
import AddPage from '.././pages/AddPage';
import Démarrer_AddPage from '.././pages/Démarrer_AddPage';
import Démarrer_PointPage from '.././pages/Démarrer_PointPage';
import InvitationPage from '.././pages/InvitationPage';
import Notification_Page from '.././pages/Notification_Page';
import FilterPage from '.././pages/FilterPage';
import PV_Détails from '.././pages/PV_Détails';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native-gesture-handler';
import Point_à_discuter_Page from '.././pages/Point_à_discuter_Page';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const dataArray = [
    { title: "Mes invitations (4)", content: "Réunions Test  15/05/2020  à 9h00\n\nRéunions Test  15/05/2020  à 9h00\n\nRéunions Test  15/05/2020  à 9h00\n\nRéunions Test  15/05/2020  à 9h00" }
];

const NavigationDrawerStructure = (props) => {
    //Structure for the navigatin Drawer
    const toggleDrawer = () => {
        //Props to open/close the drawer
        props.navigationProps.toggleDrawer();
    };

    return (


        <View style={{ flexDirection: 'row' }}>

            <TouchableOpacity onPress={() => toggleDrawer()}>

                {/*Donute Button Image */}
                <Image
                    source={{ uri: 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/drawerWhite.png' }}
                    style={{ width: 25, height: 25, marginLeft: 5 }}
                />


            </TouchableOpacity>
        </View>

    );
}
const Multi_image = (props) => {
    const navigation = useNavigation();
    return (
        
        <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity onPress={() => navigation.navigate('Notification_Page')}>
                <Image
                    source={require('.././img/notification.png')}
                    style={{ width: 35, height: 35, marginRight: 5 }}
                    options={{}}
                />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {alert("Welcome")}}>
                <Image
                    source={require('.././img/Avatar.png')}
                    style={{ width: 35, height: 35, marginRight: 5 }}
                />
            </TouchableOpacity>
        </View>
    );
}
const Go_Back_PV = (props) => {
    const navigation = useNavigation();
    return (

        <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity onPress={() => navigation.navigate('SecondPage')}>
                <Image
                    source={require('.././img/Back.png')}
                    style={{ width: 35, height: 35, marginRight: 0,marginLeft:0 }}
                    options={{}}
                />
            </TouchableOpacity>
        </View>
    );
}
const navigationRef = React.createRef();

function navigate(name) {
    navigationRef.current && navigationRef.current.navigate(name);
}
class AccordionCustomHeaderContentExample extends React.Component {
    _renderHeader() {
        return (
            <View
                style={{ flexDirection: "row", padding: 10, justifyContent: "space-between", alignItems: "center", backgroundColor: "#FFF" }}
            >
                <Text style={{ fontWeight: "600", textAlign: 'center', color: '#48A5F3', justifyContent: 'center', flex: 1 }}>
                    {"Mes invitations (4) "}
                </Text>
                
            </View>
            
        );
    }
    _renderContent() {
        return (
            <View>
                <View>
                    <Button transparent
                        onPress={() => navigate('InvitationPage')}
                    >
                        <Text style={{ marginLeft: 15, marginRight: 5, color: "#000" }}>
                            Réunions Test  15/05/2020  à 9h00
               </Text>
                    </Button>
                </View>
                <View>
                    <Button transparent
                        onPress={() => navigate('InvitationPage')}
                    >
                        <Text style={{ marginLeft: 15, marginRight: 5, color: "#000" }}>
                            Réunions Test  15/05/2020  à 9h00
               </Text>
                    </Button>
                </View>
               

            </View>


        );
    }
    render() {
        return (
            

                <Content padder>
                    <Accordion
                        dataArray={dataArray}
                        renderHeader={this._renderHeader}
                        renderContent={this._renderContent}
                    />
                </Content>
                
            
        );
    }
}

class Accordion_Réunions_de_la_Semaine extends React.Component {
    _renderHeader() {
        return (
            <View
                style={{ flexDirection: "row", padding: 10, justifyContent: "space-between", alignItems: "center", backgroundColor: "#FFF" }}
            >
                <Text style={{ fontWeight: "600", textAlign: 'center', justifyContent: 'center', flex: 1, color: '#48A5F3' }}>
                    {"Mes réunions de la semaine (2) "}
                </Text>

            </View>
        );
    }
    _renderContent() {
        return (
            <View>
                <View>
                    <Button transparent
                        onPress={() => navigate('InvitationPage')}
                    >
                        <Text style={{ marginLeft: 15, marginRight: 5, color: "#000" }}>
                            Réunions Test  15/05/2020  à 9h00
               </Text>
                    </Button>
                </View>
                <View>
                    <Button transparent
                        onPress={() => navigate('InvitationPage')}
                    >
                        <Text style={{ marginLeft: 15, marginRight: 5, color: "#000" }}>
                            Réunions Test  15/05/2020  à 9h00
               </Text>
                    </Button>
                </View>


            </View>


        );
    }
    render() {
        return (


            <Content padder>
                <Accordion
                    dataArray={dataArray}
                    renderHeader={this._renderHeader}
                    renderContent={this._renderContent}
                />
            </Content>


        );
    }
}

class Accordion_Mes_réunions_Confirmées extends React.Component {
    _renderHeader() {
        return (
            <View
                style={{ flexDirection: "row", padding: 10, justifyContent: "space-between", alignItems: "center", backgroundColor: "#FFF" }}
            >
                <Text style={{ fontWeight: "600", textAlign: 'center', justifyContent: 'center', flex: 1, color: '#48A5F3' }}>
                    {"Mes réunions confirmées (2) "}
                </Text>

            </View>
        );
    }
    _renderContent() {
        return (
            <View>
                <View>
                    <Button transparent
                        onPress={() => navigate('InvitationPage')}
                    >
                        <Text style={{ marginLeft: 15, marginRight: 5, color: "#000" }}>
                            Réunions Test  15/05/2020  à 9h00
               </Text>
                    </Button>
                </View>
                <View>
                    <Button transparent
                        onPress={() => navigate('InvitationPage')}
                    >
                        <Text style={{ marginLeft: 15, marginRight: 5, color: "#000" }}>
                            Réunions Test  15/05/2020  à 9h00
               </Text>
                    </Button>
                </View>


            </View>


        );
    }
    render() {
        return (


            <Content padder>
                <Accordion
                    dataArray={dataArray}
                    renderHeader={this._renderHeader}
                    renderContent={this._renderContent}
                />
            </Content>


        );
    }
}

class Accordion_Mes_réunions_Ignorées extends React.Component {
    _renderHeader() {
        return (
            <View
                style={{ flexDirection: "row", padding: 10, justifyContent: "space-between", alignItems: "center", backgroundColor: "#FFF" }}
            >
                <Text style={{ fontWeight: "600", textAlign: 'center', justifyContent: 'center', flex: 1, color: '#48A5F3' }}>
                    {"Mes réunions ignorées (2) "}
                </Text>

            </View>
        );
    }
    _renderContent() {
        return (
            <View>
                <View>
                    <Button transparent
                        onPress={() => navigate('InvitationPage')}
                    >
                        <Text style={{ marginLeft: 15, marginRight: 5, color: "#000" }}>
                            Réunions Test  15/05/2020  à 9h00
               </Text>
                    </Button>
                </View>
                <View>
                    <Button transparent
                        onPress={() => navigate('InvitationPage')}
                    >
                        <Text style={{ marginLeft: 15, marginRight: 5, color: "#000" }}>
                            Réunions Test  15/05/2020  à 9h00
               </Text>
                    </Button>
                </View>


            </View>


        );
    }
    render() {
        return (


            <Content padder>
                <Accordion
                    dataArray={dataArray}
                    renderHeader={this._renderHeader}
                    renderContent={this._renderContent}
                />
            </Content>


        );
    }
}

class Accordion_Mes_réunions_Annulées extends React.Component {
    _renderHeader() {
        return (
            <View
                style={{ flexDirection: "row", padding: 10, justifyContent: "space-between", alignItems: "center", backgroundColor: "#FFF" }}
            >
                <Text style={{ fontWeight: "600", textAlign: 'center', justifyContent: 'center', flex: 1, color: '#48A5F3' }}>
                    {"Mes réunions annulées (2) "}
                </Text>

            </View>
        );
    }
    _renderContent() {
        return (
            <View>
                <View>
                    <Button transparent
                        onPress={() => navigate('InvitationPage')}
                    >
                        <Text style={{ marginLeft: 15, marginRight: 5, color: "#000" }}>
                            Réunions Test  15/05/2020  à 9h00
               </Text>
                    </Button>
                </View>
                <View>
                    <Button transparent
                        onPress={() => navigate('InvitationPage')}
                    >
                        <Text style={{ marginLeft: 15, marginRight: 5, color: "#000" }}>
                            Réunions Test  15/05/2020  à 9h00
               </Text>
                    </Button>
                </View>


            </View>


        );
    }
    render() {
        return (


            <Content padder>
                <Accordion
                    dataArray={dataArray}
                    renderHeader={this._renderHeader}
                    renderContent={this._renderContent}
                />
            </Content>


        );
    }
}


function CustomDrawerContent(props){
    
    return (
        <DrawerContentScrollView {...props}>
            <DrawerItemList {...props}  />
           
            <Accordion_Réunions_de_la_Semaine />
            <AccordionCustomHeaderContentExample />
            <Accordion_Mes_réunions_Confirmées />
            <Accordion_Mes_réunions_Ignorées />
            <Accordion_Mes_réunions_Annulées />
            <Button transparent
                onPress={() => navigate('SecondPage')}
            >
                <Text style={{ marginLeft: 15, marginRight: 5, textAlign: 'center', justifyContent: 'center', flex: 1, color: '#48A5F3' }}>
                    PV réunions
               </Text>
            </Button>
        </DrawerContentScrollView>
    );
}
function firstScreenStack({ navigation }) {
    return (

        <Stack.Navigator initialRouteName="FirstPage">

            <Stack.Screen
                name="FirstPage"
                component={FirstPage}
                options={{
                    title: 'Liste Des Réunions', //Set Header Title
                    headerLeft: () => <NavigationDrawerStructure navigationProps={navigation} />,
                    headerRight: () => <Multi_image />,

                    headerStyle: {
                        backgroundColor: '#48A5F3', //Set Header color
                    },
                    headerTintColor: '#fff', //Set Header text color
                    headerTitleStyle: {
                        fontWeight: 'bold', //Set Header text style
                    },
                }}
            />
            <Stack.Screen
                name="Notification_Page"
                component={Notification_Page}
                options={{
                    title: 'Notification',
                     //Set Header Title
                    
                    headerRight: () => <Multi_image />,
                    headerStyle: {
                        backgroundColor: '#48A5F3', //Set Header color
                    },
                    headerTintColor: '#fff', //Set Header text color
                    headerTitleStyle: {
                        fontWeight: 'bold', //Set Header text style
                    },
                }} />
            <Stack.Screen
                name="AddPage"
                component={AddPage}
                options={{
                    title: '       Ajout réunion', //Set Header Title
                    headerRight: () => <Multi_image />,
                    headerStyle: {
                        backgroundColor: '#48A5F3', //Set Header color
                    },
                    headerTintColor: '#fff', //Set Header text color
                    headerTitleStyle: {
                        fontWeight: 'bold', //Set Header text style
                    },
                }} />
            <Stack.Screen
                name="Démarrer_AddPage"
                component={Démarrer_AddPage}
                options={{
                    title: '       Ajout réunion', //Set Header Title
                    headerRight: () => <Multi_image />,
                    headerStyle: {
                        backgroundColor: '#48A5F3', //Set Header color
                    },
                    headerTintColor: '#fff', //Set Header text color
                    headerTitleStyle: {
                        fontWeight: 'bold', //Set Header text style
                    },
                }} />
            <Stack.Screen
                name="Démarrer_PointPage"
                component={Démarrer_PointPage}
                options={{
                    title: '       Ajout réunion', //Set Header Title
                    headerRight: () => <Multi_image />,
                    headerStyle: {
                        backgroundColor: '#48A5F3', //Set Header color
                    },
                    headerTintColor: '#fff', //Set Header text color
                    headerTitleStyle: {
                        fontWeight: 'bold', //Set Header text style
                    },
                }} />
            <Stack.Screen
                name="FilterPage"
                component={FilterPage}
                options={{
                    title: '           Filter', //Set Header Title

                    headerRight: () => <Multi_image />,
                    headerStyle: {
                        backgroundColor: '#48A5F3', //Set Header color
                    },
                    headerTintColor: '#fff', //Set Header text color
                    headerTitleStyle: {
                        fontWeight: 'bold', //Set Header text style
                    },
                }} />
            <Stack.Screen
                name="InvitationPage"
                component={InvitationPage}
                options={{
                    title: '       Invitation',
                    //Set Header Title
                    headerRight: () => <Multi_image />,
                    headerStyle: {
                        backgroundColor: '#48A5F3', //Set Header color
                    },
                    headerTintColor: '#fff', //Set Header text color
                    headerTitleStyle: {
                        fontWeight: 'bold', //Set Header text style
                    },
                }} />
            <Stack.Screen
                name="PV_Détails"
                component={PV_Détails}
                options={{
                    title: '        PV Réunion', //Set Header Title

                    headerRight: () => <Multi_image />,
                    headerStyle: {
                        backgroundColor: '#48A5F3', //Set Header color
                    },
                    headerTintColor: '#fff', //Set Header text color
                    headerTitleStyle: {
                        fontWeight: 'bold', //Set Header text style
                    },
                }} />
            <Stack.Screen
                name="SecondPage"
                component={SecondPage}
                options={{
                    title: '       PV Réunion', //Set Header Title

                    headerRight: () => <Multi_image />,
                    headerStyle: {
                        backgroundColor: '#48A5F3', //Set Header color
                    },
                    headerTintColor: '#fff', //Set Header text color
                    headerTitleStyle: {
                        fontWeight: 'bold', //Set Header text style
                    },
                }} />
            <Stack.Screen
                name="Point_à_discuter_Page"
                component={Point_à_discuter_Page}
                options={{
                    title: '        Ajout réunion', //Set Header Title
                    headerRight: () => <Multi_image />,
                    headerStyle: {
                        backgroundColor: '#48A5F3', //Set Header color
                    },
                    headerTintColor: '#fff', //Set Header text color
                    headerTitleStyle: {
                        fontWeight: 'bold', //Set Header text style
                    },
                }} />
            
        </Stack.Navigator>
    );
}

function secondScreenStack({ navigation }) {
    return (
        <Stack.Navigator
            initialRouteName="SecondPage"
            screenOptions={{
                headerLeft: () => <NavigationDrawerStructure navigationProps={navigation} />,
                headerRight: () => <Multi_image />,
                headerStyle: {
                    backgroundColor: '#48A5F3', //Set Header color
                },
                headerTintColor: '#fff', //Set Header text color
                headerTitleStyle: {
                    fontWeight: 'bold', //Set Header text style
                }
            }}>
            <Stack.Screen
                name="SecondPage"
                component={SecondPage}
                options={{
                    title: '       PV Réunion', //Set Header Title
                    
                }} />
            <Stack.Screen
                name="PV_Détails"
                component={PV_Détails}
                options={{
                    title: '        PV Réunion', //Set Header Title

                }} />
            <Stack.Screen
                name="FirstdPage"
                component={FirstPage}
                options={{
                    title: '', //Set Header Title
                }} />
            <Stack.Screen
                name="ThirdPage"
                component={ThirdPage}
                options={{
                    title: '',
                     //Set Header Title
                }} />
            
            <Stack.Screen
                name="Notification_Page"
                component={Notification_Page}
                options={{
                    title: 'Notification',
                     //Set Header Title
                }} />
            <Stack.Screen
                name="InvitationPage"
                component={InvitationPage}
                options={{
                    title: '',
                    //Set Header Title
                }} />
            <Stack.Screen
                name="Point_à_discuter_Page"
                component={Point_à_discuter_Page}
                options={{
                    title: '        Ajout réunion', //Set Header Title

                }} />
        </Stack.Navigator>
    );
}

function thirdScreenStack({ navigation }) {
    return (
        
        <Stack.Navigator
            initialRouteName="ThirdPage"
            screenOptions={{
                headerLeft: () => <NavigationDrawerStructure navigationProps={navigation} />,
                headerRight: () => <Multi_image />,
                headerStyle: {
                    backgroundColor: '#48A5F3', //Set Header color
                },
                headerTintColor: '#fff', //Set Header text color
                headerTitleStyle: {
                    fontWeight: 'bold', //Set Header text style
                }
            }}>
            <Stack.Screen
                name="ThirdPage"
                component={ThirdPage}
                options={{
                    title: '', //Set Header Title

                }} />
            
            <Stack.Screen
                name="InvitationPage"
                component={InvitationPage}
                options={{
                    title: '',
                    //Set Header Title
                }} />
            <Stack.Screen
                name="Point_à_discuter_Page"
                component={Point_à_discuter_Page}
                options={{
                    title: '        Ajout réunion', //Set Header Title

                }} />
            <Stack.Screen
                name="Notification_Page"
                component={Notification_Page}
                options={{
                    title: 'Notification',
                    //Set Header Title
                }} />
            
        </Stack.Navigator>
    );
}
function InvitationScreenStack({ navigation }) {
    return (

        <Stack.Navigator
            initialRouteName="InvitationPage"
            screenOptions={{
                headerLeft: () => <NavigationDrawerStructure navigationProps={navigation} />,
                headerRight: () => <Multi_image />,
                headerStyle: {
                    backgroundColor: '#48A5F3', //Set Header color
                },
                headerTintColor: '#fff', //Set Header text color
                headerTitleStyle: {
                    fontWeight: 'bold', //Set Header text style
                }
            }}>
            <Stack.Screen
                name="InvitationPage"
                component={InvitationPage}
                options={{
                    title: '        Invitation',
                    //Set Header Title
                }} />
            <Stack.Screen
                name="SecondPage"
                component={SecondPage}
                options={{
                    title: '', //Set Header Title

                }} />
            <Stack.Screen
                name="Point_à_discuter_Page"
                component={Point_à_discuter_Page}
                options={{
                    title: '        Ajout réunion', //Set Header Title

                }} />
            <Stack.Screen
                name="ThirdPage"
                component={ThirdPage}
                options={{
                    title: '',
                    //Set Header Title
                }} />
            
            <Stack.Screen
                name="Notification_Page"
                component={Notification_Page}
                options={{
                    title: 'Notification',
                    //Set Header Title
                }} />
        </Stack.Navigator>
    );
}
function NotificationScreenStack({ navigation }) {
    return (
        <Stack.Navigator
            initialRouteName="Notification_Page"
            screenOptions={{
                headerLeft: () => <NavigationDrawerStructure navigationProps={navigation} />,
                headerRight: () => <Multi_image />,
                headerStyle: {
                    backgroundColor: '#48A5F3', //Set Header color
                },
                headerTintColor: '#fff', //Set Header text color
                headerTitleStyle: {
                    fontWeight: 'bold', //Set Header text style
                }
            }}>
            <Stack.Screen
                name="Notification_Page"
                component={Notification_Page}
                options={{
                    title: '        Notification', //Set Header Title

                }} />
            <Stack.Screen
                name="InvitationPage"
                component={InvitationPage}
                options={{
                    title: '        Invitation',
                    //Set Header Title
                }} />
            <Stack.Screen
                name="SecondPage"
                component={SecondPage}
                options={{
                    title: '', //Set Header Title

                }} />
            <Stack.Screen
                name="ThirdPage"
                component={ThirdPage}
                options={{
                    title: '', //Set Header Title
                }} />
            
            <Stack.Screen
                name="FirstdPage"
                component={FirstPage}
                options={{
                    title: '', //Set Header Title
                }} />

        </Stack.Navigator>
    );
}
function FilterScreenStack({ navigation }) {
    return (
        <Stack.Navigator
            initialRouteName="FilterPage"
            screenOptions={{
                headerLeft: () => <NavigationDrawerStructure navigationProps={navigation} />,
                headerRight: () => <Multi_image />,
                headerStyle: {
                    backgroundColor: '#48A5F3', //Set Header color
                },
                headerTintColor: '#fff', //Set Header text color
                headerTitleStyle: {
                    fontWeight: 'bold', //Set Header text style
                }
            }}>
            <Stack.Screen
                name="FilterPage"
                component={FilterPage}
                options={{
                    title: '        Filter', //Set Header Title

                }} />
            <Stack.Screen
                name="InvitationPage"
                component={InvitationPage}
                options={{
                    title: '        Invitation',
                    //Set Header Title
                }} />
            <Stack.Screen
                name="SecondPage"
                component={SecondPage}
                options={{
                    title: '', //Set Header Title

                }} />
            <Stack.Screen
                name="ThirdPage"
                component={ThirdPage}
                options={{
                    title: '', //Set Header Title
                }} />

            <Stack.Screen
                name="FirstdPage"
                component={FirstPage}
                options={{
                    title: '', //Set Header Title
                }} />

        </Stack.Navigator>
    );
}
function PointScreenStack({ navigation }) {
    return (
        <Stack.Navigator
            initialRouteName="Point_à_discuter_Page"
            screenOptions={{
                headerLeft: () => <NavigationDrawerStructure navigationProps={navigation} />,
                headerRight: () => <Multi_image />,
                headerStyle: {
                    backgroundColor: '#48A5F3', //Set Header color
                },
                headerTintColor: '#fff', //Set Header text color
                headerTitleStyle: {
                    fontWeight: 'bold', //Set Header text style
                }
            }}>
            <Stack.Screen
                name="Point_à_discuter_Page"
                component={Point_à_discuter_Page}
                options={{
                    title: '        Ajout réunion', //Set Header Title

                }} />
            <Stack.Screen
                name="InvitationPage"
                component={InvitationPage}
                options={{
                    title: '        Invitation',
                    //Set Header Title
                }} />
            <Stack.Screen
                name="SecondPage"
                component={SecondPage}
                options={{
                    title: '', //Set Header Title

                }} />
            <Stack.Screen
                name="ThirdPage"
                component={ThirdPage}
                options={{
                    title: '', //Set Header Title
                }} />

            <Stack.Screen
                name="FirstdPage"
                component={FirstPage}
                options={{
                    title: '', //Set Header Title
                }} />
            <Stack.Screen
                name="AddPage"
                component={AddPage}
                options={{
                    title: '       Ajout réunion', //Set Header Title

                }} />

        </Stack.Navigator>
    );
}
function AddScreenStack({ navigation }) {
    return (
        <Stack.Navigator
            initialRouteName="AddPage"
            screenOptions={{
                headerLeft: () => <NavigationDrawerStructure navigationProps={navigation} />,
                headerRight: () => <Multi_image />,
                headerStyle: {
                    backgroundColor: '#48A5F3', //Set Header color
                },
                headerTintColor: '#fff', //Set Header text color
                headerTitleStyle: {
                    fontWeight: 'bold', //Set Header text style
                }
            }}>
            <Stack.Screen
                name="AddPage"
                component={AddPage}
                options={{
                    title: '       Ajout réunion', //Set Header Title

                }} />
            <Stack.Screen
                name="Démarrer_PointPage"
                component={Démarrer_PointPage}
                options={{
                    title: '       Ajout réunion', //Set Header Title

                }} />
            <Stack.Screen
                name="Point_à_discuter_Pagee"
                component={Point_à_discuter_Page}
                options={{
                    title: '        Ajout réunion', //Set Header Title

                }} />
            <Stack.Screen
                name="InvitationPage"
                component={InvitationPage}
                options={{
                    title: '        Invitation',
                    //Set Header Title
                }} />
            <Stack.Screen
                name="SecondPage"
                component={SecondPage}
                options={{
                    title: '', //Set Header Title

                }} />
            <Stack.Screen
                name="ThirdPage"
                component={ThirdPage}
                options={{
                    title: '', //Set Header Title
                }} />

            <Stack.Screen
                name="FirstdPage"
                component={FirstPage}
                options={{
                    title: '', //Set Header Title
                }} />

        </Stack.Navigator>
    );
}
function Démarrer_AddScreenStack({ navigation }) {
    return (
        <Stack.Navigator
            initialRouteName="Démarrer_AddPage"
            screenOptions={{
                headerLeft: () => <NavigationDrawerStructure navigationProps={navigation} />,
                headerRight: () => <Multi_image />,
                headerStyle: {
                    backgroundColor: '#48A5F3', //Set Header color
                },
                headerTintColor: '#fff', //Set Header text color
                headerTitleStyle: {
                    fontWeight: 'bold', //Set Header text style
                }
            }}>
            <Stack.Screen
                name="Démarrer_AddPage"
                component={Démarrer_AddPage}
                options={{
                    title: '       Ajout réunion', //Set Header Title

                }} />
            <Stack.Screen
                name="Point_à_discuter_Pagee"
                component={Point_à_discuter_Page}
                options={{
                    title: '        Ajout réunion', //Set Header Title

                }} />
            <Stack.Screen
                name="InvitationPage"
                component={InvitationPage}
                options={{
                    title: '        Invitation',
                    //Set Header Title
                }} />
            <Stack.Screen
                name="SecondPage"
                component={SecondPage}
                options={{
                    title: '', //Set Header Title

                }} />
            <Stack.Screen
                name="ThirdPage"
                component={ThirdPage}
                options={{
                    title: '', //Set Header Title
                }} />
            <Stack.Screen
                name="Démarrer_PointPage"
                component={Démarrer_PointPage}
                options={{
                    title: '       Ajout réunion', //Set Header Title

                }} />
            <Stack.Screen
                name="FirstdPage"
                component={FirstPage}
                options={{
                    title: '', //Set Header Title
                }} />

        </Stack.Navigator>
    );
}
function Démarrer_PointScreenStack({ navigation }) {
    return (
        <Stack.Navigator
            initialRouteName="Démarrer_PointPage"
            screenOptions={{
                headerLeft: () => <NavigationDrawerStructure navigationProps={navigation} />,
                headerRight: () => <Multi_image />,
                headerStyle: {
                    backgroundColor: '#48A5F3', //Set Header color
                },
                headerTintColor: '#fff', //Set Header text color
                headerTitleStyle: {
                    fontWeight: 'bold', //Set Header text style
                }
            }}>
            <Stack.Screen
                name="Démarrer_PointPage"
                component={Démarrer_PointPage}
                options={{
                    title: '       Ajout réunion', //Set Header Title

                }} />
            <Stack.Screen
                name="Point_à_discuter_Pagee"
                component={Point_à_discuter_Page}
                options={{
                    title: '        Ajout réunion', //Set Header Title

                }} />
            <Stack.Screen
                name="InvitationPage"
                component={InvitationPage}
                options={{
                    title: '        Invitation',
                    //Set Header Title
                }} />
            <Stack.Screen
                name="SecondPage"
                component={SecondPage}
                options={{
                    title: '', //Set Header Title

                }} />
            <Stack.Screen
                name="ThirdPage"
                component={ThirdPage}
                options={{
                    title: '', //Set Header Title
                }} />

            <Stack.Screen
                name="FirstdPage"
                component={FirstPage}
                options={{
                    title: '', //Set Header Title
                }} />

        </Stack.Navigator>
    );
}
function PVScreenStack({ navigation }) {
    return (
        <Stack.Navigator
            initialRouteName="PV_Détails"
            screenOptions={{
                headerLeft: () => <NavigationDrawerStructure navigationProps={navigation} />,
                headerRight: () => <Multi_image />,
                headerStyle: {
                    backgroundColor: '#48A5F3', //Set Header color
                },
                headerTintColor: '#fff', //Set Header text color
                headerTitleStyle: {
                    fontWeight: 'bold', //Set Header text style
                }
            }}>


            <Stack.Screen
                name="SecondPage"
                component={SecondPage}
                options={{
                    title: '', //Set Header Title

                }} />
            <Stack.Screen
                name="PV_Détails"
                component={PV_Détails}
                options={{
                    title: '        PV Réunion', //Set Header Title

                }} />
            <Stack.Screen
                name="FirstdPage"
                component={FirstPage}
                options={{
                    title: '', //Set Header Title
                }} />
        </Stack.Navigator>
    );
}

class Drawer_nav extends React.Component {
    render() {
       
        return (
            <NavigationContainer ref={navigationRef}>
                
                <Drawer.Navigator
                    
                    drawerContent={props => <CustomDrawerContent {...props} />}>
                    <Drawer.Screen
                        name="FirstPage"

                        options={{ title: 'Gestion Des Réunions' }}
                        component={firstScreenStack} />
                    
                    
                    
                    

                </Drawer.Navigator>
                
            </NavigationContainer>
        )
    }
}

export default Drawer_nav
import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity } from 'react-native';
import Menu, {
    MenuProvider,
    MenuTrigger,
    MenuOptions,
    MenuOption,
    renderers,
} from 'react-native-popup-menu';
import { Button, Container, Header, Left, Body, Right, Content, Accordion } from 'native-base';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import Démarrer_AddPage from '.././pages/Démarrer_AddPage';

const dataArray = [
    { title: "Mes invitations (4)", content: "Réunions Test  15/05/2020  à 9h00\n\nRéunions Test  15/05/2020  à 9h00\n\nRéunions Test  15/05/2020  à 9h00\n\nRéunions Test  15/05/2020  à 9h00" }
];


const Nav_Modifier_function = (props) => {
    const navigation = useNavigation();
    return (

        <TouchableOpacity onPress={() => navigation.navigate('Démarrer_AddPage')}>
            <View style={{ flexDirection: "row" }}>
                <Image
                    source={require('.././img/modifier.png')}
                    style={{ width: 18, height: 18, marginLeft: 10, marginTop: 10 }}
                />
                <Text style={{ marginLeft: 25, marginTop: 7, fontSize: 18 }}>
                    Modifier
                                   </Text>
            </View>

        </TouchableOpacity>

    );
}
const Nav_Annuler_function = (props) => {
    const navigation = useNavigation();
    return (

        <TouchableOpacity onPress={() => navigation.navigate('Démarrer_AddPage')}>
            <View style={{ flexDirection: "row" }}>
                <Image
                    source={require('.././img/annuler.png')}
                    style={{ width: 18, height: 18, marginLeft: 10, marginTop: 10 }}
                />
                <Text style={{ marginLeft: 25, marginTop: 7, fontSize: 18 }}>
                    Annuler
                                   </Text>
            </View>

        </TouchableOpacity>

    );
}
const Nav_Archiver_function = (props) => {
    const navigation = useNavigation();
    return (

        <TouchableOpacity onPress={() => navigation.navigate('Démarrer_AddPage')}>
            <View style={{ flexDirection: "row" }}>
                <Image
                    source={require('.././img/Archiver.png')}
                    style={{ width: 18, height: 18, marginLeft: 10, marginTop: 10 }}
                />
                <Text style={{ marginLeft: 25, marginTop: 7, fontSize: 18 }}>
                    Archiver
                                   </Text>
            </View>

        </TouchableOpacity>

    );
}
const Nav_Reporter_function = (props) => {
    const navigation = useNavigation();
    return (

        <TouchableOpacity onPress={() => navigation.navigate('Démarrer_AddPage')}>
            <View style={{ flexDirection: "row" }}>
                <Image
                    source={require('.././img/reporter.png')}
                    style={{ width: 18, height: 18, marginLeft: 10, marginTop: 10 }}
                />
                <Text style={{ marginLeft: 25, marginTop: 7, fontSize: 18 }}>
                    Reporter
                                   </Text>
            </View>

        </TouchableOpacity>

    );
}
const Nav_Supprimer_function = (props) => {
    const navigation = useNavigation();
    return (

        <TouchableOpacity onPress={() => navigation.navigate('Démarrer_AddPage')}>
            <View style={{ flexDirection: "row" }}>
                <Image
                    source={require('.././img/Supprimer.png')}
                    style={{ width: 18, height: 18, marginLeft: 10, marginTop: 10 }}
                />
                <Text style={{ marginLeft: 25, marginTop: 7, fontSize: 18 }}>
                    Supprimer
                                   </Text>
            </View>

        </TouchableOpacity>

    );
}


let unique = 0;
const { SlideInMenu } = renderers;

class Accordion_réunion_Liste extends React.Component {
    _renderHeader() {
        return (
            <View style={{ flex: 1,marginTop:10,marginVertical:5 }}>
                <View style={{ flexDirection: "row", padding: 0, backgroundColor: "#F2F2F2" }}>
                    <View>
                        <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#fe9700' }}>IN 20 min</Text>
                        <Text>04/09/2020 à 11h</Text>
                    </View>
                    <View>
                        <Text style={{ marginLeft: 25, fontSize: 17, margin: 2, fontWeight: 'bold' }}>
                            Réunion de la semaine
                        </Text>
                        <View style={{ flexDirection: "row" }}>
                            <Text style={{ marginLeft: 25, fontSize: 14 }}>
                                Salle S5
                                </Text>
                            <Text style={{ marginLeft: 29, fontSize: 14 }}>
                                ID : 123456789
                                </Text>
                        </View>
                    </View>


                </View>
            </View>

        );
    }
    _renderContent() {
        return (
            <View style={{ flex: 1, marginTop: 10,marginVertical:10}}>
            <View style={{flex:1,flexDirection:"row"}}>
                    <Left style={{ flex: 1, justifyContent: "center", alignItems: 'center' }}>
                        <Text style={{ marginLeft: 10, fontSize: 16 ,flex:1}}>
                            Réunion :
                    </Text>
            </Left>
                    <Right style={{ flex: 1, justifyContent: "center", alignItems: 'center'}}>
                        <Text style={{ marginLeft: 10, fontSize: 16, flex: 1 }}>
                            CODIR
                    </Text>
                    </Right>
                    
            </View>
                <View style={{ flex: 1, flexDirection: "row", marginTop: 2 }}>
                    <Left style={{ flex: 1, justifyContent: "center", alignItems: 'center' }}>
                        <Text style={{ marginLeft: 10, fontSize: 16, flex: 1 }}>
                            Titre réunion :
                    </Text>
                </Left>
                    <Right style={{ flex: 1, justifyContent: "center", alignItems: 'center' }}>
                        <Text style={{ marginLeft: 10, fontSize: 16, flex: 1 }}>
                            Test
                    </Text>
                   </Right>
                    
                </View>
                <View style={{ flex: 1, flexDirection: "row", marginTop: 2 }}>
                    <Left style={{ flex: 1, justifyContent: "center", alignItems: 'center' }}>
                        <Text style={{ marginLeft: 10, fontSize: 16, flex: 1 }}>
                            Date Prévue :
                    </Text>
                </Left>
                    <Right style={{ flex: 1, justifyContent: "center", alignItems: 'center' }}>
                        <Text style={{ marginLeft: 10, fontSize: 16, flex: 1 }}>
                            17/07/2020
                    </Text>
                   </Right>
                    
                </View>
                <View style={{ flex: 1, flexDirection: "row", marginTop: 2 }}>
                    <Left style={{ flex: 1, justifyContent: "center", alignItems: 'center' }}>
                        <Text style={{ marginLeft: 10, fontSize: 16, flex: 1 }}>
                            Heure Prévue :
                    </Text>
                </Left>
                    <Right style={{ flex: 1, justifyContent: "center", alignItems: 'center' }}>
                        <Text style={{ marginLeft: 10, fontSize: 16, flex: 1 }}>
                            09:00
                    </Text>
                    </Right>
                    
                </View>
                <View style={{ flex: 1, flexDirection: "row", marginTop: 2}}>
                    <Left style={{ flex: 1, justifyContent: "center", alignItems: 'center' }}>
                        <Text style={{ marginLeft: 10, fontSize: 16, flex: 1 }}>
                            Etat :
                    </Text>
                </Left>
                    <Right style={{ flex: 1, justifyContent: "center", alignItems: 'center' }}>
                        <Text style={{ marginLeft: 10, fontSize: 16, flex: 1 }}>
                            Planifier
                    </Text>
                    </Right>
                    
                </View>
                <View style={{ flex: 1, flexDirection: "row", marginTop: 2}}>
                    <Left style={{ flex: 1, justifyContent: "center", alignItems: 'center' }}>
                        <Text style={{ marginLeft: 10, fontSize: 16, flex: 1 }}>
                            Date Création :
                    </Text>
                </Left>
                    <Right style={{ flex: 1, justifyContent: "center", alignItems: 'center' }}>
                        <Text style={{ marginLeft: 10, fontSize: 16, flex: 1 }}>
                            11/07/2020
                    </Text>
                   </Right>
                   
                </View>
                <View style={{ flex: 1, flexDirection: "row", marginTop: 2 }}>
                    <Left style={{ flex: 1, justifyContent: "center", alignItems: 'center' }}>
                        <Text style={{ marginLeft: 10, fontSize: 16 ,flex:1}} >
                            Créateur :
                    </Text>
                </Left>
                    <Right style={{ flex: 1, justifyContent: "center", alignItems: 'center' }}>
                        <Text style={{ marginLeft: 10, fontSize: 16, flex: 1 }}>
                            Khalil
                    </Text>
                   </Right>
                   
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


export default class Menu_Liste extends Component {

    constructor(props, ctx) {
        super(props, ctx);
        this.state = { log: [] };
    }

   

    render() {
        return (
            <MenuProvider style={{ flex: 1 }}>
                <View style={styles.container}>

                    <View style={styles.topbar}>

<Accordion_réunion_Liste/>
                        <Menu name="types"

                        >
                            <MenuTrigger
                                >
                                <View style={{flex:1}}>
                                    <Image
                                        source={require('.././img/dots.png')}
                                        style={{ width: 25, height: 35, marginLeft: -10,marginTop:25 }}
                                    />
                                </View>
                            </MenuTrigger>
                            <MenuOptions style={{margin:10}} >
                            
                            <View style={{flex:1}}>
                            <ScrollView>
                                        <Nav_Modifier_function/>
                                        <Nav_Reporter_function/>
                                        <Nav_Annuler_function/>
                                        <Nav_Archiver_function/>
                                        <Nav_Supprimer_function/>
                            </ScrollView>
                            </View>

                                    
                            
                               


                            </MenuOptions>
                        </Menu>
                    </View>

                    

                </View>
            </MenuProvider>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#F2F2F2',
    },
    topbar: {
        flexDirection: 'row',
        backgroundColor: '#F2F2F2',
        
        flex: 1,
    },
    trigger: {
        marginTop:25,
    },
    triggerText: {
        color: 'white',
    },
    disabled: {
        color: '#ccc',
    },
    divider: {
        marginVertical: 5,
        marginHorizontal: 2,
        borderBottomWidth: 1,
        borderColor: '#ccc',
    },
    logView: {
        flex: 1,
        flexDirection: 'column',
    },
    logItem: {
        flexDirection: 'row',
        padding: 8,
    },
    slideInOption: {
        padding: 5,
    },
    text: {
        fontSize: 18,
    },
});
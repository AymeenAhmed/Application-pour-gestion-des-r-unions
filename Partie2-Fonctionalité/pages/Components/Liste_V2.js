import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, Alert, YellowBox, Image } from "react-native";
import { Menu, MenuProvider, MenuOptions, MenuOption, MenuTrigger } from "react-native-popup-menu";

export default class Liste_V2 extends Component {

    constructor(props) {
        super(props);
        YellowBox.ignoreWarnings([
            'Warning: isMounted(...) is deprecated', 'Module RCTImageLoader'
        ]);
    }

    render() {
        return (
            <MenuProvider style={{ flexDirection: "column", padding: 5 }}>
                <Menu onSelect={value => alert(`You Clicked : ${value}`)} style={{ backgroundColor: '#F2F2F2'}}>

                    <MenuTrigger style={{ }}  >
                        <View style={{ flexDirection: "row", padding: 5, backgroundColor: "#F2F2F2"}}>
                            <View>
                                <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#fe9700' }}>IN 20 min</Text>
                                <Text>04/09/2020 à 11h</Text>
                            </View>
                            <View>
                                <Text style={{ marginLeft: 25, fontSize: 17, margin: 2, fontWeight: 'bold' }}>
                                    Réunion de la semaine
                        </Text>
                                <View style={{ flexDirection: "row"}}>
                                    <Text style={{ marginLeft: 25, fontSize: 14 }}>
                                        Salle S5
                                </Text>
                                    <Text style={{ marginLeft: 29, fontSize: 14 }}>
                                        ID : 123456789
                                </Text>
                                </View>
                            </View>
                            <View>
                                    <Image
                                        source={require('.././img/dots.png')}
                                        style={{ width: 25, height: 25, margin: 13 }}
                                    />
                            </View>
                            
                        </View>
                    </MenuTrigger  >

                    <MenuOptions style={{ flex: 1, backgroundColor:"#F2F2F2"}}>
                    
                        <MenuOption value={"Modifier"}>
                            <Text style={styles.menuContent}>Modifier</Text>
                        </MenuOption>
                        <MenuOption value={"Reporter"}>
                            <Text style={styles.menuContent}>Reporter</Text>
                        </MenuOption>
                        <MenuOption value={"Annuler"}>
                            <Text style={styles.menuContent}>Annuler</Text>
                        </MenuOption>
                        <MenuOption value={"Archiver"}>
                        
                            <Text style={styles.menuContent}>Archiver</Text>
                            
                        </MenuOption>
                        <MenuOption value={"Supprimer"}>
                            <Text style={styles.menuContent}>Supprimer</Text>
                        </MenuOption>
                        
                    </MenuOptions>
                </Menu>
            </MenuProvider>
        );
    }
}

const styles = StyleSheet.create({
    headerText: {
        fontSize: 14,
        margin: 5,
       
       
    },
    menuContent: {
        color: "#000",
        marginLeft:40,
        fontSize: 14
    }
});
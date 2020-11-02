// React Native Navigation Drawer – Example using Latest Navigation Version //
// https://aboutreact.com/react-native-navigation-drawer //
import * as React from 'react';
import {  View, Text, SafeAreaView, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Container, Header, Left, Body, Right,Button } from 'native-base';
import Tab_nav from '../Components/Tab_nav';


const FilterPage = ({ navigation }) => {
    return (

        <SafeAreaView style={{ flex: 5}}>
           
                <View style={{ flex: 10 }}>
                 <ScrollView style={{ flex: 1 }}>
                    <View style={{ flex: 5 }}>
                    <View style={{ flex: 1, backgroundColor: "#FFF" }}>
                        <View style={{ flexDirection: "row", flex: 0.3, backgroundColor: "#F2F2F2" }}>
                            <Text style={{ fontSize: 18, marginLeft: 10, marginRight: 20, fontWeight: 'bold', marginTop: 5, marginEnd: 5 }}>
                                Filter Par
                        </Text>
                        </View>
                        <View style={{ flex: 1 }}>
                            <View style={{ flex: 1, marginLeft: 25, marginTop: 10 }}>
                                <Text style={{ fontSize: 18 }}>
                                    Titre Réunion
                            </Text>
                            </View>
                            <View style={{ flex: 1, marginTop: 20, marginLeft: 10 }}>
                                <TextInput style={{ borderWidth: 1, height: 37, marginLeft: 5, width: 330 }}>

                                </TextInput>
                            </View>
                        </View>

                        <View style={{ flex: 1, backgroundColor: "#F2F2F2", marginTop: 20 }}>
                            <Text>

                            </Text>
                        </View>
                        <View style={{ flex: 1 }}>
                            <View style={{ flex: 1, marginLeft: 25, marginTop: 10 }}>
                                <Text style={{ fontSize: 18 }}>
                                    Date Création
                            </Text>
                            </View>
                            <View style={{ flex: 1, flexDirection: 'row', marginTop: 20 }}>
                                <View style={{ flex: 1, marginLeft: 15, marginTop: 5 }}>
                                    <Text style={{ fontSize: 16, color: "#48A5F3" }}>
                                        Début
                          </Text>
                                </View>
                                <View style={{ flex: 1, marginLeft: -25 }}>
                                    <TextInput style={{ height: 37, marginLeft: 5, width: 80, borderWidth: 1 }} >

                                    </TextInput>
                                </View>
                                <View style={{ flex: 1, marginLeft: 50, marginTop: 5 }}>
                                    <Text style={{ fontSize: 16, color: "#48A5F3" }}>
                                        Fin
                                </Text>
                                </View>
                                <View style={{ flex: 1 }}>
                                    <TextInput style={{ height: 37, marginLeft: 5, width: 80, borderWidth: 1, marginLeft: -35 }} >

                                    </TextInput>
                                </View>

                            </View>
                        </View>
                        <View style={{ flex: 1, backgroundColor: "#F2F2F2", marginTop: 20, marginEnd: 10 }}>
                            <Text>

                            </Text>
                        </View>
                        <View style={{ flex: 1 }}>
                            <View style={{ flex: 1, marginLeft: 25, marginTop: 10 }}>
                                <Text style={{ fontSize: 18 }}>
                                    Date Réunion
                            </Text>
                            </View>
                            <View style={{ flex: 1, flexDirection: 'row', marginTop: 20 }}>
                                <View style={{ flex: 1, marginLeft: 15, marginTop: 5 }}>
                                    <Text style={{ fontSize: 16, color: "#48A5F3" }}>
                                        Début
                          </Text>
                                </View>
                                <View style={{ flex: 1, marginLeft: -25 }}>
                                    <TextInput style={{ height: 37, marginLeft: 5, width: 80, borderWidth: 1 }}>

                                    </TextInput>
                                </View>
                                <View style={{ flex: 1, marginLeft: 50, marginTop: 5 }}>
                                    <Text style={{ fontSize: 16, color: "#48A5F3" }}>
                                        Fin
                                </Text>
                                </View>
                                <View style={{ flex: 1 }}>
                                    <TextInput style={{ height: 37, marginLeft: 5, width: 80, borderWidth: 1, marginLeft: -35 }} >

                                    </TextInput>
                                </View>

                            </View>
                        </View>
                            <View style={{ flex: 1, backgroundColor: "#F2F2F2", marginTop: 20, marginEnd: 10 }}>
                                <Text>

                                </Text>
                            </View>
                    </View>
                    <View style={{ flex: 1, marginLeft: 30, marginTop: 20, marginRight: 30 }}>
                        <Button
                            block
                            transparent
                            bordered
                            style={{ borderColor: "#48A5F3", borderWidth: 1 }}
                            onPress={() => { alert("Appliquer les filters") }}
                        >
                            <Text style={{ color: "#48A5F3", fontSize: 18 }}>
                                Appliquer les filters
</Text>
                        </Button>
                    </View>
                    </View>
                </ScrollView>

            </View>


            
            <Tab_nav />

        </SafeAreaView>


    );
}

export default FilterPage;
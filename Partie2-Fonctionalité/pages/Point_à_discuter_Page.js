// React Native Navigation Drawer – Example using Latest Navigation Version //
// https://aboutreact.com/react-native-navigation-drawer //
import * as React from 'react';
import { View, Text, SafeAreaView, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Container, Header, Left, Body, Right, Button } from 'native-base';
import Tab_nav from '../Components/Tab_nav';
import Picker_Type from '.././Components/Picker_Type';
import Picker_Employé from '.././Components/Picker_Employé';
const Point_à_discuter_Page = ({ navigation }) => {
    return (

        <SafeAreaView style={{ flex: 1 }}>

            <View style={{ flex: 9 }}>
                <ScrollView style={{ flex: 1 }}>
                    <View style={{ flex: 1, marginTop: 10 }}>
                        <Text style={{ marginLeft: 20, flex: 1, fontWeight: 'bold' }}>
                            Titre du point
    </Text>
                        <View style={{ flex: 1, marginLeft: 10, marginTop: 10 }}>
                            <TextInput style={{ borderWidth: 1, height: 40, marginLeft: 5, width: 330 }}>

                            </TextInput>
                        </View>
                    </View>

                    <View style={{ flex: 1, marginTop: 10 }}>
                        <Text style={{ marginLeft: 20, flex: 1, fontWeight: 'bold' }}>
                            Animateur
    </Text>
                        <View style={{ flex: 1, marginLeft: 0, marginTop: 10 }}>
                           <Picker_Employé/>
                        </View>
                    </View>

                    <View style={{ flex: 1, marginTop: 10 }}>
                        <View style={{ flex: 1, flexDirection:"row"}}>
                            <Text style={{ marginLeft: 20, fontWeight: 'bold' }}>
                                Piece jointe
    </Text>
                            <TouchableOpacity onPress={() =>{alert("ajouter une piece jointe")}}>
                                <Image
                                    source={require('.././img/PJ.png')}
                                    style={{ width: 17, height: 17, marginLeft: 15, marginTop: 2  }}
                                    options={{}}
                                />
                                </TouchableOpacity>
                    </View>
                        
                        <View style={{ flex: 1, marginLeft: 10, marginTop: 10 }}>
                            <Text style={{ borderWidth: 1, height: 60, marginLeft: 5, width: 330 }}>

                            </Text>
                        </View>
                    </View>
                    <View style={{ flex: 1, flexDirection: 'row', marginTop: 10 }}>
                        <View style={{ flex: 1, marginTop: 20 }}>
                            <Text style={{ marginLeft: 20, flex: 1, fontWeight: 'bold' }}>
                                Heure Deb Prévue
    </Text>
                            <View style={{ flex: 1, marginLeft: 10, marginTop: 10 }}>
                                <TextInput style={{ borderWidth: 1, height: 40, marginLeft: 5, width: 140 }} keyboardType='decimal-pad' placeholder=' HH:MM'>

                                </TextInput>
                            </View>
                        </View>
                        <View style={{ flex: 1, marginTop: 20 }}>
                            <Text style={{ marginLeft: 30, flex: 1, fontWeight: 'bold' }}>
                                Heure Fin Prévue
    </Text>
                            <View style={{ flex: 1, marginLeft: 20, marginTop: 10 }}>
                                <TextInput style={{ borderWidth: 1, height: 40, marginLeft: 5, width: 140 }} keyboardType='decimal-pad' placeholder=' HH:MM'>

                                </TextInput>
                            </View>
                        </View>
                    </View>
                    <View style={{ flexDirection: "row", flex: 1, marginTop: 60 }}>
                        <Left style={{ margin: 20, marginRight: 30 }}>
                            <Button block
                                iconLeft
                                backgroundColor="#F3F3F2"
                                onPress={() => { alert("Annuler") }}>
                                <Image
                                    source={require('.././img/No.png')}
                                    style={{ width: 20, height: 20, marginRight: 10 }}
                                />
                                <Text style={{ color: "#48A5F3", fontSize: 14, fontWeight: 'bold' }}>Annuler</Text>
                            </Button>
                        </Left>
                        <Right style={{ margin: 20, marginLeft: 30 }}>
                            <Button block
                                iconRight
                                backgroundColor="#f3f3f3"
                                onPress={() => { alert("Enregistrer") }}

                            >

                                <Text style={{ color: "#48A5F3", fontSize: 14, fontWeight: 'bold' }}>Enregistrer</Text>
                                <Image
                                    source={require('.././img/Yes.png')}
                                    style={{ width: 20, height: 20, marginLeft: 10 }}
                                />
                            </Button>
                        </Right>





                    </View>
                    
                </ScrollView>

            </View>
            <Tab_nav />
        </SafeAreaView>

    );
}

export default Point_à_discuter_Page;
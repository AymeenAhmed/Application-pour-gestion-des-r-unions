import React from 'react'
import { StyleSheet, View, TextInput, Text, TouchableOpacity, Image, ScrollView, SafeAreaView } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { Container, Header, Left, Body, Right, Button } from 'native-base';
import Picker_Type from './Picker_Type';


class Démarrer_Plan extends React.Component {

    render() {

        return (
            <SafeAreaView style={{ flex: 1 }}>

                <View style={{ flex: 1 }}>
                    <ScrollView style={{ flex: 1 }}>
                        <View style={{ flex: 1, marginTop: 10 }}>
                            <Text style={{ marginLeft: 20, flex: 1, fontWeight: 'bold' }}>
                                Date Prévue
    </Text>
                            <View style={{ flex: 1, marginLeft: 10, marginTop: 10 }}>
                                <TextInput style={{ borderWidth: 1, height: 40, marginLeft: 5, width: 330 }}>

                                </TextInput>
                            </View>
                        </View>

                        <View style={{ flex: 1, marginTop: 10 }}>
                            <Text style={{ marginLeft: 20, flex: 1, fontWeight: 'bold' }}>
                                Durée Prévue
    </Text>
                            <View style={{ flex: 1, marginLeft: 10, marginTop: 10 }}>
                                <TextInput style={{ borderWidth: 1, height: 40, marginLeft: 5, width: 330 }}>

                                </TextInput>
                            </View>
                        </View>

                        <View style={{ flex: 1, marginTop: 10 }}>
                            <Text style={{ marginLeft: 20, flex: 1, fontWeight: 'bold' }}>
                                Lieu
    </Text>
                            <View style={{ flex: 1, marginLeft: 10, marginTop: 10 }}>
                                <TextInput style={{ borderWidth: 1, height: 40, marginLeft: 5, width: 330 }}>

                                </TextInput>
                            </View>
                        </View>
                        <View style={{ flex: 1, flexDirection: 'row', marginTop: 10 }}>
                            <View style={{ flex: 1, marginTop: 20 }}>
                                <Text style={{ marginLeft: 20, flex: 1, fontWeight: 'bold' }}>
                                    Heure Deb Prévue
    </Text>
                                <View style={{ flex: 1, marginLeft: 10, marginTop: 10 }}>
                                    <TextInput style={{ borderWidth: 1, height: 40, marginLeft: 5, width: 140 }} keyboardType='decimal-pad' >

                                    </TextInput>
                                </View>
                            </View>
                            <View style={{ flex: 1, marginTop: 20 }}>
                                <Text style={{ marginLeft: 30, flex: 1, fontWeight: 'bold' }}>
                                    Heure Fin Prévue
    </Text>
                                <View style={{ flex: 1, marginLeft: 20, marginTop: 10 }}>
                                    <TextInput style={{ borderWidth: 1, height: 40, marginLeft: 5, width: 140 }} keyboardType='decimal-pad'>

                                    </TextInput>
                                </View>
                            </View>
                        </View>
                        <View style={{ flexDirection: "row", flex: 1, marginTop: 42 }}>
                            <Left style={{ margin: 10, marginRight: 5 }}>
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

                            <View style={{ flex: 1, marginTop: 10, marginRight: 10, marginLeft: 10 }}>
                                <Button block
                                    iconLeft
                                    backgroundColor="#F3F3F2"
                                    onPress={() => { alert("Démarrer") }}>

                                    <Text style={{ color: "#48A5F3", fontSize: 14, fontWeight: 'bold' }}>Démarrer</Text>
                                </Button>
                            </View>

                            <Right style={{ margin: 10, marginLeft: 5 }}>
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
            </SafeAreaView>
        )
    }
}

export default Démarrer_Plan
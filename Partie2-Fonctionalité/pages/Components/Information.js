import React from 'react'
import { StyleSheet, View, TextInput, Text, TouchableOpacity, Image, ScrollView, SafeAreaView } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { Container, Header, Left, Body, Right, Button } from 'native-base';
import Picker_Type from './Picker_Type';
import Picker_Employé from './Picker_Employé';

class Information extends React.Component {

    render() {

        return (
            <SafeAreaView style={{ flex: 1 }}>

                <View style={{ flex: 1 }}>
                    <ScrollView style={{ flex: 1 }}>
                        <View style={{ flex: 1, marginTop: 10 }}>
                            <Text style={{ marginLeft: 20, flex: 1, fontWeight: 'bold' }}>
                                Titre de réunions
    </Text>
                            <View style={{ flex: 1, marginLeft: 10, marginTop: 10}}>
                                <TextInput style={{ borderWidth: 1, height: 40, marginLeft: 5, width: 330 }}>

                                </TextInput>
                            </View>
                        </View>
                        <View style={{ flex: 1, marginTop: 20 }}>
                            <Text style={{ marginLeft: 20, flex: 1, fontWeight: 'bold' }}>
                                Type
    </Text>
                            <View style={{ flex: 1 }} >
                                <Picker_Type />
                            </View>

                        </View>
                        <View style={{ flex: 1, marginTop: 20 }}>
                            <Text style={{ marginLeft: 20, fontWeight: 'bold' }}>
                                Resp.PV
    </Text>
                            <View style={{ flex: 1 }} >
                                <Picker_Employé/>
                            </View>

                        </View>
                        <View style={{ flex: 1, marginTop: 20 }}>
                            <Text style={{ marginLeft: 20, fontWeight: 'bold' }}>
                                Etat
    </Text>
                            <View style={{ flex: 1, marginLeft: 20}} >
                                <Text style={{ fontWeight: "bold", color: "#800080", marginTop: 10, marginLeft: 36}}>
                                   En Cours
                               </Text>
                            </View>

                        </View>
                        <View style={{ flex: 1, marginTop: 20 }}>
                            <Text style={{ marginLeft: 20, fontWeight: 'bold' }}>
                                Resp.Verif
    </Text>
                            <View style={{ flex: 1 }} >
                                <Picker_Employé />
                            </View>

                        </View>
                        <View style={{ flex: 1, marginTop: 20 }}>
                            <Text style={{ marginLeft: 20, fontWeight: 'bold'}}>
                                Animateur
    </Text>
                            <View style={{ flex: 1 }} >
                                <Picker_Employé />
                            </View>

                        </View>
                        <View style={{ flex: 1, flexDirection: 'row', marginTop: 30 }}>
                            <Text style={{ marginLeft: 20, marginTop: 10, color: "gray" }}>
                                Piece jointes
    </Text>
                            <View style={{ flex: 0.9, marginLeft: 80 }} >
                                <Button block
                                    iconRight
                                    backgroundColor="#f3f3f3"
                                    bordered
                                    style={{ borderColor: "#48A5F3", borderWidth: 1 }}
                                    onPress={() => { alert("Ajouter une piece jointe") }}

                                >

                                    <Text style={{ color: "#48A5F3", fontSize: 14, fontWeight: 'bold' }}>Liste</Text>

                                </Button>

                            </View>

                        </View>
                        <View style={{ flex: 1 }}>
                            <Text style={{ marginLeft: 20, marginTop: 20, fontWeight: 'bold' }}>
                                Commentaires
    </Text>
                            <View style={{ flex: 1, marginLeft: 10 }}>
                                <TextInput style={{ borderWidth: 1, height: 60, marginLeft: 5, width: 330, marginTop: 10 }}>

                                </TextInput>
                            </View>

                        </View>
</ScrollView>
                    <View style={{ flexDirection: "row", flex: 0.15, marginTop: 20 }}>
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
           </View>
            </SafeAreaView>
                  

                
           

        )
    }
}

export default Information
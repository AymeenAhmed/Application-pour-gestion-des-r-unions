
import React, { useState } from "react";
import { CheckBox, Text, StyleSheet, View, TextInput, SafeAreaView,ScrollView,Image } from "react-native";
import Invitation_Liste from './Invitation_Liste';
import { Container, Header, Left, Body, Right, Button } from 'native-base';

class Invitations extends React.Component {

    render() {

        return (
            <SafeAreaView style={{ flex: 1 }}>

                <View style={{ flex: 1 }}>
                    <ScrollView style={{ flex: 1 }}>
                        <View style={{ flex: 1 }}>
                            <View style={{ flex: 1, flexDirection: "row", marginTop: 5  }}>
                                
                                <View style={{ marginLeft: 5, marginTop: 5 }}>
                                    <Text style={{ color: "#48A5F3", fontSize: 17, marginLeft: 30 }}>
                                        Employé
    </Text>
                                    <View style={{ flex: 1 }}>
                                        <TextInput style={{ borderWidth: 1, height: 40, marginLeft: 20, width: 90, marginTop: 10 }} >

                                        </TextInput>
                                    </View>
                                </View>
                             
                                <View style={{ marginLeft: 5, marginTop: 3 }}>
                                    <Text style={{ color: "#48A5F3", fontSize: 17, marginLeft: 35}}>
                                        Groupe
    </Text>
                                    <View style={{ flex: 1 }}>
                                        <TextInput style={{ borderWidth: 1, height: 40, marginLeft: 20, width: 90, marginTop: 10 }} >

                                        </TextInput>
                                    </View>
                                </View>
                                
                                <View style={{ marginLeft: 5, marginTop: 3 }}>
                                    <Text style={{ color: "#48A5F3", fontSize: 17, marginLeft: 45}}>
                                        Mail
    </Text>
                                    <View style={{ flex: 1 }}>
                                        <TextInput style={{ borderWidth: 1, height: 40, marginLeft: 20, width: 90, marginTop: 10 }} >

                                        </TextInput>
                                    </View>
                                </View>
                            </View>
                           
                            <View style={{ flex: 1}}>
<Invitation_Liste/>
                                <Invitation_Liste />
                                <Invitation_Liste />
                                <Invitation_Liste />
                            </View>
                        </View>
                    </ScrollView>
                    <View style={{ flexDirection: "row", flex: 0.2, marginTop: 20 }}>
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


export default Invitations
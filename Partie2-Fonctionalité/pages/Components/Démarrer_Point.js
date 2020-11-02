import React from 'react'
import { StyleSheet, View, TextInput, Text, TouchableOpacity, Image, SafeAreaView, ScrollView } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import Liste_Point_à_discuter from './Liste_Point_à_discuter';
import { Container, Header, Left, Body, Right, Button } from 'native-base';
import Point_à_discuter_Page from '.././pages/Point_à_discuter_Page';

const Nav_Add_function = (props) => {
    const navigation = useNavigation();
    return (

        <TouchableOpacity onPress={() => navigation.navigate('Point_à_discuter_Page')}>
            <Image
                source={require('.././img/add.png')}
                style={{ width: 20, height: 20, marginLeft: 20, marginTop: 5 }}
            />
        </TouchableOpacity>

    );
}

class Démarrer_Point extends React.Component {

    render() {

        return (
            <SafeAreaView style={{ flex: 1, backgroundColor: "#F2F2F2" }}>

                <View style={{ flex: 1 }}>
                    <View style={{ flex: 0.11, backgroundColor: "#FFF" }}>
                        <Right>
                            <View style={{ flexDirection: "row", marginTop: 2, flex: 1, marginLeft: 290 }}>

                                <Nav_Add_function />
                            </View>
                        </Right>


                    </View>
                    <ScrollView style={{ flex: 1 }}>

                        <View style={{ flex: 7, marginLeft: 5 }}>

                            <Liste_Point_à_discuter />
                            <View style={{ flex: 0.1, backgroundColor: "#FFF" }}>
                                <Text>

                                </Text>
                            </View>
                            <Liste_Point_à_discuter />
                            <View style={{ flex: 0.1, backgroundColor: "#FFF" }}>
                                <Text>

                                </Text>
                            </View>
                            <Liste_Point_à_discuter />
                            <View style={{ flex: 0.1, backgroundColor: "#FFF" }}>
                                <Text>

                                </Text>
                            </View>
                            <Liste_Point_à_discuter />
                            <View style={{ flex: 0.1, backgroundColor: "#FFF" }}>
                                <Text>

                                </Text>
                            </View>
                            <Liste_Point_à_discuter />
                            <View style={{ flex: 0.1, backgroundColor: "#FFF" }}>
                                <Text>

                                </Text>
                            </View>
                            <Liste_Point_à_discuter />
                            <View style={{ flex: 0.1, backgroundColor: "#FFF" }}>
                                <Text>

                                </Text>
                            </View>
                            <Liste_Point_à_discuter />
                            <View style={{ flex: 0.1, backgroundColor: "#FFF" }}>
                                <Text>

                                </Text>
                            </View>
                        </View>
                    </ScrollView>
                    <View style={{ flexDirection: "row", flex: 0.2, marginTop: 5, backgroundColor: "#F2F2F2" }}>
                        <Left style={{ margin: 10, marginRight: 5 }}>
                            <Button block
                                iconLeft
                                backgroundColor="#FFF"
                                onPress={() => { alert("Annuler") }}>
                                <Image
                                    source={require('.././img/No.png')}
                                    style={{ width: 20, height: 20, marginRight: 10 }}
                                />
                                <Text style={{ color: "#48A5F3", fontSize: 14, fontWeight: 'bold' }}>Annuler</Text>
                            </Button>
                        </Left>
                        <View style={{ flex: 1, marginTop: 11, marginRight: 10, marginLeft: 10 }}>
                            <Button block
                                iconLeft
                                backgroundColor="#FFF"
                                onPress={() => { alert("Démarrer") }}>

                                <Text style={{ color: "#48A5F3", fontSize: 14, fontWeight: 'bold' }}>Démarrer</Text>
                            </Button>
                        </View>
                        <Right style={{ margin: 10, marginLeft: 5 }}>
                            <Button block
                                iconRight
                                backgroundColor="#fFF"
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

export default Démarrer_Point
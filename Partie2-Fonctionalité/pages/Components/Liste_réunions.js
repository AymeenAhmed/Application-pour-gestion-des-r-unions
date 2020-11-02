import React from 'react'
import { StyleSheet, View, TextInput, Button, Text, TouchableOpacity, Image } from 'react-native'
import CategoryScreen from './CategoryScreen';
import { Picker } from "native-base";


class Liste_réunions extends React.Component {
    
    render() {
        return (
            <TouchableOpacity longPress={() => { alert("Options") }}>
                <View style={{ flexDirection: "row", padding: 5, backgroundColor: '#F2F2F2', position: "absolute"}}>
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
                
                <View>
                
                        <TouchableOpacity onPress={() => { }}>

                            <Image
                                source={require('.././img/dots.png')}
                                style={{ width: 25, height: 25, margin: 13 }}
                            />
                        </TouchableOpacity>
                        
                </View>
                
                    
            </View>
            <View style={{height:50}}>
                    <CategoryScreen />
            </View>
            
            </TouchableOpacity>
        )
    }
}

export default Liste_réunions
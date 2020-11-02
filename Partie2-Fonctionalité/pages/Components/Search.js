import React from 'react'
import { StyleSheet, View, TextInput, Button, Text, TouchableOpacity, Image } from 'react-native'
import {  useNavigation } from '@react-navigation/native';

const Nav_function = (props) => {
    const navigation = useNavigation();
    return (
        
        <TouchableOpacity onPress={() => navigation.navigate('FilterPage')}>
                <Image
                    source={require('.././img/filter.png')}
                    style={{ width: 20, height: 20, marginLeft: 20 }}
                />
            </TouchableOpacity>
        
    );
}
const Nav_Add_function = (props) => {
    const navigation = useNavigation();
    return (

        <TouchableOpacity onPress={() => navigation.navigate('AddPage')}>
            <Image
                source={require('.././img/add.png')}
                style={{ width: 20, height: 20, marginLeft: 20 }}
            />
        </TouchableOpacity>

    );
}
class Search extends React.Component {
    
    render() {
        
        return (
            <View style={{ flexDirection: "row" }}>
                <TouchableOpacity onPress={() => { alert("Not Found") }}>
                    <Image
                        source={require('.././img/search.png')}
                        style={{ width: 20, height: 20, marginRight: 5 }}
                    />
                </TouchableOpacity>
                <TextInput style={{ height: 37, marginLeft: 5, width: 230 }} placeholder='Recherche'>
                </TextInput>
               <Nav_Add_function/>  
                <Nav_function/>
                
            </View>
        )
    }
}

export default Search
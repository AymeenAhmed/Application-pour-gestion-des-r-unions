// React Native Navigation Drawer – Example using Latest Navigation Version //
// https://aboutreact.com/react-native-navigation-drawer //
import * as React from 'react';
import { View, Text, SafeAreaView, Button, ScrollView, Image } from 'react-native';
import Search from '.././Components/Search';
import Liste_réunions from '.././Components/Liste_réunions';
import Tab_nav from '../Components/Tab_nav';
import CategoryScreen from '.././Components/CategoryScreen';
import {  Container, Header, Left, Body, Right, Content } from 'native-base';
const Invitation = (props) => {
    
    return (
        
        <View style={{ flex: 1, flexDirection: "row", margin: 3 ,backgroundColor:"#F2F2F2"}}>
            <Image
                source={require('.././img/khalil.png')}
                style={{ width: 65, height: 75, marginRight: 5 }}
            />
            <View style={{ flex: 1 }}>
                <Text style={{ fontSize: 18 }}>Khalil vous a envoyé une invitation.</Text>
                <Text>Il y a un jour</Text>
                <View style={{ flexDirection: "row", margin: 5 }}>
                    <View style={{ padding: 10 }}>
                        <Button
                            onPress={() => { }}
                            title="Confirmer"

                        />
                    </View>
                    <View style={{ padding: 10 }}>
                        <Button
                            onPress={() => { }}
                            title="Supprimer"
                            color="#b22222"
                        />
                    </View>

                </View>




            </View>

        </View>
        
    );
}

const Notification_Page = ({ navigation }) => {
    return (
        
        <SafeAreaView style={{ flex: 10 }}>
            
        <ScrollView >
            <Invitation/>
            <Invitation />
            <Invitation />
        </ScrollView>
       
            <Tab_nav />
        </SafeAreaView>
    );
}

export default Notification_Page;
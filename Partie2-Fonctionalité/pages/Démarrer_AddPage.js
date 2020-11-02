import React, { Component } from 'react';
import { Container, Header, Tab, Tabs, ScrollableTab } from 'native-base';
import Démarrer_Info from '.././Components/Démarrer_Info';
import Démarrer_Plan from '.././Components/Démarrer_Plan';
import Démarrer_Invit from '.././Components/Démarrer_Invit';
import Démarrer_Point from '.././Components/Démarrer_Point';
import Tab_nav from '../Components/Tab_nav';
import { View, Text, SafeAreaView, Button, ScrollView, Image } from 'react-native';

class TabsScrollableExample extends Component {
    render() {
        return (
            <Container>

                <Tabs renderTabBar={() => <ScrollableTab />}>

                    <Tab heading="Information"
                        tabStyle={{ backgroundColor: "#fff" }}
                        activeTabStyle={{ backgroundColor: "#fff" }}
                        textStyle={{ color: '#000' }}
                        activeTextStyle={{ color: "#48A5F3" }}
                    >
                        <Démarrer_Info />
                    </Tab>
                    <Tab heading="Planification "
                        tabStyle={{ backgroundColor: "#fff" }}
                        activeTabStyle={{ backgroundColor: "#fff" }}
                        textStyle={{ color: '#000' }}
                        activeTextStyle={{ color: "#48A5F3" }}
                    >
                        <Démarrer_Plan />
                    </Tab>
                    <Tab heading="Invitations"
                        tabStyle={{ backgroundColor: "#fff" }}
                        activeTabStyle={{ backgroundColor: "#fff" }}
                        textStyle={{ color: '#000' }}
                        activeTextStyle={{ color: "#48A5F3" }}
                    >
                        <Démarrer_Invit />
                    </Tab>
                    <Tab heading="Point à discuter"
                        tabStyle={{ backgroundColor: "#fff" }}
                        activeTabStyle={{ backgroundColor: "#fff" }}
                        textStyle={{ color: '#000' }}
                        activeTextStyle={{ color: "#48A5F3" }}
                    >
                        <Démarrer_Point />
                    </Tab>

                </Tabs>
            </Container>
        );
    }
}
const Démarrer_AddPage = ({ navigation }) => {
    return (

        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 10 }}>
                <View style={{ flex: 10 }}>
                    <TabsScrollableExample />
                </View>

            </View>
            <Tab_nav />
        </SafeAreaView>
    );
}
export default Démarrer_AddPage;
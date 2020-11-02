import React, { Component } from 'react';
import { Container, Header, Tab, Tabs, ScrollableTab } from 'native-base';
import Information from '.././Components/Information';
import Planification from '.././Components/Planification';
import Invitations from '.././Components/Invitations';
import Point_à_discuter from '.././Components/Point_à_discuter';
import Tab_nav from '../Components/Tab_nav';
import { View, Text, SafeAreaView, Button, ScrollView, Image } from 'react-native';

class TabsScrollableExample extends Component {
    render() {
        return (
            <Container>
                
                <Tabs renderTabBar={() => <ScrollableTab />}>
                
                    <Tab heading="Information" 
                        tabStyle={{ backgroundColor: "#fff" }} 
                        activeTabStyle={{ backgroundColor:"#fff"}}
                        textStyle={{ color:'#000'}}
                        activeTextStyle={{ color:"#48A5F3"}}
                    >
                        <Information />
                    </Tab>
                    <Tab heading="Planification "
                        tabStyle={{ backgroundColor: "#fff" }}
                        activeTabStyle={{ backgroundColor: "#fff" }}
                        textStyle={{ color: '#000' }}
                        activeTextStyle={{ color: "#48A5F3" }}
                     >
                        <Planification />
                    </Tab>
                    <Tab heading="Invitations"
                        tabStyle={{ backgroundColor: "#fff" }}
                        activeTabStyle={{ backgroundColor: "#fff" }}
                        textStyle={{ color: '#000' }}
                        activeTextStyle={{ color: "#48A5F3" }}
                     >
                        <Invitations />
                    </Tab>
                    <Tab heading="Point à discuter"
                        tabStyle={{ backgroundColor: "#fff" }}
                        activeTabStyle={{ backgroundColor: "#fff" }}
                        textStyle={{ color: '#000' }}
                        activeTextStyle={{ color: "#48A5F3" }}
                     >
                        <Point_à_discuter />
                    </Tab>

                </Tabs>
            </Container>
        );
    }
}
const AddPage = ({ navigation }) => {
    return (

        <SafeAreaView style={{ flex: 1}}>
            <View style={{ flex: 10}}>
                <View style={{ flex: 10 }}>
           <TabsScrollableExample />
           </View>
                
            </View>
            <Tab_nav />
        </SafeAreaView>
    );
}
export default AddPage;
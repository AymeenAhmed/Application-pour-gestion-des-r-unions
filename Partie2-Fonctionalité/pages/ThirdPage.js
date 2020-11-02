import React, { Component } from "react";
import { Container, Header, Content, Accordion, View, Text, Icon,Button } from "native-base";
import { TouchableOpacity, Image } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
const dataArray = [
    { title: "First Element", content: "Lorem ipsum dolor sit amet" }
];

export default class AccordionCustomHeaderContentExample extends Component {
    _renderHeader() {
        return (
            <View
                style={{ flexDirection: "row", padding: 10, justifyContent: "space-between", alignItems: "center", backgroundColor: "#FFF" }}
            >
                <Text style={{ fontWeight: "600" }}>
                    {"Mes invitations (4) "}
                </Text>
                
            </View>
        );
    }
    _renderContent() {
        return (
            <View>
                <View>
                    <Button transparent
                        onPress={() => navigate('InvitationPage')}
                    >
                        <Text style={{ marginLeft: 15, marginRight: 5, color: "#000" }}>
                            Réunions Test  15/05/2020  à 9h00
               </Text>
                    </Button>
                </View>
                <View>
                    <Button transparent
                        onPress={() => navigate('InvitationPage')}
                    >
                        <Text style={{ marginLeft: 15, marginRight: 5, color: "#000"}}>
                            Réunions Test  15/05/2020  à 9h00
               </Text>
                    </Button>
                </View>
                <View>
                    <Button transparent
                        onPress={() => navigate('InvitationPage')}
                    >
                        <Text style={{ marginLeft: 15, marginRight: 5, color: "#000" }}>
                            Réunions Test  15/05/2020  à 9h00
               </Text>
                    </Button>
                </View>
                <View>
                    <Button transparent
                        onPress={() => navigate('InvitationPage')}
                        
                    >
                        <Text style={{ marginLeft: 15, marginRight: 5,color:"#000" }}>
                            Réunions Test  15/05/2020  à 9h00
               </Text>
                    </Button>
                </View>
               
            </View>
            
            
        );
    }
    render() {
        return (
            <Container>
                
                <Content padder>
                    <Accordion
                        dataArray={dataArray}
                        renderHeader={this._renderHeader}
                        renderContent={this._renderContent}
                    />
                </Content>
            </Container>
        );
    }
}

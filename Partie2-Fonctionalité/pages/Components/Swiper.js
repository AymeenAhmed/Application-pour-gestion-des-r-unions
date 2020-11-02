import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Header, View, DeckSwiper, Card, CardItem, Thumbnail, Text, Left, Body, Icon, Right } from 'native-base';
const cards = [
    {
        heur_debit: ' De 9h00',
        heur_fin:'à 9h10',
        name: 'Test 1 point à discuter',
        animateur:'Animée par Khalil B.H    '
    },
    {
        heur_debit: ' De 9h10',
        heur_fin: 'à 9h20',
        name: 'Test 2 point à discuter',
        animateur: 'Animée par Maram AMRI'
       
    },
    {
        heur_debit: ' De 9h20',
        heur_fin: 'à 9h30',
        name: 'Test 3 point à discuter',
        animateur: 'Animée par Bilel Karray'},
        
];
export default class Swiper extends Component {
    render() {
        return (
            <Container>
                <View>
                    <DeckSwiper
                        dataSource={cards}
                        renderItem={item =>
                            <Card style={{ elevation: 3 }}>
                                <CardItem>
                                    <Left>
                                      
                                        <Body>
                                            <Text style={{ color: "#f44336", fontSize: 16 }}>{item.heur_debit}</Text>
                                            <Text style={{ color: "#f44336", fontSize: 16 }}>{item.heur_fin}</Text>
                                            
                                        </Body>
                                    </Left>
                                    <Right style={{marginLeft:-18}}>         
                                        <Text style={{ fontSize: 15, fontWeight: 'bold' }}>{item.name}</Text>
                                            <Text note>{item.animateur}</Text>
                                       
                                    </Right>
                                </CardItem>
                                
                                
                            </Card>
                        }
                    />
                </View>
            </Container>
        );
    }
}
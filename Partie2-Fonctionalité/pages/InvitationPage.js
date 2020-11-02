// React Native Navigation Drawer – Example using Latest Navigation Version //
// https://aboutreact.com/react-native-navigation-drawer //
import * as React from 'react';
import { View, Text, SafeAreaView, ScrollView, Image } from 'react-native';
import Search from '.././Components/Search';
import Liste_réunions from '.././Components/Liste_réunions';
import Tab_nav from '../Components/Tab_nav';
import { Left, Right, Icon, Button} from 'native-base';
import Swiper from '../Components/Swiper';
const InvitationPage = ({ navigation }) => {
    return (
        <SafeAreaView style={{ flex: 1}}>
            <View style={{flex:7,backgroundColor:"#F2F2F2"}}>
              <View style={{flexDirection:"row",flex:1,marginTop:10}}>
              <Left>
                        <Text style={{ fontSize: 18, fontWeight: 'bold', margin: 5, marginLeft: 20}}>Titre de Réunions</Text>
              </Left>
             <Right>
                        <Text style={{ margin: 9 }}>Réunions de la semaine</Text>
             </Right>

              </View> 
              
                <View style={{ flexDirection: "row" }}>
                    <Left>
                        <Text style={{ fontSize: 16, margin: 5, marginLeft: 20, fontWeight: 'bold', marginTop: 5 }}>Date et Heure Prévue</Text>
                    </Left>
                    <Right>
                        <Text style={{ margin: 9, marginLeft: 25, marginRight: 20, marginTop: 20 }}>Vendredi 24/07/2020 à 09:00</Text>
                    </Right>
                    
                </View> 
                
                <View style={{ flexDirection: "row", marginTop: -10  }}>
                    <Left>
                        <Text style={{ fontSize: 18, margin: 5, marginLeft: 20, fontWeight: 'bold' }}>Type</Text>
                    </Left>
                    <Right>
                        <Text style={{ margin: 9, marginLeft: 25, marginRight: 20 }}>CODIR</Text>
                    </Right>
                   
                </View> 
                <View style={{ flexDirection: "row" }}>
                <Left>
                        <Text style={{ fontSize: 18, margin: 5, marginLeft: 20, fontWeight: 'bold' }}>Lieu Prévue</Text>
                </Left>
                   <Right>
                        <Text style={{ margin: 9, marginLeft: 25, marginRight: 20 }}>Salle de reunion</Text>
                   </Right>

                    
                </View> 
                <View style={{ flexDirection: "row" }}>
                <Left>
                        <Text style={{ fontSize: 18, margin: 5, marginLeft: 20, fontWeight: 'bold' }}>Durée Prévue</Text>
                </Left>
                    <Right>
                        <Text style={{ margin: 9, marginLeft: 25, marginRight: 20 }}>01:00</Text>
                    </Right>
                    
                </View> 
                <View style={{ flexDirection: "row" }}>
                <Left>
                        <Text style={{ fontSize: 18, margin: 5, marginLeft: 20, fontWeight: 'bold' }}>Etat Réunion</Text>
                </Left>
                   <Right>
                        <Text style={{ margin: 9, marginLeft: 25, marginRight: 20 }}>En cours</Text>
                   </Right>
                    
                </View> 
                
                <View style={{ flexDirection: "row" }}>
                <Left>
                        <Text style={{ fontSize: 18, margin: 5, marginLeft: 20, fontWeight: 'bold' }}>Animateur</Text>
                </Left>
                   <Right>
                        <Text style={{ margin: 9, marginLeft: 25, marginRight: 20 }}>Moufid Karray</Text>
                   </Right>
                   
                </View> 
            </View>
            
            <View style={{ backgroundColor:'#d3d3d3', flex:0.5}}>
            <Left>
                    <Text style={{ fontWeight: 'bold'}}>Planning</Text>
            </Left>
                    
</View>
            <View style={{flex: 2.1, backgroundColor: "#F2F2F2"}}>
                <Swiper />
    
</View>
            <SafeAreaView style={{ flex: 4.5, backgroundColor:"#d3d3d3"}}>  
                   <View style={{flex:1}}>
                          <Left> 
                        <View style={{ marginLeft: 30, marginRight: 30, marginTop: 15, flexDirection: "row" }}>
                            <Left style={{marginRight:20}}>
                                <Button block backgroundColor="#48A5F3" onPress={() => { alert("Accepter")}}>
                                    <Text style={{ color: '#F2F2F2', fontWeight: 'bold' }}>Accepter</Text>
                                </Button>
                               
                            </Left>
                            <Right style={{marginLeft:20}}>
                                <Button block backgroundColor="#fe9700" onPress={() => { alert("Retard")}}>
                                    <Text style={{ color: '#F2F2F2', fontWeight: 'bold' }}>Retard</Text>
                                </Button>
                            </Right>
                            
                           

                        </View>
</Left>
   <Right>
                        <View style={{ marginRight: 30, marginLeft: 30, marginTop: 15, flexDirection: "row"}}>
                            <Left style={{ marginRight: 20 }}>
                                <Button block backgroundColor="#fe9700" onPress={() => { alert("Décliner") }}>
                                    <Text style={{ color: '#F2F2F2', fontWeight: 'bold' }}>Décliner</Text>
                                </Button>
                            </Left>
                            <Right style={{ marginLeft: 20 }}>
                                <Button block backgroundColor="#fe9700" onPress={() => { alert("Intérim")}}>
                                    <Text style={{ color: "#F2F2F2", fontWeight: 'bold' }}>Intérim</Text>
                                </Button>
                            </Right>

                           </View>
                             </Right>
                
                    </View>
                <View style={{ flexDirection: "row", flex: 0.4}}>
                    <Left style={{ marginLeft: 15, marginRight: 40, marginTop:20 }}>
                        <Button block
                            iconLeft
                         backgroundColor="#F3F3F2" 
                            onPress={() => { alert("Annuler") }}>
                            <Image
                                source={require('.././img/No.png')}
                                style={{ width: 20, height: 20, marginRight: 10 }}
                            />
                            <Text style={{ color: "#48A5F3", fontSize: 14, fontWeight: 'bold'}}>Annuler</Text>
                        </Button>
                </Left>
                    <Right style={{ marginRight: 15, marginLeft: 40, marginTop: 20 }}>
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
            </SafeAreaView>
            <Tab_nav />     
        </SafeAreaView>
    );
}

export default InvitationPage;
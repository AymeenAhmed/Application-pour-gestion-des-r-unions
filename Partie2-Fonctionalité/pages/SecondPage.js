// React Native Navigation Drawer – Example using Latest Navigation Version //
// https://aboutreact.com/react-native-navigation-drawer //
import * as React from 'react';
import { View, Text, SafeAreaView,ScrollView,Image } from 'react-native';
import Search from '.././Components/Search';
import Liste_réunions from '.././Components/Liste_réunions';
import Tab_nav from '../Components/Tab_nav';

import CategoryScreen from '.././Components/CategoryScreen';
import { Left, Right, Icon, Button,Body } from 'native-base';
const SecondPage = ({ navigation }) => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 1 }}>
                <View style={{ flexDirection: "row", backgroundColor:"#E3E3E3",flex:1}}>
                    <Text style={{ fontSize: 18, marginLeft: 10, marginRight: 20, fontWeight: 'bold', marginTop: 5, marginEnd: 5}}>
    Titre de la Réunion
</Text>
                    <Text style={{ fontSize: 18, marginRight: 10, color: "#48A5F3",  marginTop: 5, marginEnd: 5, marginLeft: 10}}>
    Réunion de la Semaine
</Text>
                </View>
            </View>
            <View style={{ flex: 1, flexDirection: "row", marginTop: 5, marginEnd: 5, backgroundColor: "#fff"}}>
<Text style={{fontSize:16,fontWeight:'bold',marginLeft:10,marginRight:10}}>
    Réf
</Text>
                <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#48A5F3', marginLeft: 10, marginRight: 10}}>
    001451
</Text>
                <Text style={{ fontSize: 16, fontWeight: 'bold', marginLeft: 20, marginRight: 10 }}>
    Révision
</Text>
                <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#48A5F3', marginLeft: 10, marginRight: 10}}>
    01
</Text>
                <Text style={{ fontSize: 16, fontWeight: 'bold', marginLeft: 30, marginRight: 10 }}>
    Page
</Text>
                <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#48A5F3', marginLeft: 10, marginRight: 10}}>
    1/1
</Text>
            </View>
            <View style={{ flex: 1, flexDirection: "row", backgroundColor: "#fff"}}>
                <Text style={{ fontSize: 16, fontWeight: 'bold', marginLeft: 10, marginRight: 10 }}>
    Date programmée
</Text>
                <Text style={{ fontSize: 16,  color: '#48A5F3', marginLeft: 10, marginRight: 10 }}>
    11/1/2020
</Text>
                <Text style={{ fontSize: 16,  color: '#48A5F3' }}>
    De 9h00 à 10h00
</Text>
            </View>
            <View style={{ flex: 1, flexDirection: "row", backgroundColor: "#fff" }}>
                <Text style={{ fontSize: 16, fontWeight: 'bold', marginLeft: 10, marginRight: 5}}>
                    Date de réalisation
</Text>
                <Text style={{ fontSize: 16,  color: '#48A5F3', marginLeft: 5, marginRight:6}}>
                    12/2/2020
</Text>
                <Text style={{ fontSize: 16,  color: '#48A5F3' }}>
                    De 9h00 à 10h00
</Text>
            </View>
            <View style={{ flex: 1, flexDirection: "row", backgroundColor: "#fff"}}>
                <Text style={{ fontSize: 16, fontWeight: 'bold', marginLeft: 10, marginRight: 25}}>
                    Lieu du réunion
</Text>
                <Text style={{ fontSize: 16,  color: '#48A5F3', marginLeft: 10, marginRight: 10 }}>
                    Salle de  Réunion 1
</Text>
                
            </View>
            <View style={{ flex: 1, flexDirection: "row", backgroundColor: "#fff" }}>
                <Text style={{ fontSize: 16, fontWeight: 'bold', marginLeft: 10, marginRight: 25 }}>
                    Responsable PV
</Text>
                <Text style={{ fontSize: 16,  color: '#48A5F3', marginLeft: 10, marginRight: 10 }}>
                    Khalil Ben Halima
</Text>
                
            </View>
            <View style={{ flex: 1, flexDirection: "row", backgroundColor: "#fff"}}>
                <Text style={{ fontSize: 16, fontWeight: 'bold', marginLeft: 10, marginRight: 58 }}>
                    Animateur
</Text>
                <Text style={{ fontSize: 16,  color: '#48A5F3', marginLeft: 10, marginRight: 10 }}>
                    Bilel Karray
</Text>
<View style={{marginLeft:20,marginTop:-5}}>
                    <Button small
                     backgroundColor="#E3E3E3"
                     iconRight
                        onPress={() => { navigation.navigate('PV_Détails') }}
                    >
                        <Text>  Détails</Text>
                        <Image
                            source={require('.././img/Détails.png')}
                            style={{ width: 20, height: 20, marginLeft: 10 }}
                        />
                        <Text> </Text>
                    </Button>
</View>
                
            </View>
            <View style={{  flex: 4 }}>
                <View style={{ flexDirection: 'row', flex: 0.2, backgroundColor: "#E3E3E3"}}>
                    <Text style={{ fontSize: 14, fontWeight: 'bold', marginLeft: 10, marginRight: 20 }}>
    Invités
</Text>
                    <Text style={{ fontSize: 14, fontWeight: 'bold', marginLeft: 10, marginRight: 5 }}>
                        Présence
</Text>
                    <Text style={{ fontSize: 14, fontWeight: 'bold', marginLeft: 10, marginRight: 5}}>
                       H.entrée
</Text>
                    <Text style={{ fontSize: 14, fontWeight: 'bold', marginLeft: 10, marginRight: 5 }}>
                        H.sortie
</Text>
                    <Text style={{ fontSize: 14, fontWeight: 'bold', marginLeft: 10, marginRight: 5 }}>
                        Prévenir
</Text>
                </View>
                <ScrollView style={{flex:1}}>
                    <View style={{ flexDirection: 'row', flex: 1, backgroundColor: "#fff" }}>
                        <Text style={{ fontSize: 16, marginLeft: 5, marginRight: 25 }}>
                            Khalil B.H
</Text>
                        <Text style={{ fontSize: 16, marginLeft: 10, marginRight: 40 }}>
                            P
</Text>
                        <Text style={{ fontSize: 16, marginLeft: 10, marginRight: 25 }}>
                            9h01
</Text>
                        <Text style={{ fontSize: 16, marginLeft: 10, marginRight: 20 }}>
                            10h00
</Text>
                        <Text style={{ fontSize: 16, marginLeft: 10, marginRight: 5 }}>
                            Non
</Text>
                    </View>
                    <View style={{ flexDirection: 'row', flex: 1, backgroundColor: "#f0f8ff" }}>
                        <Text style={{ fontSize: 16, marginLeft: 5, marginRight: 25 }}>
                            Khalil B.H
</Text>
                        <Text style={{ fontSize: 16, marginLeft: 10, marginRight: 40 }}>
                            P
</Text>
                        <Text style={{ fontSize: 16, marginLeft: 10, marginRight: 25 }}>
                            9h01
</Text>
                        <Text style={{ fontSize: 16, marginLeft: 10, marginRight: 20 }}>
                            10h00
</Text>
                        <Text style={{ fontSize: 16, marginLeft: 10, marginRight: 5 }}>
                            Non
</Text>
                    </View>
                    <View style={{ flexDirection: 'row', flex: 1, backgroundColor: "#fff" }}>
                        <Text style={{ fontSize: 16, marginLeft: 5, marginRight: 25 }}>
                            Khalil B.H
</Text>
                        <Text style={{ fontSize: 16, marginLeft: 10, marginRight: 40 }}>
                            P
</Text>
                        <Text style={{ fontSize: 16, marginLeft: 10, marginRight: 25 }}>
                            9h01
</Text>
                        <Text style={{ fontSize: 16, marginLeft: 10, marginRight: 20 }}>
                            10h00
</Text>
                        <Text style={{ fontSize: 16, marginLeft: 10, marginRight: 5 }}>
                            Non
</Text>
                    </View>
                    <View style={{ flexDirection: 'row', flex: 1, backgroundColor: "#f0f8ff" }}>
                        <Text style={{ fontSize: 16, marginLeft: 5, marginRight: 25 }}>
                            Khalil B.H
</Text>
                        <Text style={{ fontSize: 16, marginLeft: 10, marginRight: 40 }}>
                            P
</Text>
                        <Text style={{ fontSize: 16, marginLeft: 10, marginRight: 25 }}>
                            9h01
</Text>
                        <Text style={{ fontSize: 16, marginLeft: 10, marginRight: 20 }}>
                            10h00
</Text>
                        <Text style={{ fontSize: 16, marginLeft: 10, marginRight: 5 }}>
                            Non
</Text>
                    </View>
                    <View style={{ flexDirection: 'row', flex: 1, backgroundColor: "#fff" }}>
                        <Text style={{ fontSize: 16, marginLeft: 5, marginRight: 25 }}>
                            Khalil B.H
</Text>
                        <Text style={{ fontSize: 16, marginLeft: 10, marginRight: 40 }}>
                            P
</Text>
                        <Text style={{ fontSize: 16, marginLeft: 10, marginRight: 25 }}>
                            9h01
</Text>
                        <Text style={{ fontSize: 16, marginLeft: 10, marginRight: 20 }}>
                            10h00
</Text>
                        <Text style={{ fontSize: 16, marginLeft: 10, marginRight: 5 }}>
                            Non
</Text>
                    </View>
                    <View style={{ flexDirection: 'row', flex: 1, backgroundColor: "#f0f8ff" }}>
                        <Text style={{ fontSize: 16, marginLeft: 5, marginRight: 25 }}>
                            Khalil B.H
</Text>
                        <Text style={{ fontSize: 16, marginLeft: 10, marginRight: 40 }}>
                            P
</Text>
                        <Text style={{ fontSize: 16, marginLeft: 10, marginRight: 25 }}>
                            9h01
</Text>
                        <Text style={{ fontSize: 16, marginLeft: 10, marginRight: 20 }}>
                            10h00
</Text>
                        <Text style={{ fontSize: 16, marginLeft: 10, marginRight: 5 }}>
                            Non
</Text>
                    </View>
                    <View style={{ flexDirection: 'row', flex: 1, backgroundColor: "#fff" }}>
                        <Text style={{ fontSize: 16, marginLeft: 5, marginRight: 25 }}>
                            Khalil B.H
</Text>
                        <Text style={{ fontSize: 16, marginLeft: 10, marginRight: 40 }}>
                            P
</Text>
                        <Text style={{ fontSize: 16, marginLeft: 10, marginRight: 25 }}>
                            9h01
</Text>
                        <Text style={{ fontSize: 16, marginLeft: 10, marginRight: 20 }}>
                            10h00
</Text>
                        <Text style={{ fontSize: 16, marginLeft: 10, marginRight: 5 }}>
                            Non
</Text>
                    </View>
                </ScrollView>
                
            </View>
            <View style={{flex:0.2}}>
                <Text>

                </Text>
            </View>
            <View style={{ flex: 4 }}>
                <ScrollView style={{ flex: 1 }}>
                
                    <View style={{ flexDirection: "row", padding: 5, backgroundColor: "#Fff",flex:1 }}>
                        <View>
                            <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#f44336', marginLeft: 10 }}>20 min</Text>
                            <Text style={{ marginLeft: 5, marginTop: 5 }}>De 9h30 à 09h40</Text>
                        </View>
                        <View>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={{ marginLeft: 0, fontSize: 17, margin: 2, fontWeight: 'bold' }}>
                                    Réunion de la semaine
                        </Text>
                                <Text style={{ fontWeight: 'bold', color: 'gray', margin: 5 }}>
                                    (Planifiée)
                        </Text>
                            </View>


                            <View style={{ flexDirection: "row" }}>
                                <Text style={{ marginLeft: 25, fontSize: 16 }}>
                                    Par Khalil Ben Halima
                                </Text>

                            </View>
                        </View>
                        

                    </View>
                    
                    <View style={{ flexDirection: "row", padding: 5, backgroundColor: "#Fff" }}>
                        <View>
                            <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#f44336', marginLeft: 10 }}>20 min</Text>
                            <Text style={{ marginLeft: 5, marginTop: 5 }}>De 9h30 à 09h40</Text>
                        </View>
                        <View>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={{ marginLeft: 0, fontSize: 17, margin: 2, fontWeight: 'bold' }}>
                                    Réunion de la semaine
                        </Text>
                                <Text style={{ fontWeight: 'bold', color: 'gray', margin: 5 }}>
                                    (Planifiée)
                        </Text>
                            </View>


                            <View style={{ flexDirection: "row" }}>
                                <Text style={{ marginLeft: 25, fontSize: 16 }}>
                                    Par Khalil Ben Halima
                                </Text>

                            </View>
                        </View>


                    </View>
                   
                    <View style={{ flexDirection: "row", padding: 5, backgroundColor: "#Fff" }}>
                        <View>
                            <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#f44336', marginLeft: 10 }}>20 min</Text>
                            <Text style={{ marginLeft: 5, marginTop: 5 }}>De 9h30 à 09h40</Text>
                        </View>
                        <View>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={{ marginLeft: 0, fontSize: 17, margin: 2, fontWeight: 'bold' }}>
                                    Réunion de la semaine
                        </Text>
                                <Text style={{ fontWeight: 'bold', color: 'gray', margin: 5 }}>
                                    (Planifiée)
                        </Text>
                            </View>


                            <View style={{ flexDirection: "row" }}>
                                <Text style={{ marginLeft: 25, fontSize: 16 }}>
                                    Par Khalil Ben Halima
                                </Text>

                            </View>
                        </View>


                    </View>
                   
                    <View style={{ flexDirection: "row", padding: 5, backgroundColor: "#Fff" }}>
                        <View>
                            <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#f44336', marginLeft: 10 }}>20 min</Text>
                            <Text style={{ marginLeft: 5, marginTop: 5 }}>De 9h30 à 09h40</Text>
                        </View>
                        <View>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={{ marginLeft: 0, fontSize: 17, margin: 2, fontWeight: 'bold' }}>
                                    Réunion de la semaine
                        </Text>
                                <Text style={{ fontWeight: 'bold', color: 'gray', margin: 5 }}>
                                    (Planifiée)
                        </Text>
                            </View>


                            <View style={{ flexDirection: "row" }}>
                                <Text style={{ marginLeft: 25, fontSize: 16 }}>
                                    Par Khalil Ben Halima
                                </Text>

                            </View>
                        </View>


                    </View>
                    
                </ScrollView>
            </View>
            

            <Tab_nav />
        </SafeAreaView>
    );
}

export default SecondPage;
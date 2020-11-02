// React Native Navigation Drawer – Example using Latest Navigation Version //
// https://aboutreact.com/react-native-navigation-drawer //
import * as React from 'react';
import { View, Text, SafeAreaView, ScrollView, Image } from 'react-native';
import Tab_nav from '../Components/Tab_nav';
import { Left, Right, Icon, Button,Body,Header } from 'native-base';
import { NavigationContainer, useNavigation } from '@react-navigation/native';

const Titre_Réunion = (props) => {
    const navigation = useNavigation();
    return (
        <View style={{ flex: 1, backgroundColor: "#E3E3E3" }}>
            <View style={{ flexDirection: "row", flex: 1 }}>
                <Text style={{ fontSize: 18, marginLeft: 10, marginRight: 20, fontWeight: 'bold', marginTop: 5, marginEnd: 5 }}>
                    Titre de la Réunion
</Text>
                <Text style={{ fontSize: 18, marginRight: 10, color: "#48A5F3", marginTop: 5, marginEnd: 5, marginLeft: 10 }}>
                    Réunion de la Semaine
</Text>
            </View>
            <View style={{ flexDirection: "row", flex: 1 }}>
                <Text style={{ marginLeft: 5, fontWeight: 'bold', color: 'gray', marginTop: 5 }}>
                    Détails
            </Text>
                <View style={{  flex: 1,marginLeft:235 }}> 
                    <Button small backgroundColor="#48A5F3" onPress={() => navigation.navigate('SecondPage')}>
                        <Text style={{ color: '#Fff', fontWeight: 'bold' }}> Retourner </Text>
                    </Button>
            </View>
                
            </View>
            
        </View>
    );
}
const Détails_1 = (props) => {

    return (
        <View  style={{ flex: 1, backgroundColor: "#fff" }}>
        <View style={{flex:1,flexDirection:"row"}}>
               <View style={{marginTop:5,marginRight:10,marginLeft:-15}}>
                    <Image
                        source={require('.././img/Rectangle.png')}
                    />
               </View> 
                <Text style={{ color: "#f44336", fontSize: 16,fontWeight: 'bold'}}>
                    Point 1
                </Text>
                <Text style={{  fontSize: 16,marginLeft:5 }}>
                 : Interface Design 
                </Text>
        </View>
            <View style={{ flex: 1, flexDirection: "row" }}>
                <View style={{ marginTop: 5, marginRight: 10, marginLeft:10 }}>
                    <Image
                        source={require('.././img/Carré.png')}
                    />
                </View> 
                <Text style={{ color: "#545454", fontSize: 16, fontWeight: 'bold' }}>
                        Constat 1
                </Text>
                <Text style={{ fontSize: 16, marginLeft: 5, flexWrap: 'wrap', marginRight: 5,flex:1 }}>
                        : une première version de l'interface
                        de KMS à été développé 
                </Text>
                
        </View>
            <View style={{ flex: 1, flexDirection: "row" }}>
                <View style={{ marginTop: 5, marginRight: 10, marginLeft: 10 }}>
                    <Image
                        source={require('.././img/Polygone.png')}
                    />
                </View>
                <Text style={{ color: "#48A5F3", fontSize: 16, fontWeight: 'bold' }}>
                    Décision 1
                </Text>
                <Text style={{ fontSize: 16, marginLeft: 5, flexWrap: 'wrap', marginRight: 5, flex: 1 }}>
                  : Prendre le Feedback par le Directeur Information
                </Text>

            </View>
            <View style={{ flex: 1, flexDirection: "row" }}>
                <View style={{ marginTop: 5, marginRight: 10, marginLeft: 10 }}>
                    <Image
                        source={require('.././img/Ellipse.png')}
                    />
                </View>
                <Text style={{ color: "#f44336", fontSize: 16, fontWeight: 'bold' }}>
                    Action (18)
                </Text>
                <Text style={{ fontSize: 16, marginLeft: 5, flexWrap: 'wrap', marginRight: 1, flex: 1 }}>
                    : REU-Pr-18 Présenter l'interface au Directeur Informatique  
                </Text>

            </View>
            <View style={{ flex: 1 }}>
                <Text style={{ fontSize: 16, marginLeft: 10 }}>
                    Date Clôture : 27/07/2020 
                </Text>
            </View>
            <View style={{ flex: 1 }}>
                <Text style={{ fontSize: 16, marginLeft: 10, fontWeight: 'bold' }}>
                    Resp Réal : Maram Amri 
                </Text>
                
            </View>
            <View style={{ flex: 1 }}>
                <Text style={{ fontSize: 16, marginLeft: 10, fontWeight: 'bold' }}>
                    Resp Suivi : Bilel Karray 
                </Text>

            </View>
            <View style={{ flex: 1 }}>
                <Text style={{ fontSize: 16, marginLeft: 10, fontWeight: 'bold' }}>
                    Resp Eval : Bilel Karray 
                </Text>

            </View>
            <View style={{ flex: 1, flexDirection: "row" }}>
                <View style={{ marginTop: 5, marginRight: 10, marginLeft: 10 }}>
                    <Image
                        source={require('.././img/Carré.png')}
                    />
                </View>
                <Text style={{ color: "#545454", fontSize: 16, fontWeight: 'bold' }}>
                    Constat 2
                </Text>
                <Text style={{ fontSize: 16, marginLeft: 5, flexWrap: 'wrap', marginRight: 5, flex: 1 }}>
                    : Nouveau constat
                </Text>

            </View>
        </View>
    );
}
const Détails_2 = (props) => {

    return (
        <View style={{ flex: 1, backgroundColor: "#fff" }}>
            <View style={{ flex: 1, flexDirection: "row" }}>
                <View style={{ marginTop: 5, marginRight: 10, marginLeft: -15 }}>
                    <Image
                        source={require('.././img/Rectangle.png')}
                    />
                </View>
                <Text style={{ color: "#f44336", fontSize: 16, fontWeight: 'bold' }}>
                    Point 2
                </Text>
                <Text style={{ fontSize: 16, marginLeft: 5, flexWrap: 'wrap', flex: 1 }}>
                    : Navigation Interface & Dictionnaire des données 
                </Text>
            </View>
            <View style={{ flex: 1, flexDirection: "row" }}>
                <View style={{ marginTop: 5, marginRight: 10, marginLeft: 10 }}>
                    <Image
                        source={require('.././img/Carré.png')}
                    />
                </View>
                <Text style={{ color: "#545454", fontSize: 16, fontWeight: 'bold' }}>
                    Constat 1
                </Text>
                <Text style={{ fontSize: 16, marginLeft: 5, flexWrap: 'wrap', marginRight: 5, flex: 1 }}>
                    : L'importance de définir et standardiser
                    les noms des formulaires et les noms
                    de champs afin de faciliter la communication
                    entre l'équipe Back End et Front End 
                </Text>

            </View>
            <View style={{ flex: 1, flexDirection: "row" }}>
                <View style={{ marginTop: 5, marginRight: 10, marginLeft: 10 }}>
                    <Image
                        source={require('.././img/Polygone.png')}
                    />
                </View>
                <Text style={{ color: "#48A5F3", fontSize: 16, fontWeight: 'bold' }}>
                    Décision 1
                </Text>
                <Text style={{ fontSize: 16, marginLeft: 5, flexWrap: 'wrap', marginRight: 5, flex: 1 }}>
                    : Définir les noms des formulaires
                    et les noms des champs 
                </Text>

            </View>
            <View style={{ flex: 1, flexDirection: "row" }}>
                <View style={{ marginTop: 5, marginRight: 10, marginLeft: 10 }}>
                    <Image
                        source={require('.././img/Ellipse.png')}
                    />
                </View>
                <Text style={{ color: "#f44336", fontSize: 16, fontWeight: 'bold' }}>
                    Action (19)
                </Text>
                <Text style={{ fontSize: 16, marginLeft: 5, flexWrap: 'wrap', marginRight: 1, flex: 1 }}>
                    : PRO-TI-19 Définir et standardiser les noms
                    des formulaires et les noms des champs 
                </Text>

            </View>
            <View style={{ flex: 1 }}>
                <Text style={{ fontSize: 16, marginLeft: 10 }}>
                    Date Clôture : 27/07/2020 
                </Text>
            </View>
            <View style={{ flex: 1 }}>
                <Text style={{ fontSize: 16, marginLeft: 10, fontWeight: 'bold' }}>
                    Resp Réal : Zeineb Ben Salah 
                </Text>

            </View>
            <View style={{ flex: 1 }}>
                <Text style={{ fontSize: 16, marginLeft: 10, fontWeight: 'bold' }}>
                    Resp Suivi : Rihab Chaabene 
                </Text>

            </View>
            <View style={{ flex: 1 }}>
                <Text style={{ fontSize: 16, marginLeft: 10, fontWeight: 'bold' }}>
                    Resp Eval : Bilel Karray
                </Text>

            </View>
            <View style={{ flex: 1, flexDirection: "row" }}>
                <View style={{ marginTop: 5, marginRight: 10, marginLeft: 10 }}>
                    <Image
                        source={require('.././img/Carré.png')}
                    />
                </View>
                <Text style={{ color: "#545454", fontSize: 16, fontWeight: 'bold' }}>
                    Constat 2
                </Text>
                <Text style={{ fontSize: 16, marginLeft: 5, flexWrap: 'wrap', marginRight: 5, flex: 1 }}>
                    : Nouveau constat
                </Text>

            </View>
        </View>
    );
}
const Détails_3 = (props) => {

    return (
        <View style={{ flex: 1, backgroundColor: "#fff" }}>
            <View style={{ flex: 1, flexDirection: "row" }}>
                <View style={{ marginTop: 5, marginRight: 10, marginLeft: -15 }}>
                    <Image
                        source={require('.././img/Rectangle.png')}
                    />
                </View>
                <Text style={{ color: "#f44336", fontSize: 16, fontWeight: 'bold' }}>
                    Point 3
                </Text>
                <Text style={{ fontSize: 16, marginLeft: 5, flexWrap: 'wrap', flex: 1 }}>
                    : Back End Python 
                </Text>
            </View>
            <View style={{ flex: 1, flexDirection: "row" }}>
                <View style={{ marginTop: 5, marginRight: 10, marginLeft: 10 }}>
                    <Image
                        source={require('.././img/Carré.png')}
                    />
                </View>
                <Text style={{ color: "#545454", fontSize: 16, fontWeight: 'bold' }}>
                    Constat 1
                </Text>
                <Text style={{ fontSize: 16, marginLeft: 5, flexWrap: 'wrap', marginRight: 5, flex: 1 }}>
                    : Afin d'assurer la synchronisation entre Outlook,
                    Agenda de KMS et le module réunion, il faut utiliser
                    le web mail service 
                </Text>

            </View>
            <View style={{ flex: 1, flexDirection: "row" }}>
                <View style={{ marginTop: 5, marginRight: 10, marginLeft: -15 }}>
                    <Image
                        source={require('.././img/Rectangle.png')}
                    />
                </View>
                <Text style={{ color: "#f44336", fontSize: 16, fontWeight: 'bold' }}>
                    Point 4
                </Text>
                <Text style={{ fontSize: 16, marginLeft: 5, flexWrap: 'wrap', flex: 1 }}>
                    : Back End Symphony 
                </Text>
            </View>
            <View style={{ flex: 1, flexDirection: "row" }}>
                <View style={{ marginTop: 5, marginRight: 10, marginLeft: -15 }}>
                    <Image
                        source={require('.././img/Rectangle.png')}
                    />
                </View>
                <Text style={{ color: "#f44336", fontSize: 16, fontWeight: 'bold' }}>
                    Point 5
                </Text>
                <Text style={{ fontSize: 16, marginLeft: 5, flexWrap: 'wrap', flex: 1 }}>
                    : Front End 
                </Text>
            </View>
            <View style={{ flex: 1, flexDirection: "row" }}>
                <View style={{ marginTop: 5, marginRight: 10, marginLeft: -15 }}>
                    <Image
                        source={require('.././img/Rectangle.png')}
                    />
                </View>
                <Text style={{ color: "#f44336", fontSize: 16, fontWeight: 'bold' }}>
                    Point 6
                </Text>
                <Text style={{ fontSize: 16, marginLeft: 5, flexWrap: 'wrap', flex: 1 }}>
                   : Base de données 
                </Text>
            </View>
            <View style={{ flex: 1, flexDirection: "row" }}>
                <View style={{ marginTop: 5, marginRight: 10, marginLeft: -15 }}>
                    <Image
                        source={require('.././img/Rectangle.png')}
                    />
                </View>
                <Text style={{ color: "#f44336", fontSize: 16, fontWeight: 'bold' }}>
                    Point 7
                </Text>
                <Text style={{ fontSize: 16, marginLeft: 5, flexWrap: 'wrap', flex: 1 }}>
                    : Nouveau point
                </Text>
            </View>
            <View style={{ flex: 1, flexDirection: "row" }}>
                <View style={{ marginTop: 5, marginRight: 10, marginLeft: -15 }}>
                    <Image
                        source={require('.././img/Rectangle.png')}
                    />
                </View>
                <Text style={{ color: "#f44336", fontSize: 16, fontWeight: 'bold' }}>
                    Point 8
                </Text>
                <Text style={{ fontSize: 16, marginLeft: 5, flexWrap: 'wrap', flex: 1 }}>
                    : Nouveau point
                </Text>
            </View>
            
        </View>
    );
}

const PV_Détails = ({ navigation }) => {
    return (   
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 10.5 }}>
                <ScrollView >
                    <View style={{ flex: 1 }}>
                        <Titre_Réunion />
                        <Détails_1 />
                        <View style={{ flex: 0.1 }}>
                            <Text>

                            </Text>
                        </View>
                        <Détails_2 />
                        <View style={{ flex: 0.1 }}>
                            <Text>

                            </Text>
                        </View>
                        <Détails_3 />
                </View>
                    
                </ScrollView>

        </View>
            
            <Tab_nav/>
        </SafeAreaView>
    );
}

export default PV_Détails;
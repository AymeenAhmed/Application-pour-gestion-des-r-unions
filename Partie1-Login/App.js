


import * as React from 'react';
import { Button, View, Text , TextInput ,StyleSheet ,ScrollView , SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import axios from 'axios' ; 

function HomeScreen({ navigation }) {
  return (
    <SafeAreaView>
      <ScrollView>

    
    <View style={{ flex: 1, justifyContent : 'center' ,alignItems : 'center' }} >

      <Text style = {styles.TextComponentStyle}> Bienvenue. Vous pouvez connecter maintenant </Text>
      <Text style = {styles.kilma}> Nom d'utilisateur  :</Text>
      <TextInput  placeholder="Ecrire votre  Name           "  
      style = {styles.TextInp}
       />
       <Text style = {styles.kilma} > Password :</Text>
      <TextInput  placeholder="Ecrire votre Password " 
       style = {styles.TextInp}      
      secureTextEntry={true} />

      <Button style={styles.btn }
        title="                Login                 "  
        onPress={() => navigation.navigate('User')}
      />
      <Text></Text>
       <Button style={styles.btn}
        title="              Sign up               " onPress={() => navigation.push('Sign')} />
         <Text></Text>
      <Button style={styles.btn}
        title="Mot de passe oublié ?" onPress={() => navigation.push('Mot de passe oublié')} />
     <Text></Text>
      <Button style={styles.btn}
        title="Version Profesionnel" onPress={() => navigation.push('Version professionel')} />
        <Text></Text>
      <Button style={styles.btn}
        title=" Version Personnelle " onPress={() => navigation.push('Version personnel')} />  
        <Text></Text>


    </View>
    </ScrollView>
    </SafeAreaView>
  );
}


class SignScreen extends React.Component   {
 constructor(props ){
   super(props)
  this.state = {
    Name : '' ,
    Password : '',
    Email : ''
  }; } 
  render() { 
  return ( 
  <SafeAreaView>
    <ScrollView >
    <View style={{ flex: 1, justifyContent :'center' , alignItems : 'center'  }} >
      <Text style={ styles.TextComponentStyle}      > Veuiller faire l'inscription maintenant : </Text>
      <Text  style = {styles.kilma}> Nom d'utilisateur :</Text>
      <TextInput 
       placeholder="Ecrire votre nom" 
       style = {styles.TextInp} 
      onChangeText={ (text) => {
        this.setState({Name : text})
      }} />
      <Text style = {styles.kilma} > Password :</Text>
      <TextInput secureTextEntry={true} placeholder= "Ecrire votre Password"
      style = {styles.TextInp} 
      
      onChangeText={ (text) => {
        this.setState({Password : text})
      }} />
      <Text style = {styles.kilma} > Email :</Text>
      <TextInput 
             placeholder="Ecrire votre Email" 
             style = {styles.TextInp} 
       onChangeText={ (text) => {
        this.setState({Email : text})
      }}      />
      

      <Button  title="               envoyer                " 
      onPress={() => {console.log(this.state);
        fetch('http://192.168.1.9/Verif/', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            Name : this.state.Name, 
            Password : this.state.Password,
            Email: this.state.Email
          })
          }).then(responseJson => { 
            console.log(responseJson);
          }).catch(error => {
            console.log(error);
        
          });
      // axios({
      //   method : 'post' ,
      //   url : 'http://192.168.1.9/Verif/' ,
      //   data : {
      //   Name : this.state.Name, Password : this.state.Password,Email: this.state.Email
      // }}).then(response => { 
      //   console.log(response.data);
      // }).catch(error => {
      //   console.log(error);
      // });
      // this.props.navigation.alert('your  inscription is done')
      // this.props.navigation.navigate('Home')
      }
       } 
        
      />
      <Text></Text>
      {/* <Button title="Go to Home" onPress={() => this.props.navigation.navigate('Home')} />
      <Text></Text> */}

      {/* <Button title="Go back" onPress={() => this.props.navigation.goBack()} />
      <Text></Text> */}
      <Button style={styles.btn}
        title=" Version Profesionnel " onPress={() => this.props.navigation.navigate('Version professionel')} />
        <Text></Text>
      <Button style={styles.btn}
        title="  Version Personnelle  " onPress={() =>this.props.navigation.navigate('Version personnel')} />
    </View>
    </ScrollView>
  </SafeAreaView>
  );
}}


function UserScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }} >
      <Text
       style={ styles.TextComponentStyle}      >
      Congratulations</Text>
    </View>

  
    
  );
}


function PassScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }} >
      <Text
       style={ styles.TextComponentStyle}      >
      Veuiller saisir votre Email :
      </Text> 
      <Text>  </Text>
      <TextInput placeholder="Exemple direction@canada.com ... "  style = {styles.TextInp} />
      <Text></Text>
      <Button title="Réinitialiser votre mot de passe " onPress={() => navigation.push('Verif')} />

    </View>
  );}

function VerifScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }} >
        <Text
         style={ {fontSize : 30 , textAlign: 'center' , margin :10, justifyContent : 'center' ,alignItems : 'center' ,   }}      >
        Vous deviez activer votre compte </Text>
        <Text style = {styles.TextComponentStyle} >Un email a été envoyer sur Testcanada@gmail.com. Merci de verifier votre boite aux lettre</Text>
        <Button title="  Verifier  " onPress={() => navigation.navigate('')} />
        <Text></Text>
        <Button title="Plus tard " onPress={() => navigation.push('Home')} />


      </View>
    );
}

function PerScreen ({navigation}) {
  return (
  <SafeAreaView> 
  <ScrollView>
    
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }} >
    <Text style = { styles.TextComponentStyle}> Bienvenue dans la version personnelle: </Text>

    <Text style = {styles.kilma}>Prenom :  </Text>
    <TextInput placeholder="Saisir votre Prenom " style = {styles.TextInp}/>

    <Text style = {styles.kilma}>Nom:  </Text>
    <TextInput placeholder="Saisir votre Nom " style = {styles.TextInp}/>
    <Text style = {styles.kilma}>Date de naissance:  </Text>
    <TextInput placeholder="year/month/day " style = {styles.TextInp}/>

    <Text style = {styles.kilma}>Sexe:  </Text>
    <TextInput placeholder="Saisir votre sexe " style = {styles.TextInp}/>

    <Text style = {styles.kilma}>Cellulaire :  </Text>
    <TextInput placeholder="Saisir votre Cellulaire  " style = {styles.TextInp}/>

    <Text style = {styles.kilma}>Entreprise:  </Text>
    <TextInput placeholder="Saisir votre Entreprise " style = {styles.TextInp}/>

    <Text style = {styles.kilma}>Pays :  </Text>
    <TextInput placeholder="Saisir votre Pays " style = {styles.TextInp}/>
    <Button title="Créer un compte " onPress ={ () => alert('votre compte est creé avec success')} />
    <Text></Text>
      
   
    </View>
    </ScrollView>
  </SafeAreaView>
  )
}

function ProScreen ({navigation}) {
  return (
    <View style = { {  flex : 1 , textAlign : 'center' , justifyContent : 'center' , alignItems: 'center'}}>
       <Text style = { styles.TextComponentStyle}> Bienvenue dans la version Profesionnelle : </Text>
       <Text></Text>
       <Button title="       Se Connecter      "  onPress = { () => navigation.push('Version professionelle') }/>
       <Text> </Text>
      <Button title="    Créer un compte   " onPress ={ () => navigation.push('Version personnel')} />
      <Text></Text>
      <Button title="Passer au payement"  onPress = { () => navigation.push('Mode de paiement') }/>
    </View>
  )
}

function ProScreen2 ({navigation}) {
  return (
    <View style = { {  flex : 1 , alignItems: 'center' , justifyContent : 'center' }}>
     
      <Text style={{fontSize : 30 , textAlign: 'center' , margin :10, justifyContent : 'center' ,alignItems : 'center' ,   }}> Welcome : </Text>
      <Text style={styles.TextComponentStyle}> Vous etes maintenant dans la Version professionelle : </Text> 
      <Button title="Suivant" onPress={()=> navigation.push('Chose offer')} /> 
      <Text style={styles.TextComponentStyle}> Vous pouvez changer a la version personnelle: </Text> 
      <Button title="Version Personnele"  onPress={()=> navigation.push('Version personnel')} /> 

    </View>
 
  )
}

function ChoseScreen ({navigation}) {
  return (
    <View style = { {  flex : 1 , textAlign : 'center' , justifyContent : 'center' , alignItems:'center'}}>   
        <Text style = {styles.TextComponentStyle}> Voici les offres : </Text>
        <Text></Text>
    <Button title="Acheter Maintenant " onPress={()=> navigation.push('Obtiens Version professionel')} />
    </View> 
  )
}

function ModeScreen ({navigation}) {
  return ( 
  <SafeAreaView>
    <ScrollView>
    <View style = { {  flex : 1 , textAlign : 'center' , justifyContent : 'center' ,alignItems : 'center' }}> 
    <Text style =  {styles.TextComponentStyle}>Veuillez remplire ces champs pour faire le paiement.</Text>
      <Text style = {styles.kilma}> Nom de titulaire de la carte :</Text> 
      <TextInput placeholder="Foulen ben foulen" style = { styles.TextInp} />   

      <Text style = {styles.kilma} >MM-AA :</Text>   
      <TextInput placeholder="..........................." style = { styles.TextInp} />

      <Text style = {styles.kilma}>CVC :</Text>   
      <TextInput placeholder="..........................." style = { styles.TextInp} />
      <Text style = {styles.kilma}>Code Postal : </Text>   
      <TextInput placeholder="Exemple 5160" style = { styles.TextInp} />
      <Text style = {styles.kilma}>Adresse de courriel :</Text>   
      <TextInput placeholder="Ex xxx@gmail.com" style = { styles.TextInp} /> 

      <Button title="Obtenir " onPress={()=> navigation.push('Obtiens Version professionel')} />
      <Text></Text>
    </View> 

    </ScrollView>
  </SafeAreaView>
    
  )
}


function PayScreen ({navigation}) {
  return (   
      
      <View style = { {  flex : 2 , }}>
      <Text style = {styles.TextComponentStyle}> Contact :</Text> 
      
      <View style = {{ flex : 1 , justifyContent :'center' , alignItems : 'center' }}>
      <Text style = {styles.kilma}> Email : </Text> 
      <TextInput placeholder=" Saisir votre Email" style = { styles.TextInp} />
      <Text style = {styles.kilma}> Pays : </Text> 
      <TextInput placeholder=" Saisir votre Pays" style = { styles.TextInp} /> 
      <Text style = {styles.kilma}> Telephone : </Text> 
      <TextInput placeholder=" (ex +216 29443379) " style = { styles.TextInp} />
      <Text style = { styles.TextComponentStyle }> Nous prendrons contact avec vous dans les plus brefs délais.</Text>
      <Button title="Valider" onPress = {() => alert('Merci nous avons bien reçu votre paiement.')} />
    

      </View>
      </View>
    
 
  )
}


const Stack = createStackNavigator();
function App() {
 
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" >
        <Stack.Screen name="Home" component={HomeScreen} options={{title: 'Home',headerStyle: {backgroundColor: '#46B3E6',  },headerTintColor: '#fff',}} />
        <Stack.Screen name="Sign" component={SignScreen} options={{title: 'Sign up',headerStyle: {backgroundColor: '#46B3E6',  },headerTintColor: '#fff',}}/>
        <Stack.Screen name="User" component={UserScreen} options={{title: 'User',headerStyle: {backgroundColor: '#46B3E6',  },headerTintColor: '#fff',}}/>
        <Stack.Screen name="Mot de passe oublié" component={PassScreen} options={{title: 'Vérification mot de passe',headerStyle: {backgroundColor: '#46B3E6',  },headerTintColor: '#fff',}}/> 
        <Stack.Screen name="Verif" component={VerifScreen} options={{title: 'Activation',headerStyle: {backgroundColor: '#46B3E6',  },headerTintColor: '#fff',}} /> 
        <Stack.Screen name="Version personnel" component={PerScreen} options={{title: 'Version personnel',headerStyle: {backgroundColor: '#46B3E6',  },headerTintColor: '#fff',}} />
        <Stack.Screen name="Version professionel" component={ProScreen} options={{title: 'Version professionel',headerStyle: {backgroundColor: '#46B3E6',  },headerTintColor: '#fff',}} />  
        <Stack.Screen name="Version professionelle" component={ProScreen2} options={{title: 'Version professionel',headerStyle: {backgroundColor: '#46B3E6',  },headerTintColor: '#fff',}} />  
        <Stack.Screen name="Chose offer" component={ChoseScreen} options={{title: "Choix de l'offre",headerStyle: {backgroundColor: '#46B3E6',  },headerTintColor: '#fff',}}/>          
        <Stack.Screen name="Obtiens Version professionel" component={PayScreen} options={{title: 'Obtenir la version PRO',headerStyle: {backgroundColor: '#46B3E6',  },headerTintColor: '#fff',}} />  
        <Stack.Screen name="Mode de paiement" component={ModeScreen} options={{title: 'Paiemment',headerStyle: {backgroundColor: '#46B3E6',  },headerTintColor: '#fff',}} />  





      </Stack.Navigator>
    </NavigationContainer>
  );
}



const styles = StyleSheet.create ({
  btn : {
    // flexDirection :'row' ,
    // justifyContent : 'space-between' ,
    // width :'400%' ,
    backgroundColor: "white",
    borderRadius: 5
  } ,
  TextComponentStyle: { 
    borderRadius: 5,
     // Set border width.
         borderWidth: 2, 
    // Set border Hex Color Code Here.
    borderColor: '#000', 
    // Setting up Text Font Color.
    color: '#000080', 
    // Setting Up Background Color of Text component.
    // backgroundColor : '#CDDC39',    
    // Adding padding on Text component.
    padding : 2, 
    fontSize: 20, 
    textAlign: 'center', 
    margin: 10
  } ,
  TextInp : {
    borderRadius: 10,borderWidth: 2,borderColor: '#000',  margin: 10 ,

  } ,
  kilma : {
    fontSize : 20 , textAlign : 'right' , color :'#00bfff' , flexDirection : 'column' ,
  } 
})



export default App;
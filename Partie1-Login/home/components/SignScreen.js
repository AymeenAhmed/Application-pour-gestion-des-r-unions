
// import * as React from 'react';
// import { Button, View, Text , TextInput ,StyleSheet } from 'react-native';

// import axios from 'axios' ; 


// export class SignScreen extends React.Component   {
//     constructor(props ){
//       super(props)
//      this.state = {
//        Name : '' ,
//        Password : '',
//        Email : ''
//      }; } 
//      render() { 
//      return (
//        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }} >
//          <Text style={ {fontSize : 30 , textAlign: 'center' , margin :10, justifyContent : 'center' ,alignItems : 'center'}}
//          >Sign up Now </Text>
//          <Text > Name :</Text>
//          <TextInput 
//           placeholder="Write Your name" 
//           style = {{width:'90%' , backgroundColor : '#fffafa' , padding: 15 , marginBottom : 10 }} 
//          onChangeText={ (text) => {
//            this.setState({Name : text})
//          }} />
//          <Text > Password :</Text>
//          <TextInput  placeholder="Write Your Password" 
//          style = {{width:'90%' , backgroundColor : '#fffafa' , padding: 15 , marginBottom : 10 }} 
//          secureTextEntry={true}
//          onChangeText={ (text) => {
//            this.setState({Password : text})
//          }} />
//          <Text > Email :</Text>
//          <TextInput 
//                 placeholder="Write Your Email" 
//                 style = {{width:'90%' , backgroundColor : '#fffafa' , padding: 15 , marginBottom : 10 }} 
//           onChangeText={ (text) => {
//            this.setState({Email : text})
//          }}      />
         
   
//          <Button  title="Ok" 
//          onPress={() => {console.log(this.state);
//            // fetch('http://192.168.1.12/Verif/', {
//            //   method: 'POST',
//            //   headers: {
//            //     Accept: 'application/json',
//            //     'Content-Type': 'application/json'
//            //   },
//            //   body: JSON.stringify({
//            //     Name : this.state.Name, 
//            //     Password : this.state.Password,
//            //     Email: this.state.Email
//            //   })
//            //   }).then(responseJson => { 
//            //     console.log(responseJson);
//            //   }).catch(error => {
//            //     console.log(error);
           
//            //   });
//          axios({
//            method : 'post' ,
//            url : 'http://192.168.1.12/Verif/' ,
//            data : {
//            Name : this.state.Name, Password : this.state.Password,Email: this.state.Email
//          }}).then(response => { 
//            console.log(response.data);
//          }).catch(error => {
//            console.log(error);
//          });
//          // this.props.navigation.alert('your  inscription is done')
//          // this.props.navigation.navigate('Home')
//          }
//           } 
           
//          />
//          <Button title="Go to Home" onPress={() => this.props.navigation.navigate('Home')} />
//          <Button title="Go back" onPress={() => this.props.navigation.goBack()} />
//        </View>
//      );
//    }}

// // const Stack = createStackNavigator(SignScreen);
// // export default SignScreen ;

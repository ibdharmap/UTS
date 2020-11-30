import React, { Component } from 'react';
import { Alert, Button, Text, TouchableOpacity, TextInput, View, StyleSheet } from 'react-native';

export default class App extends Component {

    state = {
      nama:'',
      tgl_lahir:'',
      agama:'',
      email:'',
      password: '',
    };

    Register() {
        const { nama, tgl_lahir, agama, email, password } = this.state;
    
        Alert.alert('Credentials', ` nama: ${nama} + tgl_lahir: ${tgl_lahir} + agama:${agama} + email: ${email} + password: ${password}`);
    }

    render() {
        return (
          <View style={styles.container}>
          <Text style={styles.titleText}>Register</Text>
          <TextInput
              value={this.state.nama}
              keyboardType = 'nama-address'
              onChangeText={(nama) => this.setState({ nama})}
              placeholder='nama'
              placeholderTextColor = 'white'
              style={styles.input}
            />
            <TextInput
              value={this.state.agama}
              keyboardType = 'tgl_lahir-address'
              onChangeText={(agama) => this.setState({ agama })}
              placeholder='agama'
              placeholderTextColor = 'white'
              style={styles.input}
            />
             <TextInput
              value={this.state.tgl_lahir}
              keyboardType = 'agama'
              onChangeText={(tgl_lahir) => this.setState({ tgl_lahir})}
              placeholder='tgl_lahir'
              placeholderTextColor = 'white'
              style={styles.input}
            />
            
            <TextInput
              value={this.state.email}
              keyboardType = 'email-address'
              onChangeText={(email) => this.setState({ email })}
              placeholder='email'
              placeholderTextColor = 'white'
              style={styles.input}
            />
            <TextInput
              value={this.state.password}
              onChangeText={(password) => this.setState({ password })}
              placeholder={'password'}
              secureTextEntry={true}
              placeholderTextColor = 'white'
              style={styles.input}
            />
            
         
            <TouchableOpacity
              style={styles.button}
              onPress={this.Register.bind(this)}
              onPress={() => this.props.navigation.navigate('Register')}
              onPress={() => this.props.navigation.navigate('Home')}
              onPress={() => this.props.navigation.navigate('profil')}
           >
             <Text style={styles.buttonText}onPress={() => this.props.navigation.navigate('profil')}> Register</Text>
           </TouchableOpacity>
           
            
          </View>
        );
      }



}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'blue',
    },
    titleText:{
      fontFamily: 'Baskerville',
      fontSize: 50,
      alignItems: 'center',
      justifyContent: 'center',
    },
    button: {
      alignItems: 'center',
      backgroundColor: 'yellow',
      width: 200,
      height: 44,
      padding: 10,
      borderWidth: 1,
      borderColor: 'white',
      borderRadius: 25,
      marginBottom: 10,
    },
    buttonText:{
      fontFamily: 'Baskerville',
      fontSize: 20,
      alignItems: 'center',
      justifyContent: 'center',
    },
    input: {
      width: 200,
      fontFamily: 'Baskerville',
      fontSize: 20,
      height: 44,
      padding: 10,
      borderWidth: 1,
      borderColor: 'white',
      marginVertical: 10,
    },
  });
  

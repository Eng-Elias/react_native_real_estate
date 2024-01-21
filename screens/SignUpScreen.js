import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
import {Alert} from 'react-native';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation();

  const register = () => {
    if (email === '' || password === '') {
      Alert.alert('Invalid Details', 'Please fill all the fields', [
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ]);
    }
    if (password.length < 6) {
      Alert.alert(
        'Invalid Password',
        'Password should be atleast 6 characters',
        [{text: 'OK', onPress: () => console.log('OK Pressed')}],
      );
      return;
    }
    navigation.navigate('Login');
  };

  return (
    <SafeAreaView>
      <View
        style={{marginTop: 30, justifyContent: 'center', alignItems: 'center'}}>
        <Text
          style={{
            fontSize: 25,
            color: '#3834E7',
            fontWeight: 'bold',
          }}>
          Properties Renter
        </Text>
      </View>

      <View style={{marginTop: 60, marginLeft: 20}}>
        <Text
          style={{
            fontSize: 25,
            fontWeight: 'bold',
            color: 'black',
          }}>
          Create an account
        </Text>
        <Text
          style={{
            marginTop: 10,
            fontSize: 15,
            color: 'gray',
          }}>
          Please signup to create your account
        </Text>
      </View>

      <TextInput
        value={email}
        onChangeText={text => setEmail(text)}
        style={{
          marginTop: 70,
          marginLeft: 20,
          marginRight: 20,
          height: 50,
          borderColor: '#3834E7',
          borderWidth: 2,
          borderRadius: 10,
          paddingLeft: 20,
          fontSize: 15,
          color: 'gray',
        }}
        placeholder="Email Address"
        placeholderTextColor="#3834E7"
      />
      <TextInput
        value={password}
        onChangeText={text => setPassword(text)}
        secureTextEntry={true}
        style={{
          marginTop: 40,
          marginLeft: 20,
          marginRight: 20,
          height: 50,
          borderColor: '#3834E7',
          borderWidth: 2,
          borderRadius: 10,
          paddingLeft: 20,
          fontSize: 15,
          color: 'gray',
        }}
        placeholder="Enter Password"
        placeholderTextColor="#3834E7"
      />

      <View
        style={{
          marginTop: 20,
          justifyContent: 'space-between',
          flexDirection: 'row',
          marginRight: 20,
          marginLeft: 20,
        }}>
        <Text
          onPress={() => navigation.navigate('Login')}
          style={{fontSize: 13, color: 'gray'}}>
          Already have an account?
        </Text>
        <Text style={{fontSize: 13, color: 'gray'}}>Forgot Password?</Text>
      </View>

      <TouchableOpacity
        onPress={register}
        style={{
          marginTop: 30,
          marginLeft: 20,
          marginRight: 20,
          height: 50,
          backgroundColor: '#3834E7',
          borderRadius: 10,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text
          style={{
            fontSize: 15,
            color: 'white',
            fontWeight: 'bold',
          }}>
          SignUp
        </Text>
      </TouchableOpacity>

      <View
        style={{marginTop: 25, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{color: 'gray'}}>Or SignUp with</Text>
      </View>

      <TouchableOpacity
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: 25,
          marginLeft: 20,
          marginRight: 20,
          height: 50,
          borderColor: '#3834E7',
          borderWidth: 2,
          borderRadius: 10,
          paddingLeft: 20,
          fontSize: 15,
          color: 'gray',
        }}
        placeholder="Email Address">
        <Image
          source={require('../assets/google.png')}
          style={{width: 30, height: 30, marginLeft: 40}}
        />
        <Text
          style={{
            fontFamily: 'Inter_400Regular',
            fontSize: 15,
            color: 'gray',
            marginLeft: 20,
          }}>
          SignUp using Google
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: 25,
          marginLeft: 20,
          marginRight: 20,
          height: 50,
          borderColor: '#3834E7',
          borderWidth: 2,
          borderRadius: 10,
          paddingLeft: 20,
          fontSize: 15,
          color: 'gray',
        }}
        placeholder="Email Address">
        <Image
          source={require('../assets/facebook.png')}
          style={{width: 16, height: 30, marginLeft: 45}}
        />
        <Text
          style={{
            fontFamily: 'Inter_400Regular',
            fontSize: 15,
            color: 'gray',
            marginLeft: 29,
          }}>
          SignUp using Facebook
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({});

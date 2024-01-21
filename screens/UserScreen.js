import {Button, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';

const UserScreen = () => {
  // const user = auth.currentUser;
  const navigation = useNavigation();

  const handleSignOut = async () => {
    navigation.replace('Login');
  };
  return (
    <SafeAreaView
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        marginLeft: 20,
        marginRight: 20,
      }}>
      <Text
        style={{
          fontSize: 24,
          fontWeight: 'bold',
          marginBottom: 60,
          color: 'black',
        }}>
        User Details
      </Text>
      <View>
        <Text style={styles.userDetail}>Name: User1</Text>
        <Text style={styles.userDetail}>Email: user1@gmail.com</Text>
      </View>
      <TouchableOpacity
        onPress={() => handleSignOut()}
        style={{
          marginTop: 30,
          marginLeft: 20,
          marginRight: 20,
          height: 50,
          backgroundColor: '#3834E7',
          borderRadius: 10,
          justifyContent: 'center',
          alignItems: 'center',
          width: 200,
        }}>
        <Text
          style={{
            fontFamily: 'Inter_400Regular',
            fontSize: 15,
            color: 'white',
            fontWeight: 'bold',
          }}>
          Sign Out
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default UserScreen;

const styles = StyleSheet.create({
  userDetail: {fontSize: 16, marginBottom: 30, color: 'black'},
});

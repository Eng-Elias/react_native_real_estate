import {StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';

const BottomTab = ({activeScreen}) => {
  const navigation = useNavigation();
  return (
    <View style={{position: 'absolute', bottom: 0, width: '100%'}}>
      <View
        style={{
          backgroundColor: '#3834E7',
          borderRadius: 14,
          paddingHorizontal: 16,
          paddingVertical: 12,
          flexDirection: 'row',
          justifyContent: 'space-around',
          borderBottomLeftRadius: 0,
          borderBottomRightRadius: 0,
        }}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          {activeScreen === 'Home' ? (
            <Ionicons name="home" size={28} color="white" />
          ) : (
            <Ionicons name="home-outline" size={28} color="white" />
          )}
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Wishlist')}>
          {activeScreen === 'Wishlist' ? (
            <AntDesign name="heart" size={28} color="white" />
          ) : (
            <AntDesign name="hearto" size={28} color="white" />
          )}
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Filter')}>
          {activeScreen === 'Filter' ? (
            <FontAwesome name="filter" size={28} color="white" />
          ) : (
            <AntDesign name="filter" size={28} color="white" />
          )}
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('User')}>
          {activeScreen === 'User' ? (
            <FontAwesome name="user" size={28} color="white" />
          ) : (
            <Feather name="user" size={28} color="white" />
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default BottomTab;

const styles = StyleSheet.create({});

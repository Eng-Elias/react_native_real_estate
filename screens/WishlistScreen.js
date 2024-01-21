import {
  ActivityIndicator,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Properties from '../component/Properties';

const WishlistScreen = ({wishlist = []}) => {
  const [properties, setProperties] = useState(wishlist);
  const [loading, setLoading] = useState(false);

  return (
    <SafeAreaView>
      {loading ? (
        <View style={{alignItems: 'center', justifyContent: 'center'}}>
          <Text style={{color: 'black'}}>Loading...</Text>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      ) : (
        <View>
          {properties.length === 0 ? (
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 20,
                marginLeft: 20,
                marginRight: 20,
              }}>
              <Text style={styles.wishlistText}>Wishlist</Text>
              <Text style={{color: 'black'}}>No Items in Wishlist</Text>
            </View>
          ) : (
            <ScrollView
              showsVerticalScrollIndicator={false}
              style={{
                marginTop: 20,
                marginLeft: 20,
                marginRight: 20,
                marginBottom: 220,
              }}>
              <Text style={styles.wishlistText}>Wishlist</Text>
              {properties.map((property, index) => (
                <Properties key={index} property={property} />
              ))}
            </ScrollView>
          )}
        </View>
      )}
    </SafeAreaView>
  );
};

export default WishlistScreen;

const styles = StyleSheet.create({
  wishlistText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'black',
  },
});

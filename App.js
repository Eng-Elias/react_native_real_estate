import {ActivityIndicator, StyleSheet, View} from 'react-native';
import {
  DetailScreen,
  FilterScreen,
  HomeScreen,
  LoginScreen,
  SignUpScreen,
  UserScreen,
  ViewScreen,
  WishlistScreen,
} from './screens';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useEffect, useState} from 'react';
import BottomTab from './component/BottomTab';
import {Provider} from 'react-redux';
import store from './redux/store';
import propertiesList from './data/properties';

const Stack = createNativeStackNavigator();

const AppNavigationComponent = ({setActiveScreen}) => {
  const navigation = useNavigation();

  useEffect(() => {
    const unsubscribe = navigation.addListener('state', () => {
      const currentScreen = navigation.getCurrentRoute().name;
      setActiveScreen(currentScreen);
    });

    return () => {
      unsubscribe();
    };
  }, [navigation, setActiveScreen]);
  return null;
};

export default function App() {
  const [activeScreen, setActiveScreen] = useState('');

  const [propertiesData, setPropertiesData] = useState(propertiesList);

  const [isLoading, setIsLoading] = useState(false);

  if (isLoading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  const screensWithoutBottomTab = [
    'SignUp',
    'Login',
    'Filter',
    'Detail',
    'View',
  ];

  const [wishlist, setWishlist] = useState([]);

  return (
    <Provider store={store}>
      <NavigationContainer>
        <AppNavigationComponent setActiveScreen={setActiveScreen} />
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="SignUp" component={SignUpScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Home">
            {props => <HomeScreen {...props} propertiesData={propertiesData} />}
          </Stack.Screen>
          <Stack.Screen name="Filter" component={FilterScreen} />
          <Stack.Screen name="Detail">
            {props => <DetailScreen {...props} setWishlist={setWishlist} />}
          </Stack.Screen>
          <Stack.Screen name="View" component={ViewScreen} />
          <Stack.Screen name="Wishlist">
            {props => <WishlistScreen {...props} wishlist={wishlist} />}
          </Stack.Screen>
          <Stack.Screen name="User" component={UserScreen} />
        </Stack.Navigator>

        {screensWithoutBottomTab.includes(activeScreen) ? null : (
          <BottomTab activeScreen={activeScreen} />
        )}
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({});

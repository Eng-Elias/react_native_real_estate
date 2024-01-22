import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Feather from 'react-native-vector-icons/Feather';
import Slider from '../component/Slider';
import Properties from '../component/Properties';
import {useSelector} from 'react-redux';
import {useQuery} from '@apollo/client';
import {GET_PROPERTIES} from '../queries/getProperites';

const HomeScreen = () => {
  const initialPropertyType = 'House';
  const [selectedType, setSelectedType] = useState(initialPropertyType);

  const filters = useSelector(state => state.filters);

  const [searchTerm, setSearchTerm] = useState('');

  const {loading, error, data} = useQuery(
    GET_PROPERTIES({propertyType: selectedType}),
  );

  const [properties, setProperties] = useState(data?.getProperties ?? []);

  useEffect(() => {
    setProperties(data?.getProperties ?? []);
  }, [data]);

  const [filtersApplied, setFiltersApplied] = useState(false);

  useEffect(() => {
    if (
      filters.type === null &&
      filters.price === null &&
      filters.bedroom === null &&
      filters.washroom === null
    ) {
      setFiltersApplied(false);
    } else {
      setFiltersApplied(true);
    }

    if (filtersApplied === false && searchTerm === '') {
      // If all filters are null, return early
      return;
    }

    const filteredBySearchTerm = properties.filter(property => {
      return property.name.toLowerCase().includes(searchTerm.toLowerCase());
    });

    const newProperties = filteredBySearchTerm.filter(property => {
      if (filtersApplied === false) {
        return property;
      } else {
        return (
          property.houseType === filters.type &&
          property.price >= 1000 * filters.price[0] &&
          property.price <= 1000 * filters.price[1] &&
          property.bedroomCount === filters.bedroom &&
          property.washroomCount === filters.washroom
        );
      }
    });

    setProperties(newProperties);
  }, [filters, searchTerm]);

  const propertiesTypes = ['House', 'Villa', 'Apartment'];

  const handleTypeButton = type => {
    setSelectedType(type);
  };

  if (loading) {
    return <Text style={{color: 'black'}}>Loading...</Text>;
  }

  if (error) {
    return <Text style={{color: 'black'}}>Error: {error.message}</Text>;
  }

  return (
    <SafeAreaView>
      <View
        style={{
          marginTop: 5,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginLeft: 20,
          marginRight: 30,
        }}>
        <View>
          <Text
            style={{
              fontSize: 20,
              fontWeight: '800',
              color: 'black',
            }}>
            Hi User1 !
          </Text>
        </View>
        <EvilIcons name="bell" size={32} color="black" />
      </View>

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: 20,
          marginLeft: 20,
          marginRight: 20,
          height: 50,
          borderColor: '#3834E7',
          borderWidth: 2,
          borderRadius: 10,
          paddingLeft: 20,
          fontSize: 15,
          color: 'gray',
          position: 'relative',
        }}>
        <TextInput
          value={searchTerm}
          onChangeText={text => setSearchTerm(text)}
          placeholder="Search"
          placeholderTextColor={'#3834E7'}
          style={{flex: 1, height: '100%'}}
        />
        <Feather
          name="search"
          size={24}
          color="#3834E7"
          style={{position: 'absolute', right: 15}}
        />
      </View>

      <View
        style={{
          marginTop: 20,
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'row',
          gap: 8,
        }}>
        {propertiesTypes.map(type => (
          <TouchableOpacity
            key={type}
            onPress={() => handleTypeButton(type)}
            style={{
              width: 110,
              height: 40,
              backgroundColor: selectedType === type ? '#3834E7' : 'white',
              borderRadius: 10,
              justifyContent: 'center',
              alignItems: 'center',
              borderColor: '#3834E7',
              borderWidth: 2,
            }}>
            <Text
              style={{
                fontSize: 15,
                color: selectedType === type ? 'white' : 'black',
                fontWeight: 'bold',
              }}>
              {type}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{
          marginTop: 20,
          marginLeft: 20,
          marginRight: 20,
          marginBottom: 220,
        }}>
        <Slider />

        <View
          style={{
            flexDirection: 'row',
            marginTop: 10,
            justifyContent: 'space-between',
            marginRight: 20,
            alignItems: 'baseline',
            marginBottom: 8,
          }}>
          <Text
            style={{
              fontSize: 18,
              fontWeight: 'bold',
              color: 'black',
            }}>
            Properties for you
          </Text>
        </View>

        {properties.map((property, index) => (
          <Properties key={index} property={property} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});

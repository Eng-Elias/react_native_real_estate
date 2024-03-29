import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {updateFilters} from '../redux/actions';
import store from '../redux/store';

const FilterScreen = () => {
  const navigation = useNavigation();
  filterState = store.getState().filters;

  const [selectedType, setSelectedType] = useState('Family house');
  const [selectedBedroomType, setSelectedBedroomType] = useState(3);
  const [selectedWashroomType, setSelectedWashroomType] = useState(2);

  const minPrice = 1;
  const maxPrice = 500;

  const [priceValues, setPriceValues] = useState(
    filterState?.price ?? [minPrice, maxPrice],
  );

  multiSliderPriceValuesChange = values => {
    setPriceValues(values);
  };

  const dispatch = useDispatch();

  const handleApplyFilter = () => {
    const filters = {
      houesType: selectedType,
      price: priceValues,
      bedroom: selectedBedroomType,
      washroom: selectedWashroomType,
    };

    dispatch(updateFilters(filters));
    navigation.navigate('Home');
  };

  return (
    <SafeAreaView style={{marginLeft: 20, marginRight: 20}}>
      <Text
        style={{
          marginTop: 20,
          fontSize: 20,
          fontWeight: '700',
          color: 'black',
        }}>
        I am looking for
      </Text>

      <View
        style={{
          marginTop: 20,
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'row',
          gap: 8,
        }}>
        <TouchableOpacity
          onPress={() => setSelectedType('Family house')}
          style={{
            width: 110,
            height: 40,
            backgroundColor:
              selectedType === 'Family house' ? '#3834E7' : 'white',
            borderRadius: 10,
            justifyContent: 'center',
            alignItems: 'center',
            borderColor: '#3834E7',
            borderWidth: 2,
          }}>
          <Text
            style={{
              fontSize: 12,
              color: selectedType === 'Family house' ? 'white' : 'black',
            }}>
            Family house
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setSelectedType('Bachelor flat')}
          style={{
            width: 110,
            height: 40,
            backgroundColor:
              selectedType === 'Bachelor flat' ? '#3834E7' : 'white',
            borderRadius: 10,
            justifyContent: 'center',
            alignItems: 'center',
            borderColor: '#3834E7',
            borderWidth: 2,
          }}>
          <Text
            style={{
              fontSize: 12,
              color: selectedType === 'Bachelor flat' ? 'white' : 'black',
            }}>
            Bachelor flat
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setSelectedType('Sublet')}
          style={{
            width: 110,
            height: 40,
            backgroundColor: selectedType === 'Sublet' ? '#3834E7' : 'white',
            borderRadius: 10,
            justifyContent: 'center',
            alignItems: 'center',
            borderColor: '#3834E7',
            borderWidth: 2,
          }}>
          <Text
            style={{
              fontSize: 12,
              color: selectedType === 'Sublet' ? 'white' : 'black',
            }}>
            Sublet
          </Text>
        </TouchableOpacity>
      </View>

      <Text
        style={{
          marginTop: 30,
          fontSize: 20,
          fontWeight: '700',
          color: 'black',
        }}>
        Price Range
      </Text>

      <View style={{padding: 20, justifyContent: 'center'}}>
        <MultiSlider
          values={[priceValues[0], priceValues[1]]}
          sliderLength={300}
          onValuesChange={multiSliderPriceValuesChange}
          min={minPrice}
          max={maxPrice}
          step={10}
          style={{
            stepLabel: {backgroundColor: 'transparent', color: 'transparent'},
          }}
          selectedStyle={{backgroundColor: '#3834E7'}}
        />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 10,
          }}>
          <Text style={{color: 'black'}}>{priceValues[0]}K</Text>
          <Text style={{color: 'black'}}>{priceValues[1]}K</Text>
          <Text style={{color: 'black'}}>500K</Text>
        </View>
      </View>

      <Text
        style={{
          marginTop: 10,
          fontSize: 20,
          fontWeight: '700',
          color: 'black',
        }}>
        Bed room
      </Text>
      <View
        style={{
          marginTop: 20,
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'row',
          gap: 8,
        }}>
        {[1, 2, 3, 4, 5].map(option => (
          <TouchableOpacity
            key={option}
            onPress={() => setSelectedBedroomType(option)}
            style={{
              width: 60,
              height: 60,
              backgroundColor:
                selectedBedroomType === option ? '#3834E7' : 'white',
              borderRadius: 100,
              justifyContent: 'center',
              alignItems: 'center',
              borderColor: '#3834E7',
              borderWidth: 2,
            }}>
            <Text
              style={{
                fontSize: 15,
                color: selectedBedroomType === option ? 'white' : 'black',
              }}>
              {option}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <Text
        style={{
          marginTop: 20,
          fontSize: 20,
          fontWeight: '700',
          color: 'black',
        }}>
        Washroom
      </Text>
      <View
        style={{
          marginTop: 20,
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'row',
          gap: 8,
        }}>
        {[1, 2, 3, 4, 5].map(option => (
          <TouchableOpacity
            key={option}
            onPress={() => setSelectedWashroomType(option)}
            style={{
              width: 60,
              height: 60,
              backgroundColor:
                selectedWashroomType === option ? '#3834E7' : 'white',
              borderRadius: 100,
              justifyContent: 'center',
              alignItems: 'center',
              borderColor: '#3834E7',
              borderWidth: 2,
            }}>
            <Text
              style={{
                fontSize: 15,
                color: selectedWashroomType === option ? 'white' : 'black',
              }}>
              {option}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <TouchableOpacity
        onPress={handleApplyFilter}
        style={{
          marginTop: 30,
          width: '100%',
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
          }}>
          Apply Filter
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default FilterScreen;

const styles = StyleSheet.create({});

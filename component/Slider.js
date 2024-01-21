import {Animated, FlatList, StyleSheet} from 'react-native';
import React, {useRef, useState} from 'react';
import SlideItem from './SlideItem';

const slides = [
  {
    id: 1,
    img: require('../assets/Screen1.jpeg'),
  },
  {
    id: 2,
    img: require('../assets/Screen2.jpg'),
  },
  {
    id: 3,
    img: require('../assets/Screen3.jpg'),
  },
];

const Slider = () => {
  const [index, setIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;

  const handleOnScroll = event => {
    Animated.event(
      [
        {
          nativeEvent: {
            contentOffset: {
              x: scrollX,
            },
          },
        },
      ],
      {
        useNativeDriver: false,
      },
    )(event);
  };

  const handleOnViewableItemsChanged = useRef(({viewableItems}) => {
    setIndex(viewableItems[0].index);
  }).current;

  const viewabilityConfig = useRef({
    itemVisiblePercentThreshold: 50,
  }).current;

  return (
    <FlatList
      data={slides}
      renderItem={({item}) => <SlideItem item={item} />}
      horizontal
      pagingEnabled
      snapToAlignment="center"
      showsHorizontalScrollIndicator={false}
      onScroll={handleOnScroll}
      onViewableItemsChanged={handleOnViewableItemsChanged}
      viewabilityConfig={viewabilityConfig}
    />
  );
};

export default Slider;

const styles = StyleSheet.create({});

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  View,
} from 'react-native';
import { FlatListItem } from './src/components/FlatListItem';
import { IMAGES } from './src/config/images';

const DATA: string[] = [
  "Aberdeen", "Abilene", "Akron", "Albany","Durham", "El Monte", "El Paso", "Elizabeth", "Elk Grove", "Elkhart", "Erie", "Escondido", "Eugene", "Evansville"
];

const POSITION_SYSTEM_DATA = [
  {
    imageSource: IMAGES.leftPosition,
  },
  {
    imageSource: IMAGES.middlePosition,
  },
  {
    imageSource: IMAGES.rightPosition,
  }
]

const NAVIGATION_SYSTEM_DATA = [
  {
    imageSource: IMAGES.arrowLeft
  },
  {
    imageSource: IMAGES.arrowRight
  },
]

function App(): JSX.Element {
  const [initialScrollIndex, setInitialScrollIndex] = React.useState<number>(0);

  const renderItem = (item: string, index: number) => {
    return (
      <FlatListItem text={item} onPress={() => {}} index={index} />
    )
  }

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <FlatList data={DATA} renderItem={({ item ,index}) => renderItem(item, index)} horizontal initialScrollIndex={initialScrollIndex} contentContainerStyle={{ height: 34}} showsHorizontalScrollIndicator={false} />
        <View style={styles.navigationContainer}>
          <View></View>
          <View></View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 250
  },
  navigationContainer: {
    marginTop: 30,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  }
});

export default App;

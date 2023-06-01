/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from "react";
import {
  FlatList,
  ImageSourcePropType,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { Button } from "./src/components/Button";
import { FlatListItem } from "./src/components/FlatListItem";
import { IMAGES } from "./src/config/images";

interface ButtonData {
  imageSource: ImageSourcePropType;
  onPress: () => void;
}

const DATA: string[] = [
  "Aberdeen man",
  "Abilene gage",
  "Akron sold",
  "Albany mos",
  "Durham cal",
  "El Monte",
  "El Paso",
  "Elizabeth",
  "Elk Grove",
  "Elkhart",
  "Erie",
  "Escondido",
  "Eugene",
  "Evansville",
];

function App(): JSX.Element {
  const flatListRef = React.useRef<FlatList>(null);

  const [initialScrollIndex, setInitialScrollIndex] = React.useState<number>(0);
  const [viewPosition, setViewPosition] = React.useState<number>(0.5);

  React.useEffect(() => {
    flatListRef.current?.scrollToIndex({
      animated: true,
      index: initialScrollIndex,
      viewOffset: 5,
      viewPosition,
    });
  }, [initialScrollIndex, viewPosition]);

  const renderItem = (item: string, index: number) => {
    return (
      <FlatListItem
        text={item}
        onPress={() => setInitialScrollIndex(index)}
        index={index}
        initialScrollIndex={initialScrollIndex}
      />
    );
  };

  const POSITION_SYSTEM_DATA: ButtonData[] = [
    {
      imageSource: IMAGES.leftPosition,
      onPress: () => setViewPosition(0),
    },
    {
      imageSource: IMAGES.middlePosition,
      onPress: () => setViewPosition(0.5),
    },
    {
      imageSource: IMAGES.rightPosition,
      onPress: () => setViewPosition(1),
    },
  ];

  const NAVIGATION_SYSTEM_DATA: ButtonData[] = [
    {
      imageSource: IMAGES.arrowLeft,
      onPress: () => {
        if (initialScrollIndex === 0) {
          return;
        }
        setInitialScrollIndex(initialScrollIndex - 1);
      },
    },
    {
      imageSource: IMAGES.arrowRight,
      onPress: () => {
        if (initialScrollIndex === DATA.length - 1) {
          return;
        }
        setInitialScrollIndex(initialScrollIndex + 1);
      },
    },
  ];

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <FlatList
          ref={flatListRef}
          data={DATA}
          renderItem={({ item, index }) => renderItem(item, index)}
          horizontal
          initialScrollIndex={initialScrollIndex}
          contentContainerStyle={{ height: 34, marginBottom: 50 }}
          showsHorizontalScrollIndicator={false}
        />
        <View style={styles.navigationContainer}>
          <View>
            <Text style={styles.title}>Scroll Position</Text>
            <View style={styles.buttonsContainer}>
              {POSITION_SYSTEM_DATA.map((item, index) => (
                <Button
                  imageSource={item.imageSource}
                  onPress={item.onPress}
                  key={index}
                />
              ))}
            </View>
          </View>
          <View>
            <Text style={styles.title}>Navigation</Text>
            <View style={styles.buttonsContainer}>
              {NAVIGATION_SYSTEM_DATA.map((item, index) => (
                <Button
                  imageSource={item.imageSource}
                  onPress={item.onPress}
                  key={index}
                />
              ))}
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 270,
  },
  navigationContainer: {
    marginTop: 30,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 5,
  },
  buttonsContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    fontSize: 18,
    textAlign: "center",
    marginBottom: 10,
    color: "#333",
  },
});

export default App;

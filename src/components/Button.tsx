import React from 'react';
import { Image, ImageSourcePropType, StyleSheet, TouchableOpacity } from 'react-native';
import { COLORS } from '../config/colors';

interface Props {
  imageSource: ImageSourcePropType;
  onPress: () => void;
}

export const Button: React.FC<Props> = ({ imageSource, onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image source={imageSource} style={styles.image} />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    padding: 50,
    borderRadius: 10,
    backgroundColor: COLORS.mainColor,
  },
  image: {
    width: 30,
    height: 30,
  }
})
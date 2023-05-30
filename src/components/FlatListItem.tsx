import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { COLORS } from "../config/colors";

interface Props {
  onPress: () => void;
  text: string;
  index: number;
}

export const FlatListItem: React.FC<Props> = ({ onPress, text, index }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: COLORS.mainColor,
    backgroundColor: "white",
  },
  text: {
    color: "black",
  }
})
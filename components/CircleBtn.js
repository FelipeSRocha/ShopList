import { StyleSheet, View, TouchableOpacity, Image } from "react-native";
import images from "../assets/images/requireImg";

export default function CircleBtn(props) {
  const data = props.data;

  const styles = StyleSheet.create({
    Type1: {
      height: 70,
      width: 70,
      borderRadius: 35,

      elevation: 2,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: data.backgroundColor,
      margin: 10,
      padding: 0,
    },
    Type2: {
      height: 40,
      width: 40,
      borderRadius: 30,

      elevation: 8,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: data.backgroundColor,
      margin: 10,
    },
    Type3: {
        height: 25,
        width: 35,
        borderRadius: 15,
  
        elevation: 8,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: data.backgroundColor,
        margin: 10,
      },
  });
  const imgStyles = StyleSheet.create({
    Type1: {
      flex: 1,
      width: 40,
      height: 40,
      resizeMode: "contain",
    },
    Type2: {
      flex: 1,
      width: 20,
      height: 20,
      resizeMode: "contain",
    },
    Type3: {
        flex: 1,
        width: 15,
        height: 15,
        resizeMode: "contain",
      },
  });
  return (
    <TouchableOpacity
      onPress={data.func}
      style={styles[props.type]}
      key={data.title}
    >
      <Image source={images[data.image]} style={imgStyles[props.type]} />
    </TouchableOpacity>
  );
}

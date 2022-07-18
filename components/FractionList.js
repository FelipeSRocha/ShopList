import { useState } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";

export default function FractionList() {
  return (
    <>
      <View style={styles.container}>
        <SelectBox></SelectBox>
        <TextBox></TextBox>
        <OptionBox></OptionBox>
      </View>
    </>
  );
}

function SelectBox() {
  return <View style={styles.SelectBox}></View>;
}
function TextBox() {
  return <TextInput style={styles.textInput}></TextInput>;
}
function OptionBox() {
    return <View style={styles.OptionBox}></View>;
  }

const styles = StyleSheet.create({
  container: {
    padding: '1%',
    width: "100%",
    flexDirection: "row",
    gap:'2.5%',
    height:40,
    
  },
  SelectBox: {
    width: "5%",
    backgroundColor: "#253f4b",

  },
  OptionBox: {
    width: "20%",
    borderColor: '#000000',
    borderWidth: 1,
  },
  textInput: {
    backgroundColor:'#c8dfea',
    width:'75%',
    fontSize:15,

  },
});

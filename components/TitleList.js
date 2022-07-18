import { useState } from "react";
import { StyleSheet, View, TextInput, Button } from "react-native";

export default function TitleList(props) {
  return (
    <>
      <View style={styles.container}>
        <TextBox></TextBox>
        <OptionBox addNewTask={props.addNewTask} id={props.id}></OptionBox>
      </View>
    </>
  );
}
function sendnewTask(props){
    console.log("teste")
    props.addNewTask(props.id)
}

function TextBox() {
  return <TextInput style={styles.textInput}></TextInput>;
}
function OptionBox(props) {
  return (
    <View style={styles.OptionBox}>
      <Button
        onPress={()=>{sendnewTask(props)}}
        key={props.id}
        id={props.id}
        title="Add"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: "1%",
    marginBottom: 5,
    width: "100%",
    flexDirection: "row",
    gap: "2.5%",
    height: 50,
    borderBottomColor: "#000000",
    borderBottomWidth: 1,
  },
  button: {
    color: "#253f4b",
  },
  textInput: {
    backgroundColor: "#c8dfea",
    width: "80%",
    fontSize: 25,
  },
  OptionBox: {
    width: "20%",
    borderColor: "#000000",
    borderWidth: 1,
  },
});

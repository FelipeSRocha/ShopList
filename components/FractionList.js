import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import CircleBtn from "./CircleBtn";
import theme from "../style"

export default function FractionList(props) {
  return (
    <>
      <View style={styles.container}>
        <SelectBox></SelectBox>
        <TextBox></TextBox>
        <OptionBox deleteTask={props.deleteTask} id={props.id}></OptionBox>
      </View>
    </>
  );
}

function SelectBox() {
  return <View style={styles.SelectBox}></View>;
}
function TextBox() {
  return <TextInput style={styles.textInput} placeholder="Novo Item"></TextInput>;
}

function OptionBox(props) {
  const DataButtons = {
    deleteTask: {
      title: "Remove",
      func: sendDeletedTask,
      image: "minus",
      backgroundColor: theme.negative.firstColor,
    },
  };
  function sendDeletedTask() {
    props.deleteTask(props.id);
  }
  return (
    <View style={styles.OptionBox}>
      <CircleBtn
        data={DataButtons.deleteTask}
        key={props.id}
        id={props.id}
        type="Type3"

      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: "1%",
    width: "100%",
    flexDirection: "row",
    gap: 20,
    height: 50,
  },
  SelectBox: {
    margin: 5,
    width: "10%",
    backgroundColor: theme.main.firstColor,
  },
  OptionBox: {
    margin: 5,
    width: "10%",
    alignItems: "center",
    justifyContent: "center",
  },
  textInput: {
    width: "75%",
    fontSize: 20,
    paddingLeft: 10,
    borderBottomColor: "#000000",
    borderBottomWidth: 1,
    color: theme.main.thirdColor,
  },
});

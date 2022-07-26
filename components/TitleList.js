import { StyleSheet, View, TextInput, Button } from "react-native";
import CircleBtn from "./CircleBtn";
import theme from "../style"

export default function TitleList(props) {
  return (
    <>
      <View style={styles.container}>
        <TextBox></TextBox>
        <OptionBox
          addNewTask={props.addNewTask}
          deleteList={props.deleteList}
          id={props.id}
        ></OptionBox>
      </View>
    </>
  );
}

function TextBox() {
  return <TextInput style={styles.textInput} placeholder="Categoria"></TextInput>;
}
function OptionBox(props) {
  const DataButtons = {
    AddTask: {
      title: "Add Task",
      func: sendnewTask,
      image: "plus",
      backgroundColor: "#5AF865",
    },
    DelList: {
        title: "Delete Lisk",
        func: sendDeletedList,
        image: "minus",
        backgroundColor: theme.negative.firstColor,
      },
  };
  function sendnewTask() {
    props.addNewTask(props.id);
  }
  function sendDeletedList() {
    props.deleteList(props.id);
  }
  return (
    <View style={styles.OptionBox}>
      <CircleBtn
        data={DataButtons.AddTask}
        key={props.id + "addTask"}
        id={props.id}
        type="Type2"
      />
      <CircleBtn
        data={DataButtons.DelList}
        key={props.id + "delList"}
        id={props.id}
        type="Type2"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingBottom: 5,
    marginBottom: 5,
    width: "100%",
    flexDirection: "row",
    gap: "2.5%",
    height: 50,
    borderBottomColor: "#742DC6",
    borderBottomWidth: 3,
  },
  button: {
    color: "#253f4b",
    flex: 1,
  },
  textInput: {
    width: "70%",
    fontSize: 35,
    paddingLeft: 15,
    color:theme.main.thirdColor
  },
  OptionBox: {
    width: "40%",
    padding: 5,
    gap: 5,
    flexDirection: "row",
    flex: 2,
    alignItems: "center",
    justifyContent: "center",
  },
});

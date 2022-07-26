import { StyleSheet, Text, View, ScrollView } from "react-native";
import FractionList from "./FractionList";
import TitleList from "./TitleList";
import theme from "../style"

export default function SectionList(props) {
  const owntaskList = props.data.owntaskList;
  return (
    <>
      <View style={styles.container}>
        <TitleList addNewTask={props.addNewTask} id={props.id} deleteList={props.deleteList}></TitleList>
        <ScrollView>
          {Object.keys(owntaskList).map((key) => {
            return (
              <FractionList
                id={props.id + "-" + key}
                key={props.id + "-" + key}
                data={owntaskList[key]}
                taskNumber={owntaskList[key].name}
                deleteTask={props.deleteTask}
                changeTaskName={props.changeTaskName}
              />
            );
          })}
        </ScrollView>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.main.fourfhColor,
    padding: "2.5%",
    width: "100%",
    flexDirection: "column",
    gap: "2.5%",
    borderRadius:20,

    marginTop: 5,
  },

});

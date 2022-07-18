import { useState } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import FractionList from "./FractionList";
import TitleList from "./TitleList";

export default function SectionList(props) {
  const owntaskList = props.data.owntaskList;
  return (
    <>
      <View style={styles.container}>
        <TitleList addNewTask={props.addNewTask} id={props.id}></TitleList>
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
    backgroundColor: "#acc8d7",
    padding: "2.5%",
    width: "100%",
    flexDirection: "column",
    gap: "2.5%",
    maxHeight:'80vh'
  },

});

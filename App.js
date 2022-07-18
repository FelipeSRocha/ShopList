import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, ScrollView } from "react-native";
import { useState } from "react";
import SectionList from "./components/SectionList";

export default function App() {
  const [dataList, setdataList] = useState({});
  const [listNumber, setListNumber] = useState(1);

  const addNewList = function () {
    const copyDataList = { ...dataList };
    setListNumber(listNumber + 1);
    copyDataList["Lista" + listNumber] = {
      name: "Nova Lista",
      owntaskList: { Tarefa1: { name: "Nova Tarefa", status: "unchecked" } },
      TaskNumber: 1,
    };
    setdataList(copyDataList);
  };

  function addNewTask(idLista){
    //Nesse metodo, o nome da lista e da tarefa vai aumentando sem parar
    // const idLista = event.target.id.substr(8);
    console.log(idLista)
    const copyDataList = { ...dataList };
    

    copyDataList[idLista].TaskNumber = copyDataList[idLista].TaskNumber + 1;

    const lengthTaskList = copyDataList[idLista].TaskNumber;

    copyDataList[idLista].owntaskList["Tarefa" + lengthTaskList] = {
      name: "Nova Tarefa",
      status: "unchecked",
    };
    console.log(idLista, "Tarefa" + lengthTaskList);
    setdataList(copyDataList);
  };

  const deleteTask = (event) => {
    const copyDataList = { ...dataList };
    const [idLista, idTask] = event.target.id.substr(4).split("-");
    delete copyDataList[idLista].owntaskList[idTask];

    setdataList(copyDataList);
  };

  const deleteList = (event) => {
    const copyDataList = { ...dataList };
    const idLista = event.target.id.substr(11);
    delete copyDataList[idLista];
    setdataList(copyDataList);
  };

  const changeListName = (event) => {
    const copyDataList = { ...dataList };
    const idLista = event.target.id.substr(6);
    const listName = event.target.value;
    copyDataList[idLista].name = listName;
    setdataList(copyDataList);
  };

  const changeTaskName = (event) => {
    const copyDataList = { ...dataList };
    const [idLista, idTask] = event.target.id.substr(8).split("-");
    const taskName = event.target.value;
    copyDataList[idLista].owntaskList[idTask] = taskName;
    setdataList(copyDataList);
  };
  return (
    <>
      <StatusBar style="auto" />

      <View style={styles.header}>
        <Text> Header</Text>
      </View>
      <View style={styles.body}>
        <Button onPress={addNewList} title="Add"></Button>
        <ScrollView>
        {Object.keys(dataList).map((keys) => {
          return (
            <SectionList
              data={dataList[keys]}
              id={keys}
              key={keys}
              addNewTask={addNewTask}
              deleteTask={deleteTask}
              deleteList={deleteList}
              changeTaskName={changeTaskName}
              changeListName={changeListName}
            />
          );
        })}
        </ScrollView>


      </View>
      <View style={styles.bottom}>
        <Text> Bottom</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#253f4b",
    height: 40,
    top: 0,
    alignItems: "center",
    justifyContent: "center",
  },
  body: {
    flex: 1,
    backgroundColor: "#537d90",
    height: '100%',
  },
  bottom: {
    position: "absolute",
    backgroundColor: "#253f4b",
    height: 60,
    width: "100vw",
    bottom: 0,
    alignItems: "center",
    justifyContent: "center",
  },
});

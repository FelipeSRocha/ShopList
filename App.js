import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { useState } from "react";
import SectionList from "./components/SectionList";
import CircleBtn from "./components/CircleBtn";
import theme from "./style";

export default function App() {
  const [dataList, setdataList] = useState({});
  const [listNumber, setListNumber] = useState(1);
  const [stateMode, setStateMode] = useState("none");

  const addNewList = function () {
    const copyDataList = { ...dataList };
    setListNumber(listNumber + 1);
    copyDataList["Lista" + listNumber] = {
      name: "Nova Lista",
      owntaskList: { Tarefa1: { name: "Nova Tarefa", status: "unchecked" } },
      TaskNumber: 1,
    };
    setdataList(copyDataList);
    setStateMode("shop");
  };

  function addNewTask(idLista) {
    //Nesse metodo, o nome da lista e da tarefa vai aumentando sem parar
    const copyDataList = { ...dataList };
    copyDataList[idLista].TaskNumber = copyDataList[idLista].TaskNumber + 1;
    const lengthTaskList = copyDataList[idLista].TaskNumber;

    copyDataList[idLista].owntaskList["Tarefa" + lengthTaskList] = {
      name: "Nova Tarefa",
      status: "unchecked",
      mode: "shop"
    };
    console.log(idLista, "Tarefa" + lengthTaskList);
    setdataList(copyDataList);
  }

  function deleteTask(idTaskList) {
    const copyDataList = { ...dataList };
    const [idLista, idTask] = idTaskList.split("-");
    delete copyDataList[idLista].owntaskList[idTask];

    setdataList(copyDataList);
  }

  function deleteList(idLista) {
    const copyDataList = { ...dataList };

    delete copyDataList[idLista];
    setdataList(copyDataList);
  }

  //   const changeListName = (event) => {
  //     const copyDataList = { ...dataList };
  //     const idLista = event.target.id.substr(6);
  //     const listName = event.target.value;
  //     copyDataList[idLista].name = listName;
  //     setdataList(copyDataList);
  //   };

  //   const changeTaskName = (event) => {
  //     const copyDataList = { ...dataList };
  //     const [idLista, idTask] = event.target.id.substr(8).split("-");
  //     const taskName = event.target.value;
  //     copyDataList[idLista].owntaskList[idTask] = taskName;
  //     setdataList(copyDataList);
  //   };
  const DataButtons = {
    AddList: {
      title: "Nova_lista",
      func: addNewList,
      image: "plus",
      backgroundColor: "#5AF865",
    },
  };

  function RenderStateMode() {
    switch (stateMode) {
      case "none":
        return <></>;
      case "shop":
        return (
          <>
            {Object.keys(dataList).map((keys) => (
              <SectionList
                data={dataList[keys]}
                id={keys}
                key={keys}
                addNewTask={addNewTask}
                deleteTask={deleteTask}
                deleteList={deleteList}
              />
            ))}
          </>
        );
    }
  }

  return (
    <>
      <StatusBar style="auto" barStyle="light-content" />
      <View style={styles.master}>
        <View style={styles.header}>
          <Text> Header</Text>
        </View>
        <View style={styles.body}>
          <ScrollView>
            <RenderStateMode data={dataList} />
          </ScrollView>
        </View>
        <View style={styles.bottom}>
          <ScrollView
            horizontal={true}
            key="bottom"
            contentContainerStyle={styles.Container}
          >
            {Object.keys(DataButtons).map((key) => {
              return (
                <CircleBtn
                  data={DataButtons[key]}
                  key={key}
                  type="Type1"
                ></CircleBtn>
              );
            })}
          </ScrollView>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  master: {
    flex: 1,
  },
  header: {
    backgroundColor: theme.main.firstColor,
    height: 40,
    top: 0,
    alignItems: "center",
    justifyContent: "center",
  },
  body: {
    backgroundColor: theme.main.firstColor,
    flex: 1,
  },
  bottom: {
    position: "relative",
    backgroundColor: theme.main.firstColor,
    height: 100,
    width: "100%",
    bottom: 0,
  },

  Container: {
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
});

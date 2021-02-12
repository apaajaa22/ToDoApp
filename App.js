import React, {useState} from 'react';
import {
  Keyboard,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {AddButton} from './assets';
import InputText from './InputText';
import ToDoList from './ToDoList';
const App = () => {
  const [taskItems, setTaskItems] = useState([]);
  const [task, setTask] = useState('');
  const onSubmit = () => {
    Keyboard.dismiss();
    setTaskItems([...taskItems, task]);
    setTask(null);
  };
  const completeTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
  };
  return (
    <View style={styles.page}>
      <View style={styles.header}>
        <Text style={styles.title}>What's up!</Text>
      </View>
      <View style={styles.wrapperList}>
        <View style={styles.line} />
        <View style={styles.gap} />
        <View style={styles.line} />
        <Text style={styles.subTitle}>TODAY'S TASKS</Text>
        <ScrollView
          style={styles.wrapperTodoList}
          showsVerticalScrollIndicator={false}>
          {taskItems.map((item, index) => {
            return (
              <TouchableOpacity key={index} onPress={() => completeTask(index)}>
                <ToDoList label={item} />
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </View>
      <View style={styles.addButton}>
        <InputText value={task} onChangeText={(label) => setTask(label)} />
        <View style={styles.gapWidth} />
        <TouchableOpacity activeOpacity={0.7} onPress={onSubmit}>
          <AddButton />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  gap: {height: 10},
  gapWidth: {width: 20},
  header: {padding: 40},
  page: {
    flex: 1,
    backgroundColor: '#3450A1',
  },
  line: {borderBottomWidth: 2, color: 'black'},
  titleCategory: {paddingHorizontal: 40},
  category: {color: 'white'},
  title: {color: '#FFFFFF', fontSize: 32, fontWeight: 'bold'},
  subTitle: {color: '#FFFFFF', fontSize: 14, marginVertical: 30},
  addButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 40,
    paddingVertical: 20,
    paddingTop: 10,
  },
  containerCategory: {
    flexDirection: 'row',
    marginHorizontal: 40,
    marginRight: 20,
  },
  wrapperList: {paddingHorizontal: 40, flex: 1},
  wrapperTodoList: {flex: 1},
});

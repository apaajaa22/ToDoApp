import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {AddButton} from './assets';
import CardListSection from './CardListSection';
import ToDoList from './ToDoList';
const App = () => {
  return (
    <View style={styles.page}>
      <View style={styles.header}>
        <Text style={styles.title}>What's up, Reza !</Text>
      </View>
      <View style={styles.titleCategory}>
        <Text style={styles.category}>CATEGORIES</Text>
      </View>
      <View style={styles.gap} />
      <View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.containerCategory}>
            <CardListSection task="5" title="Bisnis" />
            <CardListSection task="4" title="Personal" />
            <CardListSection task="7" title="Kantor" />
          </View>
        </ScrollView>
      </View>
      <View style={styles.wrapperList}>
        <Text style={styles.subTitle}>TODAY'S TASKS</Text>
        <ScrollView
          style={styles.wrapperTodoList}
          showsVerticalScrollIndicator={false}>
          <ToDoList label="Beli kapur" />
          <ToDoList label="Beli ayam kampung 1 ekor" />
          <ToDoList label="Beli kangkung 1 ikat" />
          <ToDoList label="Beli minyak" />
        </ScrollView>
      </View>
      <View style={styles.addButton}>
        <AddButton />
      </View>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  gap: {height: 10},
  header: {padding: 40},
  page: {
    flex: 1,
    backgroundColor: '#3450A1',
  },
  titleCategory: {paddingHorizontal: 40},
  category: {color: 'white'},
  title: {color: '#FFFFFF', fontSize: 32, fontWeight: 'bold'},
  subTitle: {color: '#FFFFFF', fontSize: 14, marginVertical: 30},
  addButton: {position: 'absolute', bottom: 40, right: 40},
  containerCategory: {
    flexDirection: 'row',
    marginHorizontal: 40,
    marginRight: 20,
  },
  wrapperList: {paddingHorizontal: 40, flex: 1},
  wrapperTodoList: {flex: 1},
});

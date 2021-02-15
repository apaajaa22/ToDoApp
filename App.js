import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {Submit} from './assets';

const ItemList = ({taskTitle, onDelete}) => {
  return (
    <View style={styles.container}>
      <View style={styles.containerText}>
        <Text style={styles.itemList}>{taskTitle}</Text>
      </View>
      <View>
        <TouchableOpacity onPress={onDelete}>
          <Text style={styles.delete}>X</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const App = ({taskTitle}) => {
  const [task, setTask] = useState('');
  const [taskLists, setTaskLists] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const onSubmit = () => {
    const data = {
      task,
    };
    axios
      .post('http://10.0.2.2:3000/users', data)
      .then((res) => {
        setTask('');
        getData();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getData = () => {
    axios.get('http://10.0.2.2:3000/users').then((res) => {
      console.log('res: ', res);
      setTaskLists(res.data);
    });
  };

  const DeleteItem = (item) => {
    console.log('item: ', item);
    axios.delete(`http://10.0.2.2:3000/users/${item.id}`).then((res) => {
      console.log('res :', res);
      getData();
    });
  };

  return (
    <View style={styles.page}>
      <Text style={styles.title}>Hai mau menulis catatan apa hari ini ?</Text>
      <View style={styles.wrapper}>
        <Text style={styles.subtitle}>Task</Text>
        <ScrollView>
          {taskLists.map((tasklist) => {
            return (
              <ItemList
                key={tasklist.id}
                taskTitle={tasklist.task}
                onDelete={() => DeleteItem(tasklist)}
              />
            );
          })}
        </ScrollView>
      </View>
      <View style={styles.wrapperTextInput}>
        <TextInput
          placeholder="Isi tulisanmu disini"
          style={styles.textInput}
          value={task}
          onChangeText={(value) => setTask(value)}
        />
        <TouchableOpacity onPress={onSubmit}>
          <Submit />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  page: {flex: 1, backgroundColor: '#34e7e4', padding: 25},
  title: {color: '#3c40c6', fontSize: 24, fontWeight: 'bold', maxWidth: '70%'},
  wrapper: {flex: 1, marginTop: 20},
  subtitle: {color: '#3c40c6', fontSize: 18, fontWeight: '500'},
  container: {
    backgroundColor: '#575fcf',
    borderRadius: 10,
    maxWidth: '100%',
    maxHeight: 65,
    flex: 1,
    marginTop: 10,
    padding: 15,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  containerText: {flex: 1},

  delete: {fontSize: 20, fontWeight: 'bold', color: '#ff7675'},
  itemList: {fontSize: 16, color: '#f7f1e3', fontWeight: 'bold'},
  textInput: {
    borderRadius: 10,
    borderWidth: 1,
    backgroundColor: '#ffda79',
    fontSize: 16,
    padding: 15,
    width: 320,
    marginTop: 10,
  },
  wrapperTextInput: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

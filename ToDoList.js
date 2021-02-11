import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Circle} from './assets';

const ToDoList = ({label}) => {
  return (
    <View style={styles.page}>
      <View>
        {label && (
          <View style={styles.container}>
            <Circle />
            <View>
              <Text style={styles.todo}>{label}</Text>
            </View>
          </View>
        )}
      </View>
    </View>
  );
};

export default ToDoList;

const styles = StyleSheet.create({
  page: {marginBottom: 10},
  container: {
    backgroundColor: '#BBCAF6',
    width: '100%',
    padding: 20,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  todo: {flex: 1, color: '#041955', fontSize: 18, marginLeft: 10},
});

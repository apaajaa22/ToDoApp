import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const CardListSection = ({task, title}) => {
  return (
    <View style={styles.page}>
      <Text style={styles.container}>{task} tasks</Text>
      <Text style={styles.label}>{title}</Text>
    </View>
  );
};

export default CardListSection;

const styles = StyleSheet.create({
  page: {
    backgroundColor: '#041955',
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
    width: 140,
    height: 100,
    justifyContent: 'center',
    marginRight: 20,
  },
  container: {color: '#3D518A', fontSize: 14},
  label: {color: '#FFFFFF', fontSize: 18},
});

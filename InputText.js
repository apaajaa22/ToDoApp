import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';

const InputText = ({onChangeText, value}) => {
  return (
    <View style={styles.page}>
      <TextInput
        style={styles.input}
        placeholder="Tulis disini"
        onChangeText={onChangeText}
        value={value}
      />
    </View>
  );
};

export default InputText;

const styles = StyleSheet.create({
  page: {backgroundColor: 'white', width: '80%', borderRadius: 10},
  input: {
    alignItems: 'center',
    flex: 1,
    paddingLeft: 10,
    fontSize: 16,
  },
});

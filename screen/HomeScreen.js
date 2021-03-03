import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Formbutton from '../components/FormButton';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home</Text>
      <Formbutton buttonTitle="Logout" onPress={() => {}} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f9fafd',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  text: {
    fontSize: 20,
    color: '#333333',
  },
});

export default HomeScreen;

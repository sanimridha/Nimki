import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

const OnboardingScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>Onboarding Screen</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={{color: 'red'}}>Click Here</Text>
      </TouchableOpacity>
    </View>
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

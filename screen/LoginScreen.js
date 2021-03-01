import React from 'react';
import {StyleSheet, Text, Image, View} from 'react-native';

const LogInScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/images/Nimki-Logo.png')}
        resizeMode="contain"
        style={styles.logo}
      />
    </View>
  );
};

export default LogInScreen;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    paddingTop: 50,
  },
  logo: {
    height: 150,
    width: 150,
    resizeMode: 'cover',
  },
  text: {
    fontFamily: 'Kufam-SemiBoldItalic',
    fontSize: 28,
    marginBottom: 10,
    color: '#051d5f',
  },
  navButton: {
    marginTop: 15,
  },
  forgotButton: {
    marginVertical: 35,
  },
  navButtonText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#2e64e5',
    fontFamily: 'Lato-Regular',
  },
});

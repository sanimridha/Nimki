import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {FloatingAction} from 'react-native-floating-action';
import Icon from 'react-native-vector-icons/Ionicons';

import {InputField, InputWrapper} from '../styles/AddPost';

const AddPostScreen = () => {
  const actions = [
    {
      text: 'Take Photo',
      icon: <Icon name="camera-outline" style={styles.actionButtonIcon} />,
      name: 'bt_takePhoto',
      position: 3,
      buttonSize: 46,
      color: 'orange',
    },
    {
      text: 'Choose Photo',
      icon: <Icon name="md-images-outline" style={styles.actionButtonIcon} />,
      name: 'bt_choosePhoto',
      position: 2,
      buttonSize: 46,
      color: 'green',
    },
  ];
  return (
    <View style={styles.container}>
      <InputWrapper>
        <InputField
          placeholder="What's on your mind?"
          multiline
          numberOfLines={4}
        />
      </InputWrapper>
      <FloatingAction
        actions={actions}
        onPressItem={(name) => {
          console.log(`selected button: ${name}`);
        }}
        color="red"
      />
    </View>
  );
};

export default AddPostScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white',
  },
});

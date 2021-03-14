import React, {useState} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {FloatingAction} from 'react-native-floating-action';
import Icon from 'react-native-vector-icons/Ionicons';
import ImagePicker from 'react-native-image-crop-picker';

import {AddImage, InputField, InputWrapper} from '../styles/AddPost';

const AddPostScreen = () => {
  const [image, setImage] = useState(null);
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
  const takePhotoFromCamera = () => {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
    }).then((image) => {
      console.log(image);
      const imageUri = Platform.OS === 'ios' ? image.sourceURL : image.path;
      setImage(imageUri);
    });
  };
  const choosePhotoFromLibrary = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then((image) => {
      console.log(image);
      const imageUri = Platform.OS === 'ios' ? image.sourceURL : image.path;
      setImage(imageUri);
    });
  };

  return (
    <View style={styles.container}>
      <InputWrapper>
        {image != null ? <AddImage source={{uri: image}} /> : null}
        <InputField
          placeholder="What's on your mind?"
          multiline
          numberOfLines={4}
        />
      </InputWrapper>
      <FloatingAction
        actions={actions}
        onPressItem={(name) => {
          name == 'bt_takePhoto'
            ? takePhotoFromCamera()
            : choosePhotoFromLibrary();
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

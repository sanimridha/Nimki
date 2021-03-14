import React, {useState} from 'react';
import {Alert, Platform, StyleSheet, Text, View} from 'react-native';
import {FloatingAction} from 'react-native-floating-action';
import Icon from 'react-native-vector-icons/Ionicons';
import ImagePicker from 'react-native-image-crop-picker';
import storage from '@react-native-firebase/storage';

import {
  AddImage,
  InputField,
  InputWrapper,
  SubmitBtn,
  SubmitBtnText,
} from '../styles/AddPost';

const AddPostScreen = () => {
  const [image, setImage] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [transferrd, setTransferd] = useState(0);
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
  const submitPost = async () => {
    const uploadUri = image;
    const fileName = uploadUri.substring(uploadUri.lastIndexOf('/') + 1);
    setUploading(true);
    try {
      await storage().ref(fileName).putFile(uploadUri);
      setUploading(false);
      Alert.alert(
        'Image uploaded!',
        'Your Image has been uploaded to the Cloud Firebase Storage Successfully.',
      );
    } catch (e) {
      console.log(e);
    }
    setImage(null);
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
        <SubmitBtn onPress={submitPost}>
          <SubmitBtnText>Post</SubmitBtnText>
        </SubmitBtn>
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

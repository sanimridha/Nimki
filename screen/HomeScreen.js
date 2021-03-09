import React from 'react';
import {
  Card,
  Container,
  UserInfo,
  UserImg,
  PostTime,
  UserName,
  UserInfoText,
  PostText,
  PostImg,
  InteractionWrapper,
  Interaction,
  InteractionText,
  Divider,
} from '../styles/FeedStyles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {StyleSheet, View} from 'react-native';

const HomeScreen = () => {
  return (
    <Container>
      {/* <View style={styles.container}> */}
      <Card>
        <UserInfo>
          <UserImg source={require('../assets/users/user-3.jpg')} />
          <UserInfoText>
            <UserName>Alexzendra Daddario</UserName>
            <PostTime>4 hours ago</PostTime>
          </UserInfoText>
        </UserInfo>
        <PostText>hey there... how are you guys?</PostText>
        <PostImg source={require('../assets/posts/post-img-1.jpg')} />
        <InteractionWrapper>
          <Interaction>
            <Ionicons name="heart-outline" size={24} color="black" />
            <InteractionText>Like</InteractionText>
          </Interaction>
          <Interaction>
            <Ionicons name="md-chatbubble-outline" size={24} color="black" />
            <InteractionText>Comment</InteractionText>
          </Interaction>
        </InteractionWrapper>
      </Card>
      <Card>
        <UserInfo>
          <UserImg source={require('../assets/users/user-3.jpg')} />
          <UserInfoText>
            <UserName>Alexzendra Daddario</UserName>
            <PostTime>4 hours ago</PostTime>
          </UserInfoText>
        </UserInfo>
        <PostText>hey there... how are you guys?</PostText>
        {/* <PostImg source={require('../assets/posts/post-img-1.jpg')} /> */}
        <Divider />
        <InteractionWrapper>
          <Interaction active>
            <Ionicons name="heart" size={24} color="#2e64e5" />
            <InteractionText active>12 Likes</InteractionText>
          </Interaction>
          <Interaction>
            <Ionicons name="md-chatbubble-outline" size={24} color="black" />
            <InteractionText>Comment</InteractionText>
          </Interaction>
        </InteractionWrapper>
      </Card>
      {/* </View> */}
    </Container>
  );
};

export default HomeScreen;
const styles = StyleSheet.create({
  container: {
    shadowColor: 'white',
    shadowOpacity: 0.26,
    // shadowOffset: {width: 1000, height: 2},
    shadowRadius: 10,
    elevation: 4,
    backgroundColor: 'white',
    width: '100%',
  },
});

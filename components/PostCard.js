import React, {useContext} from 'react';
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
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {TouchableOpacity, View} from 'react-native';
import {AuthContext} from '../navigation/AuthProvider';

const PostCard = ({item}) => {
  const {user, logout} = useContext(AuthContext);

  var likeIcon = item.liked ? 'heart' : 'heart-outline';
  var likeIconColor = item.liked ? '#2e64e5' : '#333';
  var likeText, commentText;
  if (item.likes == 1) {
    likeText = '1 Like';
  } else if (item.likes > 1) {
    likeText = item.likes + ' Likes';
  } else {
    likeText = 'Like';
  }

  if (item.comments == 1) {
    commentText = '1 Comment';
  } else if (item.comments > 1) {
    commentText = item.comments + ' Comments';
  } else {
    commentText = 'Comment';
  }
  return (
    <Card>
      <UserInfo>
        <UserImg source={{uri: item.userImg}} />
        <UserInfoText>
          <UserName>{item.userName}</UserName>
          <PostTime>{item.postTime.toString()}</PostTime>
        </UserInfoText>
      </UserInfo>
      <PostText>{item.post}</PostText>
      {item.postImg != null ? (
        <PostImg source={{uri: item.postImg}} />
      ) : (
        <Divider />
      )}
      <InteractionWrapper>
        <Interaction active={item.liked}>
          <Ionicons name={likeIcon} size={24} color={likeIconColor} />
          <InteractionText active={item.liked}>{likeText}</InteractionText>
        </Interaction>
        <Interaction>
          <Ionicons name="md-chatbubble-outline" size={24} color="black" />
          <InteractionText>{commentText}</InteractionText>
        </Interaction>
        {user.uid == item.userId ? (
          <View>
            {/* <Interaction> */}
            <TouchableOpacity
              style={{
                alignItems: 'center',
                paddingRight: 40,
              }}>
              <MaterialCommunityIcons
                name="delete-outline"
                size={24}
                color="black"
              />
              {/* <InteractionText>Delete</InteractionText> */}
            </TouchableOpacity>
            {/* </Interaction> */}
          </View>
        ) : null}
      </InteractionWrapper>
    </Card>
  );
};

export default PostCard;

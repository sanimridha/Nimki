import React, {useEffect, useState} from 'react';
import {Container} from '../styles/FeedStyles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {FlatList, StyleSheet, View} from 'react-native';
import PostCard from '../components/PostCard';
import firestore from '@react-native-firebase/firestore';

// const Posts = [
//   {
//     id: '1',
//     userName: 'Jenny Doe',
//     userImg: require('../assets/users/user-3.jpg'),
//     postTime: '4 mins ago',
//     post:
//       'Hey there, this is my test for a post of my social app in React Native.',
//     postImg: require('../assets/posts/post-img-3.jpg'),
//     liked: true,
//     likes: '14',
//     comments: '5',
//   },
//   {
//     id: '2',
//     userName: 'John Doe',
//     userImg: require('../assets/users/user-1.jpg'),
//     postTime: '2 hours ago',
//     post:
//       'Hey there, this is my test for a post of my social app in React Native.',
//     postImg: 'none',
//     liked: false,
//     likes: '8',
//     comments: '0',
//   },
//   {
//     id: '3',
//     userName: 'Ken William',
//     userImg: require('../assets/users/user-4.jpg'),
//     postTime: '1 hours ago',
//     post:
//       'Hey there, this is my test for a post of my social app in React Native.',
//     postImg: require('../assets/posts/post-img-2.jpg'),
//     liked: true,
//     likes: '1',
//     comments: '0',
//   },
//   {
//     id: '4',
//     userName: 'Selina Paul',
//     userImg: require('../assets/users/user-6.jpg'),
//     postTime: '1 day ago',
//     post:
//       'Hey there, this is my test for a post of my social app in React Native.',
//     postImg: require('../assets/posts/post-img-4.jpg'),
//     liked: true,
//     likes: '22',
//     comments: '4',
//   },
//   {
//     id: '5',
//     userName: 'Christy Alex',
//     userImg: require('../assets/users/user-7.jpg'),
//     postTime: '2 days ago',
//     post:
//       'Hey there, this is my test for a post of my social app in React Native.',
//     postImg: 'none',
//     liked: false,
//     likes: '0',
//     comments: '0',
//   },
// ];

const HomeScreen = () => {
  const [posts, setPosts] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchPost = async () => {
      try {
        const list = [];

        await firestore()
          .collection('posts')
          .get()
          .then((querySnapshot) => {
            console.log('Total Post: ', querySnapshot.size);

            querySnapshot.forEach((doc) => {
              const {
                userId,
                post,
                postImg,
                postTime,
                likes,
                comments,
              } = doc.data();
              list.push({
                id: doc.id,
                userId,
                userName: 'Test Name',
                userImg:
                  'https://storage.googleapis.com/gweb-uniblog-publish-prod/images/Chrome__logo.max-500x500.png',
                postTime: postTime,
                post,
                postImg,
                liked: false,
                likes,
                comments,
              });
            });
          });
        setPosts(list);

        if (loading) {
          setLoading(false);
        }
        console.log('post : ', posts);
      } catch (e) {
        console.log(e);
      }
    };
    fetchPost();
  }, []);

  return (
    <Container>
      {/* <View style={styles.container}> */}
      <FlatList
        data={posts}
        renderItem={({item}) => <PostCard item={item} />}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
      />
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

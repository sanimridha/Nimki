import React, {useEffect, useState} from 'react';
import {Container} from '../styles/FeedStyles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
  Alert,
  FlatList,
  SafeAreaView,
  StyleSheet,
  View,
  ScrollView,
} from 'react-native';
import PostCard from '../components/PostCard';
import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

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
  const [deleted, setDeleted] = useState(false);

  const fetchPost = async () => {
    try {
      const list = [];

      await firestore()
        .collection('posts')
        .orderBy('postTime', 'desc')
        .get()
        .then((querySnapshot) => {
          // console.log('Total Post: ', querySnapshot.size);

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
                'https://avatars.githubusercontent.com/u/48827749?s=400&u=827f321639faeb741987a078b4172602eff460f7&v=4',
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
      // console.log('post : ', posts);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    fetchPost();
  }, []);

  useEffect(() => {
    fetchPost();
    setDeleted(false);
  }, [deleted]);

  const handleDelete = (postId) => {
    Alert.alert(
      'Delete post',
      'Are you sure?',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed!'),
          style: 'cancel',
        },
        {
          text: 'Confirm',
          onPress: () => deletePost(postId),
        },
      ],
      {cancelable: false},
    );
  };

  const deletePost = (postId) => {
    console.log('current post ID: ', postId);

    firestore()
      .collection('posts')
      .doc(postId)
      .get()
      .then((documentSnapshot) => {
        if (documentSnapshot.exists) {
          const {postImg} = documentSnapshot.data();

          if (postImg != null) {
            //Firebase image deletion
            const storageRef = storage().refFromURL(postImg);
            const imageRef = storage().ref(storageRef.fullPath);

            imageRef
              .delete()
              .then(() => {
                console.log(`${postImg} has been deleted successfully`);
                deleteFirestoreData(postId);
                setDeleted(true);
              })
              .catch((e) => {
                console.log('Error while deleting the image ', e);
              });
          } else {
            deleteFirestoreData(postId);
          }
        }
      });
  };
  const deleteFirestoreData = (postId) => {
    //delete firestore data
    firestore()
      .collection('posts')
      .doc(postId)
      .delete()
      .then(() => {
        Alert.alert('Post Deleted!', 'Your post has deleted successfully!');
      });
  };
  const ListHeader = () => {
    return null;
  };

  return (
    <>
      {loading ? (
        <ScrollView
          style={{flex: 1}}
          contentContainerStyle={{alignItems: 'center'}}>
          <SkeletonPlaceholder>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <View style={{width: 60, height: 60, borderRadius: 50}} />
              <View style={{marginLeft: 10}}>
                <View style={{width: 120, height: 20, borderRadius: 4}} />
                <View
                  style={{marginTop: 6, width: 80, height: 20, borderRadius: 4}}
                />
              </View>
            </View>
            <View style={{marginTop: 10, marginBottom: 30}}>
              <View style={{width: 300, height: 20, borderRadius: 4}}></View>
              <View
                style={{
                  marginTop: 6,
                  width: 250,
                  height: 20,
                  borderRadius: 4,
                }}></View>
              <View
                style={{
                  marginTop: 6,
                  width: 350,
                  height: 200,
                  borderRadius: 4,
                }}></View>
            </View>
          </SkeletonPlaceholder>
          <SkeletonPlaceholder>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <View style={{width: 60, height: 60, borderRadius: 50}} />
              <View style={{marginLeft: 10}}>
                <View style={{width: 120, height: 20, borderRadius: 4}} />
                <View
                  style={{marginTop: 6, width: 80, height: 20, borderRadius: 4}}
                />
              </View>
            </View>
            <View style={{marginTop: 10, marginBottom: 30}}>
              <View style={{width: 300, height: 20, borderRadius: 4}}></View>
              <View
                style={{
                  marginTop: 6,
                  width: 250,
                  height: 20,
                  borderRadius: 4,
                }}></View>
              <View
                style={{
                  marginTop: 6,
                  width: 350,
                  height: 200,
                  borderRadius: 4,
                }}></View>
            </View>
          </SkeletonPlaceholder>
        </ScrollView>
      ) : (
        <Container>
          {/* <View style={styles.container}> */}
          <FlatList
            data={posts}
            renderItem={({item}) => (
              <PostCard item={item} onDelete={handleDelete} />
            )}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={ListHeader}
            ListFooterComponent={ListHeader}
          />
          {/* </View> */}
        </Container>
      )}
    </>
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

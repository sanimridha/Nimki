import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeScreen from '../screen/HomeScreen';
import ChatScreen from '../screen/ChatScreen';
import ProfileScreen from '../screen/ProfileScreen';
import AddPostScreen from '../screen/AddPostScreen';
import {Text, TouchableOpacity, View} from 'react-native';
import MessagesScreen from '../screen/MessagesScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const FeedStack = ({navigation}) => (
  <Stack.Navigator>
    <Stack.Screen
      name="Nikmi"
      component={HomeScreen}
      options={{
        headerTitleAlign: 'center',
        headerTitleStyle: {
          color: '#2e64e5',
          fontFamily: 'Kufam-SemiBoldItalic',
          fontSize: 18,
        },
        headerStyle: {
          shadowColor: '#fff',
          elevation: 0,
        },
        headerRight: () => (
          <View style={{marginRight: 10}}>
            <FontAwesome5.Button
              name="plus"
              size={22}
              backgroundColor="#fff"
              color="#2e64e5"
              onPress={() => navigation.navigate('AddPost')}
            />
          </View>
        ),
      }}
    />
    <Stack.Screen
      name="AddPost"
      component={AddPostScreen}
      options={{
        title: '',
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: '#ccffff',
          shadowColor: '#2e64e515',
          elevation: 0,
        },
        headerBackTitleVisible: false,
        headerBackImage: () => (
          <View style={{marginLeft: 15}}>
            <Ionicons name="arrow-back" size={25} color="#2e64e5" />
          </View>
        ),
        // headerRight: () => (
        //   <View style={{marginRight: 15}}>
        //     <TouchableOpacity>
        //       <Text
        //         style={{
        //           fontFamily: 'Lato-Regular',
        //           fontWeight: 'bold',
        //           fontSize: 17,
        //           color: '#2E63E5',
        //         }}>
        //         Post
        //       </Text>
        //     </TouchableOpacity>
        //   </View>
        // ),
      }}
    />
    <Stack.Screen
      name="HomeProfile"
      component={ProfileScreen}
      options={{
        title: '',
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: '#fff',
          shadowColor: '#fff',
          elevation: 0,
        },
        headerBackTitleVisible: false,
        headerBackImage: () => (
          <View style={{marginLeft: 15}}>
            <Ionicons name="arrow-back" size={25} color="#2e64e5" />
          </View>
        ),
      }}
    />
  </Stack.Navigator>
);
const MessageStack = ({navigation}) => (
  <Stack.Navigator>
    <Stack.Screen name="Messages" component={MessagesScreen} />
    <Stack.Screen
      name="Chat"
      component={ChatScreen}
      options={({route}) => ({
        title: route.params.userName,
        headerBackTitleVisible: false,
      })}
    />
  </Stack.Navigator>
);

const AppStack = () => {
  return (
    // <Stack.Navigator>
    //   <Stack.Screen name="Home" component={HomeScreen} />
    // </Stack.Navigator>
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#2e64e5',
      }}>
      <Tab.Screen
        name="Home"
        component={FeedStack}
        options={({color, size}) => {
          return {
            tabBarLabel: 'Home',
            tabBarIcon: () => (
              <MaterialCommunityIcons name="home" size={25} color={color} />
            ),
          };
        }}
      />
      <Tab.Screen
        name="Messages"
        component={MessageStack}
        options={({color, size}) => {
          return {
            tabBarLabel: 'Messages',
            tabBarIcon: () => (
              <MaterialCommunityIcons
                name="android-messages"
                size={24}
                color={color}
              />
            ),
          };
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={({color, size}) => {
          return {
            tabBarLabel: 'Profile',
            tabBarIcon: () => (
              <Ionicons name="person-outline" color={color} size={24} />
            ),
          };
        }}
      />
    </Tab.Navigator>
  );
};

export default AppStack;

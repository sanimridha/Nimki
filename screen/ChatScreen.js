import React from 'react';
import {StyleSheet, ScrollView, View} from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

const ChatScreen = () => {
  return (
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
  );
};

export default ChatScreen;

const styles = StyleSheet.create({});

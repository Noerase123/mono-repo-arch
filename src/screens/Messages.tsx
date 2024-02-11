import React from 'react';
import {View} from 'react-native';
import {MessageList as Messages} from 'message-isaac-sdk/src/screens';
import {useNavigation} from '../hooks';

export function MessageList() {
  const navigation = useNavigation();

  const handleCallback = (data: any) => {
    console.log('callback', data);
    (navigation as any).navigate('ChatScreen', {name: data.name});
  };

  return (
    <View style={{flex: 1}}>
      <Messages onPressDetails={handleCallback} />
    </View>
  );
}

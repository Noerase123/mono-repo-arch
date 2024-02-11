import React from 'react';
import {Chat} from 'message-isaac-sdk/src/screens/Chat';
import {useRoute, useNavigation} from '../hooks';
import {KeyboardAvoidingView} from 'react-native';

export function ChatScreen() {
  const navigation = useNavigation();
  const {params} = useRoute<any>();
  return <Chat headerName={params.name} onBack={() => navigation.goBack()} />;
}

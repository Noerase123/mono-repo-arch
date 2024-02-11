import React, {useState, useCallback, useEffect} from 'react';
import {GiftedChat, InputToolbar} from 'react-native-gifted-chat';
import {useNavigation} from '@react-navigation/native';
import {TouchableOpacity, Text, StyleSheet, SafeAreaView} from 'react-native';

export function Chat({headerName, onBack}: any) {
  const navigation = useNavigation();
  const [messages, setMessages] = useState<any[]>([]);

  useEffect(() => {
    navigation.setOptions({
      headerTitle: headerName,
      headerLeft: () => (
        <TouchableOpacity onPress={onBack}>
          <Text style={styles.backBtn}>Back</Text>
        </TouchableOpacity>
      ),
    });
    setMessages([
      {
        _id: 1,
        text: 'Hello developer',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
        },
      },
    ]);
  }, []);

  const onSend = useCallback((messages: any[] = []) => {
    console.log('onSend messages', messages);
    setMessages(previousMessages =>
      GiftedChat.append(previousMessages, messages),
    );
  }, []);

  const customtInputToolbar = (props: any) => {
    return (
      <SafeAreaView>
        <InputToolbar
          {...props}
          containerStyle={
            {
              // backgroundColor: 'white',
              // borderTopColor: '#E8E8E8',
              // borderTopWidth: 1,
              // padding: 8,
              // marginBottom: 30,
            }
          }
        />
      </SafeAreaView>
    );
  };

  return (
    <GiftedChat
      messagesContainerStyle={{paddingBottom: 40}}
      messages={messages}
      onSend={messages => onSend(messages)}
      renderInputToolbar={customtInputToolbar}
      alwaysShowSend
      isTyping
      user={{
        _id: 1,
        name: 'React Native',
      }}
    />
  );
}

const styles = StyleSheet.create({
  backBtn: {
    marginLeft: 10,
  },
});

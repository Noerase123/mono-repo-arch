import React from 'react';
import {View, Text, FlatList, StyleSheet, TouchableOpacity} from 'react-native';

export function MessageList({onPressDetails}: any) {
  const messageList = [
    {
      id: '0',
      name: 'John',
      lastMessage: 'Where are you?',
      lastMessageDate: '11/09/24',
    },
    {
      id: '1',
      name: 'Isaac',
      lastMessage: 'Where are you?',
      lastMessageDate: '11/09/24',
    },
    {
      id: '2',
      name: 'Kathlyn',
      lastMessage: 'Where are you?',
      lastMessageDate: '11/09/24',
    },
    {
      id: '3',
      name: 'Grace',
      lastMessage: 'Where are you?',
      lastMessageDate: '11/09/24',
    },
  ];

  return (
    <View>
      <FlatList
        data={messageList}
        keyExtractor={item => item.id}
        renderItem={({item}) => {
          return (
            <TouchableOpacity onPress={() => onPressDetails(item)}>
              <View style={styles.messageBody}>
                <View style={styles.flexRow}>
                  <Text style={styles.contactPersonTxt}>{item.name}</Text>
                  <Text>{item.lastMessageDate}</Text>
                </View>
                <Text>{item.lastMessage}</Text>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  messageBody: {
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#e1e1e1',
    padding: 10,
  },
  flexRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  contactPersonTxt: {
    fontSize: 18,
    fontWeight: '600',
  },
});

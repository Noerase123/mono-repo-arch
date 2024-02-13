import React from 'react';
import {View, Text, FlatList, TouchableOpacity, StyleSheet} from 'react-native';

export function Home() {
  const newsFeedData = [
    {
      id: '1',
      title: 'Test',
      body: 'Description',
    },
    {
      id: '2',
      title: 'Test 2',
      body: 'Description 2',
    },
  ];

  return (
    <View>
      <Text>Home Screen</Text>
      <View>
        <FlatList
          data={newsFeedData}
          keyExtractor={item => item.id}
          renderItem={({item}) => {
            return (
              <TouchableOpacity>
                <View style={styles.cardContainer}>
                  <Text>{item.title}</Text>
                  <Text>{item.body}</Text>
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    padding: 10,
    marginBottom: 20,
    marginHorizontal: 20,
    backgroundColor: '#e1e1e1',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { globalStyles } from './globalStyles';

export default function ScreenThree({ savedEvents }) {
  return (
    <View style={globalStyles.container}>
      <View style={globalStyles.header}>
        <Text style={globalStyles.headerTitle}>MY SAVED DATES</Text>
        <Text style={globalStyles.headerSubtitle}>Your Bookmarked Events</Text>
      </View>

      {savedEvents.length === 0 ? (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>No saved events yet.</Text>
          <Text style={styles.emptySub}>Browse events on the Feed and click "Save Date".</Text>
        </View>
      ) : (
        <FlatList
          data={savedEvents}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{ padding: 20 }}
          renderItem={({ item }) => (
            <View style={styles.savedCard}>
              <Text style={styles.savedTitle}>{item.title}</Text>
              <Text style={styles.savedDetails}>📅 {item.date}</Text>
              <Text style={styles.savedDetails}>📍 {item.venue}</Text>
            </View>
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  emptyText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#666',
  },
  emptySub: {
    fontSize: 12,
    color: '#999',
    textAlign: 'center',
    marginTop: 6,
  },
  savedCard: {
    backgroundColor: '#F9F9F9',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    borderLeftWidth: 4,
    borderLeftColor: '#007AFF',
  },
  savedTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#222',
  },
  savedDetails: {
    fontSize: 12,
    color: '#666',
    marginTop: 2,
  },
});
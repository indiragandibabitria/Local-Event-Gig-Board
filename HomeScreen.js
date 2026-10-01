import React, { useState } from 'react';
import { View, Text, FlatList, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { globalStyles } from './globalStyles';

const EVENTS_DATA = [
  { id: '1', title: 'Sarakiki-Hadang Festival Gig', date: 'Oct 15, 2026', venue: 'Calbayog City Plaza', category: 'Festival', price: 'Free Entry' },
  { id: '2', title: 'Acoustic Night by the Sea', date: 'Oct 18, 2026', venue: 'Malajog Beach Sunset Deck', category: 'Music', price: '₱150' },
  { id: '3', title: 'Local Indie Rock Showcase', date: 'Oct 22, 2026', venue: 'Nijaga Park Stage', category: 'Concert', price: '₱200' },
  { id: '4', title: 'Tarangban Eco Cultural Night', date: 'Oct 28, 2026', venue: 'Calbayog Convention Center', category: 'Culture', price: '₱100' },
];

export default function HomeScreen({ onSelectEvent }) {
  const [search, setSearch] = useState('');

  const filteredEvents = EVENTS_DATA.filter(item =>
    item.title.toLowerCase().includes(search.toLowerCase()) ||
    item.venue.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <View style={globalStyles.container}>
      <View style={globalStyles.header}>
        <Text style={globalStyles.headerTitle}>CALBAYOG EVENTS HUB</Text>
        <Text style={globalStyles.headerSubtitle}>Discover Local Gigs & Events</Text>
      </View>

      {/* TextInput Component */}
      <TextInput
        style={globalStyles.input}
        placeholder="🔍 Search events or locations..."
        value={search}
        onChangeText={setSearch}
      />

      {/* FlatList Component */}
      <FlatList
        data={filteredEvents}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingHorizontal: 20, paddingBottom: 20 }}
        renderItem={({ item }) => (
          <TouchableOpacity 
            style={styles.card} 
            activeOpacity={0.7}
            onPress={() => onSelectEvent(item)}
          >
            <View style={styles.badge}>
              <Text style={styles.badgeText}>{item.category}</Text>
            </View>
            <Text style={styles.eventTitle}>{item.title}</Text>
            <Text style={styles.eventDetails}>📍 {item.venue}</Text>
            <Text style={styles.eventDetails}>📅 {item.date}</Text>
            <View style={styles.cardFooter}>
              <Text style={styles.price}>{item.price}</Text>
              <Text style={styles.viewBtn}>View Ticket &rarr;</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#EFEFEF',
  },
  badge: {
    backgroundColor: '#EBF5FF',
    alignSelf: 'flex-start',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
    marginBottom: 8,
  },
  badgeText: {
    color: '#007AFF',
    fontSize: 11,
    fontWeight: 'bold',
  },
  eventTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#222222',
    marginBottom: 6,
  },
  eventDetails: {
    fontSize: 13,
    color: '#666666',
    marginBottom: 2,
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
    paddingTop: 8,
    borderTopWidth: 1,
    borderTopColor: '#F5F5F5',
  },
  price: {
    fontWeight: 'bold',
    color: '#2E7D32',
  },
  viewBtn: {
    color: '#007AFF',
    fontWeight: 'bold',
    fontSize: 13,
  },
});
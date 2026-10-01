import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { globalStyles } from './globalStyles';

export default function ScreenTwo({ event, onSaveDate, onBack }) {
  if (!event) {
    return (
      <View style={[globalStyles.container, styles.centered]}>
        <Text style={{ color: '#888' }}>Please select an event from the feed first.</Text>
      </View>
    );
  }

  return (
    <View style={globalStyles.container}>
      <View style={globalStyles.header}>
        <TouchableOpacity onPress={onBack}>
          <Text style={{ color: '#007AFF', fontSize: 14 }}>&larr; Back to Feed</Text>
        </TouchableOpacity>
        <Text style={[globalStyles.headerTitle, { marginTop: 10 }]}>TICKET DETAILS</Text>
      </View>

      <View style={{ padding: 20 }}>
        <View style={styles.ticketBox}>
          <Text style={styles.ticketCategory}>{event.category.toUpperCase()} PASS</Text>
          <Text style={styles.ticketTitle}>{event.title}</Text>
          
          <View style={styles.divider} />

          <Text style={styles.label}>DATE & TIME</Text>
          <Text style={styles.value}>{event.date} • 7:00 PM</Text>

          <Text style={styles.label}>VENUE</Text>
          <Text style={styles.value}>{event.venue}</Text>

          <Text style={styles.label}>PRICE</Text>
          <Text style={styles.value}>{event.price}</Text>

          {/* Button Component */}
          <TouchableOpacity style={styles.saveButton} onPress={() => onSaveDate(event)}>
            <Text style={styles.saveButtonText}>⭐ Save Date to Calendar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  centered: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  ticketBox: {
    backgroundColor: '#FAFAFA',
    borderRadius: 16,
    padding: 20,
    borderWidth: 2,
    borderColor: '#007AFF',
  },
  ticketCategory: {
    color: '#007AFF',
    fontSize: 11,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  ticketTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#111',
    marginTop: 4,
  },
  divider: {
    height: 1,
    backgroundColor: '#DDD',
    marginVertical: 15,
  },
  label: {
    fontSize: 11,
    color: '#888',
    fontWeight: 'bold',
    marginTop: 8,
  },
  value: {
    fontSize: 14,
    color: '#333',
    fontWeight: '500',
    marginTop: 2,
  },
  saveButton: {
    backgroundColor: '#007AFF',
    paddingVertical: 12,
    borderRadius: 8,
    marginTop: 20,
    alignItems: 'center',
  },
  saveButtonText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 14,
  },
});
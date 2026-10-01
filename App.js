import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import HomeScreen from './HomeScreen';
import ScreenTwo from './ScreenTwo';
import ScreenThree from './ScreenThree';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState('Home');
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [savedEvents, setSavedEvents] = useState([]);

  const handleSelectEvent = (event) => {
    setSelectedEvent(event);
    setCurrentScreen('ScreenTwo');
  };

  const handleSaveDate = (event) => {
    if (!savedEvents.some(e => e.id === event.id)) {
      setSavedEvents([...savedEvents, event]);
    }
    setCurrentScreen('ScreenThree');
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
      {/* Screen Rendering / Navigation Logic */}
      <View style={{ flex: 1 }}>
        {currentScreen === 'Home' && <HomeScreen onSelectEvent={handleSelectEvent} />}
        {currentScreen === 'ScreenTwo' && (
          <ScreenTwo 
            event={selectedEvent} 
            onSaveDate={handleSaveDate} 
            onBack={() => setCurrentScreen('Home')} 
          />
        )}
        {currentScreen === 'ScreenThree' && <ScreenThree savedEvents={savedEvents} />}
      </View>

      {/* Bottom Navigation Bar */}
      <View style={styles.navBar}>
        <TouchableOpacity 
          style={styles.navButton} 
          onPress={() => setCurrentScreen('Home')}
        >
          <Text style={[styles.navText, currentScreen === 'Home' && styles.activeNav]}>
            🏠 Feed
          </Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.navButton} 
          onPress={() => setCurrentScreen('ScreenTwo')}
        >
          <Text style={[styles.navText, currentScreen === 'ScreenTwo' && styles.activeNav]}>
            🎟️ Ticket
          </Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.navButton} 
          onPress={() => setCurrentScreen('ScreenThree')}
        >
          <Text style={[styles.navText, currentScreen === 'ScreenThree' && styles.activeNav]}>
            ⭐ Saved ({savedEvents.length})
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  navBar: {
    flexDirection: 'row',
    height: 60,
    borderTopWidth: 1,
    borderTopColor: '#EAEAEA',
    backgroundColor: '#FFFFFF',
  },
  navButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  navText: {
    fontSize: 12,
    color: '#888888',
    fontWeight: '500',
  },
  activeNav: {
    color: '#007AFF',
    fontWeight: 'bold',
  },
});
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Stack, useLocalSearchParams } from 'expo-router';
import { events } from '../../src/data/events';

export default function EventDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const event = events.find((item) => item.id === Number(id));

  if (!event) {
    return (
      <View style={styles.container}>
        <Stack.Screen options={{ title: 'Event not found' }} />
        <Text style={styles.title}>Event not found</Text>
        <Text style={styles.notFoundMessage}>No event with id {id}.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: event.title }} />
      <View style={styles.card}>
        <Text style={styles.title}>{event.title}</Text>
        <Text style={styles.details}>
          {event.date} · {event.place}
        </Text>
        <Text style={styles.seats}>Seats: {event.seats}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    padding: 24,
  },
  card: {
    backgroundColor: '#f8fafc',
    borderRadius: 12,
    padding: 20,
    borderWidth: 1,
    borderColor: '#e2e8f0',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#0f172a',
    marginBottom: 8,
  },
  details: {
    fontSize: 16,
    color: '#475569',
    marginBottom: 12,
  },
  seats: {
    fontSize: 16,
    color: '#2563eb',
    fontWeight: '600',
  },
  notFoundMessage: {
    fontSize: 16,
    color: '#64748b',
    marginTop: 8,
  },
});

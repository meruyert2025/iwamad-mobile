import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { CampusEvent } from '../data/events';

type EventRowProps = {
  event: CampusEvent;
  onPress: () => void;
  onLongPress: () => void;
  isSaved?: boolean;
};

export function EventRow({ event, onPress, onLongPress, isSaved }: EventRowProps) {
  return (
    <Pressable
      onPress={onPress}
      onLongPress={onLongPress}
      style={({ pressed }) => [styles.card, pressed && styles.cardPressed]}
    >
      <View style={styles.content}>
        <Text style={styles.title}>{event.title}</Text>
        <Text style={styles.details}>
          {event.date} · {event.place}
        </Text>
      </View>
      {isSaved && <Text style={styles.saved}>★ Saved</Text>}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    minHeight: 44,
    backgroundColor: '#ffffff',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
    marginVertical: 6,
    marginHorizontal: 16,
    borderWidth: 1,
    borderColor: '#e2e8f0',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  cardPressed: {
    backgroundColor: '#f1f5f9',
    borderColor: '#94a3b8',
  },
  content: {
    flex: 1,
    marginRight: 8,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: '#0f172a',
    marginBottom: 4,
  },
  details: {
    fontSize: 14,
    color: '#64748b',
  },
  saved: {
    fontSize: 14,
    fontWeight: '600',
    color: '#eab308',
  },
});

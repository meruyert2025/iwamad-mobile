import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import { Link } from 'expo-router';

export default function HomeScreen() {
  const [likes, setLikes] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello, World!</Text>
      <Text style={styles.name}>Meruyert Abdigaliyeva</Text>
      <Text style={styles.counter}>Likes: {likes}</Text>
      <Pressable onPress={() => setLikes(likes + 1)} style={styles.button}>
        <Text style={styles.buttonText}>Like</Text>
      </Pressable>
      <Link href="/events" asChild>
        <Pressable style={styles.eventsButton}>
          <Text style={styles.eventsButtonText}>Events</Text>
        </Pressable>
      </Link>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 16,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  name: {
    fontSize: 32,
  },
  counter: {
    fontSize: 24,
    color: '#333',
  },
  button: {
    minHeight: 44,
    backgroundColor: '#007AFF',
    paddingHorizontal: 28,
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: '600',
  },
  eventsButton: {
    minHeight: 44,
    backgroundColor: '#10b981',
    paddingHorizontal: 28,
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  eventsButtonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: '600',
  },
});

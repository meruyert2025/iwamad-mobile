import React, { useEffect, useState } from 'react';
import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { useChat } from '../hooks/useChat';
import { sendMessage } from '../lib/chat';
import { askNotificationPermission } from '../lib/notifications';

interface ChatPanelProps {
  eventId: number;
  eventTitle: string;
}

export function ChatPanel({ eventId, eventTitle }: ChatPanelProps) {
  const { messages, status } = useChat(eventId, eventTitle);
  const [text, setText] = useState('');

  useEffect(() => {
    askNotificationPermission();
  }, []);

  const isSendDisabled = !text.trim();

  const handleSend = () => {
    const trimmed = text.trim();
    if (!trimmed) {
      return;
    }
    sendMessage(eventId, trimmed);
    setText('');
  };

  const reversedMessages = [...messages].reverse();

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Live chat</Text>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Write a message"
          placeholderTextColor="#94a3b8"
          maxLength={200}
          value={text}
          onChangeText={setText}
        />
        <Pressable
          style={[styles.sendButton, isSendDisabled && styles.sendButtonDisabled]}
          onPress={handleSend}
          disabled={isSendDisabled}
        >
          <Text style={[styles.sendButtonText, isSendDisabled && styles.sendButtonTextDisabled]}>
            Send
          </Text>
        </Pressable>
      </View>

      {status === 'connecting' && <Text style={styles.statusText}>Connecting</Text>}
      {status === 'error' && <Text style={styles.statusText}>Chat unavailable</Text>}
      {status === 'live' && messages.length === 0 && (
        <Text style={styles.statusText}>No messages yet</Text>
      )}

      <View style={styles.messagesContainer}>
        {reversedMessages.map((message) => (
          <View key={message.id} style={styles.messageRow}>
            <Text style={styles.messageText}>
              <Text style={styles.authorText}>{message.author}</Text>: {message.text}
            </Text>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    paddingTop: 16,
    borderTopWidth: 1,
    borderTopColor: '#e2e8f0',
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#0f172a',
    marginBottom: 12,
  },
  inputContainer: {
    marginBottom: 16,
    gap: 8,
  },
  input: {
    minHeight: 44,
    borderWidth: 1,
    borderColor: '#cbd5e1',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 16,
    color: '#0f172a',
    backgroundColor: '#ffffff',
  },
  sendButton: {
    minHeight: 44,
    backgroundColor: '#007AFF',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
  sendButtonDisabled: {
    backgroundColor: '#94a3b8',
    opacity: 0.6,
  },
  sendButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
  sendButtonTextDisabled: {
    color: '#e2e8f0',
  },
  statusText: {
    fontSize: 15,
    color: '#64748b',
    marginVertical: 8,
  },
  messagesContainer: {
    marginTop: 8,
    gap: 8,
  },
  messageRow: {
    paddingVertical: 6,
    paddingHorizontal: 8,
    backgroundColor: '#ffffff',
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#f1f5f9',
  },
  messageText: {
    fontSize: 15,
    color: '#1e293b',
    lineHeight: 20,
  },
  authorText: {
    fontWeight: '600',
    color: '#0f172a',
  },
});

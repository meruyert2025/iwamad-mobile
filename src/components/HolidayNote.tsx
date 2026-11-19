import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { useHolidays } from '../hooks/useHolidays';

type HolidayNoteProps = {
  date: string;
};

export function HolidayNote({ date }: HolidayNoteProps) {
  const year = Number(date.slice(0, 4));
  const { data, isPending, isError } = useHolidays(year);

  if (isPending) {
    return <Text style={styles.pending}>Checking holidays</Text>;
  }

  if (isError) {
    return <Text style={styles.error}>Holidays unavailable</Text>;
  }

  const holiday = data?.find((h) => h.date === date);

  if (holiday) {
    return <Text style={styles.holiday}>Public holiday: {holiday.name}</Text>;
  }

  return <Text style={styles.notHoliday}>Not a public holiday</Text>;
}

const styles = StyleSheet.create({
  pending: {
    fontSize: 14,
    color: '#64748b',
    marginTop: 4,
    fontStyle: 'italic',
  },
  error: {
    fontSize: 14,
    color: '#ef4444',
    marginTop: 4,
  },
  holiday: {
    fontSize: 14,
    fontWeight: '600',
    color: '#16a34a',
    marginTop: 4,
  },
  notHoliday: {
    fontSize: 14,
    color: '#64748b',
    marginTop: 4,
  },
});

import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      
      <View style={styles.header}>
        <Image
          source={require('./assets/emsi.png')}
          style={styles.logo}
          resizeMode="contain"
        />
        <Text style={styles.schoolName}>EMSI CENTRE</Text>
      </View>

      
      <View style={styles.info}>
        <Text style={styles.label}>
          Nom : <Text style={styles.value}>Mouda</Text>
        </Text>
        <Text style={styles.label}>
          Prénom : <Text style={styles.value}>Ali</Text>
        </Text>
        <Text style={styles.label}>
          Année universitaire : <Text style={styles.value}>2025 / 2026</Text>
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f6f7fb',
    padding: 20,
    justifyContent: 'flex-start', // tout commence en haut
    
  },
  header: {
    flexDirection: 'row',         // logo et texte sur la même ligne
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom: 20,             // espace entre header et infos
  },
  logo: {
    width: 100,
    height: 100,
  },
  schoolName: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#1f2937',
    marginLeft: 20,
    letterSpacing: 1,
  },
  info: {
    marginTop: 10,
  },
  label: {
    fontSize: 18,
    fontWeight: '500',
    color: '#1f2937',
    marginBottom: 8,
  },
  value: {
    fontWeight: 'bold',
  },

 info: {
 alignItems: 'center',
 gap: 8,
 },
 label: {
 fontSize: 16,
 color: '#6b7280',
 fontWeight: '500',
 },
 value: {
 fontSize: 17,
 color: '#111827',
 fontWeight: 'bold',
 }
});

import React from 'react';
import { View, Text, StyleSheet,Image } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import styled from 'styled-components';

export default function ArtistDetail ()  {
    const  artist  = useLocalSearchParams(); 
    console.log("art",artist)

    const ImageContainer = styled(Image)`
    width: 250px;
    height: 250px;
    resize-mode:contain;`

  return (
    <View style={styles.container}>
        <ImageContainer source={{uri:artist.image}}/>
      <Text style={styles.title}>{artist.name}</Text>
      <Text style={styles.subtitle}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic, non ad. Consequatur distinctio reiciendis debitis dolore laborum minima repudiandae facilis facere, itaque, blanditiis pariatur quia beatae voluptatum. Et, placeat architecto?</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8f8f8',
    display:"flex",
    justifyContent:"flex-start",
    alignItems:"center"
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: '#666',
    marginBottom: 20,
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  description: {
    fontSize: 16,
    color: '#333',
    lineHeight: 22,
  },
});


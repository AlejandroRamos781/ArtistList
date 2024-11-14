import { Artist } from '@/types/artist'
import { useRouter } from 'expo-router';
import React from 'react'
import { TouchableOpacity, FlatList, View } from 'react-native';
import ArtistBox from './ArtistBox';



export default function ArtistList({artist}: {artist: Artist[]}) {
    const router = useRouter();
    
    const handlePress = (artist: any) => router.push({
        pathname:"/ArtistDetailView",
        params:{id:artist.id, name: artist.name, image: artist.image}
    })

  return (
    <View>
        <FlatList
        data={artist}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({item}) => <TouchableOpacity
        testID={`artist-box-${item.name}`}
        onPress={() => handlePress(item)}>
            <ArtistBox artist={item}/>
        </TouchableOpacity>}
        
        />
    </View>
  )
}

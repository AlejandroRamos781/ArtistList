import { Artist, ArtistResource } from '@/types/artist'
import React, { useEffect, useState } from 'react'
import { View } from 'react-native';
import styled from 'styled-components'
import { getMusicData } from './api-client';
import ArtistList from '@/components/navigation/ArtistList';

export default function Home() {
    const [artist, setArtist] = useState<Artist[]>([])

    const MainContainer = styled(View)`
        flex:1;
        background-color:#fff;
    `

    useEffect(() => {
        getMusicData().then(data => setArtist(data))
    },[])
  return (
   <MainContainer>
    {artist && <ArtistList artist ={artist}/>}
   </MainContainer>
  )
}

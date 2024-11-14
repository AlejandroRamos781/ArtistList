import { Artist } from '@/types/artist';
import React from 'react'
import {View,Image,Text } from 'react-native';
import styled from 'styled-components'

export default function ArtistBox({artist}:{artist:Artist}) {

    const MainContainer = styled(View)`
    margin: 5px;
    background-color: white; 
    flex-direction: row; 
    shadow-color: black; 
    shadow-opacity:0.1;
    shadow-offset:1px -2px; 
    elevation: 2;`

    const ImageContainer = styled(Image)`
    width: 150px;
     height: 150px;
    resize-mode:contain;`

    const Info = styled(View)`
    flex: 1;
    flex-direction: column; 
    align-items: center;
    justify-content:center;`

    const Name = styled(Text)`
    font-size: 20px; 
    margin - top:10px; 
    color: #333;`
    return (
        <MainContainer>
            <ImageContainer source={{uri:artist.image}} testID='artist-image' >
                <Info>
                    <Name></Name>
                </Info>
            </ImageContainer>
        </MainContainer>
    )
}
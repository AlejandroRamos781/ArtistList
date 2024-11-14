import { ArtistResource } from "@/types/artist";
const API_KEY ='xx'

const URL = ``

export function getMusicData(){
    return fetch(URL,{
        method:"GET",
        headers:{
            Accept: 'application/json',
            'Content-Type':"application/json"
        }
    })
    .then(response => response.json())
    .then(data => data.topartist.artist)
    .then(artist => artist.map((artist: ArtistResource) =>{
        return {
            id:artist.mbid,
            name:artist.name,
            image: artist.image[0]['#text']
        }
    }))
}
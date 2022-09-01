

const radio = {
    stations: [
        {
            name: "station1", 
            
            songs: [
                {
                    title: 'None Like you',
                    artist: 'Abc'
                },
                {
                    title: 'Nothing is impossible',
                    artist: 'defg'
                }

            ]

        },

        {
            name: "station2", 
            
            songs: [
                {
                    title: 'No matter what',
                    artist:'Xyz'
                },
                {
                    title: 'Always by my side',
                    artist:'Deep'
                }

            ]

        },

        {
            name: "station3", 
            
            songs: [
                {
                    title:'Mayama asul',
                    artist: 'Iyaba'
                },
                {
                    title: 'Soon',
                    artist: 'Jay'
                }

            ]

        },
           
   ],


randomStation(){
   const station = radio.stations[Math.floor(Math.random()*(radio.stations.length))]
    const song = station.songs[Math.floor(Math.random()*(station.songs.length))]
    console.log("Now Playing: " + song.title + " by " + song.artist)
}

}
radio.randomStation()
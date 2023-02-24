//Playlists and songs on playlists
class Song {
    constructor(songName, artistName){
        this.soneName = songName;
        this.artistName = artistName;
    }
    describe (){
        return `${this.soneName} by ${this.artistName}`
    }
}

class Playlist {
    constructor(playlistName){
        this.playlistName = playlistName;
        this.song = [];
    }


    addSong(song){
        if (song instanceof Song){
            this.song.push(song);
        }else {
            throw new error (`You can only add instance of song. Argument is not a song: ${song}`);
        }
    }
    describe () {
        return ` ${this.playlistName} has ${this.song.length} songs. `
    }
}

class Menu {
    constructor(){
        this.Playlist = [];
        this.selectedPlaylist = null;
    }
}

start (){
    let selection = this.showMainMenuOptions();
    while (selection !=0){
        switch(selection) {
            case '1':
                this.createPlaylist();
                break;
            case '2':
                this.viewPlaylist();
                break;
            case '3':
                this.deletePlaylist;
                break;
            case '4':
                this.viewAllPlaylists;
                break;
            default:
                selection = 0;
        }
        selection = this.showMainMenuOptions
    }
    alert('Beebop');
}


showMainMenuOptions(){
    return prompt(`
        0) exit
        1) create a new playlist
        2) view a playlist
        3) delete a playlsit
        4) view all playlists
    `);
}

showPlaylistMenuOptions(Playlist){
    return prompt (`
    0) back
    1) add a new song
    3) delete a song

    -----------------

    ${PlaylistInfo}
    `);
}

displayPlaylist(){
    let playlistString = '';
        for (let i = 0; i <this.playlist.length; i++) {
            playlistString += i+ ') ' + this.playlist[i].playlistName + '\n';
        }
    alert(playlistString);
}

createPlaylist(){
    let playlistName = prompt('Enter name for new playlist: ');
    this.playlist.push(new Playlist(playlistName));
}

viewPlaylist() {
    let index = prompt("Enter the index of the playlist that you want to view:");
    if (index > -1 && indes < this.playlist.length) {
        this.selectedPlaylist = this.playlist[index];
        let description = 'Playlist name: ' + this.selectedPlaylist.playlistName + '\n';
        description += ' ' + this.selectedPlaylist.describe() + '\n';
        for (let i = 0; i < this.selectedPlaylist.song.length; i++){}
            description += i + ') ' + this.selectedPlaylist.song[i].describe + '/n'
    }
        let selection1 = this.showPlaylistMenuOptions(description);
        switch (selection1){
            case '1' :
                this.addSong();
                break;
            case '2':
                this.deleteSong();
                break;
        }
    }
}

deletePlaylist(){
    let index = prompt('Enter the index of the playlist you wish to delete:');
    if (index > -1 && index < this.playlist.length) {
        this.playlist.splic(index,1);
    }
}

createPlaylist(){
    let name = prompt('Enter name for playlist: ');
    let songName = prompt('Enter "song name, artist" name to add a new song to playlist:')
    this.selectedPlaylist.addSong(new Song(songName, artistName));
}

let menu = new Menu();
menu.start();
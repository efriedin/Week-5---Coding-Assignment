//Playlists and songs on playlists
class Song {
    constructor(songName, artistName){
        this.songName = songName;
        this.artistName = artistName;
    }
    describe (){
        return `${this.songName} by ${this.artistName}`;
    }
}

class Playlist {
    constructor(playlistName){
        this.playlistName = playlistName;
        this.songs = [];
    }


    addSong(song){
        if (song instanceof Song){
            this.songs.push(song);
        }else {
            throw new Error (`You can only add instance of song.
            Argument is not a song: ${song}`);
        }
    }

    describe () {
        return `${this.playlistName} has ${this.songs.length} songs.`;
        }
    }

    class Menu {
        constructor(){
            this.playlist = [];
            this.selectedPlaylist = null;
        }

    start () {
        let selection = this.showMainMenuOptions();
        while (selection != 0){
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
                    this.displayAllPlaylists;
                    break;
                default:
                    selection = 0;
            }
            selection = this.showMainMenuOptions();
        }
        alert('Beebop');
    }


    showMainMenuOptions(){
        return prompt(`
            0) exit
            1) create a new playlist
            2) view a playlist
            3) delete a playlist
            4) view all playlists
        `);
    }
0
    showPlaylistMenuOptions(playlistInfo){
        return prompt (`
            0) back
            1) add a new song
            3) delete a song
            -----------------
            ${playlistInfo}
        `);
    }

    displayAllPlaylists(){
        let playlistString = '';
            for (let i = 0; i < this.playlist.length; i++) {
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
        if (index > -1 && index < this.playlist.length) {
            this.selectedPlaylist = this.playlist[index];
            let description = 'Playlist Name: ' + this.selectedPlaylist.playlistName + '\n';
            description += ' ' + this.selectedPlaylist.describe() + '\n';
            for (let i = 0; i < this.selectedPlaylist.songs.length; i++){
                description += i + ') ' + this.selectedPlaylist.songs[i].describe() + '\n'
            }
            let selection1 = this.showPlaylistMenuOptions(description);
            switch (selection1){
                case '1' :
                    this.addSong();
                    break;
                case '2':
                    this.deleteSong();
            
            }
        }
    }

    deletePlaylist() {
        let index = prompt ('Enter the index of the playlist to be deleted:');
        if(index > -1 && index < this.playlist.length){
            this.playlist.splice(index,1);
        }
    }

    addSong() {
        let songName = prompt('Enter the song title');
        let artistName = prompt ('Enter artist name');
        this.selectedPlaylist.addSong(new Song(songName,artistName))
    }

    deleteSong() {
        let index = prompt('Enter incex of song you would like to delete: ');
        if (index > -1 && index <this.selectedPlaylist.songs.length) {this.selectedPlaylist.songs.splice(index,1);
        }
    }
}

    let menu = new Menu();
    menu.start();



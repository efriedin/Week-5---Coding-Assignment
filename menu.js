//Song class with song name and artist name as its attributes
class Song {
    constructor(songName, artistName){
        this.songName = songName;
        this.artistName = artistName;
    }
    describe (){
        return `${this.songName}, ${this.artistName}`; //return a string with song name and artist name 
    }
}

//Play class with playlist name and songs as its attributes
class Playlist {
    constructor(playlistName){
        this.playlistName = playlistName;
        this.songs = [];
    }

    //Add song function to add songs to an array in playlist class
    addSong(song){
        if (song instanceof Song){
            this.songs.push(song);
        }else {
            throw new Error (`You can only add instance of song.
            Argument is not a song: ${song}`);
        }
    }

    describe () { //returns amount of songs in the array 
        return `${this.playlistName} has ${this.songs.length} songs.`;
        }
    }

    class Menu { //application initiaion with playlist and selected playlist as attributes
        constructor(){
            this.playlist = [];
            this.selectedPlaylist = null;
        }

    start () { //method to tell application what to display upon starting each case is a function for the user to enter input
        let selection = this.showMainMenuOptions();
        while (selection != 0){
            switch(selection) {
                case '1':
                    this.createPlaylist();
                    break;
                case '2':
                    this.editPlaylist();
                    break;
                case '3':
                    this.deletePlaylist();
                    break;
                case '4':
                    this.displayAllPlaylists();
                    break;
                default:
                    selection = 0;
            }
            selection = this.showMainMenuOptions(); //returns back to main 
        }
        alert('Beebop');
    }


    showMainMenuOptions(){ //what displays to the user on the main menu 
        return prompt(`
            0) exit
            1) create a new playlist
            2) edit a playlist
            3) delete a playlist
            4) view all playlists
        `);
    }

    showPlaylistMenuOptions(playlistInfo) { //what displays on the playlist menu 
            return prompt (`
                0) back
                1) add a new song
                2) delete a song
                -----------------
                ${playlistInfo} 
            `);  
        }


    displayAllPlaylists() { //function to display all playlists with their index 
        let playlistString = '';
            for (let i = 0; i < this.playlist.length; i++) {
                playlistString += i+ ') ' + this.playlist[i].playlistName + '\n';
            }
        alert(playlistString);
    }

    createPlaylist(){ //function for making a playlist, is stored in the playlist class. 
        let playlistName = prompt('Enter name for new playlist: ');
        this.playlist.push(new Playlist(playlistName));
    }

editPlaylist() { //function to edit playlist
    let index = prompt("Enter the index of the playlist that you want to edit:");  
    if (index > -1 && index < this.playlist.length) {
        this.selectedPlaylist = this.playlist[index];
        let description = 'Playlist Name: ' + this.selectedPlaylist.playlistName + '\n'; //tells program to display any playlists and songs in that playlist with their index
        description += ' ' + this.selectedPlaylist.describe() + '\n';
        for (let i = 0; i < this.selectedPlaylist.songs.length; i++){  //iterates through playlists to add songs to description
            description += i + ') ' + this.selectedPlaylist.songs[i].describe() + '\n';
        } 
        let selection1 = this.showPlaylistMenuOptions(description);  
        while(selection1 != 0) {  
            switch (selection1){ //cases attach functions for adding and deleting songs 
                case '1' :
                    this.addSong();
                    break;
                case '2':
                    this.deleteSong();
            } 
        description = 'Playlist Name: ' + this.selectedPlaylist.playlistName + '\n'; //tells program to iterate through the playlist after songs are deleted to have the description update each addition or removal of a song
        description += ' ' + this.selectedPlaylist.describe() + '\n';
        for (let i = 0; i < this.selectedPlaylist.songs.length; i++){
            description += i + ') ' + this.selectedPlaylist.songs[i].describe() + '\n';
        } 
        
            selection1 = this.showPlaylistMenuOptions(description); //tells program to show description 
            }
        }
    }

    deletePlaylist() { //function for deleting a playlist, removing from playlist class
        let index = prompt ('Enter the index of the playlist to be deleted:');
        if(index > -1 && index < this.playlist.length){
            this.playlist.splice(index,1);
        }
    }

    addSong() { //function for adding a song and store in song class
        let songName = prompt('Enter the song title');
        let artistName = prompt ('Enter artist name');
        this.selectedPlaylist.addSong(new Song(songName,artistName));
    }

    deleteSong() { //function for deleting a song and removing from song class 
        let index = prompt('Enter index of song you would like to delete: ');
        if (index > -1 && index < this.selectedPlaylist.songs.length) {this.selectedPlaylist.songs.splice(index,1);
        }
    }
}

let menu = new Menu();
menu.start();

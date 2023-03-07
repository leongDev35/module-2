import { Song } from "./song";
let input = require('readline-sync');
export class Album {
    listSong: Array<Song> = [];
    albumName: string;
    id: number;
    songList = new Map(); //! kiem tra song xem co trung khong

    constructor(albumName: string, id: number) {
        this.albumName = albumName;
        this.id = id;
    }

    //! business methods
    add(): void {
        let flag = true;
        let idSong
        let nameSong
        do {
            idSong = input.question("Enter id: ")
            nameSong = input.question("Enter name: ")
            if (!this.songList.has(idSong)) {
                this.songList.set(idSong, nameSong);

                console.log("Add thanh cong")

                flag = false;
            } else {
                console.log("id da ton tai, vui long nhap lai")
            }
        }

        while (flag)
        let artist = input.question("Enter artist: ")
        let rating = input.question("Enter rating: ")

        console.log(this.songList)
        this.listSong.push(new Song(idSong, nameSong, artist, rating));
    }

    delete() {
        if (this.listSong.length === 0) {
            console.log("Please add album. List empty")
        } else {

            let i = this.findById();
            if (i != -1) {

                this.listSong.splice(i, 1);
            } else {

                console.log("khong tim thay id")
            }

        }
    }
    //! chua lam sua song
    edit() {

    }

    findById() {
        let id = input.question("Enter id song: ")

        for (let i = 0; i < this.listSong.length; i++) {
            if (this.listSong[i].id == id) {
                return i;
            }
        }
        return -1;
    }


    show() {
        return this.listSong;
    }

    suaTenAlbum() {
        this.albumName = input.question("Ten albums: ")
    }
}
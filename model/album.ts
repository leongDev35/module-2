import { kiemTraChuoiRongVaLaChu, kiemTraChuoiRongVaLaSo } from "../Validation/function";
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
        let idSong;
        let nameSong;
        let artist;
        let rating;
        do {

            let validIdSong = true;
            let validNameSong = true;
            let validArtist = true;
            let validRating = true;

            do {

                nameSong = input.question("Enter name song: ");
                if (kiemTraChuoiRongVaLaChu(nameSong) == true) {
                    validNameSong = false;

                }
            }
            while (validNameSong);
            do {

                idSong = input.question("Enter id: ");
                if (kiemTraChuoiRongVaLaSo(idSong) == true && this.songList.has(idSong) !== true) {
                    validIdSong = false;

                } else {
                    console.log("Dữ liệu không hợp lệ hoặc bị trùng")
                }
            }
            while (validIdSong);
            do {

                artist = input.question("Enter artist name: ")
                if (kiemTraChuoiRongVaLaChu(artist) == true) {
                    validArtist = false;

                } else {
                    console.log("Dữ liệu không hợp lệ")
                }
            }
            while (validArtist);
            do {

                rating = input.question("Enter rating: ")
                if (kiemTraChuoiRongVaLaSo(rating) == true) {
                    validRating = false;

                } else {
                    console.log("Dữ liệu không hợp lệ")
                }
            }
            while (validRating);


            flag = false;

        }

        while (flag)
        this.songList.set(idSong, nameSong);
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
        for (let i = 0; i < this.listSong.length; i++) {
            console.log( 
                `
            ====Song ${i+1}====
            1. ID User: ${this.listSong[i].id}
            2.  title: ${this.listSong[i].title}
            1. artist: ${this.listSong[i].artist}
            1.rating: ${this.listSong[i].rating}
            1. time: ${this.listSong[i].time}
            1. album: ${this.listSong[i].album}
            
            `)
            
        }
       
    }

    suaTenAlbum() {
        this.albumName = input.question("Ten albums: ")
    }
}
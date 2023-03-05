import { Song } from "./song";
export class Album {
    listSong: Array<Song> = [];
    albumName: string;
    id:number;

    constructor(albumName: string, id: number) {
        this.albumName = albumName;
        this.id = id;
    }

    //! business methods
    add(t: Song): void {
        this.listSong.push(t);
    }

    delete(id: number) {
        let index = this.findById(id);
        this.listSong.splice(index, 1)
    }

    edit(id: number, t: Song) {
        let index = this.findById(id);
        this.listSong[index] = t;
    }

    findById(songId: any) {
        for (let i = 0; i < this.listSong.length; i++) {
            if (this.listSong[i].id == songId) {
                return i;
            }
        }
        return -1;
    }


    show() {
        return this.listSong;
    }
}
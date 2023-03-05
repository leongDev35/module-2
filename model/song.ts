import { Album } from "./album";
export class Song {
    public id: number;
    public title: string;
    public artist: string;
    public rating: number;
    public time: number | undefined;
    public album: Album | undefined;

    constructor(id: number, title: string, artist: string, rating: number, time?: number, album?: Album) {
        this.id = id;
        this.title = title;
        this.artist = artist;
        this.rating = rating;
        this.time = time;
        this.album = album;
    }
}
import { Account } from './account';
import { Album } from './album';
// import { Manager } from '../Action/manage';
export class ListAlbum  {
    listAlbum: Array<Album> = [];
    owner: Account = new Account(305, "duy", 2);
    

    constructor() {
        
    }

    //! business methods
    add(t: Album): void {
        this.listAlbum.push(t);
    }

    delete(id: number) {
        let index = this.findById(id);
        this.listAlbum.splice(index, 1)
    }

    edit(id: number, t: Album) {
        let index = this.findById(id);
        this.listAlbum[index] = t;
    }

    findById(albumName: any) {
        for (let i = 0; i < this.listAlbum.length; i++) {
            if (this.listAlbum[i].albumName == albumName) {
                return i;
            }
        }
        return -1;
    }


    show() {
        return this.listAlbum;
    }
}
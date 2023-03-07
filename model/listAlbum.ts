
import { Account } from './account';
import { Album } from './album';
// import { Manager } from '../Action/manage';
import { kiemTraChuoiRongVaLaChu, kiemTraRongVaTrungTen } from '../Validation/function';
let input = require('readline-sync');


export class ListAlbum {
    public listAlbum: Array<Album> = [];
    idAlbumList = new Map(); //! kiem tra song xem co trung khong



    constructor() {

    }

    //! business methods
    add(): void {
        let flag = true;
        do {
            let nameAlbum
            let validAlbumName = true;

            do {
                 
                nameAlbum = input.question("Enter name album: ")
                if (kiemTraChuoiRongVaLaChu(nameAlbum) == true) {
                    validAlbumName = false;

                } 
            }
            while (validAlbumName);
            let idAlbum = input.question("Enter id: ")
            if (!this.idAlbumList.has(idAlbum)) {
                this.idAlbumList.set(idAlbum, nameAlbum);
                this.listAlbum.push(new Album(nameAlbum, idAlbum));
                console.log("Add thanh cong")
                console.log(this.idAlbumList)
                console.log(this.listAlbum)
                flag = false;
            } else {
                console.log("id da ton tai, vui long nhap lai")
            }
        }

        while (flag)


    }

    delete() {
        if (this.listAlbum.length === 0) {
            console.log("Please add album. List empty")
        } else {

            let i = this.findById();
            if (i != -1) {

                this.listAlbum.splice(i, 1);
            } else (
                console.log("khong tim thay id")
            )
        }
    }

    edit() {
        if (this.listAlbum.length === 0) {
            console.log("Please add album. List empty")
        } else {

            let i = this.findById();
            if (i != -1) {
                let flag = true;
                let newName;
                do {


                     newName = input.question("Enter new album name: ");
                    if (kiemTraRongVaTrungTen(newName,this.listAlbum[i].albumName) == true) {
                        this.listAlbum[i].albumName =newName;
                        flag = false;
                    }
                } while (flag);
               
            } else (
                console.log("khong tim thay id")
            )
        }
    }

    chonAlbum() {
        if (this.listAlbum.length === 0) {
            console.log("Please add album. List empty")
        } else {

            let i = this.findById();
            if (i != -1) {

                return this.listAlbum[i]
            } else {
                console.log("khong tim thay id")
            }
        }
    }

    findById() {
        let id = input.question("Enter id album: ")

        for (let i = 0; i < this.listAlbum.length; i++) {
            if (this.listAlbum[i].id == id) {
                return i;
            }
        }
        return -1;
    }


    show() {
        return this.listAlbum;
    }
}
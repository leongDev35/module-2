import { Album } from '../model/album';
let input = require('readline-sync');

export function menuSong(obj: Album) {
    let menu = `
    ====Quan Ly Song trong album====
    1. Show danh sach song
    2. Them song
    3. Xoa song
    0. Log out
    `
    let choise: string;

    if (obj.listSong == undefined) {


        obj.listSong = [];
    }
    do {
        console.log(menu);
        choise = input.question("Enter selection: ")
        switch (choise) {
            case "1":0
                console.log("Danh sach song")
                 console.log(obj?.show());
                break;
            case "2":
                obj?.add()
                break;
            case "3":
                console.log("Xoa album")
                obj.delete()
                break;
            case "4":
                console.log("sua ten album")
                break;

            case "0":
                break;
            default:
                console.log("Sai vui long nhap lua chon")
                break;
        }
    } while (choise != "0");
}
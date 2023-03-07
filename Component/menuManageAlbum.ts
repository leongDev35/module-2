import { Account } from "../model/account";
import { Album } from "../model/album";
import { ListAlbum } from '../model/listAlbum';
import { menuSong } from "./menuSong";

let input = require('readline-sync');



export function menuAlbum(obj: Account) {
    let menu = `
    ====Quan Ly anbum====
    1. Show danh sach album
    2. Them album
    3. Xoa album
    4. Sua ten album
    5. Chon album theo id
    0. Log out
    `
    let choise: string;

    if (obj.albumList?.listAlbum == undefined) {


        obj.albumList = new ListAlbum();
    }
    do {
        console.log(menu);
        choise = input.question("Enter selection: ")
        switch (choise) {
            case "1": 0
                console.log("Danh sach album")
                console.log(obj?.albumList?.show());
                break;
            case "2":
                obj?.albumList?.add()

                break;
            case "3":
                console.log("Xoa album theo id")
                obj.albumList.delete()
                break;
            case "4":
                console.log("sua ten album theo id")
                obj.albumList.edit();
                break;
            case "5":
                console.log("chon album theo id")
                
                let albumChon = obj.albumList?.chonAlbum();
                
                if (albumChon != undefined) {
                    menuSong(albumChon)
                }
                break;
            case "0":
                break;
            default:
                console.log("Sai vui long nhap lua chon")
                break;
        }
    } while (choise != "0");
}
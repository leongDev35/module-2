import { Account } from "../model/account";
import { menuAlbum } from "./menuManageAlbum";
import { menuAccount } from "./menuManagerAccount";

let input = require('readline-sync');

export let albumList = new Map();
//! Main Menu 
export function mainMenu(obj: Account ) {
  let menu = ` 
  ==== ${obj?.fullName} da dang nhap thanh cong====
  1. Quan ly tai khoan
  2. Quan ly albums
  0. Log out
  `
  let choise: string;
  do {
      console.log(menu);
      choise = input.question("Enter selection: ")
      switch (choise) {
          case "1":
            menuAccount(obj)
              break;
          case "2":
            menuAlbum(obj,albumList)
              break;
               
          case "0":
              break;
          default:
              console.log("Sai vui long nhap lua chon")
              break;
      }
  } while (choise != "0");
}

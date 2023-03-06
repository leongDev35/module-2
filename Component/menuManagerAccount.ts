import { Account } from "../model/account";

let input = require('readline-sync');

export function menuAccount(obj: Account | undefined) {
    let menu = `
    ====Quan Ly account====
    1. Show thong tin tai khoan
    2. thay doi thong tin tai khoan
    3. xoa tai khoan

    0. Log out
    `
    let choise: string;
    do {
        console.log(menu);
        choise = input.question("Enter selection: ")
        switch (choise) {
            case "1":
                console.log("Show thong tin tai khoan va thay doi thong tin tai khoan")
                if(obj != undefined) {
                obj.showAccount();
            }

                break;
            case "2":
                if(obj != undefined) {
                    obj.editAccount();
                }
                break;
                case "3":
                    console.log("xoa tai khoan")
                    break;            
            case "0":
                break;
            default:
                console.log("Sai vui long nhap lua chon")
                break;
        }
    } while (choise != "0");
  }
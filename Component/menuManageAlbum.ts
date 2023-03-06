let input = require('readline-sync');

export function menuAlbum() {
    let menu = `
    ====Quan Ly anbum====
    1. Show danh sach album
    2. Xoa album
    3. Sua ten album
    0. Log out
    `
    let choise: string;
    do {
        console.log(menu);
        choise = input.question("Enter selection: ")
        switch (choise) {
            case "1":
                console.log("Danh sach album")
                break;
            case "2":
                console.log("xoa album")
                break;
                 
                case "3":
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
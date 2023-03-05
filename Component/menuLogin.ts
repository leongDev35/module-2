import { Account } from "../model/account";
import { AccountManagement } from "../model/accountManagement";


let listAccountManagement: AccountManagement = new AccountManagement();

let input = require('readline-sync');
const fs = require('fs');
//! Menu Account 
export function account() {
  let menu = `
  ====Billing Software====
  1. Register1
  2. Login
  0. Log out
  `
  let choise: string;
  do {
    console.log(menu);
    choise = input.question("Enter selection: ")
    switch (choise) {
      case "1":
        let id = parseInt(input.question("Enter new user ID: "))
        let name = input.question("Enter new user name: ")
        let pass = parseInt(input.question("Enter new user password: "))
        let user = new Account(id, name, pass)
        listAccountManagement.add(user);
        listAccountManagement.show()

        console.log("Add thanh cong")
        break;
      case "2":
        // let userName = input.question("Enter user name:   ");
        // let userPass = input.question("Enter user pass:   ");
        break;
      // case "3":
      //   fs.readFile('./test.txt', function (err, data) {
      //     if (err) throw err;
      //     console.log(data.toString());
      // });
      
      // console.log(1);
      // break;
      case "0":
        break;
      default:
        console.log("Sai vui long nhap lua chon")  
        break;
    }
  } while (choise != "0");
}

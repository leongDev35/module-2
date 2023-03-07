import { Validation } from "../Validation/valid";
import { Account } from "../model/account";
import { AccountManagement } from "../model/accountManagement";
import { mainMenu } from "./menuMain";

let listAccountManagement: AccountManagement = new AccountManagement();


let input = require('readline-sync');
//! Menu Account 
export function account(t: AccountManagement) {
  let obj;
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
              let flag = true;
              let validation = new Validation();
              let valid =true;


              do{
                let id;
                let pass
                do {
                    
                    id = input.question("Enter new user ID: ")
                   if (validation.kiemTraChuoiRongVaLaSo(id) === true) {
                    valid = false;
                   }
                } while (valid);

                do {
                    
                    pass = input.question("Enter new user password: ")
                   if (validation.kiemTraChuoiRongVaLaSo(pass) === true) {
                    valid = true;
                   }
                } while (!valid);
              
              if (!t.accountList.has(id)) {
                t.accountList.set(id, pass);
                  t.add(new Account(id, pass));
                  console.log("Add thanh cong")
                  console.log(t.accountList)
                  console.log(t)
                  flag = false;
              } else {
                  console.log("id da ton tai, vui long nhap lai")
              }


          }while (flag)
              break;
          case "2":
              let userId;
              let userPass;
              let flag1 = true;
              do { //! kiem tra user name
                  userId = input.question("Enter user name:   ");
                  if (t.accountList.has(userId)) {
                      console.log("user da ton tai");
                      flag1 = false;

                  }else {
                      console.log("user khong ton tai, vui long tao tai khoan")
                      break;
                  }
               } while (flag1)
               //! kiem tra passWord
               do {
                  userPass = input.question("Enter user pass:   ");
                  if (!(t.accountList.get(userId) === (userPass))) {
                      console.log("sai mat khau vui long nhap lai")
                  } else {
                      //! cho nhay vao menu chinh
                      console.log("dang nhap thanh cong")
                      for( let i = 0; i< t.listAccount.length; i++ ) {
                        if (t.listAccount[i].idUser == userId) {
                          obj = t.listAccount[i];
                          break;
                        }

                      }
                      
                      if(obj != undefined) {
                      mainMenu(obj);}
                      flag1 = true;
                  }
               }  while (!flag1)
              

              //   let userPass = input.question("Enter user pass:   ");
              //   console.log(userName, userPass);
              
              break;
               
          case "0":
              break;
          default:
              console.log("Sai vui long nhap lua chon")
              break;
      }
  } while (choise != "0");
}

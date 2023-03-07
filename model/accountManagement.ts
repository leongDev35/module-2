import {Account} from "../model/account";
// import { Manager } from "../Action/manage";

export class AccountManagement  {
    listAccount: Account[] = [];
    accountList = new Map(); //! kiem tra id xem co trung khong
//! business method
    add(t: Account): void {
        this.listAccount.push(t);
    }

    delete(id: number) {
        let index = this.findById(id);
        this.listAccount.splice(index, 1);
    }

    edit(id: number, t: Account) {
        let index = this.findById(id);
        this.listAccount[index] = t
    }

    findById(id: number) {
        for (let i = 0; i < this.listAccount.length; i++) {
            if (this.listAccount[i].idUser == id) {
                return i;
            }
        }
        return -1;
    }

    show() {
        console.log(this.listAccount);
    }

}

import { Account } from "./model/account";
import { AccountManagement } from "./model/accountManagement";

export const fs = require('fs');




// export let dataEmployee: Employee[] ;
export let dataAccount: Array<Account>;
let accountManager = new AccountManagement();


// export function writtingEmployee(): void {
//     const content = JSON.stringify(employeeManager.employees);
//     try {
//         fs.writeFileSync('./dataEmployee.txt', content);
//         // file written successfully
//     } catch (err) {
//         console.error(err);
//     }
// }

export function writtingAccount(): void {
    const content = JSON.stringify(accountManager.accountList);
    try {
        fs.writeFileSync('./dataAccount.txt', content);
        // file written successfully
    } catch (err) {
        console.error(err);
    }
}

// export function readingEmployee(): void {
//     try {
//         const data = fs.readFileSync('./dataEmployee.txt', 'utf8');
//         dataEmployee = JSON.parse(data);
//     } catch (err) {
//         console.error(err);
//     }
// }

export function readingAccount(): void {
    try {
        const data = fs.readFileSync('./dataAccount.txt', 'utf8');
        dataAccount = JSON.parse(data);
    } catch (err) {
        console.error(err);
    }
}
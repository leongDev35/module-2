let input = require('readline-sync');

function albumManage() {
  let menu1 = `
  ------Net shop management menu------
  1. Show list of album
  2. Add a new album to the list of albums
  3. add a new song to the album
  4. Rename the album
  5. Show the list of song in a album
  6. Remove a album from the list
  0. Exit
  `
  let choice: string;
  do {
      console.log(menu1);
      choice = input.question("Enter selection:   ");
      switch (choice) {
          case "1":
              showComputer();
              break;
          case "2":
              addComputer();
              break;
          case "3":
              openComputer();
              break;
          case "4":
              dailyIncome.income += offComputer();
              break;
          case "5":
              editComputer();
              break;
          case "6":
              deleteComputer();
              break;
          
          case "0":
              break;
          default:
              console.log("Wrong then re-enter");
              break;
      }
  } while (choice != "0")
}
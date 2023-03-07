function kiemTraRong(value:any): boolean {
    if (value.trim() === '') {
      console.log("khong duoc bo trong")
      return false;
    }
    return true;    
  }
  function kiemTraTatCaLaSo (value: any): boolean {
    var regexNumber = /^[0-9]+$/;
    if (regexNumber.test(value)) {
      
      return true;
    }
    console.log("tat ca la so")
    return false;
  }
  function kiemTraTatCaLaChu (value: any): boolean  {
    var regexAllLetter = /^[A-Za-z ]+$/;
    if (regexAllLetter.test(value)) {
      
      return true;
    }
     console.log(' phải là chữ');
    
    return false;
  }
// export function kiemTraChuoiRongVaLaSo(value: any): boolean {
//     if (kiemTraRong(value) === true && kiemTraTatCaLaSo(value) === true) {
//         console.log("du lieu hop le")
//     return true; 
//     } else {
//         return false;
//     }
// }

export function kiemTraChuoiRongVaLaChu(value: any): boolean {
    if (kiemTraRong(value) === true && kiemTraTatCaLaChu(value) === true) {
        console.log("du lieu hop le")
    return true; 
    } else {
        return false;
    }
}
// export function  kiemTraChuoiRongVaLaEmail(value: any): boolean {
//     if (this.kiemTraRong(value) === true && this.kiemTraEmail(value) === true) {
//         console.log("du lieu hop le")
//     return true; 
//     } else {
//         return false;
//     }
// }
export function kiemTraRongVaTrungTen(value:any,ten: any):boolean {
    if (kiemTraRong(value) === true && value !==ten) {
        console.log("du lieu hop le")
    return true; 
    } else {
        console.log("ten rong or bi trung")
        return false;
    }
}
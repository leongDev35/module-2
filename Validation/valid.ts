import { Song } from "../model/song";
export class Validation {
    //! kiem tra chuoi rong
    kiemTraRong(value:any): boolean {
        if (value.trim() === '') {
          console.log("khong duoc bo trong")
          return false;
        }
        return true;    
      }
      //! kiem tra tat ca la so
      kiemTraTatCaLaSo (value: any): boolean {
        var regexNumber = /^[0-9]+$/;
        if (regexNumber.test(value)) {
          
          return true;
        }
        console.log("tat ca la so")
        return false;
      }
      //! kiem tra do dai chuoi
      kiemTraDoDaiChuoi (value: any , minLength: number, maxLength:number): boolean  {
        if (value.trim().length < minLength || value.trim().length > maxLength) {
          console.log( ' từ ' + minLength + ' đến ' + maxLength + ' ký tự');
          
          return false;
        }
        
        return true;
      }
      //! Kiểm tra giá trị
   kiemTraGiaTri  (value:any , minValue: number, maxValue: number): boolean  {
        if (Number(value) > maxValue || Number(value) < minValue) {
           console.log("name" + ' giá trị từ ' + minValue + ' đến ' + maxValue);
          
          return false
        }
        
        return true;
      }
     
      //! Tất cả là chữ
    kiemTraTatCaLaChu (value: any): boolean  {
        var regexAllLetter = /^[A-Za-z ]+$/;
        if (regexAllLetter.test(value)) {
          
          return true;
        }
         console.log(' phải là chữ');
        
        return false;
      }
      //! Kiểm tra email
    kiemTraEmail  (value: any): boolean {
        var regexEmail =  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (regexEmail.test(value)) {
          
          return true;
        }
        console.log("email khong hop le")
        return false;
      }

      //!//! ham kiem tra chuoi rong, la so
  kiemTraChuoiRongVaLaSo(value: any): boolean {
    if (this.kiemTraRong(value) === true && this.kiemTraTatCaLaSo(value) === true) {
        console.log("du lieu hop le")
    return true; 
    } else {
        return false;
    }
}

  kiemTraChuoiRongVaLaChu(value: any): boolean {
    if (this.kiemTraRong(value) === true && this.kiemTraTatCaLaChu(value) === true) {
        console.log("du lieu hop le")
    return true; 
    } else {
        return false;
    }
}
  kiemTraChuoiRongVaLaEmail(value: any): boolean {
    if (this.kiemTraRong(value) === true && this.kiemTraEmail(value) === true) {
        console.log("du lieu hop le")
    return true; 
    } else {
        return false;
    }
}
}


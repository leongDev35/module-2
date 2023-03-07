import { kiemTraChuoiRongVaLaChu, kiemTraChuoiRongVaLaEmail, kiemTraChuoiRongVaLaSo } from '../Validation/function';
import { Album } from './album';
import { ListAlbum } from './listAlbum';
let input = require('readline-sync');


export class Account {

    //! Attributes
    private _idUser: number; //! only get
    private _name:string | undefined;
    private _pass: number;
    private _email:string|undefined; //;
    private _phone:number|undefined;
    private _fullName:string|undefined;
    private _age:number|undefined;
    private _albumList: ListAlbum | undefined;
    

    //! Get set methods
    /**
     * Getter idUser
     * @return {number}
     */
	public get idUser(): number {
		return this._idUser;
	}
    // albumList
    public get albumList(): ListAlbum | undefined {
        return this._albumList;
    }
    public set albumList(value: ListAlbum | undefined) {
        this._albumList = value;
    }
    /**
     * Getter name
     * @return {string}
     */
	public get name(): string | undefined {
		return this._name;
	}

    /**
     * Getter pass
     * @return {number}
     */
	public get pass(): number {
		return this._pass;
	}

    /**
     * Getter email
     * @return {string}
     */
	public get email(): string|undefined {
		return this._email;
	}

    /**
     * Getter phone
     * @return {number}
     */
	public get phone(): number|undefined {
		return this._phone;
	}

    /**
     * Getter fullName
     * @return {string}
     */
	public get fullName(): string|undefined {
		return this._fullName;
	}

    /**
     * Getter age
     * @return {number}
     */
	public get age(): number|undefined {
		return this._age;
	}

    /**
     * Setter idUser
     * @param {number} value
     */
	public set idUser(value: number) {
		this._idUser = value;
	}

    /**
     * Setter name
     * @param {string} value
     */
	public set name(value: string | undefined) {
		this._name = value;
	}

    /**
     * Setter pass
     * @param {number} value
     */
	public set pass(value: number) {
		this._pass = value;
	}

    /**
     * Setter email
     * @param {string} value
     */
	public set email(value: string|undefined) {
		this._email = value;
	}

    /**
     * Setter phone
     * @param {number} value
     */
	public set phone(value: number|undefined) {
		this._phone = value;
	}

    /**
     * Setter fullName
     * @param {string} value
     */
	public set fullName(value: string|undefined) {
		this._fullName = value;
	}

    /**
     * Setter age
     * @param {number} value
     */
	public set age(value: number|undefined) {
		this._age = value;
	}
    

    //! Constructor
    constructor(id: number, pass: number, name?: string, email?: string, fullName?: string,phone?: number,age?: number , albumList?: ListAlbum | undefined) {
        this._idUser = id;
        this._pass = pass;
        this._name = name;
        this._email = email;
        this._fullName = fullName;
        this._phone = phone;
        this._age = age;
        this._albumList = albumList;
    }
    //! Input, output
    //! Business methods
    showAccount() {
        console.log( 
        `
    ====Thong tin tai khoan====
    1. ID User: ${this._idUser}
    2. Name: ${this._name}
    1. Email: ${this._email}
    1. Full name: ${this._fullName}
    1. phone: ${this._phone}
    1. Age: ${this._age}
    
    `)
        
    }

    editAccount() {
        let nameFlag = true;
        let emailFlag = true;
        let fullNameFlag = true;
        let phoneFlag = true;
        let ageFlag = true;
        do {
            this._name = input.question("Enter name: ");
            if(kiemTraChuoiRongVaLaChu(this._name) === true) {
                nameFlag = false;
            }
        } while (nameFlag);
        do {
            this._email = input.question("Enter email: ");

            if(kiemTraChuoiRongVaLaEmail(this._email) === true) {
                emailFlag = false;
            }
        } while (emailFlag);
        do {
            this._fullName = input.question("Enter full name: ");
            if(kiemTraChuoiRongVaLaChu(this._fullName) === true) {
                fullNameFlag = false;
            }
        } while (fullNameFlag);
        do {
            
            this._phone = input.question("Enter phone: ");
            if(kiemTraChuoiRongVaLaSo(this._phone) === true) {
                phoneFlag = false;
            }
        } while (phoneFlag);
        do {
            this._age = input.question("Enter age: ");

            if(kiemTraChuoiRongVaLaSo(this._age) === true) {
                ageFlag = false;
            }
        } while (ageFlag);
        

    }

   
}
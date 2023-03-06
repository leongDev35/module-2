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

    //! Get set methods
    /**
     * Getter idUser
     * @return {number}
     */
	public get idUser(): number {
		return this._idUser;
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
    constructor(id: number, pass: number, name?: string, email?: string, fullName?: string,phone?: number,age?: number) {
        this._idUser = id;
        this._pass = pass;
        this._name = name;
        this._email = email;
        this._fullName = fullName;
        this._phone = phone;
        this._age = age;
    }
    //! Input, output
    //! Business methods
    showAccount() {
        console.log(this._idUser)
        console.log(this._pass)
        console.log(this._name )
        console.log(this._email)
        console.log(this._fullName)
        console.log(this._phone)
        console.log(this._age)
    }

    editAccount() {
        
      
        this._name = input.question("Enter name: ");
        this._email = input.question("Enter email: ");
        this._fullName = input.question("Enter full name: ");
        this._phone = input.question("Enter phone: ");
        this._age = input.question("Enter age: ");
    }

   
}
export class Account {
    private _id: number
    private _userName: string;
    private _userPass: number;


    constructor(id: number, userName: string, userPass: number) {
        this._id = id;
        this._userName = userName;
        this._userPass = userPass;
    }

    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    get userName(): string {
        return this._userName;
    }

    set userName(value: string) {
        this._userName = value;
    }

    get userPass(): number {
        return this._userPass;
    }

    set userPass(value: number) {
        this._userPass = value;
    }
}
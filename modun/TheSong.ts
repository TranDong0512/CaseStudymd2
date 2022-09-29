export class TheSong{
    private _id: number;
    private _name: string;
    private _composing: string;

    constructor(id: number, name: string, composing: string) {
        this._id = id;
        this._name = name;
        this._composing = composing;
    }

    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get composing(): string {
        return this._composing;
    }

    set composing(value: string) {
        this._composing = value;
    }
}
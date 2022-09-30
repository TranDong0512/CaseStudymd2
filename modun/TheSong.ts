export class TheSong{
    private _id: number;
    private _name: string;
    private _composer: string;

    constructor(id: number, name: string, composing: string) {
        this._id = id;
        this._name = name;
        this._composer = composing;
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

    get composer(): string {
        return this._composer;
    }

    set composer(value: string) {
        this._composer = value;
    }
}
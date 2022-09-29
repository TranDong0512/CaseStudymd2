import {TheSong} from "./TheSong";

export class Album {
    private _id: number;
    private _name: string;
    private _listTheSong: TheSong[] = []

    constructor(id: number, name: string) {
        this._id = id;
        this._name = name;

    }
    get listTheSong(): TheSong[] {
        return this._listTheSong;
    }

    set listTheSong(value: TheSong[]) {
        this._listTheSong = value;
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

    add(t: TheSong) {
        this._listTheSong.push(t)
    }

    findAll() {
        for (let i = 0; i< this._listTheSong.length; i++){
            if( this._listTheSong.length == 0){
                console.log("khong co bai hat nao ")
            }else {
                return this.listTheSong
            }
        }

    }

    findById(id: number): TheSong | number {
        for (let i = 0; i < this._listTheSong.length; i++) {
            if (this._listTheSong[i].id == id) {
                return this._listTheSong[i]
            }
        }
        return -1
    }

    findByIndex(name: string): TheSong {
        return
    }
    findByName(name: string): number {
        for (let i =0; i < this._listTheSong.length; i++){
            if(this._listTheSong[i].name == name){
                return i
            }
        }
        return  -1
    }
}




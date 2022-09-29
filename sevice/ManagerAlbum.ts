import {IManager} from "./IManager";
import {Album} from "../modun/Album";
import {Account} from "../modun/account";

export class ManagerAlbum implements IManager<Album> {
    listAlbumManager: Album[] = []
    private _user: Account


    get user(): Account {
        return this._user;
    }

    set user(value: Account) {
        this._user = value;
    }

    add(t: Album) {
        this.listAlbumManager.push(t)
    }

    findAll() {
        // for (let i = 0; i < this.listAlbumManager.length; i++) {
        //     if (this.listAlbumManager.length != 0) {
        //         console.log(`STT: ${this.listAlbumManager[i].id} Ten Album: ${this.listAlbumManager[i].name} list Song: ${this.listAlbumManager[i].listTheSong = []}`)
        //     }
        // }
        // return "không có dữ liệu"
        return this.listAlbumManager
    }

    findById(id: number) {
        for (let i = 0; i < this.listAlbumManager.length; i++) {
            if (this.listAlbumManager[i].id == id) {
                return this.listAlbumManager[i]
             }
        }
        return -1
    }

    findByIndex(name: string): Album {
        return undefined;
    }

}
import {IManager} from "./IManager";
import {ManagerAlbum} from "./ManagerAlbum";

export class ManagerAllAlbum implements IManager<ManagerAlbum> {
    listAllAlbumManager: ManagerAlbum[] = []

    add(t: ManagerAlbum) {
        this.listAllAlbumManager.push(t)
    }

    findAll() {
        return this.listAllAlbumManager;
    }


    findById(id: number): number | ManagerAlbum {
       return
    }

    findByIndex(name: string): ManagerAlbum {
        return undefined;
    }

    findAlbumByUserId(id: number): ManagerAlbum {
        for (let i = 0; i < this.listAllAlbumManager.length; i++) {
            if (this.listAllAlbumManager[i].user != undefined && this.listAllAlbumManager[i].user.id == id) {
               return this.listAllAlbumManager[i];
            }
        }
        return null;
    }


}
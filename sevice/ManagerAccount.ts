import {Account} from "../modun/account";
import {IManager} from "./IManager";

export class ManagerAccount implements IManager<Account> {
    listAccountManager: Account[] = []

    add(t: Account) {
        this.listAccountManager.push(t)
    }

    findAll(): void {

    }

    findById(id: number): Account {
        return undefined;
    }

    // @ts-ignore
    findByIndex(index: number): Account {
        return
    }

    searchIndex(name: string, passWord: number){
        for (let i = 0; i < this.listAccountManager.length; i++) {
            if( this.listAccountManager[i].userName == name && this.listAccountManager[i].userPass == passWord){
                return i
            }
        }return -1
    }

    findName( name: string, pass: number){
        return this.listAccountManager[this.searchIndex(name, pass)]
    }

}
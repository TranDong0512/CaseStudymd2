"use strict";
exports.__esModule = true;
exports.ManagerAccount = void 0;
var ManagerAccount = /** @class */ (function () {
    function ManagerAccount() {
        this.listAccountManager = [];
    }
    ManagerAccount.prototype.add = function (t) {
        this.listAccountManager.push(t);
    };
    ManagerAccount.prototype.findAll = function () {
    };
    ManagerAccount.prototype.findById = function (id) {
        return undefined;
    };
    // @ts-ignore
    ManagerAccount.prototype.findByIndex = function (index) {
        return;
    };
    ManagerAccount.prototype.searchIndex = function (name, passWord) {
        for (var i = 0; i < this.listAccountManager.length; i++) {
            if (this.listAccountManager[i].userName == name && this.listAccountManager[i].userPass == passWord) {
                return i;
            }
        }
        return -1;
    };
    ManagerAccount.prototype.findName = function (name, pass) {
        return this.listAccountManager[this.searchIndex(name, pass)];
    };
    return ManagerAccount;
}());
exports.ManagerAccount = ManagerAccount;

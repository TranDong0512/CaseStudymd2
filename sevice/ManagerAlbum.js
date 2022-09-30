"use strict";
exports.__esModule = true;
exports.ManagerAlbum = void 0;
var ManagerAlbum = /** @class */ (function () {
    function ManagerAlbum(user) {
        this.listAlbumManager = [];
        this._user = user;
    }
    Object.defineProperty(ManagerAlbum.prototype, "user", {
        get: function () {
            return this._user;
        },
        set: function (value) {
            this._user = value;
        },
        enumerable: false,
        configurable: true
    });
    ManagerAlbum.prototype.add = function (t) {
        this.listAlbumManager.push(t);
    };
    ManagerAlbum.prototype.findAll = function () {
        // for (let i = 0; i < this.listAlbumManager.length; i++) {
        //     if (this.listAlbumManager.length != 0) {
        //         console.log(`STT: ${this.listAlbumManager[i].id} Ten Album: ${this.listAlbumManager[i].name} list Song: ${this.listAlbumManager[i].listTheSong = []}`)
        //     }
        // }
        // return "không có dữ liệu"
        return this.listAlbumManager;
    };
    ManagerAlbum.prototype.findById = function (id) {
        for (var i = 0; i < this.listAlbumManager.length; i++) {
            if (this.listAlbumManager[i].id == id) {
                return this.listAlbumManager[i];
            }
        }
        return -1;
    };
    ManagerAlbum.prototype.findByIndex = function (name) {
        return undefined;
    };
    return ManagerAlbum;
}());
exports.ManagerAlbum = ManagerAlbum;

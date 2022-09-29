"use strict";
exports.__esModule = true;
exports.ManagarAlbum = void 0;
var ManagarAlbum = /** @class */ (function () {
    function ManagarAlbum(user) {
        this.listAlbumManager = [];
        this._user = user;
    }
    Object.defineProperty(ManagarAlbum.prototype, "user", {
        get: function () {
            return this._user;
        },
        set: function (value) {
            this._user = value;
        },
        enumerable: false,
        configurable: true
    });
    ManagarAlbum.prototype.add = function (t) {
        this.listAlbumManager.push(t);
    };
    ManagarAlbum.prototype.findAll = function () {
        // for (let i = 0; i < this.listAlbumManager.length; i++) {
        //     if (this.listAlbumManager.length != 0) {
        //         console.log(`STT: ${this.listAlbumManager[i].id} Ten Album: ${this.listAlbumManager[i].name} list Song: ${this.listAlbumManager[i].listTheSong = []}`)
        //     }
        // }
        // return "không có dữ liệu"
        return this.listAlbumManager;
    };
    ManagarAlbum.prototype.findById = function (id) {
        for (var i = 0; i < this.listAlbumManager.length; i++) {
            if (this.listAlbumManager[i].id == id) {
                return this.listAlbumManager[i];
            }
        }
        return -1;
    };
    ManagarAlbum.prototype.findByIndex = function (name) {
        return undefined;
    };
    return ManagarAlbum;
}());
exports.ManagarAlbum = ManagarAlbum;

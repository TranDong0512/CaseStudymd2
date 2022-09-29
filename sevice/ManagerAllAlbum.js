"use strict";
exports.__esModule = true;
exports.ManagerAllAlbum = void 0;
var ManagerAllAlbum = /** @class */ (function () {
    function ManagerAllAlbum() {
        this.listAllAlbumManager = [];
    }
    ManagerAllAlbum.prototype.add = function (t) {
        this.listAllAlbumManager.push(t);
    };
    ManagerAllAlbum.prototype.findAll = function () {
        return this.listAllAlbumManager;
    };
    ManagerAllAlbum.prototype.findById = function (id) {
        return;
    };
    ManagerAllAlbum.prototype.findByIndex = function (name) {
        return undefined;
    };
    ManagerAllAlbum.prototype.findAlbumByUserId = function (id) {
        for (var i = 0; i < this.listAllAlbumManager.length; i++) {
            if (this.listAllAlbumManager[i].user != undefined && this.listAllAlbumManager[i].user.id == id) {
                return this.listAllAlbumManager[i];
            }
        }
        return null;
    };
    return ManagerAllAlbum;
}());
exports.ManagerAllAlbum = ManagerAllAlbum;

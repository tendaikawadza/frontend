"use strict";
exports.__esModule = true;
var User = /** @class */ (function () {
    function User() {
        this.userId = '';
        this.firstName = '';
        this.lastName = '';
        this.username = '';
        this.email = '';
        this.lastLoginDate = null;
        this.lastLoginDateDisplay = null;
        this.joinDate = null;
        this.profileImageUrl = '';
        this.active = false;
        this.notLocked = false;
        this.authorities = [];
    }
    return User;
}());
exports.User = User;

//# sourceMappingURL=user.js.map

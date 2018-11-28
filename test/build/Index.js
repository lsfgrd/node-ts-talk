"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Server_1 = require("./Server");
var Application = /** @class */ (function () {
    function Application(port, msg) {
        this.port = port;
        this.msg = msg;
        this.start();
    }
    Application.prototype.start = function () {
        var _this = this;
        Server_1.default.listen(this.port, function () { return "Listening on " + _this.port; });
        Server_1.default.get('/', function (req, res) {
            res.send(_this.msg);
        });
    };
    return Application;
}());
new Application(8080, 'Node BR!!!');
//# sourceMappingURL=Index.js.map
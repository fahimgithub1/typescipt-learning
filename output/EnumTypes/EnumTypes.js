"use strict";
var RType;
(function (RType) {
    RType[RType["sucess"] = 0] = "sucess";
    RType[RType["Faillure"] = 1] = "Faillure";
    RType[RType["UnAuthenticated"] = 2] = "UnAuthenticated";
    RType[RType["ForBidden"] = 3] = "ForBidden";
})(RType || (RType = {}));
const response11 = {
    status: 200,
    type1: RType.sucess,
    data: {
        name: 'test',
        something: 500
    }
};

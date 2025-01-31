"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomRepository = void 0;
var MetadataStorage_1 = require("../MetadataStorage");
function CustomRepository(entity) {
    return function (target) {
        MetadataStorage_1.getMetadataStorage().setRepository({ entity: entity, target: target });
    };
}
exports.CustomRepository = CustomRepository;
//# sourceMappingURL=CustomRepository.js.map
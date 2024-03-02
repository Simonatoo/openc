"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAll = void 0;
const client_1 = require("./database/client");
const getAll = () => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, client_1.server)();
    const db = client_1.client.db('openc');
    const collection = db.collection("posts");
    const posts = yield collection.find({}).toArray();
    return posts;
});
exports.getAll = getAll;

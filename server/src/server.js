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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
const express_1 = __importDefault(require("express"));
const create_post_1 = require("./create-post");
const get_all_post_1 = require("./get-all-post");
const cors = require('cors');
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(cors());
app.post('/createPost', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newPost = yield (0, create_post_1.createPost)({
            title: req.body.title,
            content: req.body.content
        });
        if (newPost) {
            res.status(201).send('Post was created');
        }
        else {
            res.status(400).send('Failed to create post');
        }
    }
    catch (error) {
        console.error("Error creating post:", error);
        res.status(500).send("Internal Server Error");
    }
}));
app.get('/posts', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const posts = yield (0, get_all_post_1.getAll)();
        if (posts) {
            res.json(posts);
        }
        else {
            res.status(400).send('Failed to get posts');
        }
    }
    catch (error) {
        console.error('Fail to request');
        res.status(500).send('Internal server error', error);
    }
}));
app.listen(3030, () => __awaiter(void 0, void 0, void 0, function* () {
    console.log('O servidor está escutando a porta 3030');
}));

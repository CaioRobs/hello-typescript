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
const EmailService_1 = __importDefault(require("../services/EmailService"));
const users = [
    { name: "Caio", email: "caiorro@gmail.com" },
    { name: "sam", email: "sanhellen@gmail.com" },
];
exports.default = {
    index(_req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            return res.json(users);
        });
    },
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const emailService = new EmailService_1.default();
            emailService.sendMail({
                to: {
                    name: "Caio",
                    email: "caiororo@gmail.com",
                },
                message: {
                    subject: "registro concluido",
                    body: "Parabens...",
                },
            });
            res.send();
        });
    },
};

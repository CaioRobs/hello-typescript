"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class EmailService {
    sendMail({ to, message }) {
        console.log(`enviado para ${to.name}: ${message.subject}`);
        console.log(to, message);
    }
}
exports.default = EmailService;

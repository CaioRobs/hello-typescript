import { Request, Response } from "express";
import EmailService from "../services/EmailService";

const users = [
  { name: "Caio", email: "caiorro@gmail.com" },
  { name: "sam", email: "sanhellen@gmail.com" },
];

export default {
  async index(_req: Request, res: Response) {
    return res.json(users);
  },

  async create(req: Request, res: Response) {
    const emailService = new EmailService();

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
  },
};

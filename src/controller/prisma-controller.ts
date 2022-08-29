import { Request, Response } from "express";
import prismaClient from "../database";

export default class Main {
  async register (req: Request, res: Response) {
    const { email, name, password } = req.body;

    const newUser = await prismaClient.user.create({
      data: {
        name, email, password
      }
    })

    return res.status(201).json(newUser);
  }

  async getUsers (_req: Request, res: Response) {
    const users = await prismaClient.user.findMany();

    return res.status(200).json(users);
  }

  async getOne (req: Request, res: Response) {
    const { id } = req.params;
    const setId = Number(id);

    // const users = await prismaClient.user.findMany({ where: { id: setId } });
    // findMany retorna a constante em array => [{}]
    // findFirst retorna a constante em objeto => {}

    const user = await prismaClient.user.findFirst({ where: { id: setId } });

    return res.status(200).json(user);
  }

  async updateOne (req: Request, res: Response) {
    const { id } = req.params;
    const setId = Number(id);
    const { name } = req.body;

    const user = await prismaClient.user.findFirst({ where: { id: setId } });
    
    if (user) {
      const update = await prismaClient.user.upsert({
        where: {
          id: setId
        },
        update: {
          name
        },
        create: {
          name, email: user.email, password: user.password
        }
      });

      return res.status(201).json(update);
    }
  }

  async delete (req: Request, res: Response) {
    const { id } = req.params;
    const setId = Number(id);

    await prismaClient.user.delete({ where: { id: setId } });

    const users = await prismaClient.user.findMany();

    return res.status(201).json(users);    
  }
}
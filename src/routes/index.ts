import { Router } from "express";
import Main from "../controller/prisma-controller";

const router  = Router();

const controller = new Main();

router.post('/', controller.register); // create

router.get('/', controller.getUsers); // read

router.get('/:id', controller.getOne); // readOne

router.patch('/:id', controller.updateOne); // update

router.delete('/:id', controller.delete); // delete

export default router;

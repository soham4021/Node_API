import express from "express";
import { createUser, getUser, getUserById, deleteUserById, updateUserById } from "../controllers/users.js";

const router = express.Router();

//all routes here are starting with /users
router.get("/", getUser)

router.post("/", createUser)

//users/2 => req.params { id : 2 }
router.get("/:id", getUserById)

//delete that particular id user
router.delete("/:id", deleteUserById)

router.patch("/:id", updateUserById)

export default router;
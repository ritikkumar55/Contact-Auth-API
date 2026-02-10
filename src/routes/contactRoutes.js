import express from "express";
import { deleteContactById,
  getAllContact,
  getContactById,
  getContactByUserId,
  newContact,
  updateContactById, } from "../controllers/contactController.js";
  
import protect from "../middlewares/authMiddleware.js";


const router = express.Router();

// new contact
// @api dsc :- creating contact
// @api method :- post
// @api endPoint :- /api/contact/new
router.post("/new", protect, newContact);

// get all contact
router.get("/", getAllContact);

// get contact by id
router.get("/:id", getContactById);

// update contact by id
router.put("/:id",protect, updateContactById);

// delete contact by id
router.delete("/:id",protect, deleteContactById);

// get user specific contact
router.get("/userid/:id",getContactByUserId);

export default router;
import { Router } from "express";

import {  DisplayContactsList, 
    DisplayContactsAddPage, 
    ProcessContactsAddPage, 
    ProcessContactsEditPage, 
    DisplayContactsEditPage, 
    ProcessContactsDelete } from "../controllers/contact.controller.server.js";

import { AuthGuard } from "../utils/index.js";

const router = Router();

router.get('/contact-list', AuthGuard, DisplayContactsList);
router.get('/contact-add', AuthGuard,  DisplayContactsAddPage);
router.post('/contact-add', AuthGuard, ProcessContactsAddPage);
router.post('/contact-edit/:id', AuthGuard, ProcessContactsEditPage);
router.get('/contact-edit/:id', AuthGuard, DisplayContactsEditPage);
router.get('/contact-delete/:id', AuthGuard, ProcessContactsDelete);

export default router;
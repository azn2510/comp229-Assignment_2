import { Router } from "express";
import {displayAboutPage,
        displayHomePage,
        displayContactPage,
        displayProjectsPage,
        displayServicesPage } from "../controllers/index.controller.server.js";

import { AuthGuard } from "../utils/index.js";

const router = Router();

router.get('/', AuthGuard, displayHomePage);
router.get('/home', AuthGuard, displayHomePage);
router.get('/about/', displayAboutPage);
router.get('/projects', AuthGuard, displayProjectsPage);
router.get('/services', AuthGuard, displayServicesPage);
router.get('/contact', AuthGuard, displayContactPage);

export default router;

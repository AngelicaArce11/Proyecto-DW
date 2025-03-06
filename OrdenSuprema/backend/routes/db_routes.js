import { Router } from "express";

import {
  getAllDebts,
  createDebt,
  updateDebt,
  deleteDebt,
} from "../controllers/debtController.js";

import {
  getAllMissions,
  getFilteredMissions,
  createMission,
  acceptMission,
  completeMission,
  confirmMission,
  updateMission,
  deleteMission,
} from "../controllers/missionController.js";

import {
  getAllUsers,
  getAllAssassins,
  getAllOrder,
  createAssassin,
  createOrder,
  updateUser,
} from "../controllers/userController.js";

import { loginUser } from "../controllers/authController.js";  
import { verifyToken, verifyRole } from "../middlewares/auth.js";

const router = Router();

//Login
router.post("/login", loginUser);

 //Debts
router.get('/debt', getAllDebts);
router.post('/debt', createDebt);
router.put('/debt/:id', updateDebt);
router.delete('/debt/:id', deleteDebt);
router.get('/debt/:id');

 //Missions
router.get('/Mission', getAllMissions);
router.get('/FilteredMission', getFilteredMissions);
router.post('/Mission', createMission);
router.put('/Mission:id');
router.put('/Mission/accept/:id', acceptMission);
router.put('/Mission/complete/:id', completeMission);
router.put('/Mission/confirm/:id', confirmMission);
router.delete('/Mission/delete/:id', deleteMission);
router.get('/Mission/:id');

 //Transactions
router.get('/Transaction');
router.post('/Transaction');
router.put('/Transaction/:id');
router.delete('/Transaction/:id');
router.get('/Transaction/:id');

 //Users
router.get('/User', getAllUsers);
router.get('/User/Assassin', getAllAssassins);
router.get('/User/Order', getAllOrder);

router.post('/User/Assassin', verifyToken, verifyRole(["order"]), createAssassin);
router.post('/User/Order', createOrder);

router.put('/User/:id', updateUser);
router.delete('/User/:id');
router.get('/User/:id');

  

export default router;
import { Router } from "express";
import { loginUser } from "../controllers/authController.js";  
import { verifyToken, verifyRole } from "../middlewares/auth.js";

import {
  getAllDebts,
  createDebt,
  updateDebt,
  deleteDebt,
  getDebtByCreditorId,
  getDebtByDebtorId
} from "../controllers/debtController.js";

import {
  getAllMissions,
  getFilteredMissions,
  getUnreviewedMissions,
  createMission,
  acceptMission,
  completeMission,
  confirmMission,
  updateMission,
  deleteMission,
  getMissionsAssignedTo
} from "../controllers/missionController.js";

import {
  getAllUsers,
  getAllAssassins,
  getUser,
  getAllOrder,
  createAssassin,
  createOrder,
  updateUserCoins,
  updateUserLocation
} from "../controllers/userController.js";
import { get } from "http";

const router = Router();

//Login
router.post("/login", loginUser);

 //Debts
router.get('/debt', getAllDebts);
router.post('/debt', createDebt);
router.put('/debt/:id', updateDebt);
router.delete('/debt/:id', deleteDebt);
router.get('/debt/:id/creditor', getDebtByCreditorId);
router.get('/debt/:id/debtor', getDebtByDebtorId);

 //Missions
router.get('/Mission', getAllMissions);
router.get('/FilteredMission', getFilteredMissions);
router.get('/Mission/Review', getUnreviewedMissions);
router.get('/Mission/:id/PublishedBy');
router.get('/Mission/AssignedTo/:id', getMissionsAssignedTo);

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
router.get('/UserById/:id', getUser);
router.get('/User/Assassin', getAllAssassins);
router.get('/User/Order', getAllOrder);

router.post('/User/Assassin', verifyToken, verifyRole(["order"]), createAssassin);
// router.post('/User/Assassin', createAssassin);
router.post('/User/Order', createOrder);

router.put('/UserById/:id', updateUserCoins);
router.put('/UserById/location/:id', updateUserLocation);
router.delete('/UserById/:id');


  

export default router;
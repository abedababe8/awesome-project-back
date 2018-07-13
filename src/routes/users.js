const express = require('express')
const router = express.Router()
const userController = require('../controllers/users')

//////////////////////////////////////////////////////////////////////////////
// Basic CRUD Methods
//////////////////////////////////////////////////////////////////////////////

router.post('/', userController.create)
// router.get('/:userId/accounts', userController.getAllAccounts)
router.get('/:userId/activ', userController.getAllActivities)
router.post('/:userId/activ', userController.createActiv)
router.post('/:userId/favs', userController.createFav)
router.get('/:userId/favs', userController.getAllFavs)
router.delete('/:userId/favs/:parkId', userController.deleteFav)
router.get('/:userId/favs/:parkId/activ', userController.getAcsForFav)
router.post('/:userId/favs/:parkId/activ/:activId', userController.postAcForFav)

// router.post('/:userId/accounts/:accountId/userAcc', userController.createUser_Acc)

module.exports = router

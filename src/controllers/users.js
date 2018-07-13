const userModel = require('../models/users')

//////////////////////////////////////////////////////////////////////////////
// Basic CRUD Methods
//////////////////////////////////////////////////////////////////////////////
function createFav(req, res, next){
  return userModel.createFav(req.params.userId, req.body.parkId, req.body.parkUrl)
  .then(function(data){
      res.status(200).json({data})
  })
  .catch(error => {
    console.log(error)
    next()
  })
}

function getAllFavs(req, res, next){
  return userModel.getAllFavs(req.params.userId)
  .then(function(data){
      res.status(200).json({data})
  })
  .catch(next)
}

function deleteFav(req, res, next){
  userModel.deleteFav(req.params.parkId)
  .then(function(deletedFav){
    res.status(200).send({deletedFav})
  })
}
// function createUser_Acc(req, res, next){
//   userModel.getOneByUserName(req.body.findUser)
//   .then(function(foundUser){
//     let foundUserId = foundUser.id
//     return userModel.createUser_Acc(foundUserId, req.params.accountId)
//   })
//   .then(function(newUser_Acc){
//     res.status(201).send({newUser_Acc})
//   })
//   .catch(next)
// }


function create(req, res, next){
  if(!req.body.new_username){
    return next({ status: 400, message: 'Bad username'})
  }

  if(!req.body.new_password){
    return next({ status: 400, message: 'Bad username'})
  }

  userModel.create(req.body.new_username, req.body.new_password)
  .then(function(data){
    return res.status(201).send({ data })
  })
  .catch(next)
}



function getAllAccounts(req, res, next){

   userModel.getAllAccounts(req.params.userId)
  .then(function(data){
    // console.log('hey!', data);
    return res.status(200).send(data)
  })
}
function createActiv(req, res, next){
  userModel.createActiv(req.body.name, req.body.pts)
    .then(function(data){
      return res.status(200).send(data)
    })
  }

function getAllActivities(req, res, next){
  userModel.getAllActivities()
  .then(function(activs){
    return res.status(200).send(activs)
  })
}

function getAcsForFav(req, res, next){
  userModel.getAcsForFav(req.params.userId, req.params.parkId)
  .then(function(data){
    return res.status(200).send(data)
  })
}

function postAcForFav(req, res, next){
  userModel.postAcForFav(req.params.userId, req.params.parkId, req.params.activId)
  .then(function(data){
    return res.status(200).send(data)
  })
}
//////////////////////////////////////////////////////////////////////////////
// Quality of Life functions
//////////////////////////////////////////////////////////////////////////////

module.exports = {
  createFav,
  getAllFavs,
  // createUser_Acc,
  deleteFav,
  create,
  getAllAccounts,
  createActiv,
  getAllActivities,
  getAcsForFav,
  postAcForFav
}

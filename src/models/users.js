const db = require('../../db')
const bcrypt = require('bcrypt-as-promised')
// const accountModel = require('./accounts')

//////////////////////////////////////////////////////////////////////////////
// Basic CRUD Methods
//////////////////////////////////////////////////////////////////////////////

function getOneByUserName(username){
  return (
    db('users')
    .where({ username })
    .first()
  )
}

//////////////////////////////////////////////////////////////////////////////
// Create a user
//
// 1. Check to see if user already exists
//   a. if so, return a 400 with appropriate error message
// 2. Hash password
// 3. Insert record into database
// 4. strip hashed password away from object
// 5. "return/continue" promise
//////////////////////////////////////////////////////////////////////////////

function create(username, password, name){

  // check to see of user already exists
  return getOneByUserName(username)
  .then(function(data){
    // if user already exists, return 400
    if(data) throw { status: 400, message:'User already exists'}
    console.log(password);
    // hash password
    return bcrypt.hash(password, 10)
  })
  .then(function(hashedPassword){
    console.log(hashedPassword)
    // 3. Insert record into database
    return (
      db('users')
      .insert({ username, password: hashedPassword })
      .returning('*')
    )
  })
  .then(function([ data ]){
    // 4. strip hashed password away from object
    // delete data.password
    // 5. "return/continue" promise
    return data
  })
}

function createActiv(name, pts){
  return (
    db('activs')
    .insert({name, pts})
    .returning('*')
  )
}
function getAllActivities(){
  return (
    db('activs')
    .returning('*')
  )
}
//Fill in List info here
function createFav(userId, parkId, parkUrl){
  return (
    db('favs')
    //Fill in Fav info here
    .insert({userId, parkId, parkUrl})
    .returning('*')
  )
}
function getAllFavs(userId){
  return (
    db('favs')
    .where({userId})
  )
}
function deleteFav(parkId){
  return (
    db('favs')
    .where({parkId})
    .del()
    .returning('*')
  )
}
function getAcsForFav(userId, parkId){
  return (
    db('us_fa_ac')
    .innerJoin('activs', 'us_fa_ac.activId', 'activs.id')
    .where({userId, parkId})
    .returning('*')
  )
}
function postAcForFav(userId, parkId, activId){
  return (
    db('us_fa_ac')
    .insert({userId, parkId, activId})
    .returning('*')
  )
}
function updatePtsForAc(userId, parkId, activId, morePts){
  return (
    db('us_fa_ac')
    .where({userId, parkId, activId})
    .update({pts: pts + morePts})
    .returning('*')
  )
}

function postPhoto(userId, parkId, uri){
  return(
    db('us_fa_pho')
    .insert({userId, parkId, uri})
    .returning('*')
  )
}
function getPhotos(userId, parkId){
  return(
    db('us_fa_pho')
    .where({userId, parkId})
    .returning('*')
  )
}

module.exports = {
  getOneByUserName,
  create,
  createActiv,
  getAllActivities,
  createFav,
  getAllFavs,
  deleteFav,
  getAcsForFav,
  postAcForFav,
  updatePtsForAc,
  postPhoto,
  getPhotos
}

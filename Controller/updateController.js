const updateModel = require('../Models/authModel')
const jwt = require('jsonwebtoken')
const decorationController = async (req, res) => {
  var { minBookingPrice, name, description, address } = req.body
  if (!minBookingPrice|| !name || !address || !description) {
    res.status(404).json({ success: false, message: 'All fields are require' })
  } else {
    jwt.verify(req.token, 'secretkey', async (err, authData) => {
      if (err) {
        res.status(400).json({ success: false, message: 'token error' })
      } else {
        const user = await updateModel.findOne({ email: authData.data.email })
        if (user) {
          const fileNames = req.files.map(file => file.originalname)

          user.decoration.minBookingPrice = minBookingPrice
          // user.decoration.available = available
          user.decoration.name = name
          user.decoration.address = address
          user.decoration.description=description
          user.decoration.image1 = fileNames[0]
          user.decoration.image2 = fileNames[1]
          const updated_data = await user.save()
          res.status(200).json({
            success: true,
            message: 'data updated successfully',
            updated_data: updated_data
          })
        } else {
          res.status(400).json({
            success: true,
            message: 'User not found Login again'
          })
        }
      }
    })
  }
}
const djSoundController = async (req, res) => {
  var { minBookingPrice, name, description, address} = req.body
  if (!minBookingPrice|| !name || !address || !description) {
    res.status(404).json({ success: false, message: 'All fields are require' })
  } else {
    jwt.verify(req.token, 'secretkey', async (err, authData) => {
      if (err) {
        res.status(400).json({ success: false, message: 'token error' })
      } else {
        const user = await updateModel.findOne({ email: authData.data.email })
       
        if (user) {
          const fileNames = req.files.map(file => file.originalname)

          user.djSound.minBookingPrice = minBookingPrice
          // user.djSound.available = available
          user.djSound.name = name
          user.djSound.address = address
          user.djSound.description=description
          user.djSound.image1 = fileNames[0]
          user.djSound.image2 = fileNames[1]
          const updated_data = await user.save()
          res.status(200).json({
            success: true,
            message: 'data updated successfully',
            updated_data: updated_data
          })
        } else {
          res.status(400).json({
            success: true,
            message: 'User not found Login again'
          })
        }
      }
    })
  }
}
const marriegeHallController = async (req, res) => {
  var {  minBookingPrice, name, description, address } = req.body
  if (!minBookingPrice|| !name || !address || !description) {
    res.status(404).json({ success: false, message: 'All fields are require' })
  } else {
    jwt.verify(req.token, 'secretkey', async (err, authData) => {
      if (err) {
        res.status(400).json({ success: false, message: 'token error' })
      } else {
        const user = await updateModel.findOne({ email: authData.data.email })
       
        if (user) {
          const fileNames = req.files.map(file => file.originalname)

          user.marriegeHall.minBookingPrice = minBookingPrice
          // user.marriegeHall.available = available
          user.marriegeHall.name = name
          user.marriegeHall.address = address
          user.marriegeHall.description=description
          user.marriegeHall.image1 = fileNames[0]
          user.marriegeHall.image2 = fileNames[1]
          const updated_data = await user.save()
          res.status(200).json({
            success: true,
            message: 'data updated successfully',
            updated_data: updated_data
          })
        } else {
          res.status(400).json({
            success: true,
            message: 'User not found Login again'
          })
        }
      }
    })
  }
}

const photographerController = async (req, res) => {
  var { minBookingPrice, name, description, address} = req.body
  if (!minBookingPrice|| !name || !address || !description) {
    res.status(404).json({ success: false, message: 'All fields are require' })
  } else {
    jwt.verify(req.token, 'secretkey', async (err, authData) => {
      if (err) {
        res.status(400).json({ success: false, message: 'token error' })
      } else {
        const user = await updateModel.findOne({ email: authData.data.email })
       
        if (user) {
          const fileNames = req.files.map(file => file.originalname)

          user.photographer.minBookingPrice = minBookingPrice
          // user.photographer.available = available
          user.photographer.name = name
          user.photographer.address = address
          user.photographer.description=description
          user.photographer.image1 = fileNames[0]
          user.photographer.image2 = fileNames[1]
          const updated_data = await user.save()
          res.status(200).json({
            success: true,
            message: 'data updated successfully',
            updated_data: updated_data
          })
        } else {
          res.status(400).json({
            success: true,
            message: 'User not found Login again'
          })
        }
      }
    })
  }
}

const carController = async (req, res) => {
  const { minBookingPrice, name, description, address} = req.body.car
  if (!minBookingPrice|| !name || !address || !description) {
    res.status(404).json({ success: false, message: 'All fields are require' })
  } else {
    jwt.verify(req.token, 'secretkey', async (err, authData) => {
      if (err) {
        res.status(400).json({ success: false, message: 'token error' })
      } else {
        const user = await updateModel.findOne({ _id: authData.data._id })
        user.car.minBookingPrice = minBookingPrice
        user.car.available = available
        user.car.totalCar = totalCar
        const updated_data = await user.save()
        res.status(200).json({
          success: true,
          message: 'data updated successfully',
          updated_data: updated_data
        })
      }
    })
  }
}

module.exports = {
  decorationController,
  djSoundController,
  marriegeHallController,
  carController,
  photographerController
}

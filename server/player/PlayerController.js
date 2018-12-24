var express = require('express')
var router = express.Router()
var bodyParser = require('body-parser')

router.use(bodyParser.urlencoded({ extended: true }))
router.use(bodyParser.json())
var Player = require('./Player')
var VerifyToken = require('../auth/VerifyToken')


// Create a New Player
router.post('/',VerifyToken, (req, res) => {
  Player.create({
    name: req.body.name
  }, (err, player) => {
    if (err) return res.status(500).send('There was a problem adding the information to the database.')
    res.status(200).send(player)
  })
})

// Returns All the Players in The Database
router.get('/', (req, res) => {
  Player.find({}, (err, players) => {
    if (err) return res.status(500).send('There was a problem finding the players.')
    res.status(200).send(players)
  })
})

// Returns Signle Player by ID
router.get('/:id', (req, res) => {
  Player.findById(req.params.id, (err, player) => {
    if (err) return res.status(500).send('There was a problem finding the player.')
    res.status(200).send(player)
  })
})

// Deletes a Player from the Database
router.delete('/:id',VerifyToken, (req, res) => {
  Player.findByIdAndRemove(req.params.id, (err, player) => {
    if (err) return res.status(500).send('There was a problem deleting the player.')
    res.status(200).send('Player: ' + player.name + 'was deleted')
  })
})

// Update single Player by ID
router.put('/:id',VerifyToken, (req, res) => {
  Player.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, player) => {
    if (err) return res.status(500).send('There was a problem updating the player.')
    res.send(200).send(player)
  })
})

module.exports = router

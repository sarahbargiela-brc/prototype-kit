const express = require('express')
const router = express.Router()

// Add your routes here _ above the module.exports line

module.exports = router

// Branching_England
router.post('/branching-england/england-yes', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  let england = req.session.data['england']

  if (england === 'false') {
    res.redirect('/branching-england/england-no')
  } else {
    res.redirect('/branching-england/england-yes')
  }
})

// Branching_Individual
router.post('/branching-individual/individual-yes', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  let individual = req.session.data['individual']

  if (individual === 'false') {
    res.redirect('/branching-individual/individual-no')
  } else {
    res.redirect('/branching-individual/individual-yes')
  }
})

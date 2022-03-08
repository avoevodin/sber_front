// const { sessions } = require('../../sessions')
const { sessions } = require(`${process.env.PWD}/sessions`)

const checkAuth = (req, res, next) => {
  const sidFromUser = req.cookies.sid

  if (sessions[sidFromUser]) {
    return next()
  }

  return res.redirect('/auth/signin')
}

module.exports = {
  checkAuth,
}

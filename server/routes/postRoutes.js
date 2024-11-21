const {Router} = require('express')

const router = Router()

router.get('/', (req, res, next) => {
res.json('this is post route')
    // res.send('hello')   
})

module.exports = router
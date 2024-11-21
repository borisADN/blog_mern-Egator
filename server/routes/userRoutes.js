const {Router} = require('express')

const {
    registerUser,
    loginUser,
    getUser,
    changeAvatar,
    editUser,
    getAuthors
 } = require('../controllers/userController')

const router = Router()

router.post('/register', registerUser)
router.post('/login', loginUser)
router.get('/:id', getUser)
router.post('/change-avatar', changeAvatar)
router.patch('/edit-user', editUser)
// router.get('/authors', getAuthors)
router.get('/', getAuthors)

router.get('/', (req, res, next) => {
res.json('this is user route')
  
})

module.exports = router
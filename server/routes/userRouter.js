const router = require('express').Router();
const bcrypt = require('bcrypt');
const { User } = require('../db/models');
const path = require('path')

router.route('/check')
.post((req, res) => {
    if(req.session.user){
      return res.status(200).json({user: req.session.user})
    }
res.sendStatus(401);
})

router.route('/signup')
.post(async (req, res) => {
  console.log(req.body);
    const {userName, password} = req.body;
    if(userName && password){
        const cryptPass = await bcrypt.hash(password, Number(process.env.SALT_ROUND))
        try{
            const currentUser =  await User.create({...req.body, password:cryptPass})
            req.session.user = {id:currentUser.id, userName:currentUser.userName}
            return res.json({user:{id:currentUser.id, userName:currentUser.userName}})
        }catch(err){
      
            return res.sendStatus(500)
        }
    } else {
        return res.sendStatus(500)
    }
})

router.route('/signin')
.post(async (req, res) => {
    const {userName, password} = req.body;
    if(userName && password){
        try{
            const currentUser = await User.findOne({where:{userName}})
            if(currentUser && await bcrypt.compare(password, currentUser.password)){
                req.session.user = {id:currentUser.id, userName:currentUser.userName}
                return res.json({user:{id:currentUser.id, userName:currentUser.userName}})
            } else {
                return res.sendStatus(500)
            }
        }catch(err){
          
            return res.sendStatus(500)
        }
    }else{
        return res.sendStatus(500)
    }

})


router.route('/logout')
.post((req, res) => {
    req.session.destroy()
    res.clearCookie('sid').sendStatus(200)
})


module.exports = router;

import express from 'express';
import {prisma} from '../utils/prisma/index.js';


const router = express.Router();

router.get('/userinfo', async(req, res, next) => {
    const userinfo = await prisma.users.findMany({
        where : {username : 'John'}
    })

    return res.status(201).json({data : userinfo})
})

router.post('/userinfo', async(req, res, next) => {
    const {username} = req.body;
    console.log(username);

    await prisma.users.create({
        data : {
            username : username
        }
    })
    return res.status(201).json({msg : "good"});
})

export default router;
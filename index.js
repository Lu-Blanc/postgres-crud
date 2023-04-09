import 'dotenv/config';
import express from 'express';
import router from './router/userRouter.js';

const app = express();
const port = process.env.PORT || 2001

app.use(express.json())
app.use('/',router)
app.listen(port, ()=>{
    console.log(`Server Connection On ${port}`);
})
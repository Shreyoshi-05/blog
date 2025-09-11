import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDb from './configs/db.js';
import adminRouter from './routes/adminRoutes.js';
import blogRouter from './routes/bolgRoutes.js';

const app = express();
await connectDb();

//middleware
app.use(cors());
app.use(express.json());

app.get("/",(req,res)=>res.send("api is running"));
app.use("/api/admin",adminRouter);
app.use("/api/blog",blogRouter);


const port = process.env.port || 3000;

app.listen(port, (res,req)=>{
  console.log(`server is running on port ${port}`)
})

export default app;
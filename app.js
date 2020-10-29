const express=require("express");
const router = express.Router();


const mongoose=require("mongoose");
const bodyParser=require("body-parser");
const cors=require("cors");
const app=express();
const {MainSchema,SemesterSchema,SectionSchema,SubjectSchema}=require("./models/project");
const dbURI="mongodb+srv://jecrc:jecrc@hackethon.3telr.mongodb.net/<dbname>?retryWrites=true&w=majority";








mongoose.connect(dbURI,{useNewUrlParser:true,useUnifiedTopology:true})
        .then((result)=>console.log("server connected successfully!"))
        .catch((err) => console.log(err));
     app.post("/v2/api/",(req,res,next) =>{
                const semester=new SemesterSchema({
                    sem:req.body.semester
                });
                const section=new SectionSchema({
                    sec:req.body.section
                });
                const subject=new SubjectSchema({
                    sub:req.body.subject,
                    date:req.body.date,
                    verdict:req.body.list
                });
                const product=new MainSchema({
                    section:section,
                    semester:semester,
                    subject:subject,
                });
                product.save()
                .catch(err=>{
                    console.log(err);
                    res.status(401).send(err);
            
                });
                console.log(req.body);
                res.status(201).send("done");
            });
            module.exports=app;

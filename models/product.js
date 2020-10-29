const mongoose=require('mongoose');
/*

semester
Number: 
section
string 
subject
string

date     name      verdict 
Date     string    string 


*/
// main schema = SemesterSchema
const SemesterSchema=mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  sem:
  {
      type:Number,
      require:true
  }
  });
  
const SectionSchema=mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  sec:
  {
      type:String,
      require:true
  }
  });

  
const SubjectSchema=mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  sub:
  {
      type:String,
      require:true    
  },
  date:Date,
  verdict:[{
      type:String
  }]
  });

const MainSchema=mongoose.Schema({
      __id: mongoose.Schema.Types.ObjectId,
      semester:[SemesterSchema],
      section:[SectionSchema],
      subject:[SubjectSchema]

  });



module.exports=mongoose.model('MainSchema',MainSchema);
module.exports=mongoose.model('SubjectSchema',SubjectSchema);
module.exports=mongoose.model('SectionSchema',SectionSchema);
module.exports=mongoose.model('SemesterSchema',SemesterSchema);

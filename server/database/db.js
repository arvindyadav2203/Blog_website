import mongoose from "mongoose"


 const Connection = async (URI) =>{
    const URL = URI;
    try{
     await mongoose.connect(URL, { useNewUrlParser: true});
     console.log('database connected succesfully');
    }catch(error){
     console.log('error while connecting db', error);
    }
}

export default Connection;
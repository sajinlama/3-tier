import mongoose from "mongoose";


const connection = async ()=>{
    try {
        const connect = await mongoose.connect(`${process.env.MONGO_URi}`);
        console.log("the connection is done");
    } catch (error) {
        console.log("the connectionn is faild",error);
        process.exit(1)
        
    }
}

export default connection
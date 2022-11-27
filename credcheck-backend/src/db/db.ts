import { connect } from "mongoose";


export const connectDb = async ()=>{
    try{
        await connect('mongodb://localhost:27017/credcheck');
        console.log("DB connected");
    }catch(e){
        console.log("Error connecting Mongo --->>> ", e);
    }
}

// Safer way to get disconnected
// export const disconnect = () => {
//     if (!database) {
//         return;
//     }
  
//     Mongoose.disconnect();
// };


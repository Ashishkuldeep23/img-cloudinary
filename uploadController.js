
const cloudinary = require("cloudinary").v2;
const dotenv = require("dotenv")

dotenv.config()


cloudinary.config({
    cloud_name : process.env.CLOUDINARY_CLOUD_NAME,
    api_key : process.env.CLOUDINARY_API_KEY,
    api_secret : process.env.CLOUDINARY_API_SECRET,
});







// // // Below function is able to store single image ---------->

function uploadController(req , res){

    // console.log(req.body)

    const file = req.files.photo 
    


    // if( file.mimetype !== "image/jpeg" || file.mimetype !== "image/jpg" || file.mimetype !== "image/png" ){
    //     return res.status(400).send({status : false , message : "Only JPG , JPEG and PNG are vaild to store file on cloud."})
    // }


    cloudinary.uploader.upload(file.tempFilePath , (err , result)=>{
        // console.log(result)  // // Succesful 

        if(err){
            console.log(err)
            return res.status(500).send({status : false , message : "Error in file uploading..."})
        }

        // // // Now sending only two things to frontEND
        let {url , public_id} = result

        res.status(200).send({status : true , data : {url , public_id}})

    })

} 





module.exports = { uploadController}

import mongoose from 'mongoose';
import grid from 'gridfs-stream';
let gfs, gridFsBucket;
const url = "http://localhost:8080/api/file"
const db = mongoose.connection;
db.once('open', () => {
   gridFsBucket = new mongoose.mongo.GridFSBucket(db.db,  {
        bucketName : 'fs'
    });
    gfs = grid(db.db, mongoose.mongo);
    gfs.collection('fs')
})

export const uploadFile = async (req, res) => {
 if(!req.file){
    return res.status(404).json("File not found");
 }    
 const imageUrl = `${url}/${req.file.filename}`;
 return res.status(200).json(imageUrl)
};

export const getFile = async (req, res) => {
   try {
     const file = await gfs.files.findOne({filename : req.params.filename});
     const readStream = gridFsBucket.openDownloadStream(file._id);
     readStream.pipe(res);
   } catch (err) {
    return res.status(404).json(err);
   }
}

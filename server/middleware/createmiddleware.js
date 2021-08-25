// const fs = require('fs');
// const mm = require('musicmetadata');


// module.exports = async function(req,res,next){
//   console.log(req)
//   // var parser = await mm(fs.createReadStream(`./song/${req.filename}`), function (err, metadata) {
//   var readableStream = await fs.createReadStream(`./song/${req.filename}`);
//   var parser =  await mm(readableStream, function (err, metadata) {
//     try{
//       const format = metadata.picture[0].format
//       const data = metadata.picture[0].data
//       console.log(format)
//       console.log(`data:${format};base64,${Buffer.from(data).toString('base64')}`)
//     }catch(e){
//     readableStream.close();
//     }
// });
// }

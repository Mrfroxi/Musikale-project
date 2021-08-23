// const fs = require('fs');
// const mm = require('musicmetadata');


// module.exports = function(req,res,next){
//   var parser = mm(fs.createReadStream(`./song/${req.filename}`), function (err, metadata) {
//     console.log(metadata);
//     const format = metadata.picture[0].format
//     const data = metadata.picture[0].data
//     console.log(format)
//     console.log(`data:${format};base64,${Buffer.from(data).toString('base64')}`)
//     next()
//   });
//   next()
// }


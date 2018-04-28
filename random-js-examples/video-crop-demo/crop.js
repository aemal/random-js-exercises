var ffmpeg = require('fluent-ffmpeg');

console.log("A")
ffmpeg('./sample-video.mp4')
.setStartTime('00:00:03')
.setDuration('1')
.output('./cropped-video.mp4')
.on('end', function(err) {   
    console.log(err);
    if(!err)
    {
        console.log('conversion Done');
    }                 

})
.on('error', function(err){
    console.log('error: ', err);
}).run();
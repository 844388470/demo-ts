const exec = require('child_process').exec;


exec('ls -l', function(err,stdout,stderr){

  if(err) {

      console.log('get weather api error:'+stderr);

  } else {

      console.log(stdout);

  }

});
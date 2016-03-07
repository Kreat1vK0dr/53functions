// OPTION 1
//NOTE: start needs to be declared INSIDE doSome() for the elapsed time to read 5000. if declared OUTSIDE the elapsed time is 5001.
function doSome() {
  var start = new Date();
  function end() {
    var end = new Date();
    var elapsed = end.getTime() - start.getTime();
    console.log(elapsed);
//     alert(elapsed);
    console.log(end);
//     alert(end.getTime());
    console.log(end.getTime());
  }

   setTimeout(function(){end()}, 5000);

   console.log('doing something');

}

doSome();

// OPTION 2: output will print 'doing something' first AND THEN execute function end() BUT there will be no difference in the elapsed time.
// function doSome(end) {
//    console.log('doing something');
//     end();
// }
//
// doSome(function(){
//     var start = new Date();
//     var end = new Date();
//     var elapsed = end.getTime() - start.getTime();
//     console.log(elapsed);
// //     alert(elapsed);
//     console.log(end);
// //     alert(end.getTime());
//     console.log(end.getTime());
//   });

//OPTION 3: wrap inner function in a setTimout.
// function doSome() {
//   var start = new Date();
//   setTimeout(function() {
//     var end = new Date();
//     var elapsed = end.getTime() - start.getTime();
//     console.log(elapsed);
// //     alert(elapsed);
//     console.log(end);
// //     alert(end.getTime());
//     console.log(end.getTime());
//   }, 5000);
// }
//  doSome();
//    console.log('doing something');

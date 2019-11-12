var myWorker;

if (window.Worker) {
  myWorker = myWorker || new Worker("worker.js");

  myWorker.onmessage = function(e) {
    var vnd = getElementById("vnd");
  
    vnd.value = e.data;
    console.log('Message received from worker');
  }
}

function onClickMe() {
  var euro = getElementById("euro");

  console.log(euro.value);

  myWorker && myWorker.postMessage(euro.value);
  console.log('Message posted to worker');
}

function getElementById(id) {
  return document.getElementById(id);
}

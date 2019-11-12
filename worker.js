onmessage = function(e) {
  var workerResult = e.data * 26000;
  postMessage(workerResult);
}
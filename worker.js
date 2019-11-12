onmessage = function(e) {
  var workerResult = e.data * 26;
  postMessage(workerResult);
}
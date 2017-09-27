(function () {
  'use strict';
  

  var src = null;
  var audioctx = new AudioContext();
  var buffer = null;

  const LoadSample1 = (ctx, url) => {
    fetch(url).then( response => {
      return response.arrayBuffer();
    }).then( arrayBuffer => {
      ctx.decodeAudioData(arrayBuffer, (b) => {buffer=b;}, () => {});
      document.querySelector("button#hotaru").removeAttribute("disabled");
    });
  }
  LoadSample1(audioctx, "./hotarunohikari.mp3");

document.querySelector("button#hotaru").addEventListener("click", (event) =>{
    var label;
    if(event.target.innerHTML=="Stop") {
      src.stop(0);
      label="Hotaru";
    } else {
      src = audioctx.createBufferSource();
      src.buffer = buffer;
      src.loop = true;
      src.connect(audioctx.destination);
      src.start(0);
      label="Stop";
    }
    event.target.innerHTML=label;
  });
  const LoadSample2 = (ctx, url) => {
    fetch(url).then( response => {
      return response.arrayBuffer();
    }).then( arrayBuffer => {
      ctx.decodeAudioData(arrayBuffer, (b) => {buffer=b;}, () => {});
      document.querySelector("button#okan").removeAttribute("disabled");
    });
  }
  LoadSample2(audioctx, "./okantest.mp3");
  document.querySelector("button#okan").addEventListener("click", (event) =>{
    var label;
    if(event.target.innerHTML=="Stop") {
      src.stop(0);
      label="Okan";
    } else {
      src = audioctx.createBufferSource();
      src.buffer = buffer;
      src.loop = true;
      src.connect(audioctx.destination);
      src.start(0);
      label="Stop";
    }
    event.target.innerHTML=label;
  });

})();

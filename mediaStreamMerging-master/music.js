(function () {
  'use strict';


  var src1 = null;
  var src2 = null;
  var audioctx1 = new AudioContext();
  var buffer1 = null;
  var audioctx2 = new AudioContext();
  var buffer2 = null;

  const LoadSample1 = (ctx, url) => {
    fetch(url).then( response => {
      return response.arrayBuffer();
    }).then( arrayBuffer => {
      ctx.decodeAudioData(arrayBuffer, (b) => {buffer1=b;}, () => {});
      document.querySelector("button#hotaru").removeAttribute("disabled");
    });
  }
  LoadSample1(audioctx1, "./hotarunohikari.mp3");

document.querySelector("button#hotaru").addEventListener("click", (event) =>{
    var label;
    if(event.target.innerHTML=="Stop") {
      src1.stop(0);
      label="Hotaru";
    } else {
      src1 = audioctx1.createBufferSource();
      src1.buffer1 = buffer1;
      src1.loop = true;
      src1.connect(audioctx1.destination);
      src1.start(0);
      label="Stop";
    }
    event.target.innerHTML=label;
  });
  const LoadSample2 = (ctx, url) => {
    fetch(url).then( response => {
      return response.arrayBuffer();
    }).then( arrayBuffer => {
      ctx.decodeAudioData(arrayBuffer, (b) => {buffer2=b;}, () => {});
      document.querySelector("button#okan").removeAttribute("disabled");
    });
  }
  LoadSample2(audioctx2, "./okantest.mp3");
  document.querySelector("button#okan").addEventListener("click", (event) =>{
    var label;
    if(event.target.innerHTML=="Stop") {
      src2.stop(0);
      label="Okan";
    } else {
      src2 = audioctx2.createBufferSource();
      src2.buffer2 = buffer2;
      src2.loop = true;
      src2.connect(audioctx2.destination);
      src2.start(0);
      label="Stop";
    }
    event.target.innerHTML=label;
  });

})();

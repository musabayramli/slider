window.addEventListener('load', function () {
    const audio = document.querySelector('audio');
    
    function playAudio() {
      if (audio.paused) {
        audio.play().catch((error) => {
          console.log("Autoplay was prevented. Waiting for user interaction.");
        });
      }
    }
  
    playAudio();
  
    document.addEventListener('click', playAudio);
  });
  
  document.getElementById('next').onclick = function () {
    let lists = document.querySelectorAll('.item');
    document.getElementById('slide').appendChild(lists[0]);
  };
  
  document.getElementById('prev').onclick = function () {
    let lists = document.querySelectorAll('.item');
    document.getElementById('slide').prepend(lists[lists.length - 1]);
  };
  
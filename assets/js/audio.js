//array of all 8 sounds, sound will correspond with row

sounds = [
        'Clap (2).mp3',
        'Kick 1.mp3',
        'Kick 4.mp3',
        'Perc 1.mp3',
        'Perc 5.mp3',
        'Snare.mp3',
        'Vox (1).mp3',
        'Vox (5).mp3',
]

var prefix = '../audio/Samples1/'

function playSound(row) {
  var soundFile = prefix + sounds[row];

  var sound = new Howl({
      src: [soundFile]
  });
  sound.play();
} 

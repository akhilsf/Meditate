const Sound = require('react-native-sound');

const SoundPlayer = () => {
  Sound.setCategory('Playback');

  var Ambiance = new Sound('../../assets/sounds/ambiance/rain.mp3', Sound.MAIN_BUNDLE, (error) => {
    if (error) {
      console.log('failed to load the sound', error);
      return;
    }

    console.log('duration in seconds: ' + Ambiance.getDuration() + 'number of channels: ' + Ambiance.getNumberOfChannels());

    Ambiance.play((success) => {
      success ?
        console.log('successfully finished playing') :
        console.log('playback failed to audio decoding errors');
    })
  })

  Ambiance.setNumberOfLoops(-1);
  Ambiance.release();
}

export default SoundPlayer;


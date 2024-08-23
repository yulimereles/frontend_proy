import '@dotlottie/player-component';

const LottiePlayer = () => (
  <div className="flex justify-center items-center h-64 w-64 md:h-80 md:w-80 lg:w-96 lg:h-96">
    <dotlottie-player
      src="https://lottie.host/37147c92-ddda-49d5-bd6e-4f848f0d8eae/ANNiVrsEZb.json"
      background="transparent"
      speed="1"
      loop
      autoplay>
    </dotlottie-player>
  </div>
);

export default LottiePlayer;
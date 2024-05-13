const gameConfig = {
  title: 'Coin Collector',
  controlInfo: 'Controls: WASD',
  gameWindowWidth: 640,
  gameWindowHeight: 480,
  padding: 8,
  infoFieldHeight: 50,
  get playField() {
    return {
      width: this.gameWindowWidth - 2 * this.padding,
      height: this.gameWindowHeight - this.padding - this.infoFieldHeight,
    };
  },
  get playFieldOp() {
    return {
      width: this.gameWindowWidth - 2 * this.padding + 10,
      height: this.gameWindowHeight - this.padding - this.infoFieldHeight + 10,
    };
  },
  avatar: {
    width: 60,
    height: 60,
    playerSrc: '/assets/goblin.png',
    opponentSrc: '/assets/opponent-goblin.png',
  },
  collectibleSprite: {
    width: 38,
    height: 38,
    srcs: ['/assets/coin.png'],
  },
};

export default gameConfig;

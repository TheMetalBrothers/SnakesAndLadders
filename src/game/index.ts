import Game from './Game';
import level1 from './levels/level-1';
import level2 from './levels/level-2';
import level3 from './levels/level-3';
import level4 from './levels/level-4';
import level5 from './levels/level-5';

declare let globalThis: { game: Game; };

globalThis.game = new Game([
  level1,
  level2,
  level3,
  level4,
  level5,
]);

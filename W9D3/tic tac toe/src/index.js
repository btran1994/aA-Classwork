const View = require('./ttt-view.js');
window.View = View;
const Game = require('./game.js');
window.Game = Game;

  $(() => {
    let $el = $("body").find("figure");
    const newGame = new Game();
    const newView = new View(newGame, $el);
    window.newView = newView;
  });

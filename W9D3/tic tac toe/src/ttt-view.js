class View {
  constructor(game, $el) {
    this.game = game;
    this.$el = $el;
    this.setupBoard();
    this.bindEvents();
  }

  bindEvents() {
    // let $listItems = $("li");
    // $listItems.each((i, item), () => {
    //   item.on('click', () => {
    //     playMove(item.data("pos")); //$(item).data("pos")
    //     console.log('click');
    //   });
    // });

    // let $listItems = $("li");
    // $listItems.each((i, item), () => {
    //   item.on('click', () => {
    //     playMove(item.data("pos")); //$(item).data("pos")
    //     console.log('click');
    //   });
    // });


    // $("ul").on('click', "li", () => {
    //   console.log($('li').data("pos"));
    // });

    $('li').on('click', (e) => {
      this.makeMove($(e.target).data("pos"));
      $(e.target).css('background':'white');
      $(e.target).css('value', 'white');
      
      console.log(this.value);
      // console.log(this.game.currentPlayer);
  });

  }

  makeMove($square) {
    this.game.playMove($square);
  }

  setupBoard() {
    const newGrid = $('<ul></ul>');
    // const gridUl = $('#bigGrid');
    
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        const newSquare = $('<li></li>');
        //set data
        newSquare.data("pos", [i, j]);
        // newSquare.on('click', () => console.log(newSquare.data('pos'))); 
        newGrid.append(newSquare);
      }
    }
    
    this.$el.append(newGrid);
  }
}

module.exports = View;

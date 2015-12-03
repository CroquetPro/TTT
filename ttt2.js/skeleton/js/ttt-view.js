var View = function (game, $el) {
  this.game = game;
  this.$el = $el;
  this.rowId = 0;
  this.colId = 0;
  this.setupBoard();
  this.bindEvents();
};

$.extend(View.prototype, {
  bindEvents: function () {
    this.$el.find('.box').on('click', this.makeMove.bind(this));
  },
  makeMove: function (e) {
    var $box = $(e.currentTarget);

    try {
      this.game.playMove($box.data("pos"));
      $box.text(this.game.currentPlayer);
      $box.addClass("click");
    } catch (error) {
      alert(error.msg);
    }

    if (this.game.isOver()){
      if (this.game.winner()){
        alert("You Win!");
      } else {
        alert("It's a tie.");
      }
    }
  },

  setupBoard: function() {
    this.$board = $("<ul>").addClass("board");
    this.$el.append(this.$board);
    _.times(3, function(){
      this.colId = 0;
      this.addRow();
      this.rowId += 1;
    }.bind(this));
  },

  addRow: function(){
    _.times(3, function(){
      var $box = $("<li>").addClass("box").data('pos', [this.rowId, this.colId]);
      this.colId += 1;
      this.$board.append($box);
    }.bind(this));
  },


});



module.exports = View;

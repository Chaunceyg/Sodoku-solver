var Game = require('../grid.js');
var chai = require('chai');
var expect = chai.expect;
var nums = '158.2..6.2...8..9..3..7.8.2.6.74......4.6.7......19.5.4.9.3..2..2..5...8.7..9.413';

describe("Game", function() {
  describe('Build', function() {
    
    var newGame;
    
    before(function() {
      newGame = new Game(nums);
    })
    
    describe('Table', function() {
      it('should be in dom', function() {
        expect(newGame).to.be.an('object');
        // expect(game.remaining()).to.be.more.than(-1);
      })
    })
    
    describe('Cell', function() {
      it('should have objects', function() {
        expect(newGame.cells[0]).to.be.an('object');
        expect(newGame.cells[0].val).to.equal('1');
        expect(newGame.cells[28].block).to.equal(4);
      })
    })
    
    describe('Array', function() {
      it('should have a length', function() {
        expect(newGame.cells).to.have.length(81);
      })
    })
    
    describe('Search', function() {
      it('should like search', function() {
        expect(newGame.searchRow).to.be.a('function');
      })
    })
    
    describe('Missing Elements', function() {
      it('should return array of missing elements', function() {
        expect(newGame.searchRow()).to.be.an('array');
      })
    })
    
    // describe('finished', function() {
    //   it('should check the sum of all rows, cols, block to ensure 45')
    //   it('should return true or false')
    // })
    // 
    // describe('load', function() {
    //   it('take in a string, assign values to squares')
    //   it('return number of squares to solve')
    //   it('should fill in some squares from the string')
    // })
    // 
    // describe('solve', function() {
    //   it('should fill every square with right digits')
    // })
    //   
    // describe('show', function() {
    //   it('produce a string which describes the board')
    // })  
  })
})
      
  // Squares
  //   update square
  //     -remember chage for other squares
  //   describe('locateRow', function() {
  //     it('should return the row for a given square', function() {
  //       expect(game.locateRow(17)).to.equal(1);
  //       expect(game.locateRow(0)).to.equal(0);
  //       expect(game.locateRow(80)).to.equal(8);
  //       expect(game.locateRow(82)).to.throw();
  //     })
  //     it('should return a number', function () {
  //       expect(game.locateRow()).to.be.a('number');
  //     })
  //   })
  //   
  //     possibilities
  //       -should determine possibilities remain
  //     
  //   get
  //     -should return digit in a given square
  //   
  //   locateCol
  //     -return col for square
  //   
  //   locateBlock
  //     -return block for square
  // 
  // Row/Col/Block
  //   lookForDigits
  //     -find, for a given square, which digits are in same row/col/block
  //     
  //   lookForSquares
  //     -find, for a given square, other squares in the same row/col/block
  //   
  //     needed
  //       -should determine what numbers are missing
  // 
  // Squares
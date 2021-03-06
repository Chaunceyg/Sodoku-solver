var nums = '158.2..6.2...8..9..3..7.8.2.6.74......4.6.7......19.5.4.9.3..2..2..5...8.7..9.413';

function printToHTML(game) {
	var table = document.createElement('table');
	// var tr = document.createElement('tr');
	var td;
	for(var i = 0; i<game.cells.length; i++) {
		var cell = game.cells[i]; 
		if(i%9===0) {
			tr = document.createElement('tr'); 
			table.appendChild(tr);
		}
		td = document.createElement('td');
		td.innerHTML = cell.val;
		tr.appendChild(td);
	}
	document.body.appendChild(table);
}

function Cell(row, col, block, val) {
	this.row = row;
	this.col = col;
	this.block = block;
	this.val = val;
}


function findBlock(row,col) {
	var block = 0;
	if(row === 1 || row === 2 || row === 3) {
		block+=0;
	} else if (row === 4 || row === 5 || row === 6) {
		block+=3;
	} else {
		block+=6;
	}

	if(col === 1 || col === 2 || col === 3) {
		block+=1;
	} else if (col === 4 || col === 5 || col === 6) {
		block+=2;
	} else {
		block+=3;
	}
	return block;
}
//math.floor

function Game(nums) {
	var numArray = Array.prototype.slice.call(nums);
	var cells = [];
	var rowCounter = 0;
	var colCounter;
	for(var i = 0; i<numArray.length; i++) {
		colCounter = (i%9)+1;
		if(i%9===0) {
			rowCounter++;
		}
		cells.push(new Cell(rowCounter,colCounter,findBlock(rowCounter,colCounter),numArray[i]));
	}
	this.cells = cells;
	this.oneToNine = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
	
	this.rowArray = [];
	this.colArray = [];
	this.blocArray = [];
	 
	this.searchGroup = function(groupNum, group) {
		var filterGroup = this.cells.filter(function(cell) {
			return cell[group] === groupNum;
		});

		var groupVal = filterGroup.map(function(cell) {
			return cell.val;
		});
			
		var groupArray = groupVal.filter(function(cell) {
			return cell !== '.';
		}); 
			
		var groupOptions = _.difference(this.oneToNine, groupArray);

		return groupOptions;
	}
	
	this.searchCell = function() {
			var emptyCell = this.cells.filter(function(cell) {
				return cell.val === '.';
			})
		
			for(var i = 0; i < emptyCell.length; i++) {
				this.rowArray.push(this.searchGroup(emptyCell[i].row, 'row'));
				this.colArray.push(this.searchGroup(emptyCell[i].col, 'col'));
				this.blocArray.push(this.searchGroup(emptyCell[i].block, 'block'));
			}
			console.log(this.rowArray);
			console.log(this.colArray);
			console.log(this.blocArray);
		}	   
}

// console.dir(new Game(nums));

module.exports = Game;



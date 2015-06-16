var Grid = {
   
    printCeiling:function() {
    	var board = "+";
		for(var y=1; y<30; y++){
 		if(y%10===0){
   			board+="+";
		}
		 board+="-";
		}
		board+="+";
		console.log(board);
	},

	printRow:function() {
		var row = "|";
		for(var i=1; i<30; i++){
			if(i%10===0){
				row+="|";
			}
			row+=" ";
		}
		row+="|";
		console.log(row);
	},

	printGrid:function() {
		for(var i=0; i<12; i++) {
			if(i%4===0){
				this.printCeiling();
			} else {
				this.printRow();
			}
		}
		this.printCeiling();
	}



}

Grid.printGrid();


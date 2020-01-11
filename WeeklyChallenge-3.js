/**
 * ===========
 * MINE TYCOON
 * ===========
 *
 * Anggap Array 2 dimensi ini adalah sebuah tambang. Row merepresentasikan lantai dari tambang tersebut (dari lantai 0 sampai lantai N kebawah)
 * Tambang ini memiliki 4 mineral yang menjadi kekayaan alam tambang tersebut yaitu:
 *
 * - copper
 * - silver
 * - gold
 * - diamond
 *
 * Step adalah jumlah langkah yang dapat di capai oleh si penambang, untuk menambang di penambangan.
 *
 * Jika penambang mendapatkan salah satu dari 4 mineral di atas, maka penambang akan menyimpannya.
 * Function akan mereturn mineral yang pernah di dapatkan oleh si penambang selama menambang.
 * Output wajib berurutan mulai dari copper, silver, gold, lalu terakhir diamond.
 *
 * contoh:
 * #mine
 * [
 *  ['#', 'c', 's', '#', '#', '#', '#'],
 *  ['d', '#', 'c', '#', 'd', '#', '#'],
 *  ['#', '#', '#', 'g', '#', '#', '#']
 * ]
 * #steps: 11
 *
 * maka function akan mereturn:
 *  mineral:
 *    [[2, cooper], [1, silver], [1, diamond]]
 *
 *
 * RULES:
 * - Wajib menuliskan Pseudocode!
 * - Dilarang menggunakan built-in function .reduce .filter .map .indexOf .lastIndexOf
 *
 * PSEUDOCODE
 * ===============================================
 * 
 * BEGIN MINECRAFT
	* SET 'copper' with 0
	* SET 'silver' with 0
	* SET 'diamond' with 0
	* SET 'gold' with 0
	* 
	* FOR i from 0 to LENGTH of 'mine' i++)
	* 	FOR j from 0 to LENGTH of `mine[i]` j++)
	* 		IF 'mine[i][j]' is equal 'c'
	* 			increment 'copper' by 1
	* 			decrease 'steps' by 1
	* 		ELSE IF 'mine[i][j]' is equal 's'
	* 			increment 'silver' by 1
	* 			decrease 'steps' by 1
	* 		ELSE IF 'mine[i][j]' is equal 'd'
	* 			increment 'diamond' by 1
	* 			decrease 'steps' by 1
	* 		ELSE IF 'mine [i][j]' is equal 'g'
	* 			increment 'gold' by 1
	* 			decrease 'steps' by 1
	* 		ELSE
	* 			decrease 'steps' by 1
	* 		END IF
	* 
	* 		IF 'steps' is equal 0
	* 			BREAK THE j LOOP
	* 		END IF
	* 	END FOR
	* 	IF 'steps' is equal 0
	* 		BREAK THE i LOOP
	* 	END IF
	* END FOR
	* 
	* SET 'display' to empty array
	* PUSH 'display' with [[copper,`copper`],[silver,`silver`],[gold,`gold`],[diamond,`diamond`]]
	* 
	* SET 'final' to empty array
	* FOR i from 0 to length of display i++
	*	IF 'display[i][0]' is not equal to 0
	*		PUSH 'final' with 'display[i]'
	*	END IF
	* END FOR
	*
	* RETURN 'final'
	*
*END MINECRAFT
*
*========================================================================================================
 */
function mineCraft(mine, steps) {
  var copper = 0;
  var silver = 0;
  var diamond = 0;
  var gold = 0;
  
  //assigning value where steps is greater than 0
  for (i=0;i<mine.length;i++){
	  for (j=0;j<mine[i].length;j++){
		if (mine[i][j] == `c`){
			copper++;
			steps--;
		}
		else if (mine[i][j] == `s`){
			silver++;
			steps--;
		}
		else if (mine[i][j] == `d`){
			diamond++;
			steps--;
		}
		else if (mine[i][j] == `g`){
			gold++;
			steps--;
		}
		else {
			steps--;
		}
		if(steps == 0){
			break;
		}
	  }
	  if(steps == 0){
		  break;
	  }
  }
  
  //pushing all result to display
  var display = [];
  display.push([copper,`copper`],[silver,`silver`],[gold,`gold`],[diamond,`diamond`]);
  
  //deleting the 0 mineral from the array
  var final = [];
  for (i=0;i<display.length;i++){
	if (display[i][0] != 0){
		final.push(display[i]);
	}
  }
  return final;
}
var mine1 = [
	['#', 'h', 's', '#', '#', '#', 'g'],
	['u', '#', 'c', '#', 'd', '#', '#'],
	['#', '#', '#', '#', '#', '#', '#']
];
console.log(mineCraft(mine1, 10));
// [[1, copper] [1, silver] [1, gold]]
var mine2 = [
	['#', '#', '#', '#', '#', 'w', '#'],
	['r', '#', 'c', '#', 'd', '#', '#'],
	['#', 't', '#', 'c', '#', '#', '#'],
	['#', '#', 's', 'g', '#', '#', '#'],
	['#', '#', '#', '#', '#', '#', '#']
];
console.log(mineCraft(mine2, 20));
// [[2, copper], [1, diamond]]
var mine3 = [
	['d', 'c', '#', 's', '#', 'w', '#'],
	['r', 'b', 'c', '#', '#', '#', 'g'],
	['#', 't', '#', 'c', '#', '#', '#'],
	['#', '#', 's', 'g', '#', '#', '#']
];
console.log(mineCraft(mine3, 94));
// [ [ 3, 'copper' ], [ 2, 'silver' ], [ 2, 'gold' ], [ 1, 'diamond' ] ]
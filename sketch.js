var columns =600;
var rows =600;
//var cells;
var position =0;
var currentGen = new Array(columns);
var nextGen = new Array(columns);

function createGrid(){
    background(51);
    for (var i = 0; i< columns; i++)
        {
            for( var j=0; j< rows; j++)
                {
                    var x = i*10;
                    var y = j*10;
                    stroke(0);
                    fill(255);
                    rect(x,y, 30,30);
                }
        }
}
function make2DArray(cols, rows){
    var arr = new Array(cols);
    for(var i=0; i<arr.length; i++){
            arr[i] = new Array(rows);
        }
    return arr;
}


function setup() {
  // put setup code here
    createCanvas( 600, 600);
    //cells = make2DArray(columns, rows);
    //createGrid();
}
function rule150(pos){
    if((pos > 0 && pos < columns - 1)){
            if(!currentGen[pos - 1] && !currentGen[pos] && !currentGen[pos + 1]) // 000
                return false;
            if(!currentGen[pos - 1] && !currentGen[pos] && currentGen[pos + 1]) // 001
                return true;
            if(!currentGen[pos - 1] && currentGen[pos] && !currentGen[pos + 1]) // 010
                return true;
            if(!currentGen[pos - 1] && currentGen[pos] && currentGen[pos + 1]) // 011
                return false;
            if(currentGen[pos - 1] && !currentGen[pos] && !currentGen[pos + 1]) // 100
                return true;
            if(currentGen[pos - 1] && !currentGen[pos] && currentGen[pos + 1]) // 101
                return false;
            if(currentGen[pos - 1] && currentGen[pos] && !currentGen[pos + 1]) // 110
                return false;
            return currentGen[pos - 1] && currentGen[pos] && currentGen[pos + 1]; // 111
        }
        else if (pos == 0){
            // left border conditions
            //assume first cell[0 - 1] is 0
            if(!currentGen[pos] && !currentGen[pos + 1]) // X00
                return false;
            if(!currentGen[pos] && currentGen[pos + 1]) // X01
                return true;
            if(currentGen[pos] && !currentGen[pos + 1]) // X10
                return true;
            if(currentGen[pos] && currentGen[pos + 1]) // X11
                return false;
        }
        else if(pos == columns -1){
            // right border conditions
            //assume last cell[COLS] is 0
            if(!currentGen[pos - 1] && !currentGen[pos]) // 00X
                return false;
            if(!currentGen[pos - 1] && currentGen[pos]) // 01X
                return true;
            if(currentGen[pos - 1] && !currentGen[pos]) // 10X
                return true;
            if(currentGen[pos - 1] && currentGen[pos]) // 11X
                return false;
        }
        return false;
}
function ca(){
    var ruleset = [1, 0, 0,1,0,1,1,0];
    
    //rect(columns/2,0, 10,10);
    //fill(0);
    currentGen[columns/2]= true;
    
    if (position <rows -1){
            for( var j =0; j < columns; j++){
                if(rule150(j)){
                    rect(j,position, .5,.5)
                    fill(0);
                }
                nextGen[j]=rule150(j);
            }
        for(var i=0;i<columns; i++  )
            {
                currentGen[i]=nextGen[i];
            }
        position++;
        }

}
function draw() {
  // put drawing code here
   ca();
    
    
    
}
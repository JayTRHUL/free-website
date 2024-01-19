let graph = [10, 50, 300, 60, 100];
let x = 20;

function setup(){
    createCanvas(500,500);
    background(0);
    let values = 40;
    for(i-0;i<=values;i++){
        graph[i] = random(5, height)
    }
}

function draw(){
    fill(255)
    for(i=0;i<graph.length;i++) {
        x = (11*i)+25;
        createBar(x, graph[i]);
    }
}

function createBar(x, h){
    rect(x, height-h, 10, h);
}
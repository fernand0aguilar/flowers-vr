let sphere;
let scene;
let box_arr = [];

let theta = 0;
let degrees = 0;

const shiftDegrees = (value) => (value + 1) % 360;


function setup() {
  scene = select("#scene");
  spawn_boxes();

  sphere = new Sphere(color(0, 0, 0), `-3 2.1 -3`);
}


function draw() {
  const variation = sin(theta);
  degrees = shiftDegrees(degrees);

  sphere.move(variation);

  box_arr.forEach(box => {
    // box.move(variation * 0.1);
  });

  theta += 0.1;
}

function spawn_boxes() {
  let box_position = 0;

  for (let i = 0; i < 33; i++) {
    let box_color = color(random(0, 255), random(0, 255), random(0, 255));

    let newBox = new Box(box_color, box_position);
    box_arr.push(newBox);
    
    box_position += 3;
  }
}

let snowfall = document.getElementsByClassName('snow-zone')[0];
let flakeCount = 10;

let newFlake = null;
for (var i=0; i<flakeCount; i++) {
  newFlake = document.createElement('div');
  newFlake.className += 'flake-'+i;
  console.log(newFlake);
}

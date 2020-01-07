let snowfall = document.getElementsByClassName('snow-zone')[0];
let flakeCount = 10;

let newFlake = null;
for (var i=0; i<flakeCount; i++) {
  this.newFlake = document.createElement('div');
  this.newFlake.className += 'flake-'+i;
  console.log(this.newFlake);
  snowfall.append(this.newFlake);
}

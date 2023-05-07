const PI = 3.14159;

const sphereVolume = function (radius: number): number {
  let sVolume = 0;
  sVolume = (4/3) * PI * Math.pow(radius, 3);
  return Math.round(sVolume);
}

console.log(4186 < sphereVolume(10) && sphereVolume(10) <= 4189);
console.log(sphereVolume(10));

const coneVolume = function (radius: number, height: number): number {
  let cVolume = 0;
  cVolume =  PI * Math.pow(radius, 2) * height;
  return Math.round(cVolume);
}

console.log(45 < coneVolume(3, 5) && coneVolume(3, 5) < 49)
console.log(coneVolume(3, 5));

const prismVolume = function (height: number, width: number, depth: number): number {
  let pVolume = 0;
  pVolume =  height * width * depth;
  return Math.round(pVolume);
}

console.log(prismVolume(3, 4, 5) === 60);
console.log(prismVolume(3, 4, 5));

interface Sphere {
  type: 'sphere';
  radius: number;
}

interface Cone {
  type: 'cone';
  radius: number;
  height: number;
}

interface Prism {
  type: 'prism';
  height: number;
  width: number;
  depth: number;
}

type Solid = Sphere | Cone | Prism;

const largeSphere: Sphere = {
  type: 'sphere',
  radius: 40
}

const smallSphere: Sphere = {
  type: 'sphere',
  radius: 10
}

const cone: Cone = {
  type: 'cone',
  radius: 3,
  height: 5
}

const duck: Solid[] = [
  largeSphere,
  smallSphere,
  cone
]

const totalVolume = function (solids: Solid[]): number {
  let total = 0;
  for (const solid of solids){
    if (solid.type === 'sphere'){
      total += sphereVolume(solid.radius);
    }
    else if (solid.type === 'cone'){
      total += coneVolume(solid.radius, solid.height);
    }
    else if (solid.type === 'prism'){
      total += prismVolume(solid.height, solid.width, solid.depth);
    }
  }
  return total;
}

console.log(272000 < totalVolume(duck) && totalVolume(duck));
console.log(duck);

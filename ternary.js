const robot = {
    _model: '1E78V2',
    _energyLevel: 100,
    _numOfSensors: "ee",
    get numOfSensors(){
        typeof this._numOfSensors=== 'number' ? console.log(this._numOfSensors): console.log('Sensors are currently down.');
    },
    
  };
  

  
  robot.numOfSensors

  const pokemon = ["Bulbasaur", "Charmander", "Squirtle"]
// -->          ["<p>Bulbasaur</p>", "<p>Charmander</p>", "<p>Squirtle</p>"]
// Your code here

let ai=pokemon.map(array=>"<p>"+array+"</p>")
console.log(ai)

/* */



let mobile = {
    brand: 'Samsung',
    model: 'Galaxy Note 9'
  };
   
  for (let key in mobile) {
      console.log(key);
    // console.log(`${key}: ${mobile[key]}`);
  }

const origNum = 8;
const origObj = {color: 'blue'};
 
const changeItUp = (num, obj) => {
  num = 7;
  obj.color = 'red';
};
 
changeItUp(origNum, origObj);

const restaurant = {
    numCustomers: 45,
    seatCapacity: 100,
    availableSeats() {
      // this refers to the restaurant object
      // and it's used to access its properties
      return this.seatCapacity - this.numCustomers;
    }
  }
 console.log(restaurant.availableSeats());

 const myObj = {
    data: 'abc',
    loggerA: () => { console.log(myObj.data); },
    loggerB() { console.log(this.data); },
};
 
myObj.loggerA();    // undefined
myObj.loggerB(); 
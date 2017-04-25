/*jshint esversion: 6 */
class Elevator {
  constructor(){
    this.floor      = 0;
    this.MAXFLOOR   = 10;
    this.direction = "^";
    this.requests = [];
    this.waitingList = [];
    this.passengers = [];
    this.intervalID;
  }

  start() {
    this.intervalID = setInterval(()=>
      this.update()
    ,1000);
  }
  stop() {
    clearInterval(this.intervalID);
  }
  update() {
    this.log();
    if (this.passengers.length === 0 && this.waitingList.length === 0 ) {
        this.requests = [];
        this.floorDown();
    } else {

      //Añadir pasajeros al ascensor y eliminarlos del la cola de espera
      for (let i = 0; i < this.waitingList.length; i++) {
        if (this.floor ==this.waitingList[i].originFloor) {
          console.log("   -> " + this.waitingList[i].name + " has enter the elevator");
          this.requests.push(this.waitingList[i].destinationFloor);
          this.passengers.push(this.waitingList[i]);
          let incoming = this.waitingList.splice(i,1);
        }
      }

      //Bajar pasajeros del ascensor
      for (let p = 0; p < this.passengers.length; p++) {
        if (this.floor ==this.passengers[p].destinationFloor) {
          console.log("  <-  " + this.passengers[p].name + " has left the elevator");
          let left = this.passengers.splice(p,1);
        }
      }

      //Eleminar peticiones
      if (this.floor == this.requests[0]) {
        this.requests.shift();
      }

      if (this.direction == "^") {
        this.floorUp();
      } else {
        this.floorDown();
      }
    }
  }
  _passengersEnter() {
    this.passengers ++;
  }
  _passengersLeave() {
    this.passengers ++;
  }

  floorUp() {
    if (this.floor != 10) this.floor++;
    else                  this.direction = "v";
  }

  floorDown() {
    if (this.floor !== 0) {
      this.floor--;
    } else {
    this.direction = "^";
    }
  }
  call(person) {
    console.log("  **  "+ person.name + " has call elevator");
    this.waitingList.push(person);
    this.requests.push(person.originFloor);
  }

  log() {
    console.log(`direction: ${this.direction} | floor: ${this.floor} | passengers: ${this.passengers.length} | requests: ${this.requests.length}`);
  }
}

module.exports = Elevator;

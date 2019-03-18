export class HungryBear {

  constructor(name) {
    this.name = name;
    this.foodLevel = 10;
    this.moodLevel = 10;
    this.snackLevel = 10;
    this.beeLevel = 10;
  }

  setHunger() {
    setInterval(() => {
      this.foodLevel--;
    }, 1000);
  }
  setMood() {
    setInterval(() => {
      this.moodLevel--;
    }, 1000);
  }
  getBearHappy(){
    if(this.moodLevel > 6){
      return false;
    } else {
      return true;
    }
  }
  getHappy() {
    this.moodLevel =20;
  }

  setSnack() {
    setInterval(() => {
      this.snackLevel--;
    }, 1000);
  }

  setHive() {
    setInterval(() => {
      this.beeLevel--;
    },1000);
  }

  didYouEatAHive() {
    if(this.beeLevel > 4) {
      return false;
    } else {
      return true;
    }
  }
  feedBear() {
    this.beeLevel = 15;
  }

  didYouGetEaten() {
   if (this.foodLevel > 0) {
     return false;
   } else {
     return true;
   }
 }

 feed() {
   this.foodLevel = 10;
 }
}

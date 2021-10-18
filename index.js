/* parentclass: shares with the other schools, (name, level, numberOfStudents). 'level' will be different(called)*/
class School {
    constructor(name, level, numberOfStudents) {
      this._name = name;
      this._level = level;
      this._numberOfStudents = numberOfStudents;
    }
    // get method()
    get name() {
      return this._name;
    }
    get level() {
      return this._level;
    }
    get numberOfStudents() {
      return this._numberOfStudents;
    }
    /* setter method checks if the input are numbers, if they aren't then the else will be called. */
    set numberOfStudents(newNumberOfStudents) {
      if (typeof newNumberOfStudents === 'number') {
        this._numberOfStudents = newNumberOfStudents;
      } else {
        console.log('Invalid input: numberOfStudents must be set to a Number.');
      } 
    }
    /*with the quickFacts() method, the data will be called to give information about the school/other schools etc.. */
    quickFacts() {
      console.log(`${this._name} educates ${this._numberOfStudents} students at the ${this._level} school level.`);
    }
    /* static is not available for the instances and the method does pick a random teacher from the array that is given.(we ve set up a random function) */
    static pickSubstituteTeacher(substituteTeachers) {
      let randomNum = Math.floor(substituteTeachers.length * Math.random());
      return substituteTeachers[randomNum]; 
    }
  }
  /*childclass takes name, numberOfStudents and pickupPolicy, it inheritates with super function(name, 'primary'(level) and numberOfStudents). */
  class PrimarySchool extends School {
    constructor(name, numberOfStudents, pickupPolicy) {
      super(name, 'primary', numberOfStudents);
      this._pickupPolicy = pickupPolicy;
    }
    // get method()
      get pickupPolicy() {
        return this._pickupPolicy;
      }
  }
  /*childclass it takes name, numberOfStudents and sportsTeams. It inheritates with the super function(name, 'high'(level) and numberOfStudents) */
  class HighSchool extends School {
    constructor(name, numberOfStudents, sportsTeams) {
      super(name, 'high', numberOfStudents);
      this._sportsTeams = sportsTeams;
    }
    // get method()
      get sportsTeams() {
        return this._sportsTeams;
      }
  }
  //instance variable lorraineHansbury it calls on the PrimarySchool
  const lorraineHansbury = new PrimarySchool('Lorraine Hansbury', 514, 'Students must be picked up by a parent, guardian, or a family member over the age of 13.');
  //calls the quickFacts() and the data will be logged to the console
  lorraineHansbury.quickFacts();
  /*an array with school teacher names that will random picked with the call pickSubstituteTeacher */
  const sub = School.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 'J.R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli']);
  // logs a random teachers name to the console
  console.log(School.pickSubstituteTeacher);
  //instance call with Highschool
  const alSmith = new HighSchool('Al E. Smith', 415, ['Baseball', 'Basketball', 'Volleyball', 'Track and Field']);
  //logs all in the array listed in alSmith instance to the console
  console.log(alSmith.sportsTeams);
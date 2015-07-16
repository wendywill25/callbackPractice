/* In this repo your job is to write functions to make each function call work properly.
Below is a sample problem 

  //code here for sayHi

   sayHi('Hi Katie', function(thingToSay){
      alert(thingToSay);
   });
   

and what you should write is the favNum function that makes the code above work, 
    
    
   var sayHi = function(str, cb){
    cb(str);
   }

   sayHi('Hi Katie', function(thingToSay){
      alert(thingToSay); //should alert ('Hi Katie')'
   });
    
    
*/



  //Code Here for first
  
var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
first(names, function(firstName){
  console.log('The first name in names is ', firstName)
});

function first(names, cb) {
  cb(names[0]);
}

first(names, function(firstName){
  console.log("The first name in names is ', firstname")
}};

/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */




  //Code Here for last

var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
last(names, function(lastName){
  console.log('The last name in names is ', lastName);
});

function last(names, cb) {
  cb(names[names.length -1]);
}

last(names, function(lastName) {
  console.log("This last name in names is ', firstname")
}};



/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */




  //Code Here for multiply



//define the function

function multiply(firstNum, secondNum, cb) {
  cb(firstNum * secondNum);
}

//invoke your function (complete)

multiply(4, 3, function(answer){
  console.log('The answer is ', answer); //should console.log 12
});


  




/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */





  //Code Here for contains

var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];

//define the function:

f//1.Solution
var contains = function(array, searchName, cb) {
    var result = false;
    for (var i = 0; i < array.length; i++) {
        if (array[i] === searchName) {
            result = true;
        }
    }
    cb(result);
};

//2.Solution
var contains = function(array, searchName, cb) {
  cb(array.indexOf(searchName) !== -1)  
};

// function(result){
//   if(result === true){
//     console.log('Colt is in the array');
//   } else {
//     console.log('Colt is not in the array');
//   }
// }

contains(names, 'Colt', function(result){
  if(result === true){
    console.log('Colt is in the array');
  } else {
    console.log('Colt is not in the array');
  }
});





/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */




    //Code Here for uniq

var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];

var uniq = function(arr, cb) {
    var newNames = [];
    for (var i = 0; i < arr.length; i++) {
     if(newNames.indexOf(arr[i]) === -1) {
        newNames.push(arr[i]);
      }
    } 
  return cb(newNames);
};





uniq(names, function(uniqArr){
  console.log('The new names array with all the duplicate items removed is ', uniqArr);
});





/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */ 
//Can't use indexOf 




    //Code Here for each
var each = function(arr, cb) {
  for (var i = 0; i < arr.length; i++) {
    cb(arr[i], i);
  }
}; 

var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
each(names, function(item, indice){
  console.log('The item in the ' + indice + ' position is ' + item)
});





/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */





 //code here for getUserById

 var getUserById = function(arr, id, cb) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i].id === id) {
      return cb(arr[i]); 
    }
  }
  return false;
};

var users = [
  {
    id: '12d',
    email: 'tyler@gmail.com',
    name: 'Tyler',
    address: '167 East 500 North'
  },
  {
    id: '15a',
    email: 'cahlan@gmail.com',
    name: 'Cahlan',
    address: '135 East 320 North'
  },
  {
    id: '16t',
    email: 'ryan@gmail.com',
    name: 'Ryan',
    address: '192 East 32 North'
  },
];

getUserById(users, '16t', function(user){
  console.log('The user with the id 16t has the email of ' + user.email + ' the name of ' + user.name + ' and the address of ' + user.address); 
});

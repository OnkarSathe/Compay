//    console.log(myName);
// }
var myName="h";

{
 var myName="shubham";
  console.log("Access in local scope success - "+myName);

  if (true) {
    const myName="Rahul";
    console.log("Access in block scope success - "+myName);
  }
}
// f1();

console.log("Access in global scope success - "+myName);

// this is new line 
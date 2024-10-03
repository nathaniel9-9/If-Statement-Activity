function checkAge() {
  const age = prompt("Please enter your age:");

  if (age < 13) {
    console.log("You are a child.");}
  else if (age < 20) {
    console.log("You are a teenager.");}
    else {
    console.log("You are an adult.");}}
  
  checkAge()
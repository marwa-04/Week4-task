document.write("<h1>Elzero");
document.querySelector("h1").style.color = "blue";
document.querySelector("h1").style.fontSize = "80px";
document.querySelector("h1").style.fontWeight = "bold";
document.querySelector("h1").style.fontFamily = "arial";
document.querySelector("h1").style.textAlign = "center";

console.log("%cElzero %cweb %cschool","color:red; font-size: 40px; font-weight:bold;",
    "color:green; font-size: 40px; font-weight:bold;",
    "color:white; font-size: 40px; font-weight:bold; background-color:blue;",
);


console.group("Group 1");
console.log("Message 1");
console.log("Message 2");
console.group("Child Group");
console.log("Message 1");
console.log("Message 2");
console.group("Grand Child Group");
console.log("Message 1");
console.log("Message 2");
console.groupEnd();
console.groupEnd();
console.groupEnd();
console.group("Group 2");
console.log("Message 1");
console.log("Message 2");
console.groupEnd();


console.table(["Elzero", "Ahmed", "sameh", "gamal","aya"]);


//console.log("Iam In Console");
//document.write("Iam In Page");


/*console.log("Iam In Console");
document.write("Iam In Page");*/
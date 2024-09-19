function simpleFunctionOne() {
  // code here

  document.getElementById("changeTxt").innerHTML +=
    "Don't change this paragraph.";
}

simpleFunctionOne();

function simpleFunctionTwo() {
  document.querySelector("body").innerHTML +=
    "This function does not take parameter";
}

simpleFunctionTwo();

function sayHelloWorld() {
  console.log("Hello World");
}

sayHelloWorld();




functionsayFavoriteBand(bandName) {


    document.getElementById("favBand").innerHTML += bandName + "<br/>"


}

sayFovriteBand("Three Days Grace");
sayFovriteBand("Maroon 5");





function sayMyName(myName){


    console.log("myName");
}


sayMyName("Say my name");

sayMyName("say my name");

sayMyName("If no one is around you ");




// Function to calculate perimeter


function calcRectPerimeter(height, width){


    const perimeter = 2 * height + 2 * width;

   // document.getElementById("panswer").innerHTML += perimeter;

   document.querySelector("#panswer").innerHTML += perimeter;


}


calcRectPerimeter(2, 4);


// calculate area


function calcArea (){


    const height = document.getElementById("height").value;

    const width = document.getElementById("width").value;
    

    console.log("height", height);

    console.log("width", width);

    document.querySelector("#answer").innerHTML += "Area: " + height * width + "<br/>";

    "Area: " + height * width + "<br/>";


}




function calcArea (){


    document.querySelector("#answer").innerHTML += 
    "Area: " + height * width + "<br/>"
}



// calculate area and perimeter


function calcRectAreaAndPerim (height, width){


    const perimeter = 2 * (height + width);

    const area = height * width;
    
    document.getElementById("multiAnswer").innerHTML += `


    Height: ${height} <br />

    Width: ${width} <br />

    Perimeter: ${perimeter} <br />

    Area: ${area }<br /> <br />
    
    `;


}

    calcRectAreaAndPerim(5,4);
    calcRectAreaAndPerim(2,8);

   


function myFunction(){




    alert("who goes there");
}



function wizard (name, occupation){


    //confirm("welcome " + name + ", the " + occupation);

    confirm(`Welcome ${name} the, ${occupation}!`);
     document.getElementById("future").innerHTML += `welcome ${name}, the ${occupation}!`;
}


function addItem(){

    const newItem =prompt("Add Item:");

    console.log(newItem);
}






function returnValue(color){



return color;

}



alert(returnValue("blue"));

function calcCircArea(radius){

    return 2 * Math.PI * radius;

    document.getElementById("useOne").innerHTML +=
    calcCircArea(2);


    document.getElementById("useTwo").innerHTML +=
    calcCircArea(4);


}
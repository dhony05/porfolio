
//   $(function() {
//     $("form").submit(function() { return false; });
//  });



var dataPlants; //Create a method to handle all the JSON data

/**  
 * This function will load the js from the begining */
$.getJSON('../JS/plantsData.json', data => {
    $(document).ready(function () {
        let i = 0;

        while (i < data.plants.length) {

            let div = document.createElement('div');  // creating div footer-item
            div.className = 'col-4 col py-3 px-lg-5 border bg-light';
           
            
           

            let divImg = document.createElement('img');
            divImg.setAttribute("src", data.plants[i].image)  //creating img tag and set its atribute from JSON
            divImg.style = "width:100%; opacity:0.9;"
            divImg.className = "img-fluid";
            
            let button = document.createElement('button');
            button.id = i.toString();
            button.className = "btn";
            button.setAttribute("onclick", "addContent(this.id)") // creating a button to call the method addContent
            document.getElementById('rowId').appendChild(div);// here we are appending to  selectorID to display it
            div.appendChild(divImg);
            div.appendChild(button);
            i++;
        }
    });

    dataPlants = data; // assigning data to dataPlant variable

});


/*
This function will remove the rows ;
*/

function removeRow() {
    document.getElementById('InBigDivision').style.display = "none";
    

    //console.log(document.getElementById('InBigDivision').childNodes.length);
}

/*
This function will check is there is nothing showing and if nothing showing  it display content
*/
/* Create a boolean to identify if the search is found */

function addContent(id) {

    //document.getElementById("result").style.display = "none";
    document.getElementById('InBigDivision').style.display = "block";

    let content = document.getElementById('content');
    let info = document.getElementById('contentInfoID');
    let name = document.getElementById('headContent');
    let type = document.getElementById('contentTypeID');
    let i = 0;

    while (i < dataPlants.plants.length) {
        if (id == i) {
            console.log(dataPlants.plants[i].name + " id number:" + id);
            info.innerHTML = dataPlants.plants[i].information + `<input id="hideButtonId" type="button" value="Hide" name='Hide' onclick="removeRow()" />`;
            name.innerHTML = dataPlants.plants[i].name;
            type.innerHTML = dataPlants.plants[i].type;
            document.getElementById('imgID').setAttribute("src", dataPlants.plants[i].image);
            
            //content.style.backgroundImage= url("data.plants[i].image");
            //console.log(dataPlants);

        }
        i++;
    }



    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // for google chrome

}

// var input = document.getElementById("searchElement");
// input.addEventListener("keyup", function(event) {
//     console.log('d');
//     event.preventDefault();
//   if (event.keyCode === 13) {
//      document.getElementById('searchButtonId').click();

//   }
// });

/**
 * This method will iterate through JSON and will compare the string input and the data
 * if it match it will call addContent method if not it will return not found.
 */
function search() {
  
  /***
     * Checking inside the text-area */
    let searchAreaInfo = document.getElementById('searchElement').value;
    let count = 0;
    let i = 0;
    let checkingArray = [];
    let formatedSearch = "";

    //create and populate an array of every plants name
    for (let index = 0; index < dataPlants.plants.length; index++) {
        checkingArray[index] = dataPlants.plants[index].name;
    }
    //checking if the text area is empty
    //console.log(checkingArray);
    if (searchAreaInfo == "") {

        document.getElementById('result').innerHTML = 'please enter a value';
    } else {
        //iterating through the JSON to find the input
        while (i < dataPlants.plants.length) {
            if (searchAreaInfo.toUpperCase() == dataPlants.plants[i].name.toUpperCase()) {
                count++;
                document.getElementById('result').innerHTML = count + ' result of ' + searchAreaInfo + ' found';
                formatedSearch = searchAreaInfo.substring(0, 1).toUpperCase() + searchAreaInfo.substring(1).toLowerCase();
                addContent(checkingArray.indexOf(formatedSearch));
                //console.log(formatedSearch + ' formatted' + checkingArray.indexOf(formatedSearch));
               // console.log(dataPlants.plants[i].name + ' Found');
                console.log(dataPlants.plants[i].name.toUpperCase()); break;


            }
            else {
                document.getElementById('result').innerHTML = `Can't find ` + searchAreaInfo;
                }
                
                //console.log("does it runs A?");
                
                //console.log("does it runs B?");
                i++;
            }
            

        }
    
    }




// function doYouMean(input){
//     let i = 0;
//     //while (i < dataPlants.plants.length) {
//         if(input.startsWith(dataPlants.plants[i].name.substring(0,1))){
//             console.log("did you mean "+dataPlants.plants[i].name);
//             console.log(input);
//         }
//         i++;
//     }
// }





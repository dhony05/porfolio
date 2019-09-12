


 
  
    
/*** this is a function that returns the actual date */

function getDate(){
  var date = document.getElementById('dateArea').innerHTML = Date();
}


/*** this functin will take a color parameter and will change the actual color of element ***/
function getNewColor(newColor){
 var coloring = getElementById('seconForm');
 coloring.style.color = newColor;

}
/************************** */

/*
This function will remove the rows and will set the isShowing Boolean to false;
*/

function removeRow() {
   document.getElementById('InBigDivision').style.display="none";
    
    console.log(document.getElementById('InBigDivision').childNodes.length);
  }

/*
This function will check is there is nothing showing and if nothing showing  it display content
*/
/* create a boolean to identify if the search is found */

 function addContent(id){
  
    document.getElementById('InBigDivision').style.display="block";
   
/**** This method will call the data from JSON file */
    $.getJSON('JS/plantsData.json',data  =>{
      $(document).ready(function(){
     
      //document.getElementById('result').innerHTML = searchAreaInfo;

      let content = document.getElementById('content');
      let info = document.getElementById('contentInfoID');
      let name = document.getElementById('headContent');
      let type = document.getElementById('contentTypeID');
      let i = 0

    
    while(i<data.plants.length){
      if(id == i){
      console.log(data.plants[i].name + " id number:" + id);
      info.innerHTML = data.plants[i].information + `<input type="button" value="Hide" name='Hide' onclick="removeRow()" />`;
      name.innerHTML = data.plants[i].name;
      type.innerHTML = data.plants[i].type;
      document.getElementById('imgID').setAttribute("src",data.plants[i].image);
      content.style.backgroundImage= url("data.plants[i].image");
      
      }
      i++;  
    }
    
    
      }); 
  
    });
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // for google chrome

}
// let enterSearch = document.getElementById('searchElement');
//   enterSearch.addEventListener("keyup", function(event) {
//   //search();
//    if (event.keyCode === 13) {
//     event.preventDefault();
//     document.getElementById("searchButtonId").click();
    
//    }
//  });
window.onload=function(){
  var mb = document.getElementById("b");
  mb.addEventListener("click", handler);
  mb.addEventListener("click", handler2);
}

document.querySelector('#searchButton').addEventListener('keypress', function (e) {
  var key = e.which || e.keyCode;
  if (key === 13) { // 13 is enter
    // code for enter
  }
});
function search(){
  
  $.getJSON('JS/plantsData.json',data  =>{
    $(document).ready(function(){
       /***Checking inside the text-area */
      let searchAreaInfo = document.getElementById('searchElement').value;
      let count =0;
      let i = 0;
      let checkingArray = [];
      let formatedSearch = "";
     
      //create and populate an array of every plants name
      for (let index = 0; index < data.plants.length; index++) {
        checkingArray[index] = data.plants[index].name;
        
      }
      //checking if the text area is empty
      console.log(checkingArray);
      if(searchAreaInfo == ""){

        document.getElementById('result').innerHTML = 'please enter a value';
      }else{

      
      //iterating through the JSON to find the input
       while(i < data.plants.length){
        if(searchAreaInfo.toUpperCase() ==  data.plants[i].name.toUpperCase()){
          count ++;
          document.getElementById('result').innerHTML = count+' result of '+searchAreaInfo+ ' found';
          formatedSearch = searchAreaInfo.substring(0,1).toUpperCase() + searchAreaInfo.substring(1).toLowerCase();
          addContent(checkingArray.indexOf(formatedSearch));
          console.log(formatedSearch + ' formatted' + checkingArray.indexOf(formatedSearch)); 
          console.log(data.plants[i].name +' Found'); 
          console.log(data.plants[i].name.toUpperCase());break;
          
          //isFound = true; 
  
        }else{
          document.getElementById('result').innerHTML = `Can't find ` + searchAreaInfo;
          //console.log(document.getElementById('result').innerHTML = `Cannot find ` + searchAreaInfo);
          

        }
        //console.log(data.plants[i].name);
        i++;
        
      }
    }


    }); 
  
  });
}




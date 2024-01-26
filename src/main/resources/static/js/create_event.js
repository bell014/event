 function openForm() {
        document.getElementById("popupForm").style.display = "block";
        document.getElementById("popupForm2").style.display = "none";
        document.getElementById("popupForm3").style.display = "none";
        document.getElementById("popupForm4").style.display = "none";
    }
    function closeForm() {
        document.getElementById("popupForm").style.display = "none";
    }
    function openForm2() {
        if(document.getElementById("event-type").value=="false"){
        document.getElementById("popupForm2").style.display = "block";
        document.getElementById("popupForm").style.display = "none";
        }else{
        document.getElementById("popupForm3").style.display = "block";
        document.getElementById("popupForm").style.display = "none";
        }
    }
    function closeForm2() {
        document.getElementById("popupForm2").style.display = "none";
    }
    function openForm3() {
        document.getElementById("popupForm3").style.display = "block";
    }
    function closeForm3() {
        document.getElementById("popupForm3").style.display = "none";
    }
    function openForm4() {
        document.getElementById("popupForm4").style.display = "block";
        document.getElementById("popupForm3").style.display = "none";
    }
    function closeForm4() {
        document.getElementById("popupForm4").style.display = "none";
    }


     function verif1(){
         var eventName = document.getElementById('event-name').value;
         var startDate = document.getElementById('start-date').value;
         var startTime = document.getElementById('start-time').value;
         var eventDescription = document.getElementById('event-description').value;
         var currentDate = new Date();
         var selectedDate = new Date(startDate + ' ' + startTime);
         if (eventName === ""){
             alert("Please fill in The Event Name");
             return false;
         }else if(startDate === ""){
             alert("Please fill in The Date Correctly");
             return false;
         }else if(startTime === ""){
             alert("Please fill in The Time");
             return false;
         }else if(eventDescription === ""){
             alert("Please fill in all required fields");
             return false;
         }else if (selectedDate <= currentDate) {
                alert("Selected date should be in the future");
                return false; }
         else{


            openForm2()
             return true;
         }



     }



       function verif2(){
         // Page 2 fields
         var app = document.getElementById('app').value;
         var link = document.getElementById('link').value;
         if(app === ""){
             alert("Please fill in The App Name");
             return false;
         }else if(link === ""){
             alert("Please fill in The Link");
             return false;
         }

     return true ;
     }



        function verif3(){

        var insideCheckbox = document.getElementById('inside-checkbox').checked;
        var outsideCheckbox = document.getElementById('outside-checkbox').checked;
        if(!insideCheckbox && !outsideCheckbox){
            alert("You Must Choose One of Them !");
            return false;
        }else if(insideCheckbox && outsideCheckbox){
            alert("You can Only Choose 1 of Them !");
            return false;
        }else{
            openForm4();
            return ;
        }
    }


        function verif4(){

         var state = document.getElementById('State').value;
         var placeName = document.getElementById('Place Name').value;
         var locLink = document.getElementById('loc-link').value;
         if (state === ""){
            alert("Please fill in The State");
            return false;
         }else if(placeName === ""){
            alert("Please Give The Place Name");
            return false;
         }else if(locLink === ""){
            alert("Please fill in The Location Link");
            return false;
         }

    }

const menuBtn = document.querySelector(".menu-icon span");
    const searchBtn = document.querySelector(".search-icon");
    const cancelBtn = document.querySelector(".cancel-icon");
    const items = document.querySelector(".nav-items");
    const form = document.querySelector("form");

    menuBtn.onclick = () => {
        items.classList.add("active");
        menuBtn.classList.add("hide");
        searchBtn.classList.add("hide");
        cancelBtn.classList.add("show");
    };

    cancelBtn.onclick = () => {
        items.classList.remove("active");
        menuBtn.classList.remove("hide");
        searchBtn.classList.remove("hide");
        cancelBtn.classList.remove("show");
        form.classList.remove("active");
        cancelBtn.style.color = "#ff3d00";
    };

    searchBtn.onclick = () => {
        form.classList.add("active");
        searchBtn.classList.add("hide");
        cancelBtn.classList.add("show");
    };
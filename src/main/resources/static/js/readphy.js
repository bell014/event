function openFormup() {
        document.getElementById("popupForm").style.display = "block";
        document.getElementById("popupeditP").style.display = "none";
    }
    function closeForm() {
        document.getElementById("popupForm").style.display = "none";
    }
    function OpeneditP() {
        document.getElementById("popupeditP").style.display = "block";
        document.getElementById("popupForm").style.display = "none";
    }
    function closeeditP() {
        document.getElementById("popupeditP").style.display = "none";
    }
    const paragraph = document.getElementById("editState");
    const paragraph2 = document.getElementById("editPlace");
    const paragraph3 = document.getElementById("editNAME");
    const edit_button = document.getElementById("edit-button");
    const edit_button2 = document.getElementById("edit-button2");
    const edit_button3 = document.getElementById("edit-button3");
    var end_button = document.getElementById("n1P");
    var end_button2 = document.getElementById("editPlace");
    var end_button3 = document.getElementById("nameevP");

    edit_button.addEventListener("click", function() {
        document.getElementById('editState').readOnly = false;
        paragraph.style.backgroundColor = "#dddbdb";
    } );

    document.addEventListener('mouseup', function(e) {
    if (!end_button.contains(e.target)) {
        document.getElementById('editState').readOnly = true;
        paragraph.style.backgroundColor = "#fff";
    }
    });

    edit_button2.addEventListener("click", function() {
        document.getElementById('editPlace').readOnly = false;
        paragraph2.style.backgroundColor = "#dddbdb";
    } );

    document.addEventListener('mouseup', function(e) {
    if (!end_button2.contains(e.target)) {
        document.getElementById('editPlace').readOnly = true;
        paragraph2.style.backgroundColor = "#fff";
    }
    });

    edit_button3.addEventListener("click", function() {
        document.getElementById('editNAME').readOnly = false;
        paragraph3.style.backgroundColor = "#dddbdb";
    } );


    document.addEventListener('mouseup', function(e) {
    if (!end_button3.contains(e.target)) {
        document.getElementById('editNAME').readOnly = true;
        paragraph3.style.backgroundColor = "#fff";
    }
    });
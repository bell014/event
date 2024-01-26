
    function openFormup() {
        document.getElementById("popupForm").style.display = "block";
        document.getElementById("popupEditV").style.display = "none";

    }
    function closeForm() {
        document.getElementById("popupForm").style.display = "none";
    }
     function OpeneditV () {
        document.getElementById("popupForm").style.display = "none";
        document.getElementById("popupEditV").style.display = "block";
    }
    function CloseeditV() {
        document.getElementById("popupEditV").style.display = "none";
    }
        const paragraph = document.getElementById("editAPP");
        const paragraph2 = document.getElementById("editLink");
        const paragraph3 = document.getElementById("editNAME");
        const edit_button = document.getElementById("edit-button");
        const edit_button2 = document.getElementById("edit-button2");
        const edit_button3 = document.getElementById("edit-button3");
        var end_button = document.getElementById("n11");
        var end_button2 = document.getElementById("editLink");
        var end_button3 = document.getElementById("nameev1");

        edit_button.addEventListener("click", function() {
            document.getElementById('editAPP').readOnly = false;
        paragraph.style.backgroundColor = "#dddbdb";
        } );

        document.addEventListener('mouseup', function(e) {
        if (!end_button.contains(e.target)) {
            document.getElementById('editAPP').readOnly = true;
            paragraph.style.backgroundColor = "#fff";
        }
        });

        edit_button2.addEventListener("click", function() {
            document.getElementById('editLink').readOnly = false;
        paragraph2.style.backgroundColor = "#dddbdb";
        } );

        document.addEventListener('mouseup', function(e) {
        if (!end_button2.contains(e.target)) {
            document.getElementById('editLink').readOnly = true;
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
      // Get the button element by its ID
      var rate=0;
      var submitDaysButton=document.
      getElementById("submitDays");
      var daysForm=document.getElementById("days-form");
      var display_result=document.getElementById("wrapper");
      function processnum(number){
        daysForm.style.display = "block";
        rate=number;
        window.scrollTo({top:0,behavior:'smooth'});
      }

      // Add a click event listener to the "Submit" button in the days form
      submitDaysButton.addEventListener("click", function() {

        // Get the value entered by the user
        var result=document.getElementById("value");
        var days = document.getElementById("days").value;
        var totalCost;
        // Check if the entered value is a valid number
        if (!isNaN(days) && days > 0) {
          //var rate = bookButton.value;
          //var rate = parseInt(h4Value, 10);
          rate=parseInt(rate,10);
          totalCost = rate * parseInt(days);

          // Display the total cost
          result.innerHTML="Total cost Rs:" + totalCost;

          // Hide the days form after calculation
          daysForm.style.display = "none";
          display_result.style.display="block";
        } else {
          alert("Please enter a valid number of days/Km.");
        }
      });
      function result_block(){
        display_result.style.display="none";
        alert("Booking confirmed!");
      }

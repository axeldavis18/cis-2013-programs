var $ = function (id) 
{
    return document.getElementById(id);
};

var calculate_click = function () 
{
    var floatHwPts, floatMidPts, floatFinPts, floatTotalPts, floatPointOption, stringOutput;

    floatHwPts = parseFloat($("hw_pts").value);
    floatMidPts = parseFloat($("mid_pts").value);
    floatFinPts = parseFloat($("fin_pts").value);
    floatPointOption = parseFloat($("grade_option").value);
    stringOutput = "";
    
    floatTotalPts = floatHwPts + floatMidPts + floatFinPts;
    
    if (floatPointOption === 1)
    {
        if (floatTotalPts >= 80)
        {
            stringOutput = "PASS";
        }
        else
        {
            stringOutput = "FAIL";
        }
    }
    else
    {
        if (floatTotalPts >= 90)
        {
            stringOutput = "A";
        }
        else if (floatTotalPts >= 80)
        {
            stringOutput = "B";
        }
        else if (floatTotalPts >= 70)
        {
            stringOutput = "C";
        }
        else if (floatTotalPts >= 60)
        {
           stringOutput = "D"; 
        }
        else if (floatTotalPts < 60)
        {
            stringOutput = "F";
        }
    }
   
    $("final_grade").value = stringOutput;
};

window.onload = function () 
{
    $("final_grade").value = ""; //blanks the final grade text box upon page load
    $("calculate").onclick = calculate_click; //activates main method when the button is clicked 
    $("hw_pts").focus(); //puts the cursor on the first DOM text input box
};
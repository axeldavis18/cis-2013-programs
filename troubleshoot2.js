var $ = function (id) {
    return document.getElementById(id);
};

var fixPrinter = function() 
{
    var stringOutput = "";  //declares stringOutput inital value to be blank

    //define the individual troubleshooting tips per the chart
    var stringMessage1 = "Check the power cable.";
    var stringMessage2 = "Check the printer-computer cable.";
    var stringMessage3 = "Ensure printer software is installed.";
    var stringMessage4 = "Check / replace ink.";
    var stringMessage5 = "Check for paper jam.";
    var stringMessage6 = "Looks like everything is working fine!";

    var boolPrinting = $("not_printing").selected;  //returns a value of true only when the not_printing html id is selected from the dropdown menu
    var boolRedLight = $("yes_redlight").selected;  //returns a value of true only when the yes_redlight html id is selected from the dropdown menu
    var boolRecognised = $("not_recognised").selected;  ////returns a value of true only when the not_recognized html id is selected from the dropdown menu

 
 
 switch (true)
 {
    case boolPrinting === true && boolRedLight === true && boolRecognized === true:
        stringOutput = stringMessage2 + "\n" + stringMessage3 + "\n" + stringMessage4;
        break;
    case boolPrinting === true && boolRedLight === true && boolRecognized === false:
        stringOutput = stringMessage4 + "\n" + stringMessage5;
        break;
    case boolPrinting === true && boolRedLight === false && boolRecognized === true:
        stringOutput = stringMessage1 + "\n" + stringMessage2 + "\n" + stringMessage3;
        break;
    case boolPrinting === true && boolRedLight === false && boolRecognized === false:
        stringOutput = stringMessage5;
        break;
    case boolPrinting === false && boolRedLight === true && boolRecognized === true:
        stringOutput = stringMessage3 + "\n" + stringMessage4;
        break;
    case boolPrinting === false && boolRedLight === true && boolRecognized === false:
        stringOutput = stringMessage4;
        break;
    case boolPrinting === false && boolRedLight === false && boolRecognized === true:
        stringOutput = stringMessage3;
        break;
    default:
        stringOutput = stringMessage6;
        break;
 }
}
window.onload = function () {
    $("troubleshoot").onclick = fixPrinter;
};



//Declare variables intGradeOption, floatTotalPts, floatHwPts, floatMidPts, floatFinPts, stringFinalGrade
//Get user input to determine grade
//Calculate floatTotalPts (sum of HW and exam pts)
//Get user input on whether the course is audit pass/fail (1) or letter grade (2)
//If the grade option is audit, evaluate total score based upon 80% cutoff scorefor pass/fail
//Else determine letter grade based upon the typical A = 90%, B - 80%, etc.
//Output stringFinalGrade

var floatTotalPts, floatHwPts, floatMidPts, floatFinPts, intGradeOption, stringFinalGrade;


floatHwPts = parseFloat(prompt("Please enter final HW pts (0-30):"));

floatMidPts = parseFloat(prompt("Please enter points earned on the Midterm (0-35)"));

floatFinPts = parseFloat(prompt("Please enter points earned on the Final Exam (0-35)"));

floatTotalPts = parseFloat(floatHwPts + floatMidPts + floatFinPts);

intGradeOption = parseFloat(prompt("Declare course as pass fail? (1 = Yes, 2 = no)"));

stringFinalGrade = "Grade could not be calculated";


if (floatTotalPts > 100)
{
    alert("You have exceeded the maximum possible grade, please enter a total grade of less than 100 points");
}
else if (floatTotalPts < 0)
{
    alert("You have entered a value less than 0, please enter a total grade of 0 or greater");
}
else
{

if (intGradeOption===1)
    {
         if(floatTotalPts >= 80)
             stringFinalGrade = "You have passed the course";
         else
             stringFinalGrade = "You have failed the course";
    }
else
    if (floatTotalPts >= 90)
    {
        stringFinalGrade = "Your final grade is an A";
    }
    else if (floatTotalPts >= 80)
    {
        stringFinalGrade = "Your final grade is a B";
    }
    else if (floatTotalPts >= 70)
    {
        stringFinalGrade = "Your final grade is a C";
    }
    else if (floatTotalPts >= 60)
    {
        stringFinalGrade = "Your final grade is a D";
    }
    else if (floatTotalPts < 50)
    {
        stringFinalGrade = "Your final grade is a F";
    }
}
    
alert("Your final grade is: " + stringFinalGrade);
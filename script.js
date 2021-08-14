// function to compute the interest
function compute()
{
	// to get principal amount
    var principal = document.getElementById("principal").value;
	
	// to validate principal amount to not be 0(zero) or negative number
	if(principal<=0){
		alert("Enter a positive number");
		document.getElementById("principal").value="";
		document.getElementById("principal").focus();
	}
	
	// to get rate per year
    var rate = document.getElementById("rate").value;

	// to get number of years for which interest to be calculated
	var years = document.getElementById("years").value;
	
	// calculate interest and store it in interest variable
	var interest = principal*years*rate/100;
	
	// to get the end year from current year
	var year = new Date().getFullYear()+parseInt(years);
	
	// result to be display on webpage
	document.getElementById("result").innerHTML="If you deposit <span class='highlight'>"+principal+"</span>,\<br\>at an interest rate of <span class='highlight'>"+rate+"%</span>.\<br\>You will receive an amount of <span class='highlight'>"+interest+"</span>,\<br\>in the year <span class='highlight'>"+year+"</span>";
}

// function to update rate in numerical format as they got change on horizontal bar format
function updateRate()
{
	var rateval = document.getElementById("rate").value;
	document.getElementById("rate_val").innerText=rateval+"%";
}



    var currentdate = new Date();
    var year = currentdate.getFullYear();
    var currentyear = currentdate.getFullYear();
    var month = currentdate.getMonth();
    var currentmonth = currentdate.getMonth();
    var date = currentdate.getDate();
    var day = currentdate.getDay();
    var monthNames = ["January","February","March","April","May","June","July","August","September","October","November", "December"];
    var dayNames = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday", "Saturday"];
    var FebNumberOfDays = 0;

    function calendar() {
        if(year % 4 == 0) {
            FebNumberOfDays = 29;
        }
        else {
            FebNumberOfDays = 28;
        }
        var dayPerMonth = ["31", ""+FebNumberOfDays+"","31","30","31","30","31","31","30","31","30","31"];
        var totalDays = monthNames[month];
        var dayName = "";
        var counter = 0;
        var noOfPrevDays = 0;
        var noOfNextDays = 0;
        var dayOnFirst = new Date(monthNames[month]+" 1," + year).getDay();
        var days = "<tr>";

        for(i = 0; i < dayNames.length; i++) {
            dayName += "<td class='days'>" + dayNames[i] + "</td>";
        }
        if((month+1)!=12)
        noOfNextDays = dayPerMonth[month+1];
        else
        console.log(dayPerMonth[month+1]);
        //noOfNextDays = dayPerMonth[month+1];
        if(monthNames[month-1] != "February") {
            // if((month-1<0)) {
            //     month
            // }
            if((month-1)>0)
            noOfPrevDays = dayPerMonth[month-1];
            else
            noOfPrevDays = dayPerMonth[month];
        }
        else {
            noOfPrevDays = FebNumberOfDays;
        }

        for( i = 0; i < (dayNames.indexOf(dayNames[dayOnFirst])); i++) {
            days += "<td class='previousmonth'>" + ((noOfPrevDays-(dayNames.indexOf(dayNames[dayOnFirst]))+i)+1) + "</td>";
            counter++;
        }
        for(i = 0; i < dayPerMonth[month]; i++) {
            if(((i+1) == date) && (monthNames[month] == monthNames[currentmonth]) && (year == currentyear))
            days += "<td class='today'>" + (i+1) + "</td>";
            else
            days += "<td>" + (i+1) + "</td>";
            if((counter+1) % 7 == 0)
            {
                days+="</tr><tr>";
            }
            counter++;
        }
        if(counter % 7 != 0) {
            for(i = 0; i < (7 - (counter % 7)); i++) {
                days+= "<td class='nextmonth'>" + (i + 1) +"</td>";
            }
        }

        days += "</tr>";
        document.getElementById("demo").innerHTML = monthNames[month] + " " +year;
        document.getElementById("daysname").innerHTML = dayName;
        document.getElementById("displaycalendar").innerHTML = days;
    }
    function previous() {
        if((month-1)< 0) {
            year--;
            month=11;
        }
        else
        month--;
        if(day > 0)
        day--;
        else
        day = 6;
        calendar();
    }
    function next() {
        console.log(month+1);
        if((month+1) == 12)
        {
            year++;
            month=0;
        }
        else {
            month++;
        }


        if(day % 7 > 0)
        day++;
        else
        day = 0;
        calendar();
    }

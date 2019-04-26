var NepaliCalendar = {};
(function ($) {
var calendarData = {
        bsMonths: ["बैशाख", "जेठ", "असार", "सावन", "भदौ", "असोज", "कार्तिक", "मंसिर", "पौष", "माघ", "फागुन", "चैत"],
        bsDays: ["आई", "सो", "मं", "बु", "बि", "शु", "श"],
        bsDaysFull: ["आईतबार", "सोमबार", "मंगलवार", "बुधबार", "बिहीबार", "शुक्रबार", "शनिबार"],
        nepaliNumbers: ["०", "१", "२", "३", "४", "५", "६", "७", "८", "९"],
        dtFormat:["d","dd","D","DD","m","mm","M","MM","yy","yyyy"],
        selectednpDate:{npYear:0,npMonth:0,npDay:0},
        closeOnDateSelect:false,
        nepalicaledarData:{
            1949: [2005, 17, 30, 29, 30, 30, 31, 31, 32, 32, 31, 30, 30, 29, 30],
            1950: [2006, 18, 30, 29, 30, 30, 31, 32, 31, 32, 31, 30, 30, 30, 29],
            1951: [2007, 17, 29, 29, 30, 31, 31, 31, 31, 32, 31, 31, 29, 30, 30],
            1952: [2008, 17, 30, 29, 29, 31, 31, 31, 32, 31, 31, 31, 30, 29, 30],
            1953: [2009, 18, 30, 29, 30, 30, 31, 31, 32, 32, 31, 30, 30, 29, 30],
            1954: [2010, 18, 30, 29, 30, 30, 31, 32, 31, 32, 31, 30, 30, 30, 29],
            1955: [2011, 17, 29, 29, 30, 31, 31, 31, 31, 32, 31, 31, 29, 30, 30],
            1956: [2012, 17, 30, 29, 30, 30, 31, 31, 32, 31, 31, 31, 30, 29, 30],
            1957: [2013, 18, 30, 29, 30, 30, 31, 31, 32, 32, 31, 30, 30, 29, 30],
            1958: [2014, 18, 30, 29, 30, 30, 31, 32, 31, 32, 31, 30, 30, 30, 29],
            1959: [2015, 17, 29, 29, 30, 31, 31, 31, 31, 32, 31, 31, 29, 30, 30],
            1960: [2016, 17, 30, 29, 30, 30, 31, 31, 32, 31, 31, 31, 30, 29, 30],
            1961: [2017, 18, 30, 29, 30, 30, 31, 32, 31, 32, 31, 30, 30, 29, 30],
            1962: [2018, 18, 30, 29, 30, 30, 31, 32, 31, 32, 31, 30, 30, 30, 29],
            1963: [2019, 17, 29, 30, 29, 31, 31, 31, 31, 32, 31, 31, 30, 29, 30],
            1964: [2020, 17, 30, 29, 30, 30, 31, 31, 32, 31, 31, 31, 30, 29, 30],
            1965: [2021, 18, 30, 29, 30, 30, 31, 32, 31, 32, 31, 30, 30, 30, 29],
            1966: [2022, 17, 29, 29, 30, 30, 31, 32, 31, 32, 31, 30, 30, 30, 29],
            1967: [2023, 17, 29, 30, 29, 31, 31, 31, 31, 32, 31, 31, 30, 29, 30],
            1968: [2024, 17, 30, 29, 30, 30, 31, 31, 32, 31, 31, 31, 30, 29, 30],
            1969: [2025, 18, 30, 29, 30, 30, 31, 32, 31, 32, 31, 30, 30, 30, 29],
            1970: [2026, 17, 29, 29, 30, 31, 30, 32, 31, 32, 31, 30, 30, 30, 29],
            1971: [2027, 17, 29, 30, 29, 31, 31, 31, 32, 31, 31, 31, 30, 29, 30],
            1972: [2028, 17, 30, 29, 30, 30, 31, 31, 32, 31, 32, 30, 30, 29, 30],
            1973: [2029, 18, 30, 29, 30, 30, 31, 32, 31, 32, 31, 30, 30, 30, 29],
            1974: [2030, 17, 29, 29, 30, 31, 30, 32, 31, 32, 31, 30, 30, 30, 29],
            1975: [2031, 17, 29, 30, 29, 31, 31, 31, 32, 31, 31, 31, 30, 29, 30],
            1976: [2032, 17, 30, 29, 30, 30, 31, 31, 32, 32, 31, 30, 30, 29, 30],
            1977: [2033, 18, 30, 29, 30, 30, 31, 32, 31, 32, 31, 30, 30, 30, 29],
            1978: [2034, 17, 29, 29, 30, 31, 30, 32, 31, 32, 31, 31, 29, 30, 30],
            1979: [2035, 17, 30, 29, 29, 31, 31, 31, 32, 31, 31, 31, 30, 29, 30],
            1980: [2036, 17, 30, 29, 30, 30, 31, 31, 32, 32, 31, 30, 30, 29, 30],
            1981: [2037, 18, 30, 29, 30, 30, 31, 32, 31, 32, 31, 30, 30, 30, 29],
            1982: [2038, 17, 29, 29, 30, 31, 31, 31, 31, 32, 31, 31, 29, 30, 30],
            1983: [2039, 17, 30, 29, 30, 30, 31, 31, 32, 31, 31, 31, 30, 29, 30],
            1984: [2040, 17, 30, 29, 30, 30, 31, 31, 32, 32, 31, 30, 30, 29, 30],
            1985: [2041, 18, 30, 29, 30, 30, 31, 32, 31, 32, 31, 30, 30, 30, 29],
            1986: [2042, 17, 29, 29, 30, 31, 31, 31, 31, 32, 31, 31, 29, 30, 30],
            1987: [2043, 17, 30, 29, 30, 30, 31, 31, 32, 31, 31, 31, 30, 29, 30],
            1988: [2044, 17, 30, 29, 30, 30, 31, 32, 31, 32, 31, 30, 30, 29, 30],
            1989: [2045, 18, 30, 29, 30, 30, 31, 32, 31, 32, 31, 30, 30, 30, 29],
            1990: [2046, 17, 29, 29, 30, 31, 31, 31, 31, 32, 31, 31, 30, 29, 30],
            1991: [2047, 17, 30, 29, 30, 30, 31, 31, 32, 31, 31, 31, 30, 29, 30],
            1992: [2048, 17, 30, 29, 30, 30, 31, 32, 31, 32, 31, 30, 30, 30, 29],
            1993: [2049, 17, 29, 29, 30, 30, 31, 32, 31, 32, 31, 30, 30, 30, 29],
            1994: [2050, 17, 29, 30, 29, 31, 31, 31, 31, 32, 31, 31, 30, 29, 30],
            1995: [2051, 18, 30, 29, 30, 30, 31, 31, 32, 31, 31, 31, 30, 29, 30],
            1996: [2052, 17, 30, 29, 30, 30, 31, 32, 31, 32, 31, 30, 30, 30, 29],
            1997: [2053, 17, 29, 29, 30, 30, 31, 32, 31, 32, 31, 30, 30, 30, 29],
            1998: [2054, 17, 29, 30, 29, 31, 31, 31, 32, 31, 31, 31, 30, 29, 30],
            1999: [2055, 17, 30, 29, 30, 30, 31, 31, 32, 31, 32, 30, 30, 29, 30],
            2000: [2056, 17, 30, 29, 30, 30, 31, 32, 31, 32, 31, 30, 30, 30, 29],
            2001: [2057, 17, 29, 29, 30, 31, 30, 32, 31, 32, 31, 30, 30, 30, 29],
            2002: [2058, 17, 29, 30, 29, 31, 31, 31, 32, 31, 31, 31, 30, 29, 30],
            2003: [2059, 17, 30, 29, 30, 30, 31, 31, 32, 32, 31, 30, 30, 29, 30],
            2004: [2060, 17, 30, 29, 30, 30, 31, 32, 31, 32, 31, 30, 30, 30, 29],
            2005: [2061, 17, 29, 29, 30, 31, 30, 32, 31, 32, 31, 31, 29, 30, 29],
            2006: [2062, 17, 29, 30, 29, 31, 31, 31, 32, 31, 31, 31, 30, 29, 30],
            2007: [2063, 17, 30, 29, 30, 30, 31, 31, 32, 32, 31, 30, 30, 29, 30],
            2008: [2064, 17, 30, 29, 30, 30, 31, 32, 31, 32, 31, 30, 30, 30, 29],
            2009: [2065, 17, 29, 29, 30, 31, 31, 31, 31, 32, 31, 31, 29, 30, 30],
            2010: [2066, 17, 30, 29, 29, 31, 31, 31, 32, 31, 31, 31, 30, 29, 30],
            2011: [2067, 17, 30, 29, 30, 30, 31, 31, 32, 32, 31, 30, 30, 29, 30],
            2012: [2068, 17, 30, 29, 30, 30, 31, 32, 31, 32, 31, 30, 30, 30, 29],
            2013: [2069, 17, 29, 29, 30, 31, 31, 31, 31, 32, 31, 31, 29, 30, 30],
            2014: [2070, 17, 30, 29, 30, 30, 31, 31, 32, 31, 31, 31, 30, 29, 30],
            2015: [2071, 17, 30, 29, 30, 30, 31, 32, 31, 32, 31, 30, 30, 29, 30],
            2016: [2072, 17, 30, 29, 30, 30, 31, 32, 31, 32, 31, 30, 30, 30, 29],
            2017: [2073, 17, 29, 29, 30, 31, 31, 31, 31, 32, 31, 31, 30, 29, 30],
            2018: [2074, 17, 30, 29, 30, 30, 31, 31, 32, 31, 31, 31, 30, 29, 30],
            2019: [2075, 17, 30, 29, 30, 30, 31, 32, 31, 32, 31, 30, 30, 30, 29],
            2020: [2076, 16, 29, 29, 30, 30, 31, 32, 31, 32, 31, 30, 30, 30, 29],
            2021: [2077, 17, 29, 30, 29, 31, 31, 31, 31, 32, 31, 31, 30, 29, 30],
            2022: [2078, 17, 30, 29, 30, 30, 31, 31, 32, 31, 31, 31, 30, 29, 30],
            2023: [2079, 17, 30, 29, 30, 30, 31, 32, 31, 32, 31, 30, 30, 30, 29],
            2024: [2080, 16, 29, 29, 30, 30, 31, 32, 31, 32, 31, 30, 30, 30, 29],
            2025: [2081, 17, 29, 30, 29, 31, 31, 31, 32, 31, 31, 31, 30, 29, 30],
            2026: [2082, 18, 30, 29, 30, 30, 31, 31, 32, 31, 31, 31, 30, 29, 30],
            2027: [2083, 17, 30, 29, 30, 30, 31, 32, 31, 32, 31, 30, 30, 30, 29],
            2028: [2084, 16, 29, 29, 30, 31, 30, 32, 31, 32, 31, 30, 30, 30, 29],
            2029: [2085, 17, 29, 30, 29, 31, 31, 31, 32, 31, 31, 31, 30, 29, 30],
            2030: [2086, 17, 30, 29, 30, 30, 31, 31, 32, 32, 31, 30, 30, 29, 30],
            2031: [2087, 17, 30, 29, 30, 30, 31, 32, 31, 32, 31, 30, 30, 30, 29],
            2032: [2088, 16, 29, 29, 30, 31, 30, 32, 31, 32, 31, 30, 30, 30, 29],
            2033: [2089, 17, 29, 30, 29, 31, 31, 31, 32, 31, 31, 31, 30, 29, 30],
            2034: [2090, 17, 30, 29, 30, 30, 31, 31, 32, 32, 31, 30, 30, 29, 30],
            2035: [2091, 17, 30, 29, 30, 30, 31, 32, 31, 32, 31, 30, 30, 30, 29],
            2036: [2092, 16, 29, 29, 30, 31, 31, 31, 31, 32, 31, 31, 29, 30, 30],
            2037: [2093, 17, 30, 29, 29, 31, 31, 31, 32, 31, 31, 31, 30, 29, 30],
            2038: [2094, 17, 30, 29, 30, 30, 31, 31, 32, 32, 31, 30, 30, 29, 30],
            2039: [2095, 17, 30, 29, 30, 30, 31, 32, 31, 32, 31, 30, 30, 30, 29],
            2040: [2096, 16, 29, 29, 30, 31, 31, 31, 31, 32, 31, 31, 29, 30, 30],
            2041: [2097, 17, 30, 29, 30, 30, 31, 31, 32, 31, 31, 31, 30, 29, 30],
            2042: [2098, 17, 30, 29, 30, 30, 31, 31, 32, 32, 31, 30, 30, 29, 30],
            2043: [2099, 17, 30, 29, 30, 30, 31, 32, 31, 32, 31, 30, 30, 30, 29],
            2044: [2100, 16, 29, 29, 30, 31, 31, 31, 31, 32, 31, 31, 29, 30, 30],
            2045: [2101, 17, 30, 29, 30, 30, 31, 31, 32, 31, 31, 31, 30, 29, 30],
            2046: [2102, 17, 30, 29, 30, 30, 31, 32, 31, 32, 31, 30, 30, 29, 30],
            2047: [2103, 17, 30, 29, 30, 30, 31, 32, 31, 32, 31, 30, 30, 30, 29],
            2048: [2104, 16, 29, 30, 29, 31, 31, 31, 31, 32, 31, 31, 30, 29, 30],
            2049: [2105, 17, 30, 29, 30, 30, 31, 31, 32, 31, 31, 32, 30, 29, 30],
            2050: [2106, 17, 30, 29, 30, 30, 31, 32, 31, 32, 31, 30, 30, 30, 29],
            2051: [2107, 16, 29, 29, 30, 30, 31, 32, 31, 32, 31, 30, 30, 30, 29],
            2052: [2108, 16, 29, 30, 29, 31, 31, 31, 32, 31, 31, 31, 30, 29, 30],
            2053: [2109, 17, 30, 29, 30, 30, 31, 31, 32, 31, 31, 31, 30, 29, 30],
            2054: [2110, 17, 30, 29, 30, 30, 31, 32, 31, 32, 31, 30, 30, 30, 29]
            
        },
        minBsYear: 1970,
        maxBsYear: 2100,
        dateFormat:"",
        minAdDateEqBsDate: {
            "ad": {
                "year": 1913, "month": 3, "date": 13
            },
            "bs": {
                "year": 1970, "month": 1, "date": 1
            }
        }
    }
        $.extend(NepaliCalendar, {
            npDate:{today:new Date(),npYear:0,npMonth:0,npDay:0,npDaysInMonth:0,startingDay:0,startdate:new Date(),endDate:new Date(),},
           nepaliDate: {
            today:new Date(),currentDate:new Date(),currentNpDate:{npYear:0,npMonth:0,npDay:0}, npYear:0,npMonth:0,npDay:0,npDaysInMonth:0,startingDay:0,startdate:new Date(),endDate:new Date(),
                 previousMonth:{npYear:0,npMonth:0,npDay:0,npDaysInMonth:0,startingDay:0,startdate:new Date(),endDate:new Date(),},
                 nextMonth:{npYear:0,npMonth:0,npDay:0,npDaysInMonth:0,startingDay:0,startdate:new Date(),endDate:new Date(),}
            },

            getBSDate: function(year,month,day){
                var npDate=NepaliCalendar.BSDate(year,month,day);
                NepaliCalendar.nepaliDate.npDay=npDate.npDay;
                NepaliCalendar.nepaliDate.today=new Date(year,month,day);
                NepaliCalendar.nepaliDate.npMonth=npDate.npMonth;
                NepaliCalendar.nepaliDate.npYear=npDate.npYear;
                NepaliCalendar.nepaliDate.npDaysInMonth=npDate.npDaysInMonth;
                NepaliCalendar.nepaliDate.startingDay=npDate.startingDay;
                NepaliCalendar.nepaliDate.startdate=npDate.startdate;
                NepaliCalendar.nepaliDate.endDate=npDate.endDate;
                var dt= new Date();
               var np= NepaliCalendar.BSDate(dt.getFullYear(),dt.getMonth(), dt.getDate());
                NepaliCalendar.nepaliDate.currentNpDate={npYear:np.npYear,npMonth:np.npMonth,npDay:np.npDay}
                //previous Month
                var pdate= new Date(year,month,day);
                pdate.setDate(pdate.getDate()-npDate.npDaysInMonth);
                var pnpDate=NepaliCalendar.BSDate(pdate.getFullYear() ,pdate.getMonth(),pdate.getDate());
                NepaliCalendar.nepaliDate.previousMonth.npDay=pnpDate.npDay;
                NepaliCalendar.nepaliDate.previousMonth.npMonth=pnpDate.npMonth;
                NepaliCalendar.nepaliDate.previousMonth.npYear=pnpDate.npYear;
                NepaliCalendar.nepaliDate.previousMonth.npDaysInMonth=pnpDate.npDaysInMonth;
                NepaliCalendar.nepaliDate.previousMonth.startingDay=pnpDate.startingDay;
                NepaliCalendar.nepaliDate.previousMonth.startdate=pnpDate.startdate;
                NepaliCalendar.nepaliDate.previousMonth.endDate=pnpDate.endDate;

                //next Month
                var ndate= new Date(year,month,day);
                ndate.setDate(ndate.getDate()+npDate.npDaysInMonth);
                var npDate=NepaliCalendar.BSDate(ndate.getFullYear() ,ndate.getMonth(),ndate.getDate());
                NepaliCalendar.nepaliDate.nextMonth.npDay=npDate.npDay;
                NepaliCalendar.nepaliDate.nextMonth.npMonth=npDate.npMonth;
                NepaliCalendar.nepaliDate.nextMonth.npYear=npDate.npYear;
                NepaliCalendar.nepaliDate.nextMonth.npDaysInMonth=npDate.npDaysInMonth;
                NepaliCalendar.nepaliDate.nextMonth.startingDay=npDate.startingDay;
                NepaliCalendar.nepaliDate.nextMonth.startdate=npDate.startdate;
                NepaliCalendar.nepaliDate.nextMonth.endDate=npDate.endDate;
               return NepaliCalendar.nepaliDate;
            },
            BSDate: function(year,month,day){
                var date= new Date(year,month,day);
                NepaliCalendar.npDate.startdate=new Date(year,month,day);// =new date(year,month,day);
                NepaliCalendar.npDate.endDate=new Date(year,month,day);
                var getData = calendarData.nepalicaledarData[year];
                var daysInYear = NepaliCalendar.dayOfyear(date);
                NepaliCalendar.npDate.npDay=0;
                NepaliCalendar.npDate.npMonth=0;
                NepaliCalendar.npDate.npYear=0;
                NepaliCalendar.npDate.npDaysInMonth=0;
                NepaliCalendar.npDate.startingDay=0;
                //Initializing Nepali Year from the data
                var npYear = getData[0];
                //Initializing Nepali month to Poush (9)
                //This is because English date Jan 1 always fall in Poush month of Nepali Calendar, which is 9th month of Nepali calendar
                var npMonth=9;
                //Initializing Nepali DaysInMonth with total days in the month of Poush
                var npDaysInMonth = getData[2];
                //Initializing temp nepali days
                //This is sum of total days in each Nepali month starting Jan 1 in Nepali month Poush
                //This is sum of total days in each Nepali month starting Jan 1 in Nepali month Poush
                //Note: for the month Poush, only counting days after Jan 1
                //***** This is the key field to calculate Nepali date *****
                if(npDaysInMonth==null){
                    return false;
                }
                var  npTempDays = getData[2] - getData[1] + 1;
                //Looping through Nepali date data array to get exact Nepali month, Nepali year & Nepali daysInMonth information
                var i=3;
                    while(daysInYear>npTempDays){
                        npTempDays+=getData[i];
                        npDaysInMonth = getData[i];
                        npMonth = npMonth + 1;
                        if(npMonth>12){
                            npMonth-=12;
                            npYear = npYear + 1;
                        }
                        i+=1;
                    }
                    var npDay= npDaysInMonth - ((npTempDays) - (daysInYear));
                    var startingDay= date.getDay()-(npDay%7) +1;   
                    if(startingDay<0)
                    startingDay = 7 +startingDay;   
                    NepaliCalendar.npDate.npDay=npDay;
                    NepaliCalendar.npDate.npMonth=npMonth;
                    NepaliCalendar.npDate.npYear=npYear;
                    NepaliCalendar.npDate.npDaysInMonth=npDaysInMonth;
                    NepaliCalendar.npDate.startingDay=startingDay;
                    //NepaliCalendar.npDate.startdate.setDate(NepaliCalendar.npDate.startdate.getDate()-(npDay+startingDay-1));
                    NepaliCalendar.npDate.startdate.setDate(NepaliCalendar.npDate.startdate.getDate()-(npDay-1));
                    NepaliCalendar.npDate.endDate.setDate(NepaliCalendar.npDate.endDate.getDate()+(npDaysInMonth-(npDay)));//date.setDate(date.getDate()+(42-(npDay+startingDay-1)));
                   return NepaliCalendar.npDate;
        
                },

            daysInMonth:function (month, year) {
                return new Date(year, month, 0).getDate();
            },

            dayOfyear: function(date) 
                {
                var days=0;
                for(i=1;i<=date.getMonth();i++){
                    days+= NepaliCalendar.daysInMonth(i,date.getFullYear());
                }
                
                    return days + date.getDate();
                },
            
        });
    
    $.fn.nepaliDatePicker=function(option){
        NepaliCalendar.dateFormat=typeof option.dateFormat==undefined? option.dateFormat="dd/mm/yyyy":option.dateFormat;
        NepaliCalendar.closeOnDateSelect=typeof option.closeOnDateSelect==undefined?false:option.closeOnDateSelect;
        var nepaliDatePickerPlugin={
  
           init: function($element){
              
               var $nepaliDatePicker=$('<div class="nepali-date-picker datepicker" style="display:none;"></div>');
               var $defaultHeading=$('<table class="table table-nepali-date day-wise">' + nepaliDatePickerPlugin.setCalendarHeader(new Date()));
               $nepaliDatePicker.append($defaultHeading);
               var $defaultMonthHeading=$('<table class="table table-nepali-date month-wise">' + nepaliDatePickerPlugin.setMonthWiseCalendarHeader() );
               var $defaultYearHeading=$('<table class="table table-nepali-date year-wise">' + nepaliDatePickerPlugin.setYearWiseCalendarHeader() );
               $nepaliDatePicker.append($defaultMonthHeading);
               $nepaliDatePicker.append($defaultYearHeading);
               $('body').append($nepaliDatePicker);
               $('.month-wise').hide();
               $('.year-wise').hide();
                nepaliDatePickerPlugin.addEventHandler($element,$nepaliDatePicker);
               nepaliDatePickerPlugin.addCommonEventHandler($element,$nepaliDatePicker);
              // NepaliCalendar.nepaliDate.currentNpDate={npYear:NepaliCalendar.npDate.npYear,npMonth:NepaliCalendar.npDate.npMonth,npDay:NepaliCalendar.npDate.npDay}
               //   nepalicaledarData.nepaliDate.currentNpDate = {npYear=nepalicaledarData.nepaliDate.npYear,npMonth=nepalicaledarData.nepaliDate.npMonth,npDay=nepalicaledarData.nepaliDate.npDay}
              // nepaliDatePickerPlugin.setCalendarHeader($element);
            },
                addEventHandler: function ($element,$nepaliDatePicker) {
                 
                $element.unbind().click(function (e) {
                    e.preventDefault()
                  
                var $targetElement=$(e.target);
               
                if (!$targetElement.is($(".date-Picker"))) {
                    if ($(".nepali-date-picker").is(":visible")) {
                        NepaliCalendar.nepaliDate.today=new Date();
                        nepaliDatePickerPlugin.resetCalendar($nepaliDatePicker);
                        $(".nepali-date-picker").hide();
                        return;
                    }
                }
                    var inputFieldPosition = $(this).offset();
                    $nepaliDatePicker.css({
                        "top": inputFieldPosition.top + $(this).height()+5,
                        "left": inputFieldPosition.left
                    });
                    if ($targetElement.attr('en-date') && $targetElement.val()!="") {
                        var date=new Date(parseInt($targetElement.attr('en-date')));
                        var nepalidate=NepaliCalendar.getBSDate(date.getFullYear(),date.getMonth(), date.getDate());
                        nepaliDatePickerPlugin.rendarCalendar($nepaliDatePicker,date);
                        $('.year-wise').hide();
                        $('.month-wise').hide();
                        $('.day-wise').show();
                        $('.day').removeClass('active');
                        $('[data-endate="'+ $targetElement.attr('en-date') +'"]').addClass('active');
                       // datePickerPlugin.renderFormattedSpecificDateCalendar($nepaliDatePicker, datePickerPlugin.options.dateFormat, $element.val());
                    }     
                    $nepaliDatePicker.show();
                    nepaliDatePickerPlugin.eventFire($element, $nepaliDatePicker, "show");
                    return false;
                });
            },
            addCommonEventHandler: function ($element, $nepaliDatePicker) {
                var $datePickerWrapper = $(".nepali-date-picker");
                $element.keyup(function (e){
                  //validateNepalidate
                })  
                $element.click(function (e) {
                    e.stopPropagation();
                    var $obj=$(this);
                    $(document).unbind().click(function (event) {
                        event.stopPropagation();;
                        var $targetElement = $(event.target);
                        if(typeof event.target.attributes['data-npdate']!="undefined"){
                            if($obj.is(".date-Picker")){
                                var npDate= nepaliDatePickerPlugin.getFormatednpDate(event.target.attributes['data-endate'].value);
                                calendarData.selectednpDate={npYear:NepaliCalendar.nepaliDate.npYear,npMonth:NepaliCalendar.nepaliDate.npMonth,npDay:NepaliCalendar.nepaliDate.npDay};
                                $obj.attr('en-Date',event.target.attributes['data-endate'].value);
                                $obj.val(npDate);
                                $('.day').removeClass('active');
                                $targetElement.addClass('active');
                                if(NepaliCalendar.closeOnDateSelect)$(".nepali-date-picker").hide();
                                return;
                            }
                        }
                   
                        if (!$targetElement.is($(".date-Picker"))) {
                            if($targetElement.hasClass('datepicker-switcher')){
                                nepaliDatePickerPlugin.hideshowCalendarBody($targetElement);
                            }
                            else if($targetElement.hasClass('month')){
                                nepaliDatePickerPlugin.navigateNextMonth($targetElement,$nepaliDatePicker);
                                var dt=  NepaliCalendar.nepaliDate.today;
                                $('.month-wise').hide();
                                $('.day-wise').show();
                                 nepaliDatePickerPlugin.rendarCalendar($nepaliDatePicker,dt);

                            }
                            else if($targetElement.hasClass('year')){
                                nepaliDatePickerPlugin.navigateYear($targetElement,$nepaliDatePicker);
                                var dt=  NepaliCalendar.nepaliDate.today;
                                $('.year-wise').hide();
                                $('.month-wise').show();
                                 nepaliDatePickerPlugin.rendarCalendar($nepaliDatePicker,dt);

                            }else if($targetElement.hasClass('today')){
                                calendarData.selectednpDate={npYear:NepaliCalendar.nepaliDate.currentNpDate.npYear,npMonth:NepaliCalendar.nepaliDate.currentNpDate.npMonth,npDay:NepaliCalendar.nepaliDate.currentNpDate.npDay};
                                nepaliDatePickerPlugin.navigateCurrentDate($nepaliDatePicker);
                                var npDate= nepaliDatePickerPlugin.getFormatednpDate(Date.parse(NepaliCalendar.nepaliDate.currentDate));
                                $obj.attr('en-Date',Date.parse(NepaliCalendar.nepaliDate.currentDate));
                                $obj.val(npDate);
                                if(NepaliCalendar.closeOnDateSelect)$(".nepali-date-picker").hide();
                                return;
                            }
                            else if(!$targetElement.hasClass('next') && !$targetElement.hasClass('prev')){
                                NepaliCalendar.nepaliDate.today=new Date();
                                nepaliDatePickerPlugin.resetCalendar($nepaliDatePicker);
                                if(typeof $obj.attr('en-Date')!=undefined){
                                    var npDate= nepaliDatePickerPlugin.getFormatednpDate($obj.attr('en-Date'));
                                    $obj.val(npDate);
                                }
                                $datePickerWrapper.hide();
                                $datePickerWrapper.find(".drop-down-content").hide();
                            }else if($targetElement.hasClass('next')){
                                nepaliDatePickerPlugin.navigateNextCalendar($nepaliDatePicker,$targetElement);
                            }else if($targetElement.hasClass('prev')){
                                nepaliDatePickerPlugin.navigatePreviousCalendar($nepaliDatePicker,$targetElement);
                            }
                            
                            
                           
                        }
                    });
                });
            },
            hideshowCalendarBody:function($targetElement){
                $('.month-wise').hide();
                $('.day-wise').hide();
                $('.year-wise').hide();
                $targetElement.parents('.day-wise').length>0?$('.month-wise').show():($targetElement.parents('.year-wise').length>0?$('.year-wise').show():($('.year-wise').show()));
            },
            navigateNextCalendar: function($nepaliDatePicker,$targetElement){
                var dt = new Date();
                $targetElement.parents('.day-wise').is(':visible')?NepaliCalendar.nepaliDate.today.setDate(NepaliCalendar.nepaliDate.today.getDate()+NepaliCalendar.nepaliDate.npDaysInMonth):( $targetElement.parents('.month-wise').is(':visible')? nepaliDatePickerPlugin.nextYear():nepaliDatePickerPlugin.nextDecade());
                var dt=  NepaliCalendar.nepaliDate.today;
                nepaliDatePickerPlugin.rendarCalendar($nepaliDatePicker,dt);
            },
            resetCalendar: function($nepaliDatePicker){
                var dt=  new Date();// NepaliCalendar.nepaliDate.today;
                $('.month-wise').hide();
                $('.day-wise').show();
                $('.year-wise').hide();
                nepaliDatePickerPlugin.rendarCalendar($nepaliDatePicker,dt);
            },
            navigatePreviousCalendar: function($nepaliDatePicker,$targetElement){
                $targetElement.parents('.day-wise').is(':visible')?NepaliCalendar.nepaliDate.today.setDate(NepaliCalendar.nepaliDate.today.getDate()-NepaliCalendar.nepaliDate.previousMonth.npDaysInMonth):( $targetElement.parents('.month-wise').is(':visible')? nepaliDatePickerPlugin.previousYear():nepaliDatePickerPlugin.previousDecade());

                var dt=  NepaliCalendar.nepaliDate.today;
               // dt.setDate(dt.getDate()-NepaliCalendar.nepaliDate.npDaysInMonth);
                nepaliDatePickerPlugin.rendarCalendar($nepaliDatePicker,dt);
            },
            defaultdays:function(){
                var $trDays='<tr>';
                $.each(calendarData.bsDays,function(i,obj){
                    $trDays=$trDays +'<th class="dow">' + obj + '</th>';
                });
                return $trDays+'</tr></thead>';
            },
            rendarCalendar: function($nepaliDatePicker,dt){
                if(dt==null){
                    var dt= new Date();
                }
                nepaliDatePickerPlugin.checkCalendarStatus();
                var $defaultHeading=$('<table class="table table-nepali-date day-wise">' + nepaliDatePickerPlugin.setCalendarHeader(dt));
                $('.day-wise').is(":visible")?$defaultHeading.css("display",""):$defaultHeading.css("display","none");
                var $defaultMonthHeading=$('<table class="table table-nepali-date month-wise">' + nepaliDatePickerPlugin.setMonthWiseCalendarHeader(dt));
                $('.month-wise').is(":visible")?$defaultMonthHeading.css("display",""):$defaultMonthHeading.css("display","none");
                var $defaultYearHeading=$('<table class="table table-nepali-date year-wise" >' + nepaliDatePickerPlugin.setYearWiseCalendarHeader(dt));
                $('.year-wise').is(":visible")?$defaultYearHeading.css("display",""):$defaultYearHeading.css("display","none");
                $('.table-nepali-date').remove();
                $nepaliDatePicker.append($defaultHeading);
                $nepaliDatePicker.append($defaultMonthHeading);
                $nepaliDatePicker.append($defaultYearHeading);
            },
            checkCalendarStatus:function(){
                if(!$('.day-wise').is(":visible") &&!$('.month-wise').is(":visible")&&!$('.year-wise').is(":visible")){
                    $('.day-wise').show();
                }
            },
            setCalendarHeader:function(date){
                if(date==null){
                    var date= new Date();
                }
                var nepalidate=NepaliCalendar.getBSDate(date.getFullYear(),date.getMonth(), date.getDate());
                var $defualtHeader= ('<thead><tr><th class="dt-nav prev"><<<th colspan="5" class="datepicker-switcher">' + calendarData.bsMonths[nepalidate.npMonth-1] + '  ' + nepaliDatePickerPlugin.getNepaliNumber(nepalidate.npYear) +'</th><th class="dt-nav next">>></tr>')
                    return $defualtHeader+ nepaliDatePickerPlugin.defaultdays() + nepaliDatePickerPlugin.setCalendarBody(nepalidate);
            },

            setCalendarBody: function(nepalidate){
                var startingDay= nepalidate.startingDay;
                var eDate=nepalidate.previousMonth.startdate;
                var ceDate=nepalidate.startdate;
                var dtBody='<tbody>';
                var pDate= nepalidate.previousMonth;
                var ldate=pDate.npDaysInMonth-(nepalidate.startingDay-1);
                var nDate=nepalidate.nextMonth;
                var nxtdate=1;
                ceDate.setDate(ceDate.getDate()-1);
                for(i=0;i<42;i++){
                    if(i%7==0){
                        dtBody+="<tr>";
                    }
                    if(i<startingDay){
                        dtBody+='<td class="old day" data-endate="'+ (i==0? ceDate.setDate(ceDate.getDate() +1+i-startingDay ):ceDate.setDate(ceDate.getDate() +1)) +'" data-npdate="'+ pDate.npYear +'-'+ pDate.npMonth +'-'+ ldate  +'">'+  nepaliDatePickerPlugin.getNepaliNumber(ldate) +'</td>'
                    }else if(i>nepalidate.npDaysInMonth+(startingDay-1)){
                        dtBody+='<td class="new day" data-endate="'+ ceDate.setDate(ceDate.getDate() +1 ) +'" data-npdate="'+ nDate.npYear +'-'+ nDate.npMonth +'-'+ nxtdate  +'">'+ nepaliDatePickerPlugin.getNepaliNumber(nxtdate) +'</td>'
                        nxtdate++;
                    }else{
                        
                        if(nepalidate.npYear==calendarData.selectednpDate.npYear && nepalidate.npMonth==(calendarData.selectednpDate.npMonth) && (i-(startingDay-1))==calendarData.selectednpDate.npDay){
                           var  $td=$('<td class="day active" data-endate="'+ ceDate.setDate(ceDate.getDate() +1 ) +'" data-npdate="'+ nepalidate.npYear +'-'+ nepalidate.npMonth +'-'+ (i-startingDay+1)  +'">' +  nepaliDatePickerPlugin.getNepaliNumber(i-(startingDay-1)) +'</td>');
                            if(nepalidate.npYear==nepalidate.currentNpDate.npYear && nepalidate.npMonth==nepalidate.currentNpDate.npMonth && (i-(startingDay-1))==nepalidate.currentNpDate.npDay){
                                $td.addClass('today');
                            }
                            dtBody+=($td)[0].outerHTML;
                        }
                        else if(nepalidate.npYear==nepalidate.currentNpDate.npYear && nepalidate.npMonth==nepalidate.currentNpDate.npMonth && (i-(startingDay-1))==nepalidate.currentNpDate.npDay){
                            dtBody+='<td class="day today" data-endate="'+ ceDate.setDate(ceDate.getDate() +1 ) +'" data-npdate="'+ nepalidate.npYear +'-'+ nepalidate.npMonth +'-'+ (i-startingDay+1)  +'">' +  nepaliDatePickerPlugin.getNepaliNumber(i-(startingDay-1)) +'</td>';
                        }
                        else
                        dtBody+='<td class="day" data-endate="'+ ceDate.setDate(ceDate.getDate() +1 ) +'" data-npdate="'+ nepalidate.npYear +'-'+ nepalidate.npMonth +'-'+ (i-startingDay+1)  +'">' +  nepaliDatePickerPlugin.getNepaliNumber(i-(startingDay-1)) +'</td>';
                    }

                    ldate++;
                }
                return dtBody+'<tfoot><tr><th colspan="7" class="today" style="display: table-cell;">आज</th></tr></tfoot>';
            },
            setMonthWiseCalendarHeader: function(){
                var npYear=NepaliCalendar.nepaliDate.npYear;
                var $defualtHeader= ('<thead><tr><th class="dt-nav prev"><<<th colspan="5" class="datepicker-switcher">'  + nepaliDatePickerPlugin.getNepaliNumber(npYear) +'</th><th class="dt-nav next">>></tr>');
                return $defualtHeader +  nepaliDatePickerPlugin.setMonthwiseCalendarBody();
            },
            setMonthwiseCalendarBody: function(){
                var dtBody='<tbody>';
                dtBody+='<tr><td colspan="7">';
                $.each(calendarData.bsMonths,function(i,mth){
                        dtBody+='<span' + (" np-month=" + i) + ' class="month' + ((NepaliCalendar.nepaliDate.npMonth-1==i)?' focused"':'') + '">'+ mth +'</span>'
                });
              return  dtBody+='</td></tr><tfoot><tr><th colspan="7" class="today" style="display: table-cell;">आज</th></tr></tfoot>';
            },
            setYearWiseCalendarHeader:function(){
                var npYear=NepaliCalendar.nepaliDate.npYear;
                var $defualtHeader= ('<thead><tr><th class="dt-nav prev"><<<th colspan="5" class="datepicker-switcher">'  + nepaliDatePickerPlugin.getNepaliNumber(npYear-(npYear%10)) + ' - ' + nepaliDatePickerPlugin.getNepaliNumber(npYear+9-(npYear%10))  +'</th><th class="dt-nav next">>></tr>');
                return $defualtHeader +  nepaliDatePickerPlugin.setYearwiseCalendarBody(npYear);
            },
            setYearwiseCalendarBody: function(year){
                var dtBody='<tbody>';
                dtBody+='<tr><td colspan="7">';
                var diff=year%10 +1;
             
                for(i=year-((year%10) +1) ;i<year+12-((year%10)+1);i++){
                    dtBody+='<span class="year' + ((NepaliCalendar.nepaliDate.npYear==i)?' focused"':'') + '" np-year="'+ i +'">'+ nepaliDatePickerPlugin.getNepaliNumber(i) +'</span>'
                }
              return  dtBody+='</td></tr><tfoot><tr><th colspan="7" class="today" style="display: table-cell;">आज</th></tr></tfoot>';
              
            },
            navigateNextMonth: function($targetElement,$nepaliDatePicker){
                var npYear=NepaliCalendar.nepaliDate.npYear;
                var npDay=NepaliCalendar.nepaliDate.npDay;
                var mnth=parseInt($targetElement.attr('np-month'))+1;
                var dt= nepaliDatePickerPlugin.getEnglishDate(npYear,mnth,npDay);
                nepaliDatePickerPlugin.rendarCalendar($nepaliDatePicker,dt);
               
               
            },
            navigateYear:function($targetElement,$nepaliDatePicker){
                var npYear=parseInt($targetElement.attr('np-year'));
                var npDay=NepaliCalendar.nepaliDate.npDay;
                var npMonth= NepaliCalendar.nepaliDate.npMonth;
                var dt= nepaliDatePickerPlugin.getEnglishDate(npYear,npMonth,npDay);
                nepaliDatePickerPlugin.rendarCalendar($nepaliDatePicker,dt);
            },
            previousYear:function(){
                var npYear=NepaliCalendar.nepaliDate.npYear;
                var npMonth=NepaliCalendar.nepaliDate.npMonth;
                var npDay =NepaliCalendar.nepaliDate.npDay;
                NepaliCalendar.nepaliDate.today= nepaliDatePickerPlugin.getEnglishDate(npYear-1,npMonth,npDay);
            },
            nextYear:function(){
                var npYear=NepaliCalendar.nepaliDate.npYear;
                var npMonth=NepaliCalendar.nepaliDate.npMonth;
                var npDay=NepaliCalendar.nepaliDate.npDay;
                NepaliCalendar.nepaliDate.today= nepaliDatePickerPlugin.getEnglishDate(npYear+1,npMonth,npDay);
            },
            nextDecade:function(){
                var npYear=NepaliCalendar.nepaliDate.npYear;
                var npMonth=NepaliCalendar.nepaliDate.npMonth;
                var npDay=NepaliCalendar.nepaliDate.npDay;
                NepaliCalendar.nepaliDate.today= nepaliDatePickerPlugin.getEnglishDate(npYear+10,npMonth,npDay);
                // for(j=0;j<10;j++){
                //     nepaliDatePickerPlugin.nextYear();

                // }
            },
            previousDecade:function(){
                var npYear=NepaliCalendar.nepaliDate.npYear;
                var npMonth=NepaliCalendar.nepaliDate.npMonth;
                var npDay=NepaliCalendar.nepaliDate.npDay;
                NepaliCalendar.nepaliDate.today= nepaliDatePickerPlugin.getEnglishDate(npYear-10,npMonth,npDay);
                // for(j=0;j<10;j++){
                //     nepaliDatePickerPlugin.previousYear();
                // }
                
            },
            getNepaliNumber:function(n){
                var num= n.toString().replace(/\D/g, '0').split('').map(Number);
                var npNum="";
                $.each(num, function(j,v){
                     npNum+=calendarData.nepaliNumbers[v];
                });
                return npNum;
             },
             navigateCurrentDate:function($nepaliDatePicker){
                $('.month-wise').hide();
                $('.year-wise').hide();
                $('.day-wise').show();
                nepaliDatePickerPlugin.rendarCalendar($nepaliDatePicker,NepaliCalendar.nepaliDate.currentDate);
             },
             getEnglishDate:function(npYear,npMonth, npDay){
                 var days=0;
                 var initday=0;
                 var dt = new Date();
                switch(npMonth)
                 {
                     case 1: case 2: case 3: case 4: case 5: case 6: case 7: case 8:
                     initday=  calendarData.nepalicaledarData[npYear-57][1];
                     days=0;
                        for(i=3;i<5+npMonth;i++){
                            days+=  calendarData.nepalicaledarData[npYear-57][i];
                        }
                        days+=npDay;
                        days+=calendarData.nepalicaledarData[npYear-57][2]-calendarData.nepalicaledarData[npYear-57][1];
                        dt=new Date(npYear-57,0,1);
                        dt.setDate(dt.getDate()+days);
                        break;
                     case 9:
                        initday=calendarData.nepalicaledarData[npYear-57][1];
                        if(npDay<initday){
                            for(i=3;i<14;i++){
                                days+=  calendarData.nepalicaledarData[npYear-56][i];
                            }
                            days+=calendarData.nepalicaledarData[npYear-56][2]-calendarData.nepalicaledarData[npYear-56][1];
                            days+=npDay;
                        }else{
                            days+=initday-calendarData.nepalicaledarData[npYear-57][1];
                        }
                        dt=new Date(npYear-57,0,1);
                        dt.setDate(dt.getDate()+days);
                     break;
                     case  10: case 11: case 12:
                        for(i=3;i<npMonth-7;i++){
                            days+=  calendarData.nepalicaledarData[npYear-56][i];
                        }
                        days+=calendarData.nepalicaledarData[npYear-56][2]-calendarData.nepalicaledarData[npYear-56][1];
                        days+=npDay;
                        dt=new Date(npYear-56,0,1);
                        dt.setDate(dt.getDate()+days);
                     break;
                 }
                 NepaliCalendar.nepaliDate.today=dt;
                 if( NepaliCalendar.nepaliDate.npDaysInMonth<npDay){
                    NepaliCalendar.nepaliDate.today.setDate(NepaliCalendar.nepaliDate.today.getDate() - (NepaliCalendar.nepaliDate.npDaysInMonth-nepalicaledarData.nepaliDate.npDay));
                 }else if(NepaliCalendar.nepaliDate.npDay>npDay){
                    NepaliCalendar.nepaliDate.today.setDate(NepaliCalendar.nepaliDate.today.getDate() -(NepaliCalendar.nepaliDate.npDay-npDay));
                 }else if(NepaliCalendar.nepaliDate.npDay<npDay){
                    NepaliCalendar.nepaliDate.today.setDate(NepaliCalendar.nepaliDate.today.getDate() +(NepaliCalendar.nepaliDate.npDay-npDay));
                 }
                 
           return  NepaliCalendar.nepaliDate.today;
                 
             },
             getFormatednpDate:function(dt){
                 var date=new Date(parseInt(dt));
               var nepalidate=NepaliCalendar.getBSDate(date.getFullYear(),date.getMonth(), date.getDate());
                var ary=[];
                var dtArray=[];
                var dateFormat=NepaliCalendar.dateFormat;
                for(z=0;z<  dateFormat.length;z++){
                    ary.push(dateFormat.substring(z,z+1));
                }
                var count=0;
                $.each(ary,function(i,ob){
                      if(count>0){
                          switch(ob){
                              case "m": case"M": case "d": case "D":case "y":
                              {
                                  if(dtArray[count-1]==ob){
                                    if((dtArray[count-2]==(dtArray[count-1]+ob)) && ob=="y"){
                                        dtArray.pop();
                                        dtArray.pop();
                                        count-=2;
                                        dtArray.push(ob+ob+ob+ob);
                                        count+=1;
                                    }
                                    else{
                                        dtArray.pop();
                                        count-=1;
                                        dtArray.push(ob+ob);
                                        count+=1;
                                    }
                                  }  
                                  else{
                                        
                                          dtArray.push(ob);
                                          count+=1;
                                    }
                                  break;
                              }
                              default:{
                                  dtArray.push(ob);
                                  count+=1;
                                  break;
                              }
                          }
                      }else{
                          dtArray.push(ob);  
                          count+=1;
                        }
                });
                var npDate="";
                $.each(dtArray,function(i,obj){
                        switch(obj){
                            case "d":
                            {
                                npDate+=  nepaliDatePickerPlugin.getNepaliNumber(NepaliCalendar.nepaliDate.npDay);
                                break;
                            }
                            case "dd":{
                                npDate+= nepaliDatePickerPlugin.getNepaliNumber(("0" + NepaliCalendar.nepaliDate.npDay).slice(-2));
                                break;
                            }
                            case "D":{
                                npDate+=calendarData.bsDays[NepaliCalendar.nepaliDate.today.getDay()];
                                break;
                            }
                            case "DD":{
                                npDate+=calendarData.bsDaysFull[NepaliCalendar.nepaliDate.today.getDay()];
                                break;
                            }
                            case "m":{
                                npDate+= nepaliDatePickerPlugin.getNepaliNumber(NepaliCalendar.nepaliDate.npMonth);
                                break;
                            }
                            case "mm":{
                                npDate+= nepaliDatePickerPlugin.getNepaliNumber(("0" + NepaliCalendar.nepaliDate.npMonth).slice(-2));
                                break;
                            }
                            case "M":case "MM":{
                                npDate+=calendarData.bsMonths[NepaliCalendar.nepaliDate.npMonth-1];
                                break;
                            }
                            case "yy":{
                                npDate+= nepaliDatePickerPlugin.getNepaliNumber(("0" + NepaliCalendar.nepaliDate.npYear).slice(-2));
                                break;
                            }
                            case "yyyy":{
                                npDate+= nepaliDatePickerPlugin.getNepaliNumber(NepaliCalendar.nepaliDate.npYear);
                                break;
                            }
                            default:{
                                npDate+=obj;
                                break;
                            }
                        }
                    });
                    return npDate;

             },
        eventFire: function ($element, $nepaliDatePicker, eventType) {
            return;
        },
        
    };
    // $(this).each(function () {
    //     var $element = $(this);
    //     nepaliDatePickerPlugin.init($element);
    // });
    
    $(document).ready(function(){
        var $element = $(this).find('.date-Picker');
        nepaliDatePickerPlugin.init($element);
    });
};
}(jQuery,NepaliCalendar))
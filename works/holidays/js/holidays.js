$(document).ready(function() {

    var holidays = [
        { id: 0,     name: "New Year's Day",                            y2021: "Fri, Jan 1",        y2022: "Sat, Jan 1"     },
        { id: 1,     name: "Family Day",                                y2021: "Mon, Feb 15",       y2022: "Mon, Feb 21"    },
        { id: 2,     name: "Good Friday",                               y2021: "Fri, Apr 2",        y2022: "Fri, Apr 15"    },
        { id: 3,     name: "Easter Monday *",                           y2021: "Mon, Apr 5",        y2022: "Mon, Apr 18"    },
        { id: 4,     name: "Victoria Day",                              y2021: "Mon, May 24",       y2022: "Mon, May 23"    },
        { id: 5,     name: "Canada Day",                                y2021: "Thu, Jul 1",        y2022: "Fri, Jul 1"     },
        { id: 6,     name: "Heritage Day*",                             y2021: "Mon, Aug 2",        y2022: "Mon, Aug 1"     },
        { id: 7,     name: "Labour Day",                                y2021: "Mon, Sep 6",        y2022: "Mon, Sep 5"     },
        { id: 8,     name: "Thanksgiving Day",                          y2021: "Mon, Oct 11",       y2022: "Mon, Oct 10"    },
        { id: 9,     name: "Remembrance Day",                           y2021: "Thu, Nov 11",       y2022: "Fri, Nov 11"    },
        { id: 10,    name: "Christmas Day",                             y2021: "Sat, Dec 25",       y2022: "Sun, Dec 25"    },
        { id: 11,    name: "Boxing Day *",                              y2021: "Sun, Dec 26",       y2022: "Mon, Dec 26"    },
        { id: 12,    name: "B.C. Day",                                  y2021: "Mon, Aug 2",        y2022: "Mon, Aug 1"     },
        { id: 13,    name: "Civic Holiday",                             y2021: "Mon, Aug 2",        y2022: "Mon, Aug 1"     },
        { id: 14,    name: "National Truth and Reconciliation Day*",    y2021: "Thu, Sept 30",      y2022: "Fri, Sep 30"    },
        { id: 15,    name: "Saskatchewan Day",                          y2021: "Mon, Aug 2",        y2022: "Mon, Aug 1"     },
        { id: 16,    name: "New Brunswick Day",                         y2021: "Mon, Aug 2",        y2022: "Mon, Aug 1"     },
        { id: 17,    name: "National Aboriginal Day",                   y2021: "Mon, Jun 21",       y2022: "Tue, Jun 21"    },
        { id: 18,    name: "First Monday in August",                    y2021: "Mon, Aug 2",        y2022: "Mon, Aug 1"     },
        { id: 19,    name: "Nova Scotia Heritage Day",                  y2021: "Mon, Feb 15",       y2022: "Mon, Feb 21"    },
        { id: 20,    name: "Islander Day",                              y2021: "Mon, Feb 15",       y2022: "Mon, Feb 21"    },
        { id: 21,    name: "National Patriots' Day",                    y2021: "Mon, May 24",       y2022: "Mon, May 23"    },
        { id: 22,    name: "Saint Jean Baptiste Day",                   y2021: "Thu, Jun 24",       y2022: "Fri, Jun 24"    },
        { id: 23,    name: "National Indigenous Peoples Day",           y2021: "Mon, Jun 21",       y2022: "Tue, Jun 21"    },
        { id: 24,    name: "Discovery Day",                             y2021: "Mon, Aug 16",       y2022: "Mon, Aug 15"    }
    ];


    $('.holidays__flex--NewYear').each(function(){
        $(this).append(`<div class="holidays__text">${holidays[0].name}</div><div class="holidays__date">${holidays[0].y2021}</div><div class="holidays__date">${holidays[0].y2022}</div>`);
    });
    $('.holidays__flex--FamilyDay').each(function(){
        $(this).append(`<div class="holidays__text">${holidays[1].name}</div><div class="holidays__date">${holidays[1].y2021}</div><div class="holidays__date">${holidays[1].y2022}</div>`);
    });
    $('.holidays__flex--GoodFriday').each(function(){
        $(this).append(`<div class="holidays__text">${holidays[2].name}</div><div class="holidays__date">${holidays[2].y2021}</div><div class="holidays__date">${holidays[2].y2022}</div>`);
    });
    $('.holidays__flex--EasterMonday').each(function(){
        $(this).append(`<div class="holidays__text">${holidays[3].name}</div><div class="holidays__date">${holidays[3].y2021}</div><div class="holidays__date">${holidays[3].y2022}</div>`);
    });
    $('.holidays__flex--VictoriaDay').each(function(){
        $(this).append(`<div class="holidays__text">${holidays[4].name}</div><div class="holidays__date">${holidays[4].y2021}</div><div class="holidays__date">${holidays[4].y2022}</div>`);
    });
    $('.holidays__flex--CanadaDay').each(function(){
        $(this).append(`<div class="holidays__text">${holidays[5].name}</div><div class="holidays__date">${holidays[5].y2021}</div><div class="holidays__date">${holidays[5].y2022}</div>`);
    });
    $('.holidays__flex--HeritageDay').each(function(){
        $(this).append(`<div class="holidays__text">${holidays[6].name}</div><div class="holidays__date">${holidays[6].y2021}</div><div class="holidays__date">${holidays[6].y2022}</div>`);
    });
    $('.holidays__flex--LabourDay').each(function(){
        $(this).append(`<div class="holidays__text">${holidays[7].name}</div><div class="holidays__date">${holidays[7].y2021}</div><div class="holidays__date">${holidays[7].y2022}</div>`);
    });
    $('.holidays__flex--Thanksgiving').each(function(){
        $(this).append(`<div class="holidays__text">${holidays[8].name}</div><div class="holidays__date">${holidays[8].y2021}</div><div class="holidays__date">${holidays[8].y2022}</div>`);
    });
    $('.holidays__flex--Remembrance').each(function(){
        $(this).append(`<div class="holidays__text">${holidays[9].name}</div><div class="holidays__date">${holidays[9].y2021}</div><div class="holidays__date">${holidays[9].y2022}</div>`);
    });
    $('.holidays__flex--Christmas').each(function(){
        $(this).append(`<div class="holidays__text">${holidays[10].name}</div><div class="holidays__date">${holidays[10].y2021}</div><div class="holidays__date">${holidays[10].y2022}</div>`);
    });
    $('.holidays__flex--BoxingDay').each(function(){
        $(this).append(`<div class="holidays__text">${holidays[11].name}</div><div class="holidays__date">${holidays[11].y2021}</div><div class="holidays__date">${holidays[11].y2022}</div>`);
    });
    $('.holidays__flex--BCDay').each(function(){
        $(this).append(`<div class="holidays__text">${holidays[12].name}</div><div class="holidays__date">${holidays[12].y2021}</div><div class="holidays__date">${holidays[12].y2022}</div>`);
    });
    $('.holidays__flex--CivicHoliday').each(function(){
        $(this).append(`<div class="holidays__text">${holidays[13].name}</div><div class="holidays__date">${holidays[13].y2021}</div><div class="holidays__date">${holidays[13].y2022}</div>`);
    });
    $('.holidays__flex--NationalTruth').each(function(){
        $(this).append(`<div class="holidays__text">${holidays[14].name}</div><div class="holidays__date">${holidays[14].y2021}</div><div class="holidays__date">${holidays[14].y2022}</div>`);
    });
    $('.holidays__flex--Saskatchewan').each(function(){
        $(this).append(`<div class="holidays__text">${holidays[15].name}</div><div class="holidays__date">${holidays[15].y2021}</div><div class="holidays__date">${holidays[15].y2022}</div>`);
    });
    $('.holidays__flex--BrunswickDay').each(function(){
        $(this).append(`<div class="holidays__text">${holidays[16].name}</div><div class="holidays__date">${holidays[16].y2021}</div><div class="holidays__date">${holidays[16].y2022}</div>`);
    });
    $('.holidays__flex--Aboriginal').each(function(){
        $(this).append(`<div class="holidays__text">${holidays[17].name}</div><div class="holidays__date">${holidays[17].y2021}</div><div class="holidays__date">${holidays[17].y2022}</div>`);
    });
    $('.holidays__flex--FirstMonday').each(function(){
        $(this).append(`<div class="holidays__text">${holidays[18].name}</div><div class="holidays__date">${holidays[18].y2021}</div><div class="holidays__date">${holidays[18].y2022}</div>`);
    });
    $('.holidays__flex--NovaScotia').each(function(){
        $(this).append(`<div class="holidays__text">${holidays[19].name}</div><div class="holidays__date">${holidays[19].y2021}</div><div class="holidays__date">${holidays[19].y2022}</div>`);
    });
    $('.holidays__flex--IslanderDay').each(function(){
        $(this).append(`<div class="holidays__text">${holidays[20].name}</div><div class="holidays__date">${holidays[20].y2021}</div><div class="holidays__date">${holidays[20].y2022}</div>`);
    });
    $('.holidays__flex--PatriotsDay').each(function(){
        $(this).append(`<div class="holidays__text">${holidays[21].name}</div><div class="holidays__date">${holidays[21].y2021}</div><div class="holidays__date">${holidays[21].y2022}</div>`);
    });
    $('.holidays__flex--SaintJean').each(function(){
        $(this).append(`<div class="holidays__text">${holidays[22].name}</div><div class="holidays__date">${holidays[22].y2021}</div><div class="holidays__date">${holidays[22].y2022}</div>`);
    });
    $('.holidays__flex--IndigenousDay').each(function(){
        $(this).append(`<div class="holidays__text">${holidays[23].name}</div><div class="holidays__date">${holidays[23].y2021}</div><div class="holidays__date">${holidays[23].y2022}</div>`);
    });
    $('.holidays__flex--DiscoveryDay').each(function(){
        $(this).append(`<div class="holidays__text">${holidays[24].name}</div><div class="holidays__date">${holidays[24].y2021}</div><div class="holidays__date">${holidays[24].y2022}</div>`);
    });


});
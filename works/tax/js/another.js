



// Eligible Dividend Tax Credit Rates as a % of Grossed-up Taxable Dividends
var EDTC_array = [
    {
        Year: "2020", 
        Gross_up: "0.38", 
        Federal: "0.1502", 
        AB: "0.1", 
        BC: "0.12", 
        MB: "0.08", 
        NB: "0.14", 
        NL: "0.054", 
        NS: "0.0885", 
        NT: "0.115", 
        NU: "0.0551", 
        ON: "0.1", 
        PE: "0.105", 
        QC: "0.117", 
        SK: "0.11", 
        YT: "0.1202"
    },
    {
        Year: "2021", 
        Gross_up: "0.38", 
        Federal: "0.1502", 
        AB: "0.0812", 
        BC: "0.12", 
        MB: "0.08", 
        NB: "0.14", 
        NL: "0.054", 
        NS: "0.0885", 
        NT: "0.115", 
        NU: "0.0551", 
        ON: "0.1", 
        PE: "0.105", 
        QC: "0.117", 
        SK: "0.11", 
        YT: "0.1202", 
    }
]
// —————————————————————————————————————————————————————————————————————————————

// Non-Eligible Dividend Tax Credit Rates as a % of Grossed-up Taxable Dividends
var nonEDTC_array = [
    {
        Year: "2020", 
        Gross_up: "0.15", 
        Federal: "0.090301", 
        AB: "0.0218", 
        BC: "0.0196", 
        MB: "0.007835", 
        NB: "0.0275", 
        NL: "0.035", 
        NS: "0.0299", 
        NT: "0.06", 
        NU: "0.0261", 
        ON: "0.029863", 
        PE: "0.0274", 
        QC: "0.0477", 
        SK: "0.03362", 
        YT: "0.023" 
    },
    {
        Year: "2021", 
        Gross_up: "0.15", 
        Federal: "0.090301", 
        AB: "0.0218", 
        BC: "0.0196", 
        MB: "0.007835", 
        NB: "0.0275", 
        NL: "0.035", 
        NS: "0.0299", 
        NT: "0.06", 
        NU: "0.0261", 
        ON: "0.029863", 
        PE: "0.0196", 
        QC: "0.0401", 
        SK: "0.01695", 
        YT: "0.0067" 
    }
]
// —————————————————————————————————————————————————————————————————————————————



// Drop Menu
var province_array = [
    { name: "AB", val: 0, fullname: "Alberta"},
    { name: "BC", val: 0, fullname: "British Columbia"},
    { name: "MB", val: 0, fullname: "Manitoba"},
    { name: "NB", val: 0, fullname: "New Brunswick"},
    { name: "NL", val: 0, fullname: "Newfoundland and Labrador"},
    { name: "NS", val: 0, fullname: "Nova Scotia"},
    { name: "NT", val: 0, fullname: "Northwest Territories"},
    { name: "NU", val: 0, fullname: "Nunavut"},
    { name: "ON", val: 0, fullname: "Ontario"},
    { name: "PE", val: 0, fullname: "P.E.I"},
    { name: "QC", val: 0, fullname: "Quebec"},
    { name: "SK", val: 0, fullname: "Saskatchewan"},
    { name: "YT", val: 0, fullname: "Yukon"},
    { name: "NR", val: 0, fullname: "Non-resident"}
]

// province_array.find(city => city.name === "AB").val = 10;
// console.log( province_array.find(city => city.name === "AB").val );

// —————————————————————————————————————————————————————————————————————————————
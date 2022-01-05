$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/com/adactin/feature/Adactin.feature");
formatter.feature({
  "line": 1,
  "name": "Hotel Booking In Adactin Application",
  "description": "",
  "id": "hotel-booking-in-adactin-application",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Login",
  "description": "",
  "id": "hotel-booking-in-adactin-application;login",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Ad1"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "user Launch The Application",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "user Enter The \"\u003cUsername\u003e\" In Username Field",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "user Enter The \"\u003cPassword\u003e\" In Password Field",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "user Click On The Login Button And It Navigates To The Search Hotel Page",
  "keyword": "Then "
});
formatter.examples({
  "line": 14,
  "name": "",
  "description": "",
  "id": "hotel-booking-in-adactin-application;login;",
  "rows": [
    {
      "cells": [
        "Username",
        "Password"
      ],
      "line": 16,
      "id": "hotel-booking-in-adactin-application;login;;1"
    },
    {
      "cells": [
        "Kavinkumar2011",
        "Kavin@2011"
      ],
      "line": 17,
      "id": "hotel-booking-in-adactin-application;login;;2"
    },
    {
      "cells": [
        "Kavinkumar20",
        "Kavin@20"
      ],
      "line": 18,
      "id": "hotel-booking-in-adactin-application;login;;3"
    },
    {
      "cells": [
        "Kavinkumar20",
        "Kavin@2011"
      ],
      "line": 19,
      "id": "hotel-booking-in-adactin-application;login;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 17,
  "name": "Login",
  "description": "",
  "id": "hotel-booking-in-adactin-application;login;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Ad1"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "user Launch The Application",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "user Enter The \"Kavinkumar2011\" In Username Field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "user Enter The \"Kavin@2011\" In Password Field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "user Click On The Login Button And It Navigates To The Search Hotel Page",
  "keyword": "Then "
});
formatter.match({
  "location": "Step_Def.user_Launch_The_Application()"
});
formatter.result({
  "duration": 3783481900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Kavinkumar2011",
      "offset": 16
    }
  ],
  "location": "Step_Def.user_Enter_The_In_Username_Field(String)"
});
formatter.result({
  "duration": 457150600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Kavin@2011",
      "offset": 16
    }
  ],
  "location": "Step_Def.user_Enter_The_In_Password_Field(String)"
});
formatter.result({
  "duration": 115454700,
  "status": "passed"
});
formatter.match({
  "location": "Step_Def.user_Click_On_The_Login_Button_And_It_Navigates_To_The_Search_Hotel_Page()"
});
formatter.result({
  "duration": 1062988900,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Login",
  "description": "",
  "id": "hotel-booking-in-adactin-application;login;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Ad1"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "user Launch The Application",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "user Enter The \"Kavinkumar20\" In Username Field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "user Enter The \"Kavin@20\" In Password Field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "user Click On The Login Button And It Navigates To The Search Hotel Page",
  "keyword": "Then "
});
formatter.match({
  "location": "Step_Def.user_Launch_The_Application()"
});
formatter.result({
  "duration": 528128800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Kavinkumar20",
      "offset": 16
    }
  ],
  "location": "Step_Def.user_Enter_The_In_Username_Field(String)"
});
formatter.result({
  "duration": 103232800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Kavin@20",
      "offset": 16
    }
  ],
  "location": "Step_Def.user_Enter_The_In_Password_Field(String)"
});
formatter.result({
  "duration": 90533400,
  "status": "passed"
});
formatter.match({
  "location": "Step_Def.user_Click_On_The_Login_Button_And_It_Navigates_To_The_Search_Hotel_Page()"
});
formatter.result({
  "duration": 399008200,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Login",
  "description": "",
  "id": "hotel-booking-in-adactin-application;login;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Ad1"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "user Launch The Application",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "user Enter The \"Kavinkumar20\" In Username Field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "user Enter The \"Kavin@2011\" In Password Field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "user Click On The Login Button And It Navigates To The Search Hotel Page",
  "keyword": "Then "
});
formatter.match({
  "location": "Step_Def.user_Launch_The_Application()"
});
formatter.result({
  "duration": 289011700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Kavinkumar20",
      "offset": 16
    }
  ],
  "location": "Step_Def.user_Enter_The_In_Username_Field(String)"
});
formatter.result({
  "duration": 135340100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Kavin@2011",
      "offset": 16
    }
  ],
  "location": "Step_Def.user_Enter_The_In_Password_Field(String)"
});
formatter.result({
  "duration": 100585700,
  "status": "passed"
});
formatter.match({
  "location": "Step_Def.user_Click_On_The_Login_Button_And_It_Navigates_To_The_Search_Hotel_Page()"
});
formatter.result({
  "duration": 1230760100,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Search Hotel",
  "description": "",
  "id": "hotel-booking-in-adactin-application;search-hotel",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 21,
      "name": "@Ad2"
    }
  ]
});
formatter.step({
  "line": 24,
  "name": "user Select The Location",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "user Select The Hotels",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "user Select The Room Type",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "user Select The Number of Rooms",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "user Select The Check In Date",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "user Select The Check Out Date",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "user Select The Adults Per Room",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "user Select The Children Per Room",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "user Click On The Search Button And It Navigates To The Select Hotel Page",
  "keyword": "Then "
});
formatter.match({
  "location": "Step_Def.user_Select_The_Location()"
});
formatter.result({
  "duration": 5072531700,
  "status": "passed"
});
formatter.match({
  "location": "Step_Def.user_Select_The_Hotels()"
});
formatter.result({
  "duration": 295930900,
  "status": "passed"
});
formatter.match({
  "location": "Step_Def.user_Select_The_Room_Type()"
});
formatter.result({
  "duration": 277596500,
  "status": "passed"
});
formatter.match({
  "location": "Step_Def.user_Select_The_Number_of_Rooms()"
});
formatter.result({
  "duration": 237864600,
  "status": "passed"
});
formatter.match({
  "location": "Step_Def.user_Select_The_Check_In_Date()"
});
formatter.result({
  "duration": 2510871100,
  "status": "passed"
});
formatter.match({
  "location": "Step_Def.user_Select_The_Check_Out_Date()"
});
formatter.result({
  "duration": 2231223300,
  "status": "passed"
});
formatter.match({
  "location": "Step_Def.user_Select_The_Adults_Per_Room()"
});
formatter.result({
  "duration": 257109000,
  "status": "passed"
});
formatter.match({
  "location": "Step_Def.user_Select_The_Children_Per_Room()"
});
formatter.result({
  "duration": 246880300,
  "status": "passed"
});
formatter.match({
  "location": "Step_Def.user_Click_On_The_Search_Button_And_It_Navigates_To_The_Select_Hotel_Page()"
});
formatter.result({
  "duration": 1237990900,
  "status": "passed"
});
formatter.scenario({
  "line": 43,
  "name": "Select Hotel",
  "description": "",
  "id": "hotel-booking-in-adactin-application;select-hotel",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 42,
      "name": "@Ad3"
    }
  ]
});
formatter.step({
  "line": 45,
  "name": "user Click On The Select Button",
  "keyword": "When "
});
formatter.step({
  "line": 47,
  "name": "user Click On The Continue Button And It Navigates To The Book Hotel Page",
  "keyword": "Then "
});
formatter.match({
  "location": "Step_Def.user_Click_On_The_Select_Button()"
});
formatter.result({
  "duration": 167102200,
  "status": "passed"
});
formatter.match({
  "location": "Step_Def.user_Click_On_The_Continue_Button_And_It_Navigates_To_The_Book_Hotel_Page()"
});
formatter.result({
  "duration": 802665400,
  "status": "passed"
});
formatter.scenario({
  "line": 49,
  "name": "Book Hotel",
  "description": "",
  "id": "hotel-booking-in-adactin-application;book-hotel",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 51,
  "name": "user Enter The First Name",
  "keyword": "When "
});
formatter.step({
  "line": 53,
  "name": "user Enter The Last Name",
  "keyword": "And "
});
formatter.step({
  "line": 55,
  "name": "user Enter The Billing Address",
  "keyword": "And "
});
formatter.step({
  "line": 57,
  "name": "user Enter The Credit Card Number",
  "keyword": "And "
});
formatter.step({
  "line": 59,
  "name": "user Enter The Credit Card Type",
  "keyword": "And "
});
formatter.step({
  "line": 61,
  "name": "user Enter The Expiry Date Month",
  "keyword": "And "
});
formatter.step({
  "line": 63,
  "name": "user Enter The Expiry Date Year",
  "keyword": "And "
});
formatter.step({
  "line": 65,
  "name": "user Enter The CVV Number",
  "keyword": "And "
});
formatter.step({
  "line": 67,
  "name": "user Click On The Book Now Button And It Navigates To The Booking Confirm Page",
  "keyword": "Then "
});
formatter.match({
  "location": "Step_Def.user_Enter_The_First_Name()"
});
formatter.result({
  "duration": 177981700,
  "status": "passed"
});
formatter.match({
  "location": "Step_Def.user_Enter_The_Last_Name()"
});
formatter.result({
  "duration": 166686600,
  "status": "passed"
});
formatter.match({
  "location": "Step_Def.user_Enter_The_Billing_Address()"
});
formatter.result({
  "duration": 185756700,
  "status": "passed"
});
formatter.match({
  "location": "Step_Def.user_Enter_The_Credit_Card_Number()"
});
formatter.result({
  "duration": 196408900,
  "status": "passed"
});
formatter.match({
  "location": "Step_Def.user_Enter_The_Credit_Card_Type()"
});
formatter.result({
  "duration": 279639100,
  "status": "passed"
});
formatter.match({
  "location": "Step_Def.user_Enter_The_Expiry_Date_Month()"
});
formatter.result({
  "duration": 205011700,
  "status": "passed"
});
formatter.match({
  "location": "Step_Def.user_Enter_The_Expiry_Date_Year()"
});
formatter.result({
  "duration": 275433600,
  "status": "passed"
});
formatter.match({
  "location": "Step_Def.user_Enter_The_CVV_Number()"
});
formatter.result({
  "duration": 146039200,
  "status": "passed"
});
formatter.match({
  "location": "Step_Def.user_Click_On_The_Book_Now_Button_And_It_Navigates_To_The_Booking_Confirm_Page()"
});
formatter.result({
  "duration": 87935300,
  "status": "passed"
});
formatter.scenario({
  "line": 70,
  "name": "Booked Itinerary",
  "description": "",
  "id": "hotel-booking-in-adactin-application;booked-itinerary",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 69,
      "name": "@Ad4"
    }
  ]
});
formatter.step({
  "line": 72,
  "name": "user Click On The My Itinerary Button And It Navigates To The Booked Itinerary Page",
  "keyword": "Then "
});
formatter.match({
  "location": "Step_Def.user_Click_On_The_My_Itinerary_Button_And_It_Navigates_To_The_Booked_Itinerary_Page()"
});
formatter.result({
  "duration": 7026257800,
  "status": "passed"
});
formatter.scenario({
  "line": 82,
  "name": "Logout",
  "description": "",
  "id": "hotel-booking-in-adactin-application;logout",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 80,
      "name": "@Ad6"
    }
  ]
});
formatter.step({
  "line": 84,
  "name": "user Click On The Logout Button And It Navigates To The Login Index Page",
  "keyword": "Then "
});
formatter.match({
  "location": "Step_Def.user_Click_On_The_Logout_Button_And_It_Navigates_To_The_Login_Index_Page()"
});
formatter.result({
  "duration": 632258400,
  "status": "passed"
});
});
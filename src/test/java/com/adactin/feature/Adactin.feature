Feature: Hotel Booking In Adactin Application

@Ad1
Scenario Outline: Login

Given user Launch The Application

When user Enter The "<Username>" In Username Field

And user Enter The "<Password>" In Password Field

Then user Click On The Login Button And It Navigates To The Search Hotel Page

Examples:
	
	|Username|Password|
	|Kavinkumar2011|Kavin@2011|
	|Kavinkumar20|Kavin@20|
	|Kavinkumar20|Kavin@2011|

@Ad2
Scenario: Search Hotel

When user Select The Location

And user Select The Hotels

And user Select The Room Type

And user Select The Number of Rooms

And user Select The Check In Date

And user Select The Check Out Date

And user Select The Adults Per Room

And user Select The Children Per Room

Then user Click On The Search Button And It Navigates To The Select Hotel Page

@Ad3
Scenario: Select Hotel

When user Click On The Select Button

Then user Click On The Continue Button And It Navigates To The Book Hotel Page

Scenario: Book Hotel

When user Enter The First Name

And user Enter The Last Name

And user Enter The Billing Address

And user Enter The Credit Card Number

And user Enter The Credit Card Type

And user Enter The Expiry Date Month

And user Enter The Expiry Date Year

And user Enter The CVV Number

Then user Click On The Book Now Button And It Navigates To The Booking Confirm Page

@Ad4
Scenario: Booked Itinerary

Then user Click On The My Itinerary Button And It Navigates To The Booked Itinerary Page

@Ad5

Scenario: Screenshot

Then user Taken Screenshot And Saved In File

@Ad6

Scenario: Logout

Then user Click On The Logout Button And It Navigates To The Login Index Page














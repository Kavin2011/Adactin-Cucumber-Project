package com.adactin.stepdefinition;

import org.openqa.selenium.WebDriver;

import com.adactin.runner.Test_Runner;
import com.cucum.Cucumber_Project.Base_Class;
import com.helper.File_Reader_Manager;
import com.sdp.Page_Object_Manager;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Step_Def extends Base_Class{
	
	public static WebDriver driver= Test_Runner.driver;
	
	public static Page_Object_Manager pom=new Page_Object_Manager(driver);

	@Given("^user Launch The Application$")
	public void user_Launch_The_Application() throws Throwable {
		
		String url=File_Reader_Manager.getInstanceFRM().getInstanceCR().getUrl();
		
		urlbase(url);

	}
	
	@When("^user Enter The \"([^\"]*)\" In Username Field$")
	public void user_Enter_The_In_Username_Field(String Username) throws Throwable {

		inputValueElement(pom.getInstanceHp().getUsername(), Username);
	}

	@When("^user Enter The \"([^\"]*)\" In Password Field$")
	public void user_Enter_The_In_Password_Field(String Password) throws Throwable {
		
		inputValueElement(pom.getInstanceHp().getPassword(),Password);

	}

	@Then("^user Click On The Login Button And It Navigates To The Search Hotel Page$")
	public void user_Click_On_The_Login_Button_And_It_Navigates_To_The_Search_Hotel_Page() throws Throwable {
		
		clickOnElement(pom.getInstanceHp().getLogin());
		
		Wait1();

	}

	@When("^user Select The Location$")
	public void user_Select_The_Location() throws Throwable {
		
		String location=particulardata("E:\\My Files\\Adactin_Tcase.xlsx", 4, 5);
		
		selectValue("index", pom.getInstanceSh().getLocation(), location);

	}

	@When("^user Select The Hotels$")
	public void user_Select_The_Hotels() throws Throwable {

		String Hotels=particulardata("E:\\My Files\\Adactin_Tcase.xlsx", 5, 5);
		
		selectValue("index", pom.getInstanceSh().getHotels(),Hotels);
	}
	
	@When("^user Select The Room Type$")
	public void user_Select_The_Room_Type() throws Throwable {
		
		String roomtype=particulardata("E:\\My Files\\Adactin_Tcase.xlsx", 6, 5);
		
		selectValue("index", pom.getInstanceSh().getRoom_type(),roomtype);

	}

	@When("^user Select The Number of Rooms$")
	public void user_Select_The_Number_of_Rooms() throws Throwable {
		
		String roomnos=particulardata("E:\\My Files\\Adactin_Tcase.xlsx", 7, 5);
		
		selectValue("value", pom.getInstanceSh().getRoom_nos(), roomnos);

	}

	@When("^user Select The Check In Date$")
	public void user_Select_The_Check_In_Date() throws Throwable {
		
		clear(pom.getInstanceSh().getDatein());
		
		sleep(2000);
		
		String datein=particulardata("E:\\My Files\\Adactin_Tcase.xlsx", 8, 5);
		
		inputValueElement(pom.getInstanceSh().getDatein(), datein);

	}

	@When("^user Select The Check Out Date$")
	public void user_Select_The_Check_Out_Date() throws Throwable {
		
		clear(pom.getInstanceSh().getDateout());
		
		sleep(2000);
		
		String dateout=particulardata("E:\\My Files\\Adactin_Tcase.xlsx", 9, 5);
		
		inputValueElement(pom.getInstanceSh().getDateout(),dateout);

	}

	@When("^user Select The Adults Per Room$")
	public void user_Select_The_Adults_Per_Room() throws Throwable {
		
		String adult=particulardata("E:\\My Files\\Adactin_Tcase.xlsx", 10, 5);
		
		selectValue("value", pom.getInstanceSh().getAdult(), adult);

	}

	@When("^user Select The Children Per Room$")
	public void user_Select_The_Children_Per_Room() throws Throwable {
		
		String child=particulardata("E:\\My Files\\Adactin_Tcase.xlsx", 11, 5);
		
		selectValue("value", pom.getInstanceSh().getChild(), child);

	}

	@Then("^user Click On The Search Button And It Navigates To The Select Hotel Page$")
	public void user_Click_On_The_Search_Button_And_It_Navigates_To_The_Select_Hotel_Page() throws Throwable {
		
		clickOnElement(pom.getInstanceSh().getSubmit());

		Wait1();

	}

	@When("^user Click On The Select Button$")
	public void user_Click_On_The_Select_Button() throws Throwable {
		
		clickOnElement(pom.getInstanceSel().getBtn());

	}

	@Then("^user Click On The Continue Button And It Navigates To The Book Hotel Page$")
	public void user_Click_On_The_Continue_Button_And_It_Navigates_To_The_Book_Hotel_Page() throws Throwable {
		
		clickOnElement(pom.getInstanceSel().getCont());
		
		Wait1();

	}

	@When("^user Enter The First Name$")
	public void user_Enter_The_First_Name() throws Throwable {
		
		String fname=particulardata("E:\\My Files\\Adactin_Tcase.xlsx", 15, 5);

		inputValueElement(pom.getInstanceBh().getFirstname(), fname);

	}

	@When("^user Enter The Last Name$")
	public void user_Enter_The_Last_Name() throws Throwable {
		
		String lname=particulardata("E:\\My Files\\Adactin_Tcase.xlsx", 16, 5);

		inputValueElement(pom.getInstanceBh().getLastname(), lname);

	}

	@When("^user Enter The Billing Address$")
	public void user_Enter_The_Billing_Address() throws Throwable {
		
		String address=particulardata("E:\\My Files\\Adactin_Tcase.xlsx", 17, 5);

		inputValueElement(pom.getInstanceBh().getAddress(), address);

	}

	@When("^user Enter The Credit Card Number$")
	public void user_Enter_The_Credit_Card_Number() throws Throwable {
		
		String ccnum=particulardata("E:\\My Files\\Adactin_Tcase.xlsx", 18, 5);

		inputValueElement(pom.getInstanceBh().getCcnum(), ccnum);

	}

	@When("^user Enter The Credit Card Type$")
	public void user_Enter_The_Credit_Card_Type() throws Throwable {
		
		String cctype=particulardata("E:\\My Files\\Adactin_Tcase.xlsx", 19, 5);
		
		selectValue("index", pom.getInstanceBh().getCctype(),cctype);

	}

	@When("^user Enter The Expiry Date Month$")
	public void user_Enter_The_Expiry_Date_Month() throws Throwable {
		
		String expmonth=particulardata("E:\\My Files\\Adactin_Tcase.xlsx", 20, 5);

		selectValue("value",pom.getInstanceBh().getExpmonth(), expmonth);

	}

	@When("^user Enter The Expiry Date Year$")
	public void user_Enter_The_Expiry_Date_Year() throws Throwable {

		String expyear=particulardata("E:\\My Files\\Adactin_Tcase.xlsx", 21, 5);
		
		selectValue("value",pom.getInstanceBh().getExpyear(), expyear);
	}

	@When("^user Enter The CVV Number$")
	public void user_Enter_The_CVV_Number() throws Throwable {
		
		String cvv=particulardata("E:\\My Files\\Adactin_Tcase.xlsx", 22, 5);
		
		inputValueElement(pom.getInstanceBh().getCvv(), cvv);

	}

	@Then("^user Click On The Book Now Button And It Navigates To The Booking Confirm Page$")
	public void user_Click_On_The_Book_Now_Button_And_It_Navigates_To_The_Booking_Confirm_Page() throws Throwable {
		
		clickOnElement(pom.getInstanceBh().getBooknow());
		
		Wait1();

	}

	@Then("^user Click On The My Itinerary Button And It Navigates To The Booked Itinerary Page$")
	public void user_Click_On_The_My_Itinerary_Button_And_It_Navigates_To_The_Booked_Itinerary_Page() throws Throwable {
		
		clickOnElement(pom.getInstanceBc().getItinerary());
		
		Wait1();

	}

	@Then("^user Taken Screenshot And Saved In File$")
	public void user_Taken_Screenshot_And_Saved_In_File() throws Throwable {

		TakeScreenshot();
	}
	
	@Then("^user Click On The Logout Button And It Navigates To The Login Index Page$")
	public void user_Click_On_The_Logout_Button_And_It_Navigates_To_The_Login_Index_Page() throws Throwable {
		
		clickOnElement(pom.getInstanceSp().getSignout());
		
		Wait1();

	}


}

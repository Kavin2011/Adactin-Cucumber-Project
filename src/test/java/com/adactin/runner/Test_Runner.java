package com.adactin.runner;

import org.junit.AfterClass;
import org.junit.BeforeClass;
import org.junit.runner.RunWith;
import org.openqa.selenium.WebDriver;

import com.cucum.Cucumber_Project.Base_Class;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features="src\\test\\java\\com\\adactin\\feature\\Adactin.feature",

	glue="com\\adactin\\stepdefinition",
	
	monochrome = true, dryRun=false, strict=true,
	
	tags=("~@Ad5"),
	
	plugin= {"html:Report\\Html_report",
			"pretty",
			"com.cucumber.listener.ExtentCucumberFormatter:Folder/Reports.html"
			}
		)

public class Test_Runner {
	
	public static WebDriver driver; //null
	
	@BeforeClass
	public static void set_Up() {
		
		driver=Base_Class.getBrowser("Chrome");
		
	}
	
	@AfterClass
	public static void tear_Down() {

		driver.close();
	}

}

package com.Logger;


	import org.apache.log4j.Logger;
	import org.apache.log4j.PropertyConfigurator;

	public class Basic_Logger {
		
		// Factory Design Pattern
		
		static Logger log= Logger.getLogger(Basic_Logger.class);
		
		public static void main(String[] args) {
			
			PropertyConfigurator.configure("log4j.properties");
			
			log.debug("Debug");
			log.info("Information");
			log.error("Error");
			log.warn("Warning");
			log.fatal("Fatal");
			
			
			
			
		}

	}

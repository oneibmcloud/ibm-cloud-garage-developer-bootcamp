package com.ibm.cloud;

import java.io.FileNotFoundException;
import java.util.List;

import junit.framework.Test;
import junit.framework.TestCase;
import junit.framework.TestSuite;

/**
 * Unit test for Person.
 */
public class PersonLoaderTest extends TestCase {
    /**
     * Create the test case
     *
     * @param testName name of the test case
     */
    public PersonLoaderTest(String testName) {
        super(testName);
    }

    /**
     * @return the suite of tests being tested
     */
    public static Test suite() {
        return new TestSuite(PersonLoaderTest.class);
    }

    /**
     * Test loading of space-delimited person file
     * @throws FileNotFoundException 
     */
    public void testSpace() throws FileNotFoundException {
    	List<Person> personList = PersonLoader.loadPersonRecordsFromSpaceFile();
    	assertEquals(3, personList.size());
    	assertEquals("Kournikova", personList.get(0).getLastName());
    	assertEquals("Hingis", personList.get(1).getLastName());
    	assertEquals("Seles", personList.get(2).getLastName());
    }
    
    /**
     * Test loading of pipe-delimited person file
     * @throws FileNotFoundException 
     */
    public void testPipe() throws FileNotFoundException {
    	List<Person> personList = PersonLoader.loadPersonRecordsFromPipeFile();
    	assertEquals(3, personList.size());
    	assertEquals("Smith", personList.get(0).getLastName());
    	assertEquals("Bonk", personList.get(1).getLastName());
    	assertEquals("Bouillon", personList.get(2).getLastName());
    }
    
    /**
     * Test loading of comma-delimited person file
     * @throws FileNotFoundException 
     */
    public void testComma() throws FileNotFoundException { 	
    	List<Person> personList = PersonLoader.loadPersonRecordsFromCommaFile();
    	assertEquals(3, personList.size());
    	assertEquals("Abercrombie", personList.get(0).getLastName());
    	assertEquals("Bishop", personList.get(1).getLastName());
    	assertEquals("Kelly", personList.get(2).getLastName());
    }   
}

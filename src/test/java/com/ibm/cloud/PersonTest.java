package com.ibm.cloud;

import java.text.SimpleDateFormat;

import junit.framework.Test;
import junit.framework.TestCase;
import junit.framework.TestSuite;

/**
 * Unit test for Person.
 */
public class PersonTest extends TestCase {
    /**
     * Create the test case
     *
     * @param testName name of the test case
     */
    public PersonTest(String testName) {
        super(testName);
    }

    /**
     * @return the suite of tests being tested
     */
    public static Test suite() {
        return new TestSuite(PersonTest.class);
    }

    /**
     * Test parsing of space-delimited records
     * @throws PersonParseException 
     */
    public void testSpace() throws PersonParseException {
		SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd");

    	String[] elements = { Person.LAST_NAME, Person.FIRST_NAME, Person.IGNORE, 
				Person.GENDER, Person.DATE_OF_BIRTH, Person.COLOR };
		String delimiter = "\\s+";
		
        String input1 = "Kournikova Anna F F 6-3-1975 Red";
        String input2 = "Hingis Martina M F 4-2-1979 Green";
        String input3 = "Seles Monica H F 12-2-1973 Black";
        
        Person person1 = new Person(input1, elements, delimiter);
        assertEquals("Anna", person1.getFirstName());
        assertEquals("Kournikova", person1.getLastName());
        assertEquals(Gender.FEMALE, person1.getGender());
        assertEquals("1975-06-03", format.format(person1.getDateOfBirth()));
        assertEquals("Red", person1.getColor());
     
        Person person2 = new Person(input2, elements, delimiter);
        assertEquals("Martina", person2.getFirstName());
        assertEquals("Hingis", person2.getLastName());
        assertEquals(Gender.FEMALE, person2.getGender());
        assertEquals("1979-04-02", format.format(person2.getDateOfBirth()));
        assertEquals("Green", person2.getColor());
        
        Person person3 = new Person(input3, elements, delimiter);
        assertEquals("Monica", person3.getFirstName());
        assertEquals("Seles", person3.getLastName());
        assertEquals(Gender.FEMALE, person3.getGender());
        assertEquals("1973-12-02", format.format(person3.getDateOfBirth()));
        assertEquals("Black", person3.getColor());
    }
    
    /**
     * Test parsing of pipe-delimited records
     * @throws PersonParseException 
     */
    public void testPipe() throws PersonParseException {
		SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd");

		String[] elements = { Person.LAST_NAME, Person.FIRST_NAME, Person.IGNORE, 
    			Person.GENDER, Person.COLOR, Person.DATE_OF_BIRTH };
        String delimiter = "\\s*\\|\\s*";
		
        String input1 = "Smith | Steve | D | M | Red | 3-3-1985";
        String input2 = "Bonk | Radek | S | M | Green | 6-3-1975";
        String input3 = "Bouillon | Francis | G | M | Blue | 6-3-1975";
        
        Person person1 = new Person(input1, elements, delimiter);
        assertEquals("Steve", person1.getFirstName());
        assertEquals("Smith", person1.getLastName());
        assertEquals(Gender.MALE, person1.getGender());
        assertEquals("1985-03-03", format.format(person1.getDateOfBirth()));
        assertEquals("Red", person1.getColor());
     
        Person person2 = new Person(input2, elements, delimiter);
        assertEquals("Radek", person2.getFirstName());
        assertEquals("Bonk", person2.getLastName());
        assertEquals(Gender.MALE, person2.getGender());
        assertEquals("1975-06-03", format.format(person2.getDateOfBirth()));
        assertEquals("Green", person2.getColor());
        
        Person person3 = new Person(input3, elements, delimiter);
        assertEquals("Francis", person3.getFirstName());
        assertEquals("Bouillon", person3.getLastName());
        assertEquals(Gender.MALE, person3.getGender());
        assertEquals("1975-06-03", format.format(person3.getDateOfBirth()));
        assertEquals("Blue", person3.getColor());
    }
    
    /**
     * Test parsing of comma-delimited records
     * @throws PersonParseException 
     */
    public void testComma() throws PersonParseException {
		SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd");

		String[] elements = { Person.LAST_NAME, Person.FIRST_NAME, Person.GENDER, 
    			Person.COLOR, Person.DATE_OF_BIRTH };
        String delimiter = "\\s*,\\s*";
		
        String input1 = "Abercrombie, Neil, Male, Tan, 2/13/1943";
        String input2 = "Bishop, Timothy, Male, Yellow, 4/23/1967";
        String input3 = "Kelly, Sue, Female, Pink, 7/12/1959";
        
        Person person1 = new Person(input1, elements, delimiter);
        assertEquals("Neil", person1.getFirstName());
        assertEquals("Abercrombie", person1.getLastName());
        assertEquals(Gender.MALE, person1.getGender());
        assertEquals("1943-02-13", format.format(person1.getDateOfBirth()));
        assertEquals("Tan", person1.getColor());
     
        Person person2 = new Person(input2, elements, delimiter);
        assertEquals("Timothy", person2.getFirstName());
        assertEquals("Bishop", person2.getLastName());
        assertEquals(Gender.MALE, person2.getGender());
        assertEquals("1967-04-23", format.format(person2.getDateOfBirth()));
        assertEquals("Yellow", person2.getColor());
        
        Person person3 = new Person(input3, elements, delimiter);
        assertEquals("Sue", person3.getFirstName());
        assertEquals("Kelly", person3.getLastName());
        assertEquals(Gender.FEMALE, person3.getGender());
        assertEquals("1959-07-12", format.format(person3.getDateOfBirth()));
        assertEquals("Pink", person3.getColor());
    }
    
    /**
     * Test formatting of toString() output
     * @throws PersonParseException 
     */
    public void testToString()  throws PersonParseException {
    	String[] elements = { Person.LAST_NAME, Person.FIRST_NAME, Person.IGNORE, 
				Person.GENDER, Person.DATE_OF_BIRTH, Person.COLOR };
		String delimiter = "\\s+";
		
        String input1 = "Kournikova Anna F F 6-3-1975 Red";
        String input2 = "Hingis Martina M F 4-2-1979 Green";
        String input3 = "Seles Monica H F 12-2-1973 Black";
        
        Person person1 = new Person(input1, elements, delimiter);
        assertEquals("Kournikova Anna Female 6/3/1975 Red", person1.toString());
        
        Person person2 = new Person(input2, elements, delimiter);
        assertEquals("Hingis Martina Female 4/2/1979 Green", person2.toString());
        
        Person person3 = new Person(input3, elements, delimiter);
        assertEquals("Seles Monica Female 12/2/1973 Black", person3.toString());
    }
}

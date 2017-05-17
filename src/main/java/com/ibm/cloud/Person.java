package com.ibm.cloud;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Scanner;

public class Person {
	public final static String FIRST_NAME = "firstName";
	public final static String LAST_NAME = "lastName";
	public final static String GENDER = "gender";
	public final static String DATE_OF_BIRTH = "dateOfBirth";
	public final static String COLOR = "color";
	public final static String IGNORE = "ignore";
	
	private String firstName;
	private String lastName;
	private Gender gender;
	private Date dateOfBirth;
	private String color;
	
	/**
	 * Constructs a Person object by parsing a string that contains attributes for the Person.
	 * 
	 * @param line 			input text string
	 * @param lineElements	ordering of the elements within the text string
	 * @param delimiter		defines the delimiter pattern that separates individual tokens 
	 * 						in the input text string - refer {@link java.util.Scanner} for
	 * 						definition of the delimiter pattern 
	 * @throws PersonParseException if a parsing is encountered in the input text string
	 */
	public Person(String line, String[] lineElements, String delimiter) throws PersonParseException {
		
		try (Scanner scanner = new Scanner(line)) {
			scanner.useDelimiter(delimiter);
			int i = 0;

			while (scanner.hasNext()) {
				String token = scanner.next();

				switch (lineElements[i++]) {

				case FIRST_NAME:
					firstName = token;
					break;

				case LAST_NAME:
					lastName = token;
					break;

				case GENDER:
					if (token.startsWith("M")) {
						gender = Gender.MALE;
					} else if (token.startsWith("F")) {
						gender = Gender.FEMALE;
					} else {
						throw new PersonParseException("Invalid gender encountered");
					}
					break;

				case DATE_OF_BIRTH:
					SimpleDateFormat format = null;

					if (token.contains("/")) {
						format = new SimpleDateFormat("MM/dd/yyyy");
					} else if (token.contains("-")) {
						format = new SimpleDateFormat("MM-dd-yyyy");
					} else {
						throw new PersonParseException("Invalid date encountered");
					}

					try {
						dateOfBirth = format.parse(token);
					} catch (ParseException e) {
						throw new PersonParseException("Invalid date encountered");
					}
					break;

				case COLOR:
					color = token;
					break;

				default:
					break;
				}
			}
	    }
	}

	public String getFirstName() {
		return firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public Gender getGender() {
		return gender;
	}

	public Date getDateOfBirth() {
		return dateOfBirth;
	}

	public String getColor() {
		return color;
	}
	
	@Override
	public String toString() {
		SimpleDateFormat format = new SimpleDateFormat("M/d/yyyy");

		StringBuilder sb = new StringBuilder();
		sb.append(lastName);
		sb.append(" ");
		sb.append(firstName);
		sb.append(" ");
		sb.append(gender);
		sb.append(" ");
		sb.append(format.format(dateOfBirth));
		sb.append(" ");
		sb.append(color);
		
		return sb.toString();
	}
}

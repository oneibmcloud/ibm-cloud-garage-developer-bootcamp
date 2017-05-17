package com.ibm.cloud;

import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.io.PrintStream;
import java.nio.file.FileSystems;
import java.nio.file.Files;
import java.util.List;
import java.util.Scanner;

import junit.framework.Test;
import junit.framework.TestCase;
import junit.framework.TestSuite;

/**
 * Unit test for JavaRefactoringTrial.
 */
public class JavaRefactoringTrialTest extends TestCase {
	
	private final ByteArrayOutputStream systemOutStream = new ByteArrayOutputStream();
	
    /**
     * Create the test case
     *
     * @param testName name of the test case
     */
    public JavaRefactoringTrialTest(String testName) {
        super(testName);
    }

    /**
     * @return the suite of tests being tested
     */
    public static Test suite() {
        return new TestSuite(JavaRefactoringTrialTest.class);
    }
    
    /**
     * Test app output correctness
     * @throws IOException 
     */
    public void testCandidateApp() throws IOException {
        System.setOut(new PrintStream(systemOutStream));

        JavaRefactoringTrial.main(null);
        
        List<String> expected = Files.readAllLines(FileSystems.getDefault().getPath("test-data", "output.txt"));
        
        String systemOutContents = systemOutStream.toString();
        
        int i = 0;		
        try (Scanner scanner = new Scanner(systemOutContents)) {
        	while (scanner.hasNextLine()) {
        		String line = scanner.nextLine();
        		assertEquals("Mismatched output on line " + (i + 1), expected.get(i), line);
        		i++;
        	}
        }
        
        System.setOut(null);
    }
}

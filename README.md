# Dependencies

* Apache Maven 3.3.9
* Oracle JDK 1.8.0

# Build Instructions

## Compile

`mvn compile`

## Test

`mvn test`

## Generate Javadocs

`mvn javadoc:javadoc`

## Run

From the application folder, run:

  `java -cp ./target/classes com.ibm.cloud.JavaRefactoringTrial`

or

  `mvn compile exec:java -Dexec.mainClass="com.ibm.bluemix.JavaRefactoringTrial"`

# IBM Cloud Garage Method Bootcamp

# javascript test-driven-development [TDD] trials

## fundamentals of TDD in javascript

## Getting Started

#### On Windows install [yarn](https://chocolatey.org/install)

#### Change your node version, clone the repo, install and run the tests:

````
nvm use v7.10.0
git clone git@github.com:wpannell/javascript-topic-trials.git app
cd app
git fetch --all
git checkout javascript-refactoring
yarn install
yarn test
````

___

#### Linux/Mac workflow:

````
yarn tdd:mac
````

___
#### Windows workflow:

````
yarn tdd
````

___

### [The Four Rules of Simple Design](https://martinfowler.com/bliki/BeckDesignRules.html):

* **_Passes the tests_**
* **_Reveals intention_**
* **_No duplication_**
* **_Fewest elements_**

___

### [The Transformation Priority Premise](https://8thlight.com/blog/uncle-bob/2013/05/27/TheTransformationPriorityPremise.html):

````
(01) [{} –> nil] no code => return nil

(02) [nil->constant] nil => simple constant

(03) [constant->constant+] simple constant => complex constant

(04) [constant->scalar] complex constant => variable or an argument

(05) [statement->statements] adding more unconditional statements.

(06) [unconditional->if] splitting the execution path

(07) [scalar->array]

(08) [array->container]

(09) [statement->recursion]

(10) [if->while]

(11) [expression->function] replacing an expression with a function or algorithm

(12) [variable->assignment] replacing the value of a variable.
````

___

### [Simplified Transformation Priority Premise](https://8thlight.com/blog/micah-martin/2012/11/17/transformation-priority-premise-applied.html):

````
(01) constant => a value

(02) scalar => a local binding, or variable

(03) invocation => calling a function/method

(04) conditional => if/switch/case/cond

(05) while loop => applies to for loops as well

(06) assignment => replacing the value of a variable
````

___

# IBM Cloud Garage Method Developer Bootcamp
[![Build Status](https://travis-ci.org/travis-ci/travis-web.svg?branch=master)](https://travis-ci.org/travis-ci/travis-web)

[![Deploy To Bluemix](https://console.ng.bluemix.net/devops/graphics/create_toolchain_button.png)](https://console.ng.bluemix.net/devops/setup/deploy/?repository=https%3A//github.com/wpannell/ibm-cloud-garage-developer-bootcamp)

## Getting Started

#### On Windows install [yarn](https://chocolatey.org/install)


#### Change your node version, clone the repo, install and run the tests:

````
nvm use v7.6.0
git clone git@github.com:wpannell/ibm-cloud-garage-method-developer-bootcamp.git app
cd app
yarn install
yarn run lint
yarn run spec
````

___

#### Linux/Mac workflow:

````
yarn run tdd
````


___
#### Windows workflow:

In three separate Bash shells:

````
yarn run test:watch
````

````
yarn run lint:watch
````

````
yarn run spec:watch
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
({}–>nil) no code at all->code that employs nil

(nil->constant)

(constant->constant+) a simple constant to a more complex constant

(constant->scalar) replacing a constant with a variable or an argument

(statement->statements) adding more unconditional statements.

(unconditional->if) splitting the execution path

(scalar->array)

(array->container)

(statement->recursion)

(if->while)

(expression->function) replacing an expression with a function or algorithm

(variable->assignment) replacing the value of a variable.
````

___

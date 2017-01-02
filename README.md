# IBM Bluemix Garage Bootcamp

####[configuration](https://github.com/wpannell/angularjs-1.x-reference-app/wiki/configuration)

[![Deploy to Bluemix](https://bluemix.net/deploy/button.png)](https://bluemix.net/deploy?repository=https://github.com/wpannell/angularjs-1.x-reference-app.git)

# angular.js-1.x-reference-app

## Getting Started##

####Change your node version, clone the repo, install and run the tests:####

````
nvm use v4.2.4
git clone git@github.com:wpannell/angularjs-1.x-reference-app.git app
cd app
npm install
npm run lint
npm test
````

####Start the dev server and follow instructions:####

```
npm run dev
```

##The design supports:##

* keeping track of the browser’s history stack;

* tab routing;

* drilling down cleanly from tabbed pages;

* crawling back up the history stack;

* popping up a dialog box;

* incorporating [Material Icons](https://design.google.com/icons/);

* deploying a configurable gauge component; and

* local, component-specific styles.

## Architecture##

####There is now a clear look of the app’s architecture:####

![component-based architecture](http://content.screencast.com/users/wil.pannell/folders/Jing/media/da3127c4-b061-4c4d-94e5-20b230252ebe/00000608.png)

***

####The gauge component is configurable from the component’s controller that uses it:####


![component-based architecture](http://content.screencast.com/users/wil.pannell/folders/Jing/media/9117edf8-21e7-40c5-8fcc-b68ba64a9422/00000613.png)

***

####This is what it looks like:####


![component-based architecture](http://content.screencast.com/users/wil.pannell/folders/Jing/media/6e2c7aa1-baf8-4f3a-b103-31e2eabce14c/00000615.png)
&nbsp;

***

####The popup is invoked from the blue “eject” button (see the prior image):####

![component-based architecture](http://content.screencast.com/users/wil.pannell/folders/Jing/media/7abdadd5-95c2-4108-bfc9-fd39485ccb1f/00000620.png)

***

####The popup is an ordinary component that can be tested as such:####

![component-based architecture](http://content.screencast.com/users/wil.pannell/folders/Jing/media/7137b1b4-c417-47b7-87bb-1e444ed5f3a4/00000618.png)

***

####The 2 bottom-right buttons on the popup return the passed-in text when they are clicked:####

![component-based architecture](http://content.screencast.com/users/wil.pannell/folders/Jing/media/786f7be4-13f1-405a-b697-bb8d6e011b63/00000617.png)

***

####The ```popup.controller``` implements a standard ```cancel``` action and the click events, which pass the answer back to the ```$mdDialog.hide()``` function:####

![component-based architecture](http://content.screencast.com/users/wil.pannell/folders/Jing/media/15b83390-4122-4264-9e98-f9403192ee5e/00000623.png)

***

####The popup dialog is used by the cards component.  The controller imports what it needs from the popup component, and passes in the cards’ ```$element``` and the ```$mdDialog``` service into its constructor:####

![component-based architecture](http://content.screencast.com/users/wil.pannell/folders/Jing/media/253fd241-5435-4bb6-9a11-ce09cbc24bdd/00000619.png)

***

####The controller’s ```configurePopup()``` function prepares, invokes, and returns from the popup dialog:####

![component-based architecture](http://content.screencast.com/users/wil.pannell/folders/Jing/media/7e3b27bb-5930-464e-ba1f-df6c57109020/00000614.png)

***

####The click ```$event``` is passed in from the DOM:####

![component-based architecture](http://content.screencast.com/users/wil.pannell/folders/Jing/media/41d4db43-a85f-477d-a35d-dd2dcbd797db/00000612.png)

***

####Slider navigation happens via the fast-forward and –reverse buttons:####

![component-based architecture](http://content.screencast.com/users/wil.pannell/folders/Jing/media/6c1a3dc1-1065-4f5f-834a-dcf5c77e79e5/00000609.png)

***

![component-based architecture](http://content.screencast.com/users/wil.pannell/folders/Jing/media/a69d8d6f-95c3-4fc9-99c7-62894988b19c/00000610.png)

***

![component-based architecture](http://content.screencast.com/users/wil.pannell/folders/Jing/media/0dee8498-3770-461e-b684-fbbd488bb034/00000611.png)

***

####Navigation is controlled programmatically:####

![component-based architecture](http://content.screencast.com/users/wil.pannell/folders/Jing/media/43da00cb-a30a-4af2-ba6b-baaaf6cffcd8/00000622.png)

***

####The DOM is configured to call the ```onPrevious()``` and ```onNext()``` functions, and to set the ```isNextDisabled``` and ```isPreviousDisabled``` states:####

![component-based architecture](http://content.screencast.com/users/wil.pannell/folders/Jing/media/32d2ab7c-b4ce-4f51-98db-e622bf5ec78f/00000621.png)

***

####Finally, note how easy it is to use the [Material Icons](https://design.google.com/icons/) as the images – fast_rewind and fast_forward – on the buttons.####

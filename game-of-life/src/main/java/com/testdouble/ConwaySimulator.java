package com.testdouble;

class ConwaySimulator {
  private SeedWorld seedWorld;
  private ReplaceWorld replaceWorld;
  private DisplayWorld displayWorld;

  void simulate(int numberOfGenerations) {
    World seed = seedWorld.seed();

    for(int i = 0; i < numberOfGenerations; i++) {
      displayWorld.display(seed);
      seed = replaceWorld.replace(seed);
    }

    displayWorld.display(seed);
  }
}


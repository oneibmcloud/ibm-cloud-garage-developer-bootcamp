package com.testdouble;

class ConwaySimulator {
  private SeedWorldGenerator seedWorldGenerator;
  private WorldOutputter worldOutputter;
  private WorldReplacer worldReplacer;

  void simulate(int generation, int timeLimit) {
    World world = seedWorldGenerator.generate();

    for(int i = 0; i < generation; i++) {
      worldOutputter.output(world);
      world = worldReplacer.replace(world, timeLimit);
    }

    worldOutputter.output(world);
  }
}

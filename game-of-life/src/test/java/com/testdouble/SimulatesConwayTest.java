package com.testdouble;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.runners.MockitoJUnitRunner;

import static org.junit.Assert.assertTrue;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

@RunWith(MockitoJUnitRunner.class)
public class SimulatesConwayTest {
  @InjectMocks
  private
  ConwaySimulator conwaySimulator;

  @Mock
  private
  SeedWorldGenerator seedWorldGenerator;

  @Mock
  private
  WorldReplacer worldReplacer;

  @Mock
  private
  WorldOutputter worldOutputter;

  @Test
  public void generation0() {
    // arrange
    World seedWorld = new World();
    when(seedWorldGenerator.generate()).thenReturn(seedWorld);

    // act
    conwaySimulator.simulate(0, 1337);

    // assert
    verify(worldOutputter).output(seedWorld);
  }

  @Test
  public void generation1() {
    // arrange
    World seedWorld = new World();
    World world2 = new World();

    when(seedWorldGenerator.generate()).thenReturn(seedWorld);
    when(worldReplacer.replace(seedWorld, 1338)).thenReturn(world2);

    // act
    conwaySimulator.simulate(1, 1338);

    // assert
    verify(worldOutputter).output(seedWorld);
    verify(worldOutputter).output(world2);
  }

  @Test
  public void canary() {
    assertTrue("canary should be true", true);
  }
}

// Copyright 2024, University of Colorado Boulder

/**
 * Main entry point for the 'Generator' sim.
 *
 * @author Chris Malley (PixelZoom, Inc.)
 */

import simLauncher from '../../joist/js/simLauncher.js';
import Tandem from '../../tandem/js/Tandem.js';
import GeneratorStrings from './GeneratorStrings.js';
import GeneratorScreen from '../../faradays-electromagnetic-lab/js/generator/GeneratorScreen.js';
import FELSim from '../../faradays-electromagnetic-lab/js/common/FELSim.js';

simLauncher.launch( () => {
  const titleStringProperty = GeneratorStrings.generator.titleStringProperty;
  const screens = [
    new GeneratorScreen( Tandem.ROOT.createTandem( 'generatorScreen' ) )
  ];
  const sim = new FELSim( titleStringProperty, screens, false /* hasEarthFeature */ );
  sim.start();
} );
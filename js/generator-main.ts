// Copyright 2024, University of Colorado Boulder

/**
 * Main entry point for the 'Generator' sim.
 *
 * @author Chris Malley (PixelZoom, Inc.)
 */

import Sim, { SimOptions } from '../../joist/js/Sim.js';
import simLauncher from '../../joist/js/simLauncher.js';
import Tandem from '../../tandem/js/Tandem.js';
import GeneratorStrings from './GeneratorStrings.js';
import PreferencesModel from '../../joist/js/preferences/PreferencesModel.js';
import FELPreferencesNode from '../../faradays-electromagnetic-lab/js/common/view/preferences/FELPreferencesNode.js';
import FELConstants from '../../faradays-electromagnetic-lab/js/common/FELConstants.js';
import GeneratorScreen from '../../faradays-electromagnetic-lab/js/generator/GeneratorScreen.js';

simLauncher.launch( () => {

  const titleStringProperty = GeneratorStrings.generator.titleStringProperty;

  const screens = [
    new GeneratorScreen( Tandem.ROOT.createTandem( 'generatorScreen' ) )
  ];

  const options: SimOptions = {
    credits: FELConstants.CREDITS,
    phetioDesigned: true,
    preferencesModel: new PreferencesModel( {
      visualOptions: {
        supportsProjectorMode: true
      },
      simulationOptions: {
        customPreferences: [ {
          createContent: tandem => new FELPreferencesNode( {
            hasEarthFeature: false,
            tandem: tandem.createTandem( 'simPreferences' )
          } )
        } ]
      }
    } )
  };

  const sim = new Sim( titleStringProperty, screens, options );
  sim.start();
} );
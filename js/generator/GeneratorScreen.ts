// Copyright 2024, University of Colorado Boulder

/**
 * TODO Describe this class and its responsibilities.
 *
 * @author Chris Malley (PixelZoom, Inc.)
 */

import Screen, { ScreenOptions } from '../../../joist/js/Screen.js';
import optionize from '../../../phet-core/js/optionize.js';
import GeneratorColors from '../common/GeneratorColors.js';
import generator from '../generator.js';
import GeneratorModel from './model/GeneratorModel.js';
import GeneratorScreenView from './view/GeneratorScreenView.js';
import GeneratorStrings from '../GeneratorStrings.js';

type SelfOptions = {
  //TODO add options that are specific to GeneratorScreen here
};

type GeneratorScreenOptions = SelfOptions & ScreenOptions;

export default class GeneratorScreen extends Screen<GeneratorModel, GeneratorScreenView> {

  public constructor( providedOptions: GeneratorScreenOptions ) {

    const options = optionize<GeneratorScreenOptions, SelfOptions, ScreenOptions>()( {
      name: GeneratorStrings.screen.nameStringProperty,

      //TODO add default values for optional SelfOptions here

      //TODO add default values for optional ScreenOptions here
      backgroundColorProperty: GeneratorColors.screenBackgroundColorProperty
    }, providedOptions );

    super(
      () => new GeneratorModel( { tandem: options.tandem.createTandem( 'model' ) } ),
      model => new GeneratorScreenView( model, { tandem: options.tandem.createTandem( 'view' ) } ),
      options
    );
  }
}

generator.register( 'GeneratorScreen', GeneratorScreen );
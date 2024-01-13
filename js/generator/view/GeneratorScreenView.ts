// Copyright 2024, University of Colorado Boulder

/**
 * TODO Describe this class and its responsibilities.
 *
 * @author Chris Malley (PixelZoom, Inc.)
 */

import ScreenView, { ScreenViewOptions } from '../../../../joist/js/ScreenView.js';
import ResetAllButton from '../../../../scenery-phet/js/buttons/ResetAllButton.js';
import GeneratorConstants from '../../common/GeneratorConstants.js';
import generator from '../../generator.js';
import GeneratorModel from '../model/GeneratorModel.js';
import optionize from '../../../../phet-core/js/optionize.js';

type SelfOptions = {
 //TODO add options that are specific to GeneratorScreenView here
};

type GeneratorScreenViewOptions = SelfOptions & ScreenViewOptions;

export default class GeneratorScreenView extends ScreenView {

  public constructor( model: GeneratorModel, providedOptions: GeneratorScreenViewOptions ) {

    const options = optionize<GeneratorScreenViewOptions, SelfOptions, ScreenViewOptions>()( {

      //TODO add default values for optional SelfOptions here

      //TODO add default values for optional ScreenViewOptions here
    }, providedOptions );

    super( options );

    const resetAllButton = new ResetAllButton( {
      listener: () => {
        this.interruptSubtreeInput(); // cancel interactions that may be in progress
        model.reset();
        this.reset();
      },
      right: this.layoutBounds.maxX - GeneratorConstants.SCREEN_VIEW_X_MARGIN,
      bottom: this.layoutBounds.maxY - GeneratorConstants.SCREEN_VIEW_Y_MARGIN,
      tandem: options.tandem.createTandem( 'resetAllButton' )
    } );
    this.addChild( resetAllButton );
  }

  /**
   * Resets the view.
   */
  public reset(): void {
    //TODO
  }

  /**
   * Steps the view.
   * @param dt - time step, in seconds
   */
  public override step( dt: number ): void {
    //TODO
  }
}

generator.register( 'GeneratorScreenView', GeneratorScreenView );
<?php

/**
 * Powered by parallax - The ultimative parallax script for Contao
 *
 * Copyright ©2012-2013 by MEN AT WORK <info@men-at-work.de>
 * Visit the agency website at http://www.men-at-work.de for more information
 *
 * PHP version 5
 * @package    parallaxAnimations
 * @copyright  MEN AT WORK
 * @link       http://www.contao-parallax.com
 * @license    EULA
 * @filesource
 */

if (ParallaxNavigation::checkSystem())
{
    /**
     * HOOKS
     */
    $GLOBALS['TL_HOOKS']['prx_globalHeaders'][] = array('parallaxAnimations', 'setGlobalNavigationHeaders');
}

/**
 * Config array
 */
$GLOBALS['Parallax']['jsFunctions']['system'] = array_merge(
    $GLOBALS['Parallax']['jsFunctions']['system'], array(
        'fadeIn'  => 'fadeIn',
        'fadeOut' => 'fadeOut',
        'fadeSlowIn' => 'fadeSlowIn'
    )
);
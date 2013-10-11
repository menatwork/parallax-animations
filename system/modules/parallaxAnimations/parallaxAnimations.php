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

/**
 * Class parallaxAnimations
 */
class parallaxAnimations extends Controller
{

    /**
     * Contaions ParallaxHelper class
     * @var ParallaxHelper
     */
    protected $_objHelper = NULL;

    /**
     * Current object instance (Singleton)
     * @var parallaxAnimations
     */
    protected static $objInstance = NULL;

    /**
     * Prevent constructing the object (Singleton)
     */
    protected function __construct()
    {
        parent::__construct();

        $this->_objHelper = ParallaxHelper::getInstance();
    }

    /**
     * Prevent cloning of the object (Singleton)
     */
    final private function __clone(){}

    /**
     * Get instanz of the object (Singelton)
     *
     * @return parallaxAnimations
     */
    public static function getInstance()
    {
        if (self::$objInstance == NULL)
        {
            self::$objInstance = new parallaxAnimations();
        }
        return self::$objInstance;
    }

    /**
     * Set global headers for navigation
     *
     * @param ParallaxHelper $objHelper
     * @param Database_Result $objParallaxPage
     * @param Database_Result $objRootPage
     */
    public function setGlobalNavigationHeaders(ParallaxHelper $objHelper, Database_Result $objParallaxPage, Database_Result $objRootPage)
    {
        $GLOBALS['TL_JAVASCRIPT'][] = TL_SCRIPT_URL . 'system/modules/parallaxAnimations/html/js/source/parallax.animation.js';
    }

    // HELPER ------------------------------------------------------------------

    /**
     * Check whether the extension has the required run rights
     *
     * @return boolean
     */
    public static function checkSystem()
    {
        return ParallaxHelper::checkSystem();
    }

    /**
     * Check if the extension has entrys for the frontend
     *
     * @global Database_Result $objPage
     * @return boolean
     */
    public function checkActive()
    {
        return $this->_objHelper->checkActive();
    }

}
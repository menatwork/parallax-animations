/**
 * Powered by parallax - The ultimative parallax script for Contao
 *
 * Copyright ©2012-2013 by MEN AT WORK <info@men-at-work.de>
 * Visit the agency website at http://www.men-at-work.de for more information
 *
 * @package    parallaxAnimations
 * @copyright  MEN AT WORK
 * @link       http://www.contao-parallax.com
 * @license    EULA
 * @filesource
 */

(function ($) {

    /**
     * Class parallaxAnimations
     *
     * Provide methods to handle parallax animations
     * @copyright  MEN AT WORK 2013
     * @package    Frontend
     */
    $.parallaxAnimations = {

        // INIT ----------------------------------------------------------------
        /**
         * Initialize
         */
        init: function () {
            var self = this;

            if (this.isParallaxPage()) {
                this.addAnimationHelperFunctions();
            }
        },

        // ANIMATION HELPER FUNCTIONS ------------------------------------------
        /**
         * Add animation helper functions
         */
        addAnimationHelperFunctions: function () {
            $.extend($.ParallaxBuilder.animationHelperFunctions, {

                /**
                 * Fade the element in
                 *
                 * @param {object} anim
                 * @param {object|undefined} opts
                 * @param {ParallaxBuilder} self
                 * @param {object} opt
                 */
                fadeIn: function (anim, opts, self, opt) {
                    self.addObjectWithStyles(anim.selector);
                    $(anim.selector).stop(true, true).fadeTo(1000, 1);
                },

                /**
                 * Fade the element out
                 *
                 * @param {object} anim
                 * @param {object|undefined} opts
                 * @param {ParallaxBuilder} self
                 * @param {object} opt
                 */
                fadeOut: function (anim, opts, self, opt) {
                    self.addObjectWithStyles(anim.selector);
                    $(anim.selector).stop(true, true).fadeTo(1000, 0);
                },

                /**
                 * Fade the selement slow in
                 *
                 * @param {object} anim
                 * @param {object|undefined} opts
                 * @param {ParallaxBuilder} self
                 * @param {object} opt
                 */
                fadeSlowIn: function (anim, opts, self, opt) {
                    self.addObjectWithStyles(anim.selector);
                    $(anim.selector).fadeTo(3000, 1);
                }

            });
        },

        // HELPER --------------------------------------------------------------
        /**
         * Return if $.ParallaxBuilder exists on this page
         *
         * @returns {@exp;jQuery@pro;ParallaxBuilder}
         */
        isParallaxPage: function () {
            return ( !! $.ParallaxBuilder);
        }

    };

})(jQuery);

jQuery(document).ready(function () {
    jQuery.parallaxAnimations.init();
});
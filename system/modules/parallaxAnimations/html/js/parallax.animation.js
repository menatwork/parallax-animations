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
(function(a){a.parallaxAnimations={init:function(){var b=this;if(this.isParallaxPage()){this.addAnimationHelperFunctions()}},addAnimationHelperFunctions:function(){a.extend(a.ParallaxBuilder.animationHelperFunctions,{fadeIn:function(e,d,b,c){a(e.selector).stop(true,true).fadeTo(1000,1)},fadeOut:function(e,d,b,c){a(e.selector).stop(true,true).fadeTo(1000,0)},fadeSlowIn:function(e,d,b,c){a(e.selector).fadeTo(3000,1)}})},isParallaxPage:function(){return(!!a.ParallaxBuilder)}}})(jQuery);jQuery(document).ready(function(){jQuery.parallaxAnimations.init()});
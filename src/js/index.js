/**
 * Presentation Background Control Script
 * 
 * This script manages dynamic background color changes for the impress.js presentation
 * based on the active slide step. Each slide can have a specific background color class
 * that will be applied to the document body when that slide becomes active.
 * 
 * Supported background colors:
 * - white-bg, gray-bg, red-bg, orange-bg, green-bg, purple-bg, blue-bg
 * 
 * @author Andrew Hatch
 * @version 1.0
 */

$(document).ready(function () {

    /**
     * Handle slide activation events from impress.js
     * When a step becomes active, check for background color classes and apply them
     */
    $(document).on('impress:stepactivate', function (event) {
        const activeSlide = $(event.target);
        const documentBody = $(document.body);
        
        // List of all available background color classes
        const backgroundColorClasses = [
            'white-bg', 
            'gray-bg', 
            'red-bg', 
            'orange-bg', 
            'green-bg', 
            'purple-bg', 
            'blue-bg'
        ];
        
        // Remove all existing background color classes
        documentBody.removeClass(backgroundColorClasses.join(' '));
        
        // Check which background color class the active slide has and apply it
        backgroundColorClasses.forEach(function(colorClass) {
            const slideColorClass = colorClass.replace('-bg', ''); // Remove '-bg' suffix
            if (activeSlide.hasClass(slideColorClass)) {
                documentBody.addClass(colorClass);
            }
        });
    });

    /**
     * Initialize any additional step configurations
     * This could be extended in the future for more complex slide behaviors
     */
    if (typeof steps !== 'undefined' && Array.isArray(steps)) {
        for (let stepIndex = 0; stepIndex < steps.length; stepIndex++) {
            if (typeof steps[stepIndex] === 'function') {
                steps[stepIndex]();
            }
        }
    }

    /**
     * Initialize the impress.js presentation
     * This should be called after all DOM elements are ready
     */
    impress().init();

});
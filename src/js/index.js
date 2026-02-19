/**
 * Presentation Control Script
 * 
 * Manages dynamic background color changes and substep effects
 * for the impress.js presentation.
 * 
 * Supported background colors:
 * - white-bg, gray-bg, red-bg, orange-bg, green-bg, purple-bg, blue-bg
 * 
 * @author Andrew Hatch
 * @version 1.1
 */

document.addEventListener('DOMContentLoaded', function () {

    var backgroundColorClasses = [
        'white-bg', 'gray-bg', 'red-bg', 'orange-bg',
        'green-bg', 'purple-bg', 'blue-bg'
    ];

    document.addEventListener('impress:stepactivate', function (event) {
        var activeSlide = event.target;
        var body = document.body;

        backgroundColorClasses.forEach(function (colorClass) {
            body.classList.remove(colorClass);
        });

        backgroundColorClasses.forEach(function (colorClass) {
            var slideColorClass = colorClass.replace('-bg', '');
            if (activeSlide.classList.contains(slideColorClass)) {
                body.classList.add(colorClass);
            }
        });
    });

    if (typeof steps !== 'undefined' && Array.isArray(steps)) {
        for (var i = 0; i < steps.length; i++) {
            if (typeof steps[i] === 'function') {
                steps[i]();
            }
        }
    }

    /**
     * Fade out #sts-small when substep 4 (medium image) is revealed;
     * restore it when leaving the step or going back.
     */
    var stsSmall = document.getElementById('sts-small');
    var stsMediumSubstep = document.getElementById('sts-medium-substep');

    if (stsSmall && stsMediumSubstep) {
        var observer = new MutationObserver(function () {
            if (stsMediumSubstep.classList.contains('substep-visible')) {
                stsSmall.style.opacity = '0';
            } else {
                stsSmall.style.opacity = '1';
            }
        });
        observer.observe(stsMediumSubstep, { attributes: true, attributeFilter: ['class'] });

        document.addEventListener('impress:stepleave', function (event) {
            if (event.target.id === 'complex-sociotechnical-systems') {
                stsSmall.style.opacity = '1';
            }
        });
    }

    var stsMedium = document.getElementById('sts-medium');
    var stsLargeSubstep = document.getElementById('sts-large-substep');

    if (stsMedium && stsLargeSubstep) {
        var observerLarge = new MutationObserver(function () {
            if (stsLargeSubstep.classList.contains('substep-visible')) {
                stsMedium.style.opacity = '0';
            } else {
                stsMedium.style.opacity = '1';
            }
        });
        observerLarge.observe(stsLargeSubstep, { attributes: true, attributeFilter: ['class'] });

        document.addEventListener('impress:stepleave', function (event) {
            if (event.target.id === 'complex-sociotechnical-systems') {
                stsMedium.style.opacity = '1';
            }
        });
    }

    var stsLarge = document.getElementById('sts-large');
    var stsXlargeSubstep = document.getElementById('sts-xlarge-substep');

    if (stsLarge && stsXlargeSubstep) {
        var observerXlarge = new MutationObserver(function () {
            if (stsXlargeSubstep.classList.contains('substep-visible')) {
                stsLarge.style.opacity = '0';
            } else {
                stsLarge.style.opacity = '1';
            }
        });
        observerXlarge.observe(stsXlargeSubstep, { attributes: true, attributeFilter: ['class'] });

        document.addEventListener('impress:stepleave', function (event) {
            if (event.target.id === 'complex-sociotechnical-systems') {
                stsLarge.style.opacity = '1';
            }
        });
    }

});

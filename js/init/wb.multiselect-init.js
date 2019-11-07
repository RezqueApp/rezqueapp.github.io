/**
 * Multiselect JS Init
 *
 * @author We Both
 * @version 1.0
 * @requires
 *
 */
$(function () {
  'use strict';

  $('#jobPosition').multiselect({
    buttonContainer: '<div class="btn-multiselect" />',
    buttonClass: 'custom-select',
    nonSelectedText: 'Select position',
    includeSelectAllOption: true,
    numberDisplayed: 2,
    allSelectedText: 'All positions'
  });

  $('#jobType').multiselect({
    buttonContainer: '<div class="btn-multiselect" />',
    buttonClass: 'custom-select',
    nonSelectedText: 'Select job type',
    includeSelectAllOption: true,
    numberDisplayed: 2,
    allSelectedText: 'All types'
  });

  $('#jobLocation').multiselect({
    buttonContainer: '<div class="btn-multiselect" />',
    buttonClass: 'custom-select',
    nonSelectedText: 'Select location',
    includeSelectAllOption: true,
    numberDisplayed: 2,
    allSelectedText: 'All locations',
    maxHeight: 260
  });

});

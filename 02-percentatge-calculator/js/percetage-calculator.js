/* eslint no-undef: "off" */

$(document).ready(function () { // eslint-disable-line no-undef
  /* getResult: return the result according to the specified formula name */
  function getResult (formula, a, b) {
    switch (formula) {
      case 'f1':
        return a / 100 * b
      case 'f2':
        return a / b * 100
      case 'f3':
        return (b - a) / a * 100
      default:
        return -1
    }
  }
  $('form').on('submit', function (event) {
    event.preventDefault()
    var idFormula = $(this).attr('id') // "f1", "f2" or "f3"
    var preId = '#' + idFormula
    // Operands & Formula
    var a = $(preId + '-a').val()
    var b = $(preId + '-b').val()
    var result = getResult(idFormula, a, b)
    console.log(result)
    if (isNaN(result)) {
      console.log(preId + '-help-block')
      $(this).addClass('has-error')
    } else {
      $(this).removeClass('has-error')
      // Write Result in proper input
      $(preId + '-result').val(result)
    }
  })
})

/*
// Version 1
$(document).ready(function () {
  function checkNumericValue (value) {
    if (value === null || value === undefined || isNaN(value)) return false
    return true
  }

  $('section').on('click', '.btn', function (e) {
    var $tagForm = $(this).closest('form')
    var $tagInputs = $tagForm.find('input')
    var value1 = $tagInputs.first().val()
    var value2 = $tagInputs.eq(1).val()
    var result
    if (!checkNumericValue(value1) || !checkNumericValue(value2)) {
      $tagForm.addClass('has-error')
    } else {
      $tagForm.removeClass('has-error')
      // $tagForm.find('#helpBlock').addClass('invisible')
      if ($tagForm.prop('id') === 'f1') {
        console.log('first condition')
        result = (value1 / 100) * value2
      } else if ($tagForm.prop('id') === 'f2') {
        console.log('second condition')
        result = (value1 / value2) * 100
      } else if ($tagForm.prop('id') === 'f3') {
        console.log('third condition')
        result = (value2 - value1) / value1 * 100
      }
      $tagInputs.last().val(result)
    }
    e.preventDefault()
  })
})
*/

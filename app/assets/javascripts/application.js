// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require_tree .

// thanks to Alexander for for loop help

$(document).ready(function() {
  function chooseCatagory() {
    let background;
    $('#button').click(function() {
      let $selectBox = $('#selectBox').val();
      if($('#selectBox').val()){

        $.getJSON(/stores/+$selectBox).done(function( nightlife ) {
        console.log($('#selectBox').val());

        $('.results').empty();

        for (let i = 0; i < nightlife.length; i++) {
            let list = $('<ul>');
            let name = $('<li>').text(nightlife[i].cnbio_org_name);
            let address = $('<li>').text(nightlife[i].cnadrprf_addrline1);
            let saveButton = $('<button>').text('save store');
            name.appendTo(list);
            address.appendTo(list);
            saveButton.appendTo(list);
            list.appendTo('.results');
          }

          $('body').removeClass();
        if ($selectBox === "Nightlife") {
          background = 'nightlife';
        }else if ($selectBox === "Shopping") {
          background = 'shopping';
        }else if ($selectBox === "Personal and Professional Services") {
          background = 'pps';
        }else if ($selectBox === "Full Service Dining") {
          background = 'dining';
        }else if ($selectBox === "Visitor Services") {
          background = 'vs';
        }


          $('body').addClass(background);
    })
      }
        })
      }


$(function() {
  chooseCatagory();
  })

});

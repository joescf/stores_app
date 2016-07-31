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
    $('#button').click(function() {
      console.log($('#selectBox').val());
      if($('#selectBox').val() === 'nightlife') {
       $.getJSON('/nightlife').done(function( nightlife ) {

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


    })
      }else if ($('#selectBox').val() === 'shopping') {
        $.getJSON('/shopping').done(function( shopping ) {

          for (let i = 0; i < shopping.length; i++) {
            let list = $('<ul>');
            let name = $('<li>').text(shopping[i].cnbio_org_name);
            let address = $('<li>').text(shopping[i].cnadrprf_addrline1);
            let saveButton = $('<button>').text('save store');
            name.appendTo(list);
            address.appendTo(list);
            saveButton.appendTo(list);
            list.appendTo('.results');
          }


         })
      }else if ($('#selectBox').val() === 'personal_and_professional_services') {
        $.getJSON('/personal_and_professional_services').done(function( pps ) {


          for (let i = 0; i < pps.length; i++) {
            let list = $('<ul>');
            let name = $('<li>').text(pps[i].cnbio_org_name);
            let address = $('<li>').text(pps[i].cnadrprf_addrline1);
            let saveButton = $('<button>').text('save store');
            name.appendTo(list);
            address.appendTo(list);
            saveButton.appendTo(list);
            list.appendTo('.results');
          }


        })
      } else if($('#selectBox').val() === 'full_service_dining') {
        $.getJSON('/full_service_dining').done(function( FSD ) {

          for (let i = 0; i < FSD.length; i++) {
            let list = $('<ul>');
            let name = $('<li>').text(FSD[i].cnbio_org_name);
            let address = $('<li>').text(FSD[i].cnadrprf_addrline1);
            let saveButton = $('<button>').text('save store');
            name.appendTo(list);
            address.appendTo(list);
            saveButton.appendTo(list);
            list.appendTo('.results');
          }


        })
      } else if ($('#selectBox').val() === 'visitor_services') {
        $.getJSON('/visitor_services').done(function( VS ) {

          console.log(VS)

          for (let i = 0; i < VS.length; i++) {
            let list = $('<ul>');
            let name = $('<li>').text(VS[i].cnbio_org_name);
            let address = $('<li>').text(VS[i].cnadrprf_addrline1);
            let saveButton = $('<button>').text('save store');
            name.appendTo(list);
            address.appendTo(list);
            saveButton.appendTo(list);
            list.appendTo('.results');
          }
        })
      }
    })
  }

$(function() {
  chooseCatagory();
  })
});

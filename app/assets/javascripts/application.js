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
$(document).ready(function() {

  function chooseCatagory() {
    $('#button').click(function() {
      console.log($('#selectBox').val());
      if($('#selectBox').val() === 'nightlife') {
       $.getJSON('/nightlife').done(function( nightlife ) {

       let firstNightlife = nightlife.shift();
       console.log(firstNightlife)
       let name1 = firstNightlife.cnbio_org_name;
       let address1 = firstNightlife.cnadrprf_addrline1;
       $('<p>').text(name1).appendTo('body');
       $('<p>').text(address1).appendTo('body');

       let secondNightlife = nightlife.shift();
       console.log(secondNightlife);
       let name2 = secondNightlife.cnbio_org_name;
       let address2 = secondNightlife.cnadrprf_addrline1;
       $('<p>').text(name2).appendTo('body');
       $('<p>').text(address2).appendTo('body');

       let thirdNightlife = nightlife.shift();
       console.log(thirdNightlife);
       let name3 = thirdNightlife.cnbio_org_name;
       let address3 = thirdNightlife.cnadrprf_addrline1;
       $('<p>').text(name3).appendTo('body');
       $('<p>').text(address3).appendTo('body');
    })
      }else if ($('#selectBox').val() === 'shopping') {
        $.getJSON('/shopping').done(function( shopping ) {

          let firstShopping = shopping.shift();
          console.log(firstShopping)
          let name1 = firstShopping.cnbio_org_name;
          let address1 = firstShopping.cnadrprf_addrline1;
          $('<p>').text(name1).appendTo('body');
          $('<p>').text(address1).appendTo('body');

          let secondShopping = shopping.shift();
          console.log(secondShopping)
          let name2 = secondShopping.cnbio_org_name;
          let address2 = secondShopping.cnadrprf_addrline1;
          $('<p>').text(name2).appendTo('body');
          $('<p>').text(address2).appendTo('body');

          let thirdShopping = shopping.shift();
          console.log(thirdShopping)
          let name3 = thirdShopping.cnbio_org_name;
          let address3 = thirdShopping.cnadrprf_addrline1;
          $('<p>').text(name3).appendTo('body');
          $('<p>').text(address3).appendTo('body');
         })
      }
    })
  }
  // function renderNightlife( nightlife ) {
  // $.getJSON('/nightlife').done(function( nightlife ) {
  //   console.log(nightlife)
  // })
  // $('#button').click(function(nightlife) {
  //   if ($('#selectBox').val() === 'nightlife') {

  //   console.log(nightlife[1])
  //     // $(location).attr('href', '/nightlife')
  //   }
  // })
    // var $container = $('#albums');
    // var $album = $('<li class="album">');
    // var $name = $('<a target="_blank" href="' + album.collectionViewUrl + '">')
    // $name.text( album.collectionName );
    // var $img = $('<img>').attr('src', album.artworkUrl100)
    // // render the image
    // $album.append( $name );
    // $album.append($img);
    // $container.append( $album );
    // console.log(store[23])
  // }



//   function getStores() {
//     $.getJSON('/stores').done(function( stores ) {
//       // stores.results.forEach(function( store ) {
//         renderStore( stores );
//       // })
//     })
//   }



//   $(function() {
//     getStores();
//   })
$(function() {
  chooseCatagory();
  })
});

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
            let list = $('<ul>')
            let name = $('<li>').text(nightlife[i].cnbio_org_name);
            let address = $('<li>').text(nightlife[i].cnadrprf_addrline1)
            name.appendTo(list);
            address.appendTo(list)
            list.appendTo('.results')
          }

       // let firstNightlife = nightlife.shift();
       // console.log(firstNightlife)
       // let name1 = firstNightlife.cnbio_org_name;
       // let address1 = firstNightlife.cnadrprf_addrline1;
       // let secondary1 = firstNightlife.secondary;
       // $('<p>').text(name1).appendTo('body');
       // $('<p>').text(address1).appendTo('body');
       // $('<p>').text(secondary1).appendTo('body');

       // let secondNightlife = nightlife.shift();
       // console.log(secondNightlife);
       // let name2 = secondNightlife.cnbio_org_name;
       // let address2 = secondNightlife.cnadrprf_addrline1;
       // $('<p>').text(name2).appendTo('body');
       // $('<p>').text(address2).appendTo('body');

       // let thirdNightlife = nightlife.shift();
       // console.log(thirdNightlife);
       // let name3 = thirdNightlife.cnbio_org_name;
       // let address3 = thirdNightlife.cnadrprf_addrline1;
       // $('<p>').text(name3).appendTo('body');
       // $('<p>').text(address3).appendTo('body');
    })
      }else if ($('#selectBox').val() === 'shopping') {
        $.getJSON('/shopping').done(function( shopping ) {

          for (let i = 0; i < shopping.length; i++) {
            let list = $('<ul>')
            let name = $('<li>').text(shopping[i].cnbio_org_name);
            let address = $('<li>').text(shopping[i].cnadrprf_addrline1)
            name.appendTo(list);
            address.appendTo(list)
            list.appendTo('.results')
          }

          // console.log(shopping.length)
          // let firstShopping = shopping.shift();
          // console.log(firstShopping)
          // let name1 = firstShopping.cnbio_org_name;
          // let address1 = firstShopping.cnadrprf_addrline1;
          // let secondary1 = firstShopping.secondary;
          // $('<p>').text(name1).appendTo('body');
          // $('<p>').text(address1).appendTo('body');
          // $('<p>').text(secondary1).appendTo('body');

          // let secondShopping = shopping.shift();
          // console.log(secondShopping)
          // let name2 = secondShopping.cnbio_org_name;
          // let address2 = secondShopping.cnadrprf_addrline1;
          // $('<p>').text(name2).appendTo('body');
          // $('<p>').text(address2).appendTo('body');

          // let thirdShopping = shopping.shift();
          // console.log(thirdShopping)
          // let name3 = thirdShopping.cnbio_org_name;
          // let address3 = thirdShopping.cnadrprf_addrline1;
          // $('<p>').text(name3).appendTo('body');
          // $('<p>').text(address3).appendTo('body');
         })
      }else if ($('#selectBox').val() === 'personal_and_professional_services') {
        $.getJSON('/personal_and_professional_services').done(function( pps ) {


          for (let i = 0; i < pps.length; i++) {
            let list = $('<ul>')
            let name = $('<li>').text(pps[i].cnbio_org_name);
            let address = $('<li>').text(pps[i].cnadrprf_addrline1)
            name.appendTo(list);
            address.appendTo(list)
            list.appendTo('.results')
          }

          // let firstPpf = pps.shift();
          // console.log(firstPpf)
          // let name1 = firstPpf.cnbio_org_name;
          // let address1 = firstPpf.cnadrprf_addrline1;
          // let secondary1 = firstPpf.secondary;
          // $('<p>').text(name1).appendTo('body');
          // $('<p>').text(address1).appendTo('body');
          // $('<p>').text(secondary1).appendTo('body');

          // let secondPpf = pps.shift();
          // console.log(secondPpf)
          // let name2 = secondPpf.cnbio_org_name;
          // let address2 = secondPpf.cnadrprf_addrline1;
          // $('<p>').text(name2).appendTo('body');
          // $('<p>').text(address2).appendTo('body');

          // let thirdPpf = pps.shift();
          // console.log(thirdPpf)
          // let name3 = thirdPpf.cnbio_org_name;
          // let address3 = thirdPpf.cnadrprf_addrline1;
          // $('<p>').text(name3).appendTo('body');
          // $('<p>').text(address3).appendTo('body');
        })
      } else if($('#selectBox').val() === 'full_service_dining') {
        $.getJSON('/full_service_dining').done(function( FSD ) {

          for (let i = 0; i < FSD.length; i++) {
            let list = $('<ul>')
            let name = $('<li>').text(FSD[i].cnbio_org_name);
            let address = $('<li>').text(FSD[i].cnadrprf_addrline1)
            name.appendTo(list);
            address.appendTo(list)
            list.appendTo('.results')
          }

          // console.log(FSD.length);
          // let firstFSD = FSD.shift();
          // console.log(firstFSD)
          // let name1 = firstFSD.cnbio_org_name;
          // let address1 = firstFSD.cnadrprf_addrline1;
          // let secondary1 = firstFSD.secondary;
          // $('<p>').text(name1).appendTo('body');
          // $('<p>').text(address1).appendTo('body');
          // $('<p>').text(secondary1).appendTo('body');

          // let secondFSD = FSD.shift();
          // console.log(secondFSD)
          // let name2 = secondFSD.cnbio_org_name;
          // let address2 = secondFSD.cnadrprf_addrline1;
          // $('<p>').text(name2).appendTo('body');
          // $('<p>').text(address2).appendTo('body');

          // let thirdFSD = FSD.shift();
          // console.log(thirdFSD)
          // let name3 = thirdFSD.cnbio_org_name;
          // let address3 = thirdFSD.cnadrprf_addrline1;
          // $('<p>').text(name3).appendTo('body');
          // $('<p>').text(address3).appendTo('body');
        })
      } else if ($('#selectBox').val() === 'visitor_services') {
        $.getJSON('/visitor_services').done(function( VS ) {

          console.log(VS)

          for (let i = 0; i < VS.length; i++) {
            let list = $('<ul>')
            let name = $('<li>').text(VS[i].cnbio_org_name);
            let address = $('<li>').text(VS[i].cnadrprf_addrline1)
            name.appendTo(list);
            address.appendTo(list)
            list.appendTo('.results')
          }

          // let firstVS = VS.shift();
          // console.log(firstVS)
          // let name1 = firstVS.cnbio_org_name;
          // let address1 = firstVS.cnadrprf_addrline1;
          // $('<p>').text(name1).appendTo('body');
          // $('<p>').text(address1).appendTo('body');

          // let secondVS = VS.shift();
          // console.log(secondVS)
          // let name2 = secondVS.cnbio_org_name;
          // let address2 = secondVS.cnadrprf_addrline1;
          // $('<p>').text(name2).appendTo('body');
          // $('<p>').text(address2).appendTo('body');
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

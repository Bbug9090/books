var guitars = [
  {
    guitar_id: "1",
    name: "Jeff Beck Strat",
    image: "https://s-media-cache-ak0.pinimg.com/originals/5b/aa/71/5baa715df4fd396bac2bd44f4d5f98a9.jpg",
    description: "Surf Green with Lace Sensors",
    manufacture: "Fender",
    year: 1996,
  },
  {
    guitar_id: "2",
    name: "Jimi Hendrix Gibson Flying V",
    image: "http://68.media.tumblr.com/b7a2f15fa3f1e6390d907346168db7a0/tumblr_nmt8dbagE81texqglo2_1280.jpg",
    description: "Black with 490R and 490T pickups",
    manufacture: "Gibson",
    year: 1991,
  },
  {
    guitar_id: "3",
    name: "Martin 000 Guatemalan",
    image: "http://willcuttguitars.com/product%20images/112816/1997771-1.jpg",
    description: "Sitka spruce with herringbone binding",
    manufacture: "Martin",
    year: 2005,
  },
  {
    guitar_id: "4",
    name: "Fender 62 RI: Capri Orange",
    image: "http://www.fndr46.com/wp-content/uploads/2016/01/62_Stratocaster_Relic_Capri_Orange_R61917_1.jpg",
    description: "Capri Orange with 62 RI single coil pickups",
    manufacture: "Fender",
    year: 2011,
  },
  {
    guitar_id: "5",
    name: "National Triolian Polychrome",
    image: "https://s-media-cache-ak0.pinimg.com/originals/71/d9/70/71d970bb86a4e76db22d5d5eed2ee3bd.jpg",
    description: "National NRP Polychrome (Yellow)",
    manufacture: "National",
    year: 2014,
  },
]

var names = [];

$(document).ready(function(){
  for (var i = 0; i < guitars.length; i++) {
      names.push('<li class=' + (JSON.stringify(guitars[i].guitar_id)) + '>' + (JSON.stringify(guitars[i].name)) + '</li>');
  }
  $('#list').html(names.join(''));
  $(document).on('click', 'li', function(e){
    $('h2').remove();
    var currentGuitar = guitars[e.currentTarget.className -1];
    $('#image').attr('src', currentGuitar.image);
    $('#name').html('Name: ' + currentGuitar.name);
    $('#description').html('Description: ' + currentGuitar.description);
    $('#manufacture').html('Manufacture: ' + currentGuitar.manufacture);
    $('#year').html('Year: ' + currentGuitar.year);
    })
  });

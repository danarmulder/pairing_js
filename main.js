var students = ["Kevin Litchfield",
            "Erika Lim",
            "Zubair Desai",
            "Nina Bachvarova",
            "Julien Mayer",
            "Denise Shephard",
            "Oscar Linares",
            "Max Gordon",
            "Dana Mulder",
            "Rory Grant",
            "Tina Hweicheng Loh",
            "Kristian Ziel",
            "Ngan Pham",
            "Brady Stilwell",
            "Michael Dean",
            "Alex Sell",
            "Michael Smykowski",
            "Luis Manzo",
            "Heather Farley",
            "Irina Tagintseva",
            "Lauren Richie",
            "Edozie Izegbu",
            "David Dang",
            "Bradley Johnson",
            "Helen Lam",
            "Cameron Irmas",
            "Victoria Billingsley",
            "Rosa Choi",
            ];

function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}
var randStudents = shuffleArray(students);
var half_length = randStudents.length/2;
var firstHalf = randStudents.splice(0, half_length-1);
var secondHalf = randStudents;

for(var i = 0; i < firstHalf.length; i++){
  $('#pairing-table').append("\
  <tr>\
    <td>"+  firstHalf[i]   +" </td>\
    <td>"+  secondHalf[i]   +" </td>\
  </tr>");
}


// var source = $('#class-pairing').html();
// var template = Handlebars.compile(source);
// var html = template(students);
// $('#pairing-table').append(html);

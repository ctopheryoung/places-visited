function Place (locale, year, food) {
  this.locale = locale;
  this.year = year;
  this.food = food;
}

$(document).ready(function() {
  $("form#new-place").submit(function(event){
    event.preventDefault();

    var locale = $("input#new-place-locale").val();
    var year = $("input#new-place-year").val();
    var food = $("input#new-place-food").val();
    var newPlace = new Place (locale, year, food);

      $("ul#visited").append(("<li><span class='place'>") + newPlace.locale + ("</span></li>"));

      $("input#new-place-locale").val("");
      $("input#new-place-year").val("");
      $("input#new-place-food").val("");
  });
});

// *  * //
$(document).ready(function () {
  // -------------------------------------------------------------------
  // Targeting Elements
  var header1 = $("#header1");

  // var header2 = $("#header2");
  var listed = $("#lists");
  var list = $("#list");
  // var lists = $(".list");
  // console.log(lists);

  // -------------------------------------------------------------------
  // Jquery Events is ito yong .click .onclick. .change etc..
  $("#btn-hide").click(function () {
    // * Ito lahat sa baba is event effects * //
    // header1.hide();
    // * fadeToogile is Combination ng fadeIn & fadeOut effects * //
    // header1.fadeToggle();
    // header1.fadeOut(2000);
    // header1.slideUp();
    // * slideToogile is Combination ng slideUp & slideDown effects * //
    // header1.slideToggle();
    // * Jquery Animate * //
    // header1.animate({
    // fontSize: "52px";
    // })
  });
  $("#btn-show").click(function () {
    // // header1.show();
    // // header1.fadeIn(2000);
    // header1.slideDown();
  });

  // -------------------------------------------------------------------
  // *  JQuery GET and SET * //
  // --------------- GET --------------- //
  $(document).on("click", "#btn", function () {
    var header1 = $("#header1");
    header1.text("Hello from PinoFreeCoder");
    header1.html("<i>Hello from PinoFreeCoder</i>");
    var h1 = header1.text();
  });
  // --------------- SET --------------- //
  $(document).on("change", "#select", function () {
    // var selected = $("#select");
    // console.log(header1.text());
    // console.log(selected.val());
    // -- Best way to get the value or add the element value -- //
    var selectedValue = this.value;

    if (selectedValue == "option1") {
      $("#select1").html(`
      <option value="option4">Option 4</option>
      <option value="option5">Option 5</option>
      <option value="option6">Option 6</option>
      `);
    }
  });

  // -------------------------------------------------------------------
  // *  JQuery ADD and REMOVE * //
  $(document).on("click", "#add-list", function () {
    // --------------- ADD --------------- //
    // -- .append is nag add sya sa unahan -- //
    $("#list").append(`
    <li>List Item 1</li>
    `);
    // -- .prepend is nag add sya sa hulihan -- //
    $("#list").prepend(`
    <li>List Item 1</li>
    `);
    // -- .before is mag add sya ng word sa taas ng elemet -- //
    header1.before("Hello");
    // -- .after is mag add sya ng word sa baba ng elemet -- //
    header1.after("Hi");
  });
  // --------------- REMOVE --------------- //
  $(document).on("click", "#hide", function () {
    listed.hide();
  });

  $(document).on("click", "#show", function () {
    listed.show();
  });
  $(document).on("click", "#remove", function () {
    list.empty();
  });
  $(document).on("click", "#add", function () {
    $("#list").append(`
    <li><h1>Middle List</h1></li>
    `);
  });

  $(document).on("click", "#css_btn", function () {
    // header1.css("color", "red");
    // --------------- JQuery Chaining --------------- //
    // header1
    //   .css("color", "red")
    //   .animate({ fontSize: "52px", letterSpacing: "32px" });
    // -- .addClass is ito yong tatargetin mo yong design sa style.css para i apply -- //
    // header1.addClass("red-text");
    header1.toggleClass("red-text");
  });
});

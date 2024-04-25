// $(document).ready(function () {
//   var recipe_box = $("#recipe-textbox");
//   var add_btn = $("#add-btn");
//   var cart = $(".cart");
//   var delete_list = $("#delete_list");
//   var form = $("#form");
//   var fname = $("#fname");
//   var lname = $("#lname");

//   $(document).on("click", "#add-btn", function () {
//     // -- .length means if yong element is may laman mag aapend sya -- //
//     if (recipe_box.val().length > 0) {
//       // cart.append(recipe_box.val());
//       // -- `${} means text interpulation -- //
//       cart.append(
//         `<div>Item List<p>Recipe : ${recipe_box.val()} <button class="delete_btn">Delete</button></p></div>`
//       );
//       recipe_box.val("");

//       $(document).on("click", ".delete_btn", function () {
//         // console.log($(this).parent());

//         // -- JQuery Chaining -- //

//         // $(this).parent().remove();

//         $(this).parentsUntil(".cart").remove();
//       });
//     } else {
//       alert("Required to filled up");
//     }
//   });
//   $(document).on("click", "#delete_list", function () {
//     // $("#check_list").children().css("color", "red");

//     // -- kung gusto nyong maraming design lagyan nyo lang ng {} it means naka object -- //
//     // $("#check_list").find(".unq").css({ color: "red", "font-size": "32px" });

//     // -- To target the specific element -- //
//     // -- get firt element -- //
//     // $("#check_list > ul > li")
//     //   .first()
//     //   .css({ color: "red", "font-size": "32px" });

//     // -- get last element -- //
//     // $("#check_list > ul > li")
//     //   .last()
//     //   .css({ color: "red", "font-size": "32px" });

//     // // -- get specfic from array element -- //
//     // $("#check_list > ul > li").eq(3).css({ color: "red", "font-size": "32px" });

//     // -- get specfic using filter that has unq class element -- //
//     // $("#check_list > ul > li")
//     //   .filter(".unq")
//     //   .css({ color: "red", "font-size": "32px" });

//     // -- kabalitaran ni filter. NOT filter select mo na lahat wag lang yon mismong target -- //
//     $("#check_list > ul > li")
//       .not(".unq")
//       .css({ color: "red", "font-size": "32px" });

//     // -- Take Notes -- //
//     // Synchronous may 1,2,3,4,5 na client nag request sa server. bali si 1 aantayin muna matapos bago mag tanong si 2,3,4,5 kung baga nakapila sila.//
//     // Asyncronous is kaya ngang tumanggap ng multiple request //
//   });

//   $(document).on("click", "#load_btn", function () {
//     // $("#main-container").load("sample.txt #data");
//     $.get(
//       "https://jsonplaceholder.typicode.com/users",
//       function (data, status) {
//         // console.log(data);
//         data.forEach((element) => {
//           $("#main-container").append(`<p>${element.names}</p>`);
//           // console.log(element.name);
//         });
//       }
//     );
//   });
//   // -- on keyup is pag ka naglalagay ka ng input is ang nilalabas nya is yong number ng textsize -- //
//   // $(document).on("keyup", "#fname", function () {
//   //   var lg = $(this).val().length;
//   //   console.log(lg);

//   // -- on blur is pag ka click mo ng input is kailangan mo pa in unhover yong mouse para lumabas yong output -- //
//   // $(document).on("blur", "#fname", function () {
//   //   var lg = $(this).val().length;
//   //   console.log("this is seleceted");

//   // -- on focus is pag ka click mo ng input is lalabas agad yong output -- //
//   // $(document).on("focus", "#fname", function () {
//   //   var lg = $(this).val().length;
//   //   console.log("this is seleceted");
//   // });

//   form.on("submit", function (e) {
//     e.preventDefault();
//     // console.log("this was submitted");
//     $.ajax({
//       type: "POST",
//       url: "process.php",
//       data: { firstname: fname.val(), lastname: lname.val() },
//       success: function (response) {
//         console.log(response);
//       },
//     });
//   });
// });

$(document).ready(function () {
  $("#myForm").submit(function (e) {
    e.preventDefault();

    // Get form data
    var formData = {
      firstname: $("input[name=firstname]").val(),
      lastname: $("input[name=lastname]").val(),
    };

    // AJAX request
    $.ajax({
      type: "POST",
      url: "process.php",
      data: formData,
      dataType: "text",
    })
      .done(function (data) {
        console.log(data); // Log response data to console
        alert("first name:" + data.firstname + "\nlast name" + data.lastname);
      })
      .fail(function (xhr, textStatus, errorThrown) {
        console.log(xhr.responseText); // Log error message to console
        alert("Error:" + xhr.responseText);
      });
  });
});

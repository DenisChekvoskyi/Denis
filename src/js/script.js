const hamburger = document.querySelector(".hamburger"),
  menu = document.querySelector(".menu"),
  close = document.querySelector(".menu__close");

hamburger.addEventListener("click", () => {
  menu.classList.add("active");
});

close.addEventListener("click", () => {
  menu.classList.remove("active");
});

$(".modal__close").on("click", function () {
  $(".modal__overlay, #thanks").fadeOut("slow");
});

$("form").submit(function (e) {
  e.preventDefault();

  $.ajax({
    type: "POST",
    url: "mailer/smart.php",
    data: $(this).serialize(),
  }).done(function () {
    $(this).find("input").val("");
    $(".modal__overlay, #thanks").fadeIn("slow");
    $("form").trigger("reset");
  });
  return false;
});

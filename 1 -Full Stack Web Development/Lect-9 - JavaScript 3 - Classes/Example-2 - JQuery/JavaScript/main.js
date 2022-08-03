$("h1").text("Alo");
$("h1.Second").text("Olaaa");
$("a").attr("href", "www.google.com");

$("input").keyup(function (event) {
    // $("h1").text(event.key);
    $("h1").text($("input").val())
})

let x = 10;
for (var i = 0; i < 5; i++) {
    console.log(i);
}
console.log(i);
// const alertHeading = function() {
//     window.alert("This is a heading element.");
//   };
//   let h1 = document.querySelector("h1"); 
//   h1.addEventListener("click", alertheading);
//   h1.removeEventListener("click", alertHeading);  

function alertNew () {
    window.alert("This is a heading element.");
    let h1 = document.querySelector("h1")
    h1.removeEventListener("click", alertNew)
}
window.addEventListener("load", function(){
let h1 = document.querySelector("h1");
h1.addEventListener("click", alertNew);
});
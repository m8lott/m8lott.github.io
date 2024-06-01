let slider = document.getElementById("range");
let percentValue = document.getElementById('percent');

slider.addEventListener("input", function() {
  let value = slider.value;
  
  let percent = (value - slider.min) / (slider.max - slider.min) * 100;
  percentValue.innerHTML = percent.toFixed(2) + "%";
});
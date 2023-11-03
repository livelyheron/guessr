function updateInput() {
  let input = document.getElementById("inputBox").value;
	let paras = input.split(/\r?\n\n/);
	let result = "";
  for (let i = 0; i < paras.length; i++) {
    result += i + 1 + ". || " + paras[i] + " ||<br><br>";
  }
  document.getElementById("outputBox").innerHTML = result;
}

function copyText() {
  // Get the text field
  var copyText = document.getElementById("outputBox");
  // Select the text field
  copyText.select();
   // Copy the text inside the text field
  navigator.clipboard.writeText(copyText.value);
}

var light = document.getElementById('light');

document
  .documentElement
  .addEventListener('mousemove', function handleMouseMove(event) {
  light.style.setProperty('--light-position-y', (event.clientY - 50) + 'px');
  light.style.setProperty('--light-position-x', (event.clientX - 50) + 'px');
});

const inputs = document.querySelectorAll('.controls input');

function handleUpdate() {
  //console.log(this.value); getting the values of the different input fields
  const suffix = this.dataset.sizing || ''; //selecting every "data-" inputfield OR nothing
  //console.log(suffix); output will be "px"
  //console.log(this.name); will give as output the "spacing", "blur", "base"
  document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));

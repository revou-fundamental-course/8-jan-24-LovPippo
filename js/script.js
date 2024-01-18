function calculate() {
  var sideLength = document.getElementById('sideLength').value;

  if (!sideLength || sideLength <= 0) {
    alert('Masukkan panjang sisi yang valid.');
    return;
  }

  var area = sideLength * sideLength;
  var perimeter = 4 * sideLength;

  document.getElementById('areaResult').innerText = area;
  document.getElementById('perimeterResult').innerText = perimeter;
}

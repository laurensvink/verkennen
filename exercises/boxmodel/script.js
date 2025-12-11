function brew() {
  const name = document.getElementById('wizardName').value.trim();
  const number = document.getElementById('magicNumber').value.trim();
  const hasIngredient = document.getElementById('ingredient').checked;
  const result = document.getElementById('result');

  if (!name || !number) {
    result.textContent = "Vul zowel een naam als een magisch getal in!";
    return;
  }

  const magicCorrect = (Number(number) === 7); // voorbeeld magisch getal

  if (magicCorrect && hasIngredient) {
    result.textContent = `Succes, ${name}! De toverdrank is geslaagd!`;
  } else {
    result.textContent = `Helaas ${name}, de toverdrank is mislukt.`;
  }
}

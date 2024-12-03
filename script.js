const totalPriceElement = document.getElementById('total-price');
const options = document.querySelectorAll('input[name="unit"]');

options.forEach(option => {
  option.addEventListener('change', (e) => {
    const selectedValue = e.target.value;
    let price = 0;

    if (selectedValue === '10') price = 10;
    if (selectedValue === '18') price = 18;
    if (selectedValue === '24') price = 24;

    totalPriceElement.textContent = `${price}.00 `;
  });
});

// Перевірка номера картки по алгоритму Луна
function isValidCardNumber(value) {
  const clean = value.replace(/\D/g, "");
  let sum = 0;
  let shouldDouble = false;

  for (let i = clean.length - 1; i >= 0; i--) {
    let digit = parseInt(clean[i]);

    if (shouldDouble) {
      digit *= 2;
      if (digit > 9) digit -= 9;
    }

    sum += digit;
    shouldDouble = !shouldDouble;
  }

  return sum % 10 === 0 && clean.length >= 13;
}

// Перевірка дати (MM/YY)
function isValidExpiry(value) {
  const [month, year] = value.split("/").map((v) => v.trim());
  if (!month || !year || month.length !== 2 || year.length !== 2) return false;

  const mm = parseInt(month);
  const yy = parseInt(year) + 2000;

  if (mm < 1 || mm > 12) return false;

  const now = new Date();
  const expiry = new Date(yy, mm);
  return expiry > now;
}

export {isValidCardNumber,isValidExpiry};
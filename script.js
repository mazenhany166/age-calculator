function calculateAge() {
  const dayInput = document.getElementById('day');
  const monthInput = document.getElementById('month');
  const yearInput = document.getElementById('year');
  const resultParagraph = document.getElementById('result');

  const birthdate = new Date(`${yearInput.value}-${monthInput.value}-${dayInput.value}`);
  const today = new Date();

  if (isNaN(birthdate.getTime())) {
    resultParagraph.textContent = 'Please enter a valid birthdate.';
    return;
  }

  const ageInMilliseconds = today - birthdate;
  const ageDate = new Date(ageInMilliseconds);

  const years = ageDate.getUTCFullYear() - 1970;
  const months = ageDate.getUTCMonth();
  const days = ageDate.getUTCDate() - 1;

  const birthdayThreshold = 7; // Number of days before the birthday to trigger congratulations

  if (days <= birthdayThreshold) {
    // Birthday is within the next 7 days
    resultParagraph.textContent = `Your birthday is coming up! Congratulations! 🎉`;
  } else {
    resultParagraph.textContent = `Your age is ${years} years, ${months} months, and ${days} days.`;
  }
}

function useCountAbbrevation(number) {
  const SI_SYMBOL = ['', 'k', 'M', 'B', 'T'];
  const tier = Math.floor(Math.log10(number) / 3);

  if (tier === 0) return number.toString();
  if (number > 999949 && number < 1000000) return '999.9k';
  const suffix = SI_SYMBOL[tier];
  const scaledNumber = number / Math.pow(1000, tier);
  const formattedNumber = scaledNumber.toFixed(scaledNumber % 1 === 0 ? 0 : 1);

  return formattedNumber + suffix;
}

export default useCountAbbrevation;

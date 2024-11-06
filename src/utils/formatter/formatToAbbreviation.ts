export function formatToAbbreviation(num: number): string {
  const units = [
    { value: 1_000_000_000, suffix: 'b' },
    { value: 1_000_000, suffix: 'm' },
    { value: 1_000, suffix: 'k' },
  ];

  const result = units
    .map((unit) =>
      num >= unit.value ? (num / unit.value).toFixed(1).replace(/\.0$/, '') + unit.suffix : null,
    )
    .find((abbreviation) => abbreviation !== null);

  return result || num.toString();
}

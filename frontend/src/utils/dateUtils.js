export function formatDateMalgache(dateStr) {
  if (!dateStr) return '';

  const moisMalgache = [
    'Janoary',
    'Febroary',
    'Marsa',
    'Aprily',
    'Mey',
    'Jona',
    'Jolay',
    'Aogositra',
    'Septambra',
    'Oktobra',
    'Novambra',
    'Desambra',
  ];

  const [year, month, day] = dateStr.split('-');

  return `${parseInt(day)} ${moisMalgache[parseInt(month) - 1]} ${year}`;
}

export const isToday = (date) => {
  const today = new Date();
  const d = new Date(date);

  return (
    d.getDate() === today.getDate() &&
    d.getMonth() === today.getMonth() &&
    d.getFullYear() === today.getFullYear()
  );
};

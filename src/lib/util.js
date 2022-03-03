import Papa from 'papaparse';

export async function getlang(lang) {
  const response = await fetch(`/langs/${lang}.csv`);
  if (response.status === 404) {
    throw response.statusText;
  }
  const csv = await response.text();
  const parsed = Papa.parse(csv, {
    header: true,
    skipEmptyLines: true,
  });
  return parsed.data;
}

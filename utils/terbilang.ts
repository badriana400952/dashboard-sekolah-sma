export function terbilang(input: any): string {

  const n = Number(input);

  if (!Number.isFinite(n)) return "";
  if (n === 0) return "Nol";
  if (n < 0) return "Minus " + terbilang(Math.abs(n));

  const angka = [
    "",
    "Satu","Dua","Tiga","Empat","Lima",
    "Enam","Tujuh","Delapan","Sembilan",
    "Sepuluh","Sebelas"
  ];

  function toWords(x: number): string {

    x = Math.floor(x);

    if (x < 12) return angka[x];

    if (x < 20) return angka[x - 10] + " Belas";

    if (x < 100)
      return angka[Math.floor(x/10)] + " Puluh" +
        (x%10 ? " " + toWords(x%10) : "");

    if (x < 200)
      return "Seratus" + (x>100 ? " " + toWords(x-100) : "");

    if (x < 1000)
      return toWords(Math.floor(x/100)) + " Ratus" +
        (x%100 ? " " + toWords(x%100) : "");

    if (x < 2000)
      return "Seribu" + (x>1000 ? " " + toWords(x-1000) : "");

    if (x < 1_000_000)
      return toWords(Math.floor(x/1000)) + " Ribu" +
        (x%1000 ? " " + toWords(x%1000) : "");

    if (x < 1_000_000_000)
      return toWords(Math.floor(x/1_000_000)) + " Juta" +
        (x%1_000_000 ? " " + toWords(x%1_000_000) : "");

    if (x < 1_000_000_000_000)
      return toWords(Math.floor(x/1_000_000_000)) + " Miliar" +
        (x%1_000_000_000 ? " " + toWords(x%1_000_000_000) : "");

    return toWords(Math.floor(x/1_000_000_000_000)) + " Triliun";
  }

  return toWords(n).trim();
}

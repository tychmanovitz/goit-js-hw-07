// Pobieramy listę wszystkich elementów li.item
const items = document.querySelectorAll("ul#categories li.item");

// Liczymy liczbę kategorii
const numberOfCategories = items.length;
console.log(`Liczba kategorii: ${numberOfCategories}`);

// Dla każdego elementu li.item
items.forEach((item) => {
  // Pobieramy tytuł elementu (tag <h2>)
  const title = item.querySelector("h2").textContent;

  // Pobieramy liczbę elementów w kategorii (wszystkie <li> w nim zagnieżdżone)
  const numberOfItems = item.querySelectorAll("li").length;

  // Wyświetlamy wynik w konsoli
  console.log(`Kategoria: ${title}, Liczba elementów: ${numberOfItems}`);
});

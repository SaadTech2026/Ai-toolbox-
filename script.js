
const searchInput = document.querySelector("#searchInput");
const filterButtons = document.querySelectorAll(".filter-button");
const cards = document.querySelectorAll(".tool-card");
const emptyMessage = document.querySelector("#emptyMessage");

let selectedCategory = "all";

function updateTools() {
  const query = searchInput.value.trim().toLowerCase();
  let visibleCount = 0;

  cards.forEach((card) => {
    const categoryMatches =
      selectedCategory === "all" ||
      card.dataset.category === selectedCategory;

    const searchText =
      `${card.dataset.search} ${card.innerText}`.toLowerCase();

    const searchMatches = searchText.includes(query);
    const visible = categoryMatches && searchMatches;

    card.hidden = !visible;

    if (visible) visibleCount++;
  });

  emptyMessage.hidden = visibleCount !== 0;
}

searchInput.addEventListener("input", updateTools);

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    selectedCategory = button.dataset.category;

    filterButtons.forEach((item) => {
      item.classList.toggle("active", item === button);
    });

    updateTools();
  });
});
      

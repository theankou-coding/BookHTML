document.addEventListener("DOMContentLoaded", () => {
  const categoryButtons = document.querySelectorAll(".cat-btn");
  categoryButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const categoryName = btn.textContent.trim();
      const categoryBlock = Array.from(
        document.querySelectorAll(".category-block")
      ).find((block) => {
        const title = block.querySelector(".category-title").textContent.trim();
        return title.toLowerCase() === categoryName.toLowerCase();
      });
      if (categoryBlock) {
        categoryBlock.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  const searchInput = document.querySelector('.search-bar input[type="text"]');
  const searchBtn = document.querySelector(".search-btn");
  const bookCards = document.querySelectorAll(".book-card");

  function filterBooks() {
    const query = searchInput.value.trim().toLowerCase();
    if (query === "") {
      bookCards.forEach((card) => (card.style.display = "block"));
      return;
    }
    bookCards.forEach((card) => {
      const title = card.querySelector(".book-title").textContent.toLowerCase();
      const detail = card
        .querySelector(".book-detail")
        .textContent.toLowerCase();
      if (title.includes(query) || detail.includes(query)) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  }

  searchBtn.addEventListener("click", filterBooks);

  searchInput.addEventListener("keyup", (e) => {
    if (e.key === "Enter") {
      filterBooks();
    }
  });
});

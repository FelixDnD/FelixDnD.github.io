console.log("Search script running");

const params = new URLSearchParams(window.location.search);
const query = params.get("query");
console.log("Search query:", query);


if (query && window.store) {
  const idx = lunr(function () {
    this.ref("url");
    this.field("title", { boost: 15 });
    this.field("content");

    for (const key in window.store) {
      this.add({
        url: key,
        title: window.store[key].title,
        content: window.store[key].content
      });
    }
  });

  const results = idx.search(query + "*"); // wildcard for partial matches
  console.log("Search results:", results);

  const resultsContainer = document.getElementById("search-results");

  if (results.length > 0) {
    results.forEach(function (result) {
      const item = window.store[result.ref];
      const resultItem = document.createElement("div");
      resultItem.innerHTML = `
        <h1 style="font-size: 1.4rem">&#x2192;&#xFE0E; <a href="${item.url}">${item.title}</a></h1>
        <p style="margin-top: -0.5rem">${item.content.slice(0, 150)}...</p>
        <hr>
      `;
      resultsContainer.appendChild(resultItem);
    });
  } else {
    resultsContainer.innerHTML = "<p>No results found.</p>";
  }
}

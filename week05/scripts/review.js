let reviewCount = localStorage.getItem('reviewCount');

// If no count exists yet, start at 0
if (reviewCount === null) {
  reviewCount = 0;
}

// Convert to number and increment
reviewCount = Number(reviewCount) + 1;

// Store updated value back into localStorage
localStorage.setItem('reviewCount', reviewCount);

// Display the updated count on the page
document.getElementById('reviewCount').textContent = reviewCount;

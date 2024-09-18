const names = ["John Doe", "Jane Smith", "Alex Johnson", "Sam Lee", "Terry Mendez", "Louisa Sullivan", "Jasmine Barnett", "Bobby Henderson"];
const platforms = ["Google", "Facebook", "Yelp", "TripAdvisor"];

const generateReview = () => {
  const name = names[Math.floor(Math.random() * names.length)];
  const date = `${Math.floor(Math.random() * 30) + 1} days ago`;
  const rating = Math.floor(Math.random() * 2) + 4; // 4 or 5 stars
  const platform = platforms[Math.floor(Math.random() * platforms.length)];
  
  const reviews = [
    "Amazing coffee at the cozy café! The baristas were passionate about their craft, and the place was perfect to relax and enjoy a cup of joe.",
    "Great quality and value! The T-shirts I bought from this brand are soft, durable, and affordable. They are now my go-to basics for everyday wear.",
    "Love these sunglasses! Stylish and provide excellent sun protection. A perfect accessory for any outfit.",
    "I had a fantastic time at the museum. The interactive exhibits made learning fun, and the staff's passion for sharing information was evident. It's a perfect place for a family outing."
  ];
  
  const text = reviews[Math.floor(Math.random() * reviews.length)];
  
  return { name, date, rating, text, platform };
};

export default generateReview;
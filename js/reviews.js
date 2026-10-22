const sampleReviews = [
  { name: "Ravi K", place: "Uttarahalli", when: "Sep 2025", rating: 5, text: "Staircase railing came out clean. Joints are tight and the steel still looks bright after the rains." },
  { name: "Meena S", place: "Banashankari", when: "Aug 2025", rating: 4.5, text: "Glass balcony railing is neat. Fitting took one extra day, but the finish is what we wanted." },
  { name: "Arun P", place: "JP Nagar", when: "Jul 2025", rating: 5, text: "Main gate was measured at the house and fitted without a gap. Happy with the work." },
  { name: "Lakshmi R", place: "Kengeri", when: "Jun 2025", rating: 4, text: "Window grills are strong. The first coat of polish was uneven, they came back and corrected it." },
  { name: "Suresh M", place: "RR Nagar", when: "May 2025", rating: 4.5, text: "Bought SS pipe and brackets from the shop. Rates were clear and the material matched what they showed." },
  { name: "Divya N", place: "Jayanagar", when: "Apr 2025", rating: 4.5, text: "Handrail on the stair is comfortable to hold and does not shake." },
  { name: "Imran H", place: "Vijayanagar", when: "Mar 2025", rating: 4.5, text: "Compound gate looks solid. Hinges are smooth. They explained the steel grade before starting." },
  { name: "Anita D", place: "Kumaraswamy Layout", when: "Feb 2025", rating: 3.5, text: "Railing is fine, but the site visit slipped by a week. Work itself was okay once they started." },
  { name: "Prakash G", place: "Uttarahalli", when: "Jan 2025", rating: 5, text: "Kitchen baskets fit the cabinets. No rattling when you pull them out." },
  { name: "Shweta B", place: "Banashankari", when: "Dec 2024", rating: 4.5, text: "Toughened glass on the stair looks open and still feels safe for the children." },
  { name: "Naveen T", place: "JP Nagar", when: "Nov 2024", rating: 4.5, text: "Asked for a simple rod railing. They kept the design plain and the price matched the quote." },
  { name: "Farida A", place: "Kengeri", when: "Oct 2024", rating: 4, text: "Gate is good. One latch needed a second adjustment after a month. They fixed it." },
  { name: "Harish V", place: "RR Nagar", when: "Sep 2024", rating: 4.5, text: "Steel table and chairs for the sit-out. Frame is heavy and has not rusted." },
  { name: "Pooja L", place: "Jayanagar", when: "Aug 2024", rating: 5, text: "Balcony edge was open. The new railing closed it properly and the welds are smooth." },
  { name: "Manoj C", place: "Vijayanagar", when: "Jul 2024", rating: 4.5, text: "Ordered square sections for our own fabricator. Pieces were straight and cut to the list." },
  { name: "Kavitha J", place: "Uttarahalli", when: "Jun 2024", rating: 4.5, text: "They came, measured the stair, and finished in the days they said. No surprise charges." },
  { name: "Rahul E", place: "Kumaraswamy Layout", when: "May 2024", rating: 4.5, text: "Safety grill on the window is tidy. Paint colour matched the frame." },
  { name: "Geeta W", place: "Banashankari", when: "Apr 2024", rating: 3.5, text: "Glass panel has a small mark near one clamp. They offered to replace it, which helped." },
  { name: "Sanjay I", place: "JP Nagar", when: "Mar 2024", rating: 5, text: "SS handrail along the ramp. My father can use it without it moving." },
  { name: "Nandini Q", place: "Kengeri", when: "Feb 2024", rating: 4.5, text: "Designer gate with a simple scroll. Not overdone, and it closes flat." },
  { name: "Vikram O", place: "RR Nagar", when: "Jan 2024", rating: 4, text: "Pipes were in stock. Had to wait a day for one fitting size. Rest was ready." },
  { name: "Aisha F", place: "Jayanagar", when: "Dec 2023", rating: 4.5, text: "Stair railing in 304. After one monsoon it still looks the same." },
  { name: "Deepak Y", place: "Vijayanagar", when: "Nov 2023", rating: 4.5, text: "Chair frames for the shop. Welding is even and the feet sit flat." },
  { name: "Revathi U", place: "Uttarahalli", when: "Oct 2023", rating: 5, text: "Clear quote, then the work. Balcony railing lines up with the slab." },
  { name: "Joseph P", place: "Banashankari", when: "Sep 2023", rating: 4.5, text: "Window grill was fixed without chipping much of the plaster. Clean job." },
  { name: "Swathi Z", place: "JP Nagar", when: "Aug 2023", rating: 4, text: "Good gate. The first sketch was plainer than we asked, the second one was right." },
  { name: "Mohammed R", place: "Kengeri", when: "Jul 2023", rating: 4.5, text: "Bought handrail pipe and brackets. Staff showed the difference in thickness." },
  { name: "Latha C", place: "RR Nagar", when: "Jun 2023", rating: 4.5, text: "Glass and steel on the stair. Clamps are covered and do not catch clothes." },
  { name: "Ganesh M", place: "Jayanagar", when: "May 2023", rating: 4.5, text: "Compound railing between the pillars. Spacing is even all the way." },
  { name: "Priya H", place: "Vijayanagar", when: "Apr 2023", rating: 5, text: "Kitchen basket slides straight. They checked the cabinet before cutting." },
  { name: "Sunil B", place: "Kumaraswamy Layout", when: "Mar 2023", rating: 3.5, text: "Railing is usable, but dust from grinding was left on the steps. We had to clean it." },
  { name: "Anjali K", place: "Uttarahalli", when: "Feb 2023", rating: 4.5, text: "They replaced an old shaky rail. New one is quiet when you walk up." },
  { name: "Karthik S", place: "Banashankari", when: "Jan 2023", rating: 5, text: "Entrance gate height matches the compound wall. Lock sits in the right place." },
  { name: "Fathima N", place: "JP Nagar", when: "Dec 2022", rating: 4.5, text: "SS sections for a small rack. Cut lengths were correct." },
  { name: "Rohit D", place: "Kengeri", when: "Nov 2022", rating: 4, text: "Balcony work is good. Communication on the phone was slow for two days." },
  { name: "Bhavana T", place: "RR Nagar", when: "Oct 2022", rating: 5, text: "Handrail return at the bottom is smooth. No sharp end." },
  { name: "Yusuf L", place: "Jayanagar", when: "Sep 2022", rating: 4.5, text: "Grill pattern is simple and strong. What we asked for." },
  { name: "Sneha V", place: "Vijayanagar", when: "Aug 2022", rating: 5, text: "Glass railing does not rattle. Clamps were tightened again on the last day." },
  { name: "Manjunath A", place: "Uttarahalli", when: "Jul 2022", rating: 4.5, text: "Steel chair set for outside. Colour has held up." },
  { name: "Neha G", place: "Banashankari", when: "Jun 2022", rating: 4.5, text: "Stair rail follows the bend properly. No flat spot in the curve." },
  { name: "Abdul K", place: "JP Nagar", when: "May 2022", rating: 5, text: "Price was discussed at the shop and stayed the same after fitting." },
  { name: "Triveni P", place: "Kengeri", when: "Apr 2022", rating: 4.5, text: "Window safety grill fitted on a Saturday. House was left tidy." },
  { name: "Lokesh R", place: "RR Nagar", when: "Mar 2022", rating: 4, text: "Gate is sturdy. The closer they fitted is a bit stiff, still works." },
  { name: "Padma E", place: "Jayanagar", when: "Feb 2022", rating: 3.5, text: "Work is acceptable. The team arrived late on two mornings, which was inconvenient." },
  { name: "Nikhil J", place: "Vijayanagar", when: "Jan 2022", rating: 5, text: "Rod railing on the mezzanine. Straight, and the posts are plumb." },
  { name: "Ayesha M", place: "Uttarahalli", when: "Dec 2021", rating: 4.5, text: "They suggested 304 for the open balcony. It has not spotted." },
  { name: "Chetan W", place: "Banashankari", when: "Nov 2021", rating: 5, text: "Full stair railing, both sides. Looks like one piece." },
  { name: "Radha I", place: "JP Nagar", when: "Oct 2021", rating: 4.5, text: "Small grill for the utility window. Finished the same week." },
  { name: "Sameer Q", place: "Kengeri", when: "Sep 2021", rating: 4.5, text: "Bought fittings with the pipe so we did not run around. Helpful." },
  { name: "Veena O", place: "RR Nagar", when: "Aug 2021", rating: 5, text: "Balcony railing and a short handrail inside. Both match." }
];

const colors = ["#3949ab", "#8e24aa", "#00897b", "#ef6c00", "#c62828", "#1565c0", "#6d4c41", "#2e7d32"];
const grid = document.getElementById("reviews-grid");
const moreButton = document.getElementById("reviews-more");
const pageSize = 5;
let shown = pageSize;

function starRow(rating) {
  const full = Math.floor(rating);
  const half = rating % 1 !== 0;
  let marks = "";
  for (let i = 1; i <= 5; i += 1) {
    if (i <= full) marks += '<span class="g-star filled">★</span>';
    else if (half && i === full + 1) marks += '<span class="g-star half">★</span>';
    else marks += '<span class="g-star">★</span>';
  }
  return `<div class="g-stars" aria-label="${rating} stars">${marks}</div>`;
}

function paint() {
  grid.innerHTML = sampleReviews.map((review, index) => {
    const initial = review.name.trim().charAt(0);
    const color = colors[index % colors.length];
    return `
      <article class="google-review-card${index < shown ? "" : " is-hidden"}">
        <div class="g-review-top">
          <span class="g-avatar" style="background:${color}">${initial}</span>
          <div class="g-review-identity">
            <div class="g-name">${review.name}</div>
            <div class="g-meta">Sample · ${review.place}</div>
          </div>
        </div>
        <div class="g-rating-row">
          ${starRow(review.rating)}
          <span class="g-when">${review.when}</span>
        </div>
        <p class="g-text">${review.text}</p>
      </article>`;
  }).join("");

  if (shown >= sampleReviews.length) {
    moreButton.hidden = true;
  }
}

moreButton.addEventListener("click", () => {
  shown = Math.min(shown + pageSize, sampleReviews.length);
  paint();
});

paint();

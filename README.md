#  Vocational Course Reservation Engine

A high-performance checkout flow and inventory management interface for a tech vocational school. This application allows users to browse available training cohorts, reserve seats, and dynamically calculate their total reservation fees.

##  Technical Architecture
This project bypasses traditional React `useState` prop-drilling by leveraging a centralized state machine. 

* **Frontend:** React 18
* **State Management:** Zustand (Handling multiple array states simultaneously)
* **Styling:** Vanilla CSS (Flexbox layout architecture)
* **Formatting:** Native `Intl.NumberFormat` for automated Nigerian Naira (₦) localization

##  Core Engineering Features
* **Dual-Array State Management:** Manages both a `courses` inventory array and a `cart` array within a single global vault.
* **Dynamic Inventory Control:** Utilizes strict JavaScript `.map()` functions to deduct available seats immutably. Buttons automatically disable and read "Sold Out" when `availableSeats` reaches zero.
* **Derived Math Computations:** Total cart costs are *not* stored in memory. The system uses the `.reduce()` method to calculate the total sum on-the-fly during the component's render cycle, guaranteeing zero state desynchronization.
* **Unique Cart Indexing:** Leverages timestamp IDs (`Date.now()`) to ensure duplicate course selections are handled correctly within the React virtual DOM.

##  How to Run Locally
1. Clone the repository: `git clone <your-repo-link>`
2. Install dependencies: `npm install`
3. Start the local server: `npm run dev`


const reviews = [
    {
        userReviews: [
            {
                user: 'រី គីមឆាយ',
                time: 'បានបង្ហោះ 2 ម៉ោងមុន',
                content: 'សៀវភៅនេះជាការចម្រុះដ៏ល្អនៃប្រវត្តិសាស្ត្រខ្មែរពីសម័យបុរាណដល់សម័យទំនើប។',
                profileImage: '../assets/img/avata/avatar-2.jpg' // Add path to profile image for each user
            },
            {
                user: 'យុន​ វិនន័រ ',
                time: 'បានបង្ហោះ 3 ម៉ោងមុន',
                content: 'ការសិក្សាដ៏ជ្រាលជ្រៅលើអរិយធម៌ និងការប្រែប្រួលនៃប្រទេសកម្ពុជាទាំងអស់។',
                profileImage: '../assets/img/avata/avatar-3.jpg'
            },
            {
                user: 'លី ឧត្តរា',
                time: 'បានបង្ហោះ 1 ថ្ងៃមុន',
                content: 'សៀវភៅនេះផ្តល់ការយល់ដឹងច្បាស់លាស់អំពីអតីតកាល និងក្តីសង្ឃឹមសម្រាប់អនាគត។',
                profileImage: '../assets/img/avata/avatar-5.jpg'
            }
        ]
    }
];

let currentReviewIndex = 0;  // Book index, keeping it 0 for now
let currentUserReviewIndex = 0;  // Tracks the user review index

// Function to update review content based on the current index
function updateReviewDetails(bookIndex, reviewIndex) {
    const review = reviews[bookIndex].userReviews[reviewIndex];
    const reviewDetails = document.getElementById('review-details');

    // Fade out the container by reducing opacity
    reviewDetails.style.opacity = '0';

    // Wait for the fade-out transition to finish before updating the content
    setTimeout(() => {
        // Update the content
        document.getElementById('user-name').innerText = review.user;
        document.getElementById('user-time').innerText = review.time;
        document.getElementById('user-review').innerText = review.content;

        // Update profile image
        document.getElementById('user-profile').src = review.profileImage;

        // Fade in the content by restoring the opacity
        reviewDetails.style.opacity = '1';
    }, 300); // Reduced delay to match the faster transition (0.3s)
}

// Event listeners for navigation arrows
document.getElementById('arrow-up').addEventListener('click', function(event) {
    event.preventDefault();  // Prevent the default scroll-to-top behavior

    // Move backward (previous user): if at the first user, loop back to the last user
    currentUserReviewIndex = (currentUserReviewIndex === 0) ? reviews[currentReviewIndex].userReviews.length - 1 : currentUserReviewIndex - 1;
    updateReviewDetails(currentReviewIndex, currentUserReviewIndex);
});

document.getElementById('arrow-down').addEventListener('click', function(event) {
    event.preventDefault();  // Prevent the default scroll-to-top behavior

    // Move forward (next user): if at the last user, loop back to the first user
    currentUserReviewIndex = (currentUserReviewIndex === reviews[currentReviewIndex].userReviews.length - 1) ? 0 : currentUserReviewIndex + 1;
    updateReviewDetails(currentReviewIndex, currentUserReviewIndex);
});

// Function to handle like button
function toggleLike(btn) {
    btn.classList.toggle('liked');
}


///////lock
const screens = document.querySelectorAll('.book-screen');
let currentScreen = 0;

// Next button functionality
document.getElementById('nextPage').addEventListener('click', () => {
  if (currentScreen < screens.length - 1) {
    screens[currentScreen].style.display = 'none';
    currentScreen++;
    screens[currentScreen].style.display = 'flex';
  }
  toggleButtons();
});

// Previous button functionality
document.getElementById('prevPage').addEventListener('click', () => {
  if (currentScreen > 0) {
    screens[currentScreen].style.display = 'none';
    currentScreen--;
    screens[currentScreen].style.display = 'flex';
  }
  toggleButtons();
});

// Back to Website button functionality
document.getElementById('backToWebsiteBtn').addEventListener('click', () => {
  window.location.href = "../pages/demo-book.html"; // Replace with actual website URL
});

// Enable/Disable buttons based on the current screen
function toggleButtons() {
  document.getElementById('prevPage').disabled = currentScreen === 0;
  document.getElementById('nextPage').disabled = currentScreen === screens.length - 1;
}
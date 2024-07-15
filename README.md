Airbnb-like Project
This is a web application inspired by Airbnb, where users can browse, list, and review vacation rentals. The project is built using Express.js, Node.js, and EJS templates, with additional features such as user authentication, wishlist functionality, and interactive maps.

Features
User Authentication: Users can sign up, log in, and manage their profiles.
Listings Management: Users can browse, create, edit, and delete listings.
Reviews: Users can leave reviews and ratings for listings.
Wishlist: Users can add listings to their wishlist.
Interactive Maps: Integrated with MapTiler for geocoding and displaying listings on a map.
Responsive Design: The application is fully responsive, ensuring a seamless experience on both desktop and mobile devices.
Technologies Used
Backend: Node.js, Express.js
Frontend: EJS, Bootstrap, CSS
Database: MongoDB
Authentication: Passport.js
File Uploads: Cloudinary, Multer
Geocoding and Maps: MapTiler
Validation: Joi
Installation
Clone the repository:

bash
Copy code
git clone https://github.com/your-username/airbnb-like-project.git
cd airbnb-like-project
Install dependencies:

bash
Copy code
npm install
Set up environment variables:

Create a .env file in the root directory.

Add the following environment variables:

plaintext
Copy code
DATABASE_URL=<your-mongodb-url>
CLOUDINARY_CLOUD_NAME=<your-cloudinary-cloud-name>
CLOUDINARY_KEY=<your-cloudinary-key>
CLOUDINARY_SECRET=<your-cloudinary-secret>
MAPTILER_API_KEY=<your-maptile-api-key>
SESSION_SECRET=<your-session-secret>
Run the application:

bash
Copy code
npm start
The application will be available at http://localhost:3000.

Usage
Browse Listings: View all available listings on the homepage.
User Authentication: Sign up and log in to create and manage listings.
Create Listings: Authenticated users can add new listings with images, descriptions, and location details.
Review Listings: Users can leave reviews and ratings for each listing.
Wishlist: Add your favorite listings to your wishlist for quick access.
Interactive Map: View listings on an interactive map with location details.
Project Structure
app.js: Main application file.
routes/: Contains all route handlers for listings, reviews, and users.
models/: Mongoose models for listings, reviews, and users.
views/: EJS templates for rendering pages.
public/: Static files such as CSS, JavaScript, and images.
middleware/: Custom middleware for authentication and validation.
Contributing
Contributions are welcome! Please fork the repository and submit a pull request with your changes.

 

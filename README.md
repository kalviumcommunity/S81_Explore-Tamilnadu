# Explore Tamil Nadu

## Project Overview
Explore Tamil Nadu is a web application designed to guide visitors to the best travel destinations in Tamil Nadu, India. Our site enriches the travel experience by providing:
- **Current weather updates**
- **Detailed descriptions** of popular tourist spots
- **Personalized recommendations** based on user preferences

### **Objective**
The main objective of this project is to attract tourists to Tamil Nadu by offering a clear guideline for travel planning.

## **Key Features**
- **Location Details**: Information about breathtaking locations such as Kodaikanal, Ooty, and more.
- **Weather Updates**: Live weather information for specific locations of interest.
- **User Reviews and Ratings**: A platform for users to post comments and rate various aspects of their visits.
- **Local Events and Festivals**: Information on local events and festivals, including timings and details.

## **Tech Stack**
- **Frontend**: React.js, HTML, CSS, Bootstrap, Tailwind CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **API Integration**: OpenWeatherMap API for weather updates

## **Why This Project?**
I chose this project because it combines my passion for travel and technology. By working on this project, I aim to create a platform that helps travelers from long distances who may not know the local language or how to navigate the area.

## **Frontend Development**
### **Project Setup**
1. Created a `pages` folder in the `src` directory.
2. Inside the `pages` folder, created several files:
   - `Home.jsx`
   - `Login.jsx`
   - `Navbar.jsx`

### **Login Page Development**
1. **Installed Tailwind CSS**:
   ```sh
   npm install tailwindcss @tailwindcss/vite
   ```
2. **Configured Vite**:
   - Added the required modules in `vite.config.js`.
3. **Integrated React Router** for client-side routing.
4. **Installed React Icons**:
   ```sh
   npm install react-icons
   ```
5. **Created a Navbar Component**:
   - Added navigation links to the `Home` and `Login` pages.
   - Linked the pages in the Navbar.
6. **Implemented Features for the Login Page**:
   - Added a **"Show Password"** feature.
   - Used an **eye icon** from `react-icons` to toggle password visibility.

## **Deployment**
- The frontend can be deployed using **Netlify**:
  - **Build Command**: `npm run build`
  - **Publish Directory**: `dist`

## **Installation & Usage**
### **Clone the repository**

### **Install dependencies**
```sh
npm install
```

### **Run the development server**
```sh
npm run dev
```

### **Build for production**
```sh
npm run build
```


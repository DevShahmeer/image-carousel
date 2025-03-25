# React Image Carousel

A responsive, feature-rich image carousel component built with React and Vite. This carousel displays a series of images with automatic rotation, manual navigation controls, and loading state management.

## 🔍 Features

- **Automatic Image Rotation**: Images automatically advance every 5 seconds
- **Manual Navigation**: 
  - Previous/Next buttons for direct navigation
  - Navigation dots to jump to specific slides
- **Loading State**: Displays a loading message while images are being prepared
- **Responsive Design**: Works across different screen sizes


## 📷 Screenshots

![Screenshot 2025-03-25 234359](https://github.com/user-attachments/assets/df3b5b0c-9a77-44d8-8127-b3d53d89ea1c)


## 🛠️ Technologies Used

- [React](https://react.dev/) - UI library (v19.0.0)
- [Vite](https://vitejs.dev/) - Build tool and development server
- [ESLint](https://eslint.org/) - Code linting

## 🏗️ Project Structure

```
image-carousel/
├── public/
│   └── vite.svg
├── src/
│   ├── assets/
│   │   └── react.svg
│   ├── App.css         # Carousel styling
│   ├── App.jsx         # Main carousel component
│   ├── index.css       # Global styles
│   └── main.jsx        # React entry point
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── README.md
└── vite.config.js
```

## 🔧 Installation & Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/image-carousel.git
   cd image-carousel
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Build for production:
   ```bash
   npm run build
   ```

## 🧩 How to Use

1. Import the carousel component into your React application:
   ```jsx
   import Carousel from './path/to/Carousel';
   ```

2. Use the component with your own images:
   ```jsx
   const MyPage = () => {
     const images = [
       "https://example.com/image1.jpg",
       "https://example.com/image2.jpg",
       "https://example.com/image3.jpg",
     ];
     
     return <Carousel images={images} />;
   };
   ```

3. Customize carousel settings as needed.

## 🔄 Future Improvements

- Add touch/swipe support for mobile devices
- Implement transition animations between slides
- Add keyboard navigation support
- Create customization options for timing, transitions, and styles
- Add accessibility features


## 👤 Author

[DevShahmeer](https://github.com/DevShahmeer)

---

Feel free to contribute to this project by opening issues or submitting pull requests!

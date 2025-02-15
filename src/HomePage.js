import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./Home.css";





 export const products = [
  // Electronics & Technologies
  {
    title: "Gaming Headphone",
    description: "High-quality sound with noise cancellation.",
    category: "Electronics & Technologies",
    price: "DH239.00",
    image: require("./assets/images/gamingphonebg.png"),
    city: "Casablanca",
    id: 1,
    datePoster: "2025-02-01",  // Example date
  },
  {
    title: 'Macbook Pro 13"',
    description: "Powerful 8-core GPU, 8GB RAM, 256GB.",
    category: "Electronics & Technologies",
    price: "DH1099.00",
    image: require("./assets/images/mac13bg.png"),
    city: "Rabat",
    id: 2,
    datePoster: "2025-01-25",  // Example date
  },
  {
    title: "Smart TV 4K",
    description: "55-inch UHD display, HDR10+, built-in apps.",
    category: "Electronics & Technologies",
    price: "DH699.00",
    image: require("./assets/images/SmartTV4Kbg.png"),
    city: "Marrakech",
    id: 3,
    datePoster: "2025-02-03",  // Example date
  },
  {
    title: "Wireless Earbuds",
    description: "Bluetooth 5.3, noise cancellation, 24h battery.",
    category: "Electronics & Technologies",
    price: "DH129.00",
    image: require("./assets/images/WirelessEarbudsbg.png"),
    city: "Tanger",
    id: 4,
    datePoster: "2025-01-20",  // Example date
  },

  // Clothes
  {
    title: "Leather Jacket",
    description: "Genuine leather, stylish and comfortablee.",
    category: "Clothes",
    price: "DH149.00",
    image: require("./assets/images/LeatherJacketbg.png"),
    city: "Casablanca",
    id: 5,
    datePoster: "2025-01-15",  // Example date
  },
  {
    title: "Sneakers Nike Air",
    description: "Sporty and comfortable, available in multiple.",
    category: "Clothes",
    price: "DH99.00",
    image: require("./assets/images/SneakersNikeAirbg.png"),
    city: "Fès",
    id: 6,
    datePoster: "2025-01-10",  // Example date
  },
  {
    title: "Elegant Dress",
    description: "Perfect for formal occasions, high-quality .",
    category: "Clothes",
    price: "DH79.00",
    image: require("./assets/images/ElegantDressbg.png"),
    city: "Meknès",
    id: 7,
    datePoster: "2025-02-05",  // Example date
  },
  {
    title: "Men's Suit",
    description: "Classic black suit, includes jacket and pants.",
    category: "Clothes",
    price: "DH199.00",
    image: require("./assets/images/menbg.png"),
    city: "Agadir",
    id: 8,
    datePoster: "2025-02-02",  // Example date
  },

  // Vehicles
  {
    title: "Toyota Corolla 2022",
    description: "Low mileage, excellent condition, automatic.",
    category: "Vehicles",
    price: "DH18,500.00",
    image: require("./assets/images/Toyotabg.png"),
    city: "Rabat",
    id: 9,
    datePoster: "2025-01-30",  // Example date
  },
  {
    title: "Yamaha Scooter 125cc",
    description: "Fuel efficient, perfect for city rides lorem eps.",
    category: "Vehicles",
    price: "DH2,900.00",
    image: require("./assets/images/YamahaScooter125ccbg.png"),
    city: "Casablanca",
    id: 10,
    datePoster: "2025-02-07",  // Example date
  },
  {
    title: "BMW X5",
    description: "Luxury SUV, full options, low mileage lorem.",
    category: "Vehicles",
    price: "DH49,000.00",
    image: require("./assets/images/BMWX5bg.png"),
    city: "Marrakech",
    id: 11,
    datePoster: "2025-01-22",  // Example date
  },
  {
    title: "Electric Bike",
    description: "Eco-friendly, 40km battery range, lightweight.",
    category: "Vehicles",
    price: "DH1,200.00",
    image: require("./assets/images/ElectricBikebg.png"),
    city: "Fès",
    id: 12,
    datePoster: "2025-02-04",  // Example date
  },

  // Jobs & Internship
  {
    title: "Web Developer Internship",
    description: "3-month internship, remote work possible.",
    category: "Jobs & Internship",
    price: "Unpaid",
    image: require("./assets/images/WebDeveloperInternship.jpg"),
    city: "Casablanca",
    id: 13,
    datePoster: "2025-01-28",  // Example date
  },
  {
    title: "Marketing Assistant",
    description: "Full-time, experience in digital marketing required.",
    category: "Jobs & Internship",
    price: "DH1,20000/month",
    image: require("./assets/images/Marketing.jpg"),
    city: "Rabat",
    id: 14,
    datePoster: "2025-02-06",  // Example date
  },
  {
    title: "Graphic Designer",
    description: "Freelance position, Adobe Suite required lorem.",
    category: "Jobs & Internship",
    price: "DH8000/month",
    image: require("./assets/images/GraphicDesigner.jpg"),
    city: "Meknès",
    id: 15,
    datePoster: "2025-02-01",  // Example date
  },
  {
    title: "Customer Service Agent",
    description: "Call center job, bilingual required,lorem.",
    category: "Jobs & Internship",
    price: "DH9000/month",
    image: require("./assets/images/Customer.jpg"),
    city: "Agadir",
    id: 16,
    datePoster: "2025-01-17",  // Example date
  },

  // Apartments
  {
    title: "2-Bedroom Apartment",
    description: "Furnished, near city center, spacious, great view.",
    category: "Apartments",
    price: "DH2500/month",
    image: require("./assets/images/bed.jpg"),
    city: "Casablanca",
    id: 17,
    datePoster: "2025-01-19",  // Example date
  },
  {
    title: "Studio Apartment",
    description: "Compact modern and cozy, ideal for students.",
    category: "Apartments",
    price: "DH3000/month",
    image: require("./assets/images/StudioApartment.jpg"),
    city: "Rabat",
    id: 18,
    datePoster: "2025-02-03",  // Example date
  },
  {
    title: "Luxury Villa",
    description: "5 bedrooms, swimming pool, private garden.",
    category: "Apartments",
    price: "DH3,5000/month",
    image: require("./assets/images/LuxuryVilla.jpg"),
    city: "Marrakech",
    id: 19,
    datePoster: "2025-02-08",  // Example date
  },
  {
    title: "Shared Room for Rent",
    description: "Ideal for students, all of utilities included.",
    category: "Apartments",
    price: "DH550/month",
    image: require("./assets/images/SharedRoom.jpg"),
    city: "Fès",
    id: 20,
    datePoster: "2025-01-25",  // Example date
  },
];


const categories = [
  {
    name: "Apartment",
    image: require("./assets/images/appipi.jpg"),
    path: "/category/Apartments",
  },
  {
    name: "Clothes",
    image: require("./assets/images/clothessse.jpg"),
    path: "/category/Clothes",
  },
  {
    name: "Electronics & Technologies",
    image: require("./assets/images/electronics.jpg"),
    path: "/category/Electronics & Technologies",
  },
  {
    name: "Jobs & Internship",
    image: require("./assets/images/jobbbs.jpg"),
    path: "/category/Jobs & Internship",
  },
  {
    name: "Vehicles",
    image: require("./assets/images/vihicles.jpg"),
    path: "/category/Vehicles",
  },
];

const categoriesList = [
  "All Categories",
  "Electronics & Technologies",
  "Clothes",
  "Vehicles",
  "Jobs & Internship",
  "Apartments",
];

const citiesList = [
  "All Cities",
  "Casablanca",
  "Rabat",
  "Marrakech",
  "Fès",
  "Tanger",
  "Agadir",
  "Meknès",
];

const Home = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [selectedCity, setSelectedCity] = useState("All Cities");




  // const [darkMode, setDarkMode] = useState(
  //   localStorage.getItem("darkMode") === "true"
  // );
  
  // useEffect(() => {
  //   localStorage.setItem("darkMode", darkMode);
  //   document.body.classList.toggle("dark-mode", darkMode);
  // }, [darkMode]);
  
  // const toggleDarkMode = () => {
  //   setDarkMode((prevMode) => !prevMode);
  // };
  

  const [ads, setAds] = useState([...products]);

  useEffect(() => {
    const storedAds = JSON.parse(localStorage.getItem("ads")) || [];
    const newAds = storedAds.filter(
      (storedAd) => !ads.some((ad) => ad.id === storedAd.id)
    );
    setAds((prevAds) => [...prevAds, ...newAds]); // Ajouter seulement les nouvelles annonces
  }, [ads]);  // Ajoutez ici `ads` pour résoudre l'avertissement
  

  const deleteAd = (index) => {
    const newAds = [...ads];
    newAds.splice(index, 1);
    setAds(newAds);
    localStorage.setItem("ads", JSON.stringify(newAds)); // Sauvegarder dans le localStorage
  };
  const filteredProducts = ads.filter((product) => {
    return (
      (selectedCategory === "All Categories" ||
        product.category === selectedCategory) &&
      (selectedCity === "All Cities" || product.city === selectedCity)
    );
  });

  return (
    <div className="all">
      <div className="home-container">
        <div className="home-content">
        {/* <button className="dark-mode-toggle" onClick={toggleDarkMode}>
  {darkMode ? "🌙" : "☀️"}
</button> */}
          <div className="text-container">
            <h2 className="tit">{t("title")}</h2>
            {/* <button className="buy-button">{t("buyNow")}</button> */}
          </div>
        </div>

        <div className="info-section">
          <h2>{t("welcome")}</h2>
          <p>{t("description")}</p>
          <button className="post-ad-button">
            <b>{t("postAd")}</b>
          </button>
        </div>

        <div className="categories">
          {categories.map((category, index) => (
            <div
              key={index}
              className="category-card"
              onClick={() => navigate(category.path)}
            >
              <div className="category-image-container">
                <img
                  src={category.image}
                  alt={category.name}
                  className="category-image"
                />
                <div className="category-overlay">{category.name}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="filters-container">
          <select
            className="filter-select"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            {categoriesList.map((category, index) => (
              <option key={index} value={category}>
                {category}
              </option>
            ))}
          </select>
          <select
            className="filter-select"
            value={selectedCity}
            onChange={(e) => setSelectedCity(e.target.value)}
          >
            {citiesList.map((city, index) => (
              <option key={index} value={city}>
                {city}
              </option>
            ))}
          </select>
        </div>

        <div className="products-section">
          {filteredProducts.map((product, index) => (
            <div className="product-card" key={index}>
              <div className="image-container">
                <img
                  src={product.image}
                  alt={product.title}
                  className="product-image"
                />
              </div>
              <div className="product-info">
                <h3>{product.title}</h3>
                <p>{product.description}</p>
                <p>
                  <b>Category:</b> {product.category}
                </p>
                <p>
                  <b>Price:</b> {product.price}
                </p>
                <p>
                  <b>City:</b> {product.city}
                </p>
              </div>
              {/* Afficher le bouton de suppression uniquement pour les annonces ajoutées via le formulaire */}
              {product.id > products.length && (
                <div className="btncards">
                  <button
                    className="delete-button"
                    onClick={() => deleteAd(index)}
                  >
                    Delete
                  </button>
                </div>
              )}
              <div className="btncards">
                <button className="message-button">Message</button>
              </div>
            </div>
          ))}
        </div>

        <footer className="footer">
          <div className="footer-content">
            <div className="footer-section">
              <h3>About Us</h3>
              <ul>
                <li>Our Story</li>
                <li>Careers</li>
                <li>Contact Us</li>
                <li>Blog</li>
              </ul>
            </div>
            <div className="footer-section">
              <h3>Quick Links</h3>
              <ul>
                <li>Browse Categories</li>
                <li>Post an Ad</li>
                <li>Help & Support</li>
                <li>FAQ</li>
              </ul>
            </div>
            <div className="footer-section">
              <h3>Popular Pages</h3>
              <ul>
                <li>Our Services</li>
                <li>Contact Us</li>
                <li>Blog</li>
                <li>About Us</li>
              </ul>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Home;

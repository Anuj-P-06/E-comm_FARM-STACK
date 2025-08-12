# E-commerce FARM Stack Application

A modern, full-stack e-commerce web application built with **F**astAPI, **R**eact, and **M**ongoDB (FARM Stack). This application provides a complete product management system with shopping cart functionality and an admin panel.

##  Features

### User Features
- **Browse Products**: View all available products in a responsive grid layout
- **Shopping Cart**: Add products to cart, view cart items, and calculate total price
- **Remove from Cart**: Easy removal of unwanted items
- **Real-time Updates**: Cart count updates instantly in navigation

### Admin Features
- **Product Management**: Add new products with name, ID, and price
- **Form Validation**: Required field validation and proper data types
- **Success Feedback**: Confirmation alerts for successful operations

### Technical Features
- **RESTful API**: Complete CRUD operations for products
- **Responsive Design**: Mobile-first design using Tailwind CSS
- **Real-time Communication**: Frontend-backend integration via Axios
- **Database Integration**: MongoDB Atlas cloud database
- **Error Handling**: Comprehensive error handling on both frontend and backend

##  Tech Stack

### Frontend
- **React 18** - Modern JavaScript library for building user interfaces
- **React Router DOM** - Client-side routing for single-page application
- **Axios** - HTTP client for API communication
- **Tailwind CSS** - Utility-first CSS framework for styling
- **Vite** - Fast build tool and development server

### Backend
- **FastAPI** - Modern, fast Python web framework
- **Python 3.8+** - Programming language
- **Pydantic** - Data validation using Python type annotations
- **PyMongo** - MongoDB driver for Python
- **Uvicorn** - ASGI web server implementation

### Database
- **MongoDB Atlas** - Cloud-hosted MongoDB database
- **MongoDB** - NoSQL document database

##  Project Structure

```
E-comm_FARM-STACK/
├── backend/                          # FastAPI backend application
│   ├── database/                     # Database-related modules
│   │   ├── models.py                 # Pydantic models for data validation
│   │   └── schemas.py                # MongoDB document serialization
│   ├── configuration.py             # Database connection and configuration
│   ├── main.py                      # FastAPI application and routes
│   ├── test_backend.py              # API testing script
│   ├── .env                         # Environment variables (not in repo)
│   └── venv/                        # Python virtual environment
│
├── frontend/                         # React frontend application
│   ├── public/                       # Static assets
│   ├── src/                         # Source code
│   │   ├── pages/                   # Page components
│   │   │   ├── AdminPage.jsx        # Admin product management
│   │   │   ├── CartPage.jsx         # Shopping cart display
│   │   │   └── UserPage.jsx         # Product listing and cart addition
│   │   ├── App.jsx                  # Main application component
│   │   ├── main.jsx                 # Application entry point
│   │   ├── App.css                  # Component-specific styles
│   │   └── index.css                # Global styles and Tailwind imports
│   ├── package.json                 # Node.js dependencies and scripts
│   ├── package-lock.json            # Dependency lock file
│   ├── vite.config.js              # Vite configuration
│   ├── tailwind.config.js          # Tailwind CSS configuration
│   ├── postcss.config.js           # PostCSS configuration
│   └── eslint.config.js            # ESLint configuration
│
├── .gitignore                       # Git ignore file
└── README.md                        # Project documentation
```

##  Installation & Setup

### Prerequisites
- **Node.js** (v16 or higher)
- **Python** (v3.8 or higher)
- **MongoDB Atlas Account** (free tier available)

### Backend Setup

1. **Navigate to backend directory**
   ```bash
   cd backend
   ```

2. **Create virtual environment**
   ```bash
   python -m venv venv
   ```

3. **Activate virtual environment**
   ```bash
   # Windows
   venv\Scripts\activate
   
   # macOS/Linux
   source venv/bin/activate
   ```

4. **Install dependencies**
   ```bash
   pip install fastapi uvicorn pymongo python-dotenv pydantic
   ```

5. **Create environment file**
   ```bash
   # Create .env file in backend directory
   touch .env
   ```

6. **Configure environment variables**
   ```env
   MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/?retryWrites=true&w=majority
   DB_NAME=ecommerce_db
   ```

7. **Start the backend server**
   ```bash
   uvicorn main:app --reload --port 8000
   ```

### Frontend Setup

1. **Navigate to frontend directory**
   ```bash
   cd frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

The application will be available at:
- **Frontend**: http://localhost:5173 (or http://localhost:3000)
- **Backend API**: http://localhost:8000
- **API Documentation**: http://localhost:8000/docs

##  Database Schema

### Product Collection
```javascript
{
  "_id": ObjectId,           // MongoDB auto-generated ID
  "name": String,            // Product name (required)
  "product_id": String,      // Custom product identifier (required)
  "price": Number            // Product price (required, must be positive)
}
```

##  API Endpoints

### Products API

| Method | Endpoint | Description | Request Body |
|--------|----------|-------------|--------------|
| GET | `/products` | Retrieve all products | None |
| POST | `/products` | Create a new product | `{"name": "string", "product_id": "string", "price": number}` |
| PUT | `/products/{id}` | Update a product by ID | `{"name": "string", "product_id": "string", "price": number}` |
| DELETE | `/products/{id}` | Delete a product by ID | None |

### Example API Responses

**GET /products**
```json
[
  {
    "id": "64f8a1b2c3d4e5f6g7h8i9j0",
    "name": "Wireless Headphones",
    "product_id": "WH001",
    "price": 99.99
  }
]
```

**POST /products**
```json
{
  "id": "64f8a1b2c3d4e5f6g7h8i9j0",
  "name": "Wireless Headphones",
  "product_id": "WH001",
  "price": 99.99
}
```

##  How It Works

### Application Flow

1. **User Access**: Users navigate to the application homepage displaying all products
2. **Product Display**: Products are fetched from MongoDB via FastAPI and displayed in a responsive grid
3. **Add to Cart**: Users can add products to their cart (stored in React state)
4. **Cart Management**: Users can view cart items, see total price, and remove items
5. **Admin Operations**: Admins can add new products through a dedicated form
6. **Data Persistence**: All product data is stored in MongoDB Atlas cloud database

### Component Architecture

#### Frontend Components

**App.jsx**
- Main application component
- Manages global cart state
- Handles routing between pages
- Provides navigation with cart count

**UserPage.jsx**
- Displays product grid
- Fetches products from API on component mount
- Handles adding products to cart
- Responsive design with Tailwind CSS

**AdminPage.jsx**
- Product creation form
- Form validation and state management
- API integration for product creation
- Success/error feedback

**CartPage.jsx**
- Displays cart items in organized layout
- Calculates and displays total price
- Handles item removal from cart
- Empty cart state handling

#### Backend Architecture

**main.py**
- FastAPI application instance
- CORS middleware configuration
- API route definitions
- Error handling and validation

**models.py**
- Pydantic models for request/response validation
- Type hints and data validation
- Business logic constraints

**schemas.py**
- MongoDB document serialization
- Converts BSON to JSON-serializable dictionaries
- Handles ObjectId conversion

**configuration.py**
- Database connection management
- Environment variable loading
- Connection testing and error handling

##  Environment Variables

Create a `.env` file in the backend directory with the following variables:

```env
# MongoDB Configuration
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/?retryWrites=true&w=majority
DB_NAME=ecommerce_db

# Optional: Add other environment-specific variables
DEBUG=True
SECRET_KEY=your-secret-key-here
```

**Security Note**: Never commit the `.env` file to version control. It's included in `.gitignore` for security.

##  Testing

### Backend Testing

Run the comprehensive test suite:

```bash
cd backend
python test_backend.py
```

The test script will:
1. Create a test product
2. Retrieve all products
3. Update the test product
4. Delete the test product

### Manual Testing

**Frontend Testing**
1. Navigate to http://localhost:5173
2. Verify product display on homepage
3. Add products to cart and verify cart count
4. Navigate to cart page and verify items
5. Remove items from cart
6. Navigate to admin page and add a new product

##  Deployment

### Backend Deployment (Heroku/Railway/DigitalOcean)

1. **Update dependencies**
   ```bash
   pip freeze > requirements.txt
   ```

2. **Create Procfile**
   ```
   web: uvicorn main:app --host 0.0.0.0 --port $PORT
   ```

3. **Environment Variables**
   - Set `MONGO_URI` and `DB_NAME` in deployment platform
   - Ensure MongoDB Atlas allows connections from all IPs (0.0.0.0/0)

### Frontend Deployment (Netlify/Vercel)

1. **Build the application**
   ```bash
   npm run build
   ```

2. **Update API endpoints**
   - Replace `http://localhost:8000` with your deployed backend URL
   - Update CORS settings in backend to include frontend domain

##  Contributing

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. **Make your changes**
4. **Commit your changes**
   ```bash
   git commit -m "Add: your feature description"
   ```
5. **Push to the branch**
   ```bash
   git push origin feature/your-feature-name
   ```
6. **Open a Pull Request**

##  License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Screenshots
<img width="1912" height="906" alt="Image" src="https://github.com/user-attachments/assets/d481edbf-be75-4607-833e-087d62ec8f4b" />
<img width="1919" height="912" alt="Image" src="https://github.com/user-attachments/assets/36e51f88-ba0f-4fb7-a4f8-531409e1d2cd" />
<img width="1915" height="906" alt="Image" src="https://github.com/user-attachments/assets/85458848-f299-4b85-8a70-cc897a95b02b" />

##  Acknowledgments

- FastAPI documentation and community
- React.js team for the excellent framework
- MongoDB team for the robust database solution
- Tailwind CSS for the utility-first CSS framework

##  Support

If you encounter any issues or have questions:

1. Check the [Issues](https://github.com/Anuj-P-06/E-comm_FARM-STACK/issues) page
2. Create a new issue with detailed description
3. Contact: [your-email@example.com]

---

**⭐ If you found this project helpful, please consider giving it a star!**

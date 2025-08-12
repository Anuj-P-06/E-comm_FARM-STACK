import os
from dotenv import load_dotenv
from pymongo import MongoClient

load_dotenv()

MONGO_URI = os.getenv("MONGO_URI")
DB_NAME = os.getenv("DB_NAME")

if not MONGO_URI or not DB_NAME:
    raise ValueError("Missing MONGO_URI or DB_NAME in .env file.")

# Connect to MongoDB
client = MongoClient(MONGO_URI)
db = client[DB_NAME]
products_collection = db["products"]

# Test connection
try:
    client.admin.command("ping")
    print("✅ Connected to MongoDB successfully!")
except Exception as e:
    raise ConnectionError(f"Could not connect to MongoDB: {e}")
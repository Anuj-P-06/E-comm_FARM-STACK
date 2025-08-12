from fastapi import FastAPI, HTTPException
from bson import ObjectId
from database.models import Product  # FIXED import
from database.schemas import product_entity, products_entity
from configuration import products_collection
from fastapi.middleware.cors import CORSMiddleware


app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",  # Vite default
        "http://localhost:3000",  # React dev server default
        "http://127.0.0.1:5173",
        "http://127.0.0.1:3000"
    ],
  # frontend URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/products")
def get_products():
    docs = products_collection.find()
    return products_entity(docs)

@app.post("/products")
def create_product(product: Product):
    doc = product.dict()
    result = products_collection.insert_one(doc)
    created = products_collection.find_one({"_id": result.inserted_id})
    return product_entity(created)

@app.put("/products/{id}")
def update_product(id: str, product: Product):
    try:
        oid = ObjectId(id)
    except:
        raise HTTPException(status_code=400, detail="Invalid ID format")
    
    updated = products_collection.update_one({"_id": oid}, {"$set": product.dict()})
    if updated.matched_count == 0:
        raise HTTPException(status_code=404, detail="Product not found")
    return {"message": "updated"}

@app.delete("/products/{id}")
def delete_product(id: str):
    try:
        oid = ObjectId(id)
    except:
        raise HTTPException(status_code=400, detail="Invalid ID format")
    
    deleted = products_collection.delete_one({"_id": oid})
    if deleted.deleted_count == 0:
        raise HTTPException(status_code=404, detail="Product not found")
    return {"message": "deleted"}

from pydantic import BaseModel

class Product(BaseModel):
    name: str
    product_id: str
    price: float
from bson import ObjectId

# convert a Mongo document to JSON-serializable dict

def product_entity(doc) -> dict:
    if not doc:
        return None
    return {
        "id": str(doc.get("_id")),
        "name": doc.get("name"),
        "product_id": doc.get("product_id"),
        "price": doc.get("price"),
    }


def products_entity(cursor) -> list:
    return [product_entity(d) for d in cursor]
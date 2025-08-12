#import requests
#
#BASE_URL = "http://127.0.0.1:8000"
#
#def test_create_product():
#    payload = {
#        "name": "Test Product",
#        "product_id": "P1001",
#        "price": 99.99
#    }
#    r = requests.post(f"{BASE_URL}/products", json=payload)
#    print("Create Product Response:", r.status_code, r.json())
#    return r.json().get("id")
#
#def test_get_products():
#    r = requests.get(f"{BASE_URL}/products")
#    print("Get Products Response:", r.status_code, r.json())
#
#def test_update_product(product_id):
#    payload = {
#        "name": "Updated Product",
#        "product_id": "P1001",
#        "price": 149.99
#    }
#    r = requests.put(f"{BASE_URL}/products/{product_id}", json=payload)
#    print("Update Product Response:", r.status_code, r.json())

#def test_delete_product(product_id):
#    r = requests.delete(f"{BASE_URL}/products/{product_id}")
#    print("Delete Product Response:", r.status_code, r.json())

#if __name__ == "__main__":
    # Step 1: Create
#    pid = test_create_product()

    # Step 2: Get
#    test_get_products()

    # Step 3: Update
 #   if pid:
#        test_update_product(pid)

    # Step 4: Delete
#    if pid:
#        test_delete_product(pid)

## API List:

### Buyer:

1. Log In
1. Front Page
1. Store List by location
1. Search Store by keyword
1. View Store Summary (Buyer)
1. View Self Info (Buyer)
1. Edit Self Info (Buyer)
1. Edit Cart
1. List Cart Items
1. View Order Info
1. Update Order Status (Buyer)
1. Edit Order Info
1. Order List

### Seller

1. Log In
1. Create Store
1. Add/Edit Inventory
1. View Store Info (Seller)
1. Edit Store Info
1. Cancel Order
1. Update Order Status  (Seller)
1. List Order
1. View Order


## Tables

### Store
```
    id
    logo
    address
    city
    owner_id: user.id
    name
    lat
    lng
    description
    tags: [tag.id]
    phone_number
    create_time
```

### User
```
    openid
    name
    lat
    lng
    address
    city
    phone_number
    create_time
```

### Product
```
    id
    store_id:store.id
    name
    price
    tag
    has_gst
    has_pst
    create_time
```

### Cart
```
    id
    user_id:user.id
    product_id:product.id
    amount    
    create_time
```

### Order
```
    id
    user_id:user.id
    total_price
    tax ?
    store_id: store.id
    contact_number
    contact_address
    contact_prefer_time
    status
    create_time
```

### Order Item
```    
    product_id.product.id
    price
    amount
    order_id:order.id
    create_time
```

### Order History
```
    order_id:order.id
    from
    to
    by
    create_time
```

### Tag
```
    id
    name
    create_time
``` 

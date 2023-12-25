<?php include 'connect.php'; ?>

<!DOCTYPE html>
<html>
<head>
    <title>Add Product</title>
</head>
<body>
    <h2>Add Product</h2>
    <form action="add_product.php" method="post">
        <label for="name">Product Name:</label>
        <input type="text" id="name" name="name" required><br><br>
        
        <label for="quantity">Quantity:</label>
        <input type="number" id="quantity" name="quantity" required><br><br>
        
        <input type="submit" name="submit" value="Add Product">
    </form>

    <?php
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $name = $_POST['name'];
        $quantity = $_POST['quantity'];

        // Insert data into table
        $sql = "INSERT INTO products (name, quantity) VALUES ('$name', '$quantity')";

        if ($conn->query($sql) === TRUE) {
            echo "Product added successfully";
        } else {
            echo "Error: " . $sql . "<br>" . $conn->error;
        }
    }
    ?>

</body>
</html>

<?php $conn->close(); ?>

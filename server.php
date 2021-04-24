<!DOCTYPE html>
    <html>
        <head>
            <title>server</title>
        </head>
        <body>
            <section>
                <h1>the next lines return from the server:</h1>
                <?php
                    $name = $_GET["name"];
                    $color = $_GET["color"];
                    $cost = $_GET["cost"];
                    $amount = $_GET["amount"];
                    $cost *= $amount;
                    echo "<h2>The product is: " . $name . "</h2>";
                    echo "<h2>the product color is: " . $color . "</h2>";
                    echo "<h2>it will cost: " . $cost . "</h2>";
                ?>
            </section>
        </body>
    </html>
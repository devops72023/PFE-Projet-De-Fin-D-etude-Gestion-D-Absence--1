<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ajout Hotel</title>
    <link rel="stylesheet" href="STYLE.CSS">
</head>
<body>
    <h1> Ajouter Hotel</h1>
    <form action="insertHotel.php" method="post">
        <label for="designation">Designation</label>
        <input type="text" name="designation" id="designation"><br>
        <label for="adresse">adresse</label>
        <input type="text" name="adresse" id="adresse"><br>
        <label for="ville">Ville</label>
        <select name="ville" id="ville">
            <?php
                $fp = fopen('ville.txt', 'r');
                while(!feof($fp)){
                    $ville = fgets($fp);
                    echo "<option>".$ville."</option>";
                }
            ?>
        </select><br>
        <label for="cp">Code Postal</label>
        <input type="text" name="cp" id="cp"><br>
        <label for="th">Type Hotel</label>
        <select name="th" id="th">
            <option>Riad</option>
            <option>Auberge</option>
            <option>Maison d'hote</option>
            <option>Hotel</option>
        </select><br>
        <label for="nbC">Nombres de chambres</label>
        <input type="number" name="nbC" id="nbC"><br>
        <label for="tel">Tel hotel</label>
        <input type="tel" name="tel" id="tel"><br>
        <label for="email">Email</label>
        <input type="email" name="email" id="email"><br>
        <input type="submit" name="submit" value="Ajouter Hotel">
    </form>
</body>
</html>
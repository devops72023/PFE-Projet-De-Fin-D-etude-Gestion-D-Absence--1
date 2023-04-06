<?php
    session_start();
    include 'connexion.php';
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Choix Hotel</title>
    <link rel="stylesheet" href="STYLE.CSS">
</head>
<body>
    <form action="" method="post">
        <h2>Choix Hotel</h2>
        <div>
            <label for="ville">Ville</label>
            <select name="ville" id="ville">
                <?php
                    $fp = fopen('ville.txt', 'r');
                    while(!feof($fp)){
                        $ville = fgets($fp);
                        echo "<option>".$ville."</option>";
                    }
                ?>
            </select>
        </div>
        <div>
            <label for="th">Type Hotel</label>
            <select name="th" id="th">
                <option>Riad</option>
                <option>Auberge</option>
                <option>Maison d'hote</option>
                <option>Hotel</option>
            </select>
        </div>
        <input type='submit' name="submit" value="Valider">
    </form>
    <?php 
        if(isset($_POST['submit'])){
            $ville = $_POST['ville'];
            $th = $_POST['th'];
            $req = mysqli_query($con, "SELECT * FROM `hotels` WHERE ville='$ville' AND typeHotel='$th'") or die(mysqli_error($con));
    ?>
    <table border="1px" width="500px">
        <tr>
            <td>Designation</td>
            <td>Type</td>
            <td>Ville</td>
            <td>Email</td>
            <td>Choisir</td>
        </tr>
        <?php
            while($row = mysqli_fetch_assoc($req)){
                echo "
                    <tr>
                        <td>{$row['designation']}</td>
                        <td>{$row['typeHotel']}</td>
                        <td>{$row['ville']}</td>
                        <td>{$row['email']}</td>
                        <td><a href='reserverChambre.php?idHotel={$row['idHotel']}'>Choisir</a></td>
                    </tr>
                ";
            }
        }
        ?>
    </table>
</body>
</html>
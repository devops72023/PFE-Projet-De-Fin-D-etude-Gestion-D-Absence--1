<?php
    session_start();
    include 'connexion.php';
    if(isset($_POST['submit'])){
        $idClient = $_SESSION['idClient'];
        $idChambre =  $_POST['idChambre'];
        $arv = $_POST['arv'];
        $depart = $_POST['depart'];
        $sql = "INSERT INTO `reservations`(`idReservation`, `dateArrivee`, `dateDepart`, `etatReservation`, `idClient`, `idChambre`) VALUES (null, '$arv', '$depart', 'En cours', '$idClient', '$idChambre')";
        $req = mysqli_query($con, $sql) or die("Erreur dans la reservation");
    }
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
            <label for="chambre">Chambre</label>
            <select name="idChambre" id="chambre">
                <?php
                    $req = mysqli_query($con, "SELECT * FROM chambres WHERE idHotel={$_GET['idHotel']}") or die("Error");
                    while($r = mysqli_fetch_assoc($req))
                        echo "<option value={$r['idChambre']}>{$r['typeChambre']}-{$r['numeroChambre']}</option>";
                ?>
            </select>
        </div>
        <div>
            <label for="arv">Date D'Arrivee</label>
            <input type="date" name="arv" id="arv">
        </div>
        <div>
            <label for="depart">Date De Depart</label>
            <input type="date" name="depart" id="depart">
        </div>
        <input type='submit' name="submit" value="Valider">
    </form>
</body>
</html>
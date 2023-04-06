<?php
    session_start();
    include 'connexion.php';

    if(isset($_POST['submit'])){
        $login = $_POST['login'];
        $pwd = $_POST['pwd'];
        $req = mysqli_query($con, "SELECT * FROM `clients` WHERE login='$login' AND motDePasse='$pwd'") or die(mysqli_error($con));
        $client = mysqli_fetch_array($req);
        if ($client){
            $_SESSION['idClient'] = $client['idClient'];
        }
        else echo "No client found";
    }
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>authentification Client</title>
    <link rel="stylesheet" href="STYLE.CSS">
</head>
<body>
    <form action="./authentificationClient.php" method="post">
        <h2>Authentification Client</h2>
        <div>
            <label for="login">Login</label>
            <input type="text" name="login" id="login">
        </div>
        <div>
            <label for="pwd">Mot de Pass</label>
            <input type="password" name="pwd" id="pwd">
        </div>
        <input type='submit' name="submit" value="Valider">
    </form>
</body>
</html>
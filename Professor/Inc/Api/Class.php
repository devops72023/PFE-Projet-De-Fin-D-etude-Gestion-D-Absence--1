<?php
    include "../../../Inc/db.inc.php";
    include '../../../Inc/utils.inc.php';
    include 'api_func.inc.php';

    if(!isAuthenticated($conn)){
        echo json_encode(['code'=>401, 'message'=>'User not logged in']);
        exit;
    }

    if(isset($_GET['codeClass'])){
        $codeClass = $_GET['codeClass'];
        $req = mysqli_query($conn, "SELECT * FROM etudiants WHERE codeClasse='$codeClass'");
        $Etudiants = array();
        while ($row = mysqli_fetch_array($req)){
            $Etudiants[count($Etudiants)] = renderEtudiant($row);
        }
        echo json_encode($Etudiants);
    }
?>

<?php
    include 'connexion.php';

    if(isset($_POST['submit'])){
        $des = $_POST['designation'];
        $adr = $_POST['adresse'];
        $ville = $_POST['ville'];
        $cp = $_POST['cp'];
        $tph = $_POST['th'];
        $nbC = $_POST['nbC'];
        $tel = $_POST['tel'];
        $email = $_POST['email'];

        $sql = "INSERT INTO `hotels`(`idHotel`, `designation`, `adresse`, `ville`, `codePostal`, `email`, `tel`, `typeHotel`, `nombreDeChambre`) VALUES (null, '$des','$adr','$ville','$cp','$email','$tel','$tph','$nbC')";
        mysqli_query($con, $sql) or die(mysqli_error($con));
        
        if(!mysqli_error($con)) header('location:AjoutHotel.php');
    }
?>
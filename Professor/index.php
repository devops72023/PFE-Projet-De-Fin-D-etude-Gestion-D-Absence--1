<?php 
    include '../Inc/auth.inc.php';
    if (!$fetchedUser){
        header('Location:/');
    }
    include 'Inc/Header.php';
?>

<main>
    <?php 
        if (isset($_GET['etudiant'])){
            include 'Inc/List_etudiants.php';
        }else include 'Inc/List_classes.php';
    ?>
</main>
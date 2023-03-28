<?php
    include '../Inc/auth.inc.php';
    if (!$fetchedUser){
        header('Location:/');
    }
    setcookie("user", "", time() - 3600, '/');
    header('Location:/');
?>
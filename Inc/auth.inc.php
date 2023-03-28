<?php
    session_start();
    include("db.inc.php");
    $fetchedUser = '';
    
    if(isset($_COOKIE['user'])){
        $uid = json_decode($_COOKIE['user']);
        $res = mysqli_query($conn, "SELECT * From professeurs WHERE codeProf=$uid[0] AND password=$uid[1]");
        $fetchedUser = mysqli_fetch_array($res);
    }
    
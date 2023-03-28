<?php
    $host = "localhost";
    $username = "kemora13";
    $password = 'kemora13';
    $database = "absence";
    $conn = mysqli_connect($host, $username, $password, $database) or die("Couldn't connect to the database");
    
    // if($conn->connect_error){
    //     echo "Error connecting to the database";
    // }
    // else{
    //     echo "";
    // }

    // mysqli_query($conn, "INSERT INTO `professeurs` set codeProf='4', nomProf='[value-2]', prenomProf='[value-3]', email='[value-4]', genre='[value-5]'), image='default.png', password='password'");
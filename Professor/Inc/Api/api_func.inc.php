<?php
    session_start();
    function isAuthenticated($conn){
        if(isset($_SESSION['user'])){
            $uid = json_decode($_SESSION['user']);
            mysqli_query($conn, "SELECT * From professeurs WHERE codeProf='$uid[0]' AND password='$uid[1]'");
            if(mysqli_error($conn) or $uid[2] != 'professor'){
                return false;
            }
            return true;
        }
        return false;
    }
    
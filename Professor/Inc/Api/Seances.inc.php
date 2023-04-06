<?php
    include "../../../Inc/db.inc.php";
    include '../../../Inc/utils.inc.php';
    include 'api_func.inc.php';

    if(!isAuthenticated($conn)){
        echo json_encode(['code'=>401, 'message'=>'User not logged in']);
        exit;
    }
    
    if(isset($_GET['jour'])){
        $uid = json_decode($_SESSION['user']);
        echo Date('D', $GET['jour']);
        $req = mysqli_query($conn, "SELECT * From seance WHERE codeProf='$uid[0]' AND ");
    }
    
    // echo json_encode(renderProf(mysqli_fetch_assoc($req)));
?>

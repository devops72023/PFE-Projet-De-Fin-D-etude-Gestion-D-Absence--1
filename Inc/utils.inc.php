<?php
    function renderProf($user){
        $userObj = array(
            'codeProf' => $user['codeProf'],
            'nomProf' => $user['nomProf'],
            'prenomProf' => $user['prenomProf'],
            'email' => $user['email'],
            'gender' => $user['genre'],
            'image' => $user['image']
        );
        return $userObj;
    }
    function renderEtudiant($user){
        $userObj = array(
            'cne' => $user['CNE'],
            'orderNb' => $user['numOrdre'],
            'nom' => $user['nomEtudiant'],
            'prenom' => $user['prenomEtudiant'],
            'birthday' => $user['dateDeNaissance'],
            'gender' => $user['genre'],
            'image' => $user['image'],
            'email' => $user['email']
        );
        return $userObj;
    }
    function renderSeances($items){
        $seanceObj = array(
            'codeProf' => $items['codeProf'],
            'codeClass' => $items['codeClasse'],
            'nomClass' => $items['nomClasse'],
            'niveauClass' => $items['niveauClasse'],
            'codeMatiere' => $items['codeMatiere'],
            'nomMatiere' => $items['nomMatiere'],
            'jour' => $items['jour'],
            'heure' => $items['heure'],
            'duree' => $items['duree']
        );
        return $seanceObj;
    }

    function isAbsent($conn, $cne, $date, $hour){
        $req = mysqli_query($conn, "SELECT * FROM abscenter WHERE CNE='$cne'AND date='$date' AND heure='$hour'") or die(mysqli_error($conn));
        $res = mysqli_fetch_array($req);
        if(isset($res)) return true;
        return false;
    }
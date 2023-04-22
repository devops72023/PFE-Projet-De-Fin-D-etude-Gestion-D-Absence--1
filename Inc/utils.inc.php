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
    function renderHour(int $hour){
        switch ($hour){
            case 1: return '8:30';
            case 2: return '9:30';
            case 3: return '10:30';
            case 4: return '11:30';
            case 5: return '2:30';
            case 6: return '3:30';
            case 7: return '4:30';
            case 8: return '5:30';
        }
    }
    function renderPeriode($hour, int $duree){
        $str = '';
        for($i = 0; $i < strlen($hour); $i++){
            if ($hour[$i] == ':') break;
            $str .= $hour[$i];
        }
        $num = (int) $str;
        $v = $num + $duree;
        return $v . ':30';
    }
    function renderSeances($items, $total){
        $seanceObj = array(
            'codeProf' => $items['codeProf'],
            'codeClass' => $items['codeClasse'],
            'nomClass' => $items['nomClasse'],
            'niveauClass' => $items['niveauClasse'],
            'codeMatiere' => $items['codeMatiere'],
            'nomMatiere' => $items['nomMatiere'],
            'jour' => $items['jour'],
            'heure' => $items['heure'],
            'duree' => $items['duree'],
            'period' => renderHour($items['heure']).' - '.renderPeriode(renderHour($items['heure']), $items['duree']),
            'total' => $total
        );
        return $seanceObj;
    }

    function isAbsent($conn, $cne, $date, $hour){
        $req = mysqli_query($conn, "SELECT * FROM abscenter WHERE CNE='$cne'AND date='$date' AND heure='$hour'") or die(mysqli_error($conn));
        $res = mysqli_fetch_array($req);
        if(isset($res)) return ['isAbsent'=>true, 'comment'=>$res['commentaire']];
        return ['isAbsent' => false];
    }
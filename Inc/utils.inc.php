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

    function weekDay($name){
        switch ($name) {
            case 'Mon':
                return 0;
            case 'Tue':
                return 1;
            case 'Wed':
                return 2;
            case 'Thu':
                return 3;
            case 'Fri':
                return 4;
            case 'Sat':
                return 5;
            case 'Sun':
                return 6;
            default:
                return null;
        }
    }
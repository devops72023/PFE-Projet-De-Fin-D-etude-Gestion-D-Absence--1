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
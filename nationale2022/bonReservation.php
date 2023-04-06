<?php
include("connexion.php");
include("fpdf/fpdf.php");

$result=mysqli_query($con, "select * from chambres NATURAL JOIN reservations where idReservation=4");
$tabReservation=mysqli_fetch_assoc($result);

$result1=mysqli_query($con, "select * from hotels where idHotel={$tabReservation['idHotel']}");
$tabHotel=mysqli_fetch_assoc($result1);

$pdf=new fpdf("P","mm");
$pdf->SetFont('Arial','B',14);
$pdf->addpage();
$pdf->image("img/kasbah-hotel-tombouctou.jpg",10,10,30,30);
$pdf->setXY(50,20);
$pdf->cell(100,10,$tabHotel['typeHotel']."  ".$tabHotel['designation']."  ".$tabHotel['ville'],1);
$pdf->setXY(70,60);
$pdf->cell(60,10,"code du client: ".$tabReservation['idClient']);
$pdf->ln(15);
$pdf->SetFont('Arial','B',10);
$pdf->setTextColor(255,255,255);

$pdf->cell(37,10,@utf8_decode("Numéro de chambre"),1,0,"C",1);
$pdf->cell(35,10,"type dechambre",1,0,"C",1);
$pdf->cell(40,10,"Nombre de personnes",1,0,"C",1);
$pdf->cell(35,10,@utf8_decode("Date d'arrivée"),1,0,"C",1);
$pdf->cell(35,10,@utf8_decode("date de départ"),1,1,"C",1);

$pdf->setTextColor(0,0,0);
$pdf->cell(37,10,$tabReservation['numeroChambre'],1,0,"C");
$pdf->cell(35,10,$tabReservation['typeChambre'],1,0,"C");
$pdf->cell(40,10,$tabReservation['nombreDePersonne'],1,0,"C");
$pdf->cell(35,10,$tabReservation['dateArrivee'],1,0,"C");
$pdf->cell(35,10,$tabReservation['dateDepart'],1,1,"C");

$pdf->output();


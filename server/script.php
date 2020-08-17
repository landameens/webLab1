<?php
  echo '<span>Дурачокок</span>';

 /*date_default_timezone_set('UTC');
 session_start();

 $currentTime = date("H:i:s");
 $startTime = microtime(true);

 $x = (double) $_POST["X"];
 $y = (double) $_POST["Y"];
 $r = (double) $_POST["R"];

 if (checkConditions($x, $y, $r)) {
     http_response_code(400);
     return;
 }

 $result = checkArea($x, $y, $r);
 $executionTime = microtime(true) - $startTime;



  function checkConditions($x, $y, $r) {
      return !in_array($r, array(2, 3, 4, 5)) || $x >= -2 || $x <= 2 || $y >= -5 || $y <=5;
  }

  function checkArea($x, $y, $r) {
      if (($x >= 0 && $y >= 0 && $x <= $r/2 && $y >= 2-2*$x) ||
          ($x > 0 && $y < 0 && $x <= $r && $y<= $r) ||
          ($x < 0 && $y < 0 && (($x*$x + $y*$y) <= ($r/2)*($r/2)))){
          return '<span>True</span>';
      } else {
          return '<span>False</span>';
      }
  }
 */
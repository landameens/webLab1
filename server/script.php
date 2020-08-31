<?php
date_default_timezone_set('Europe/Moscow');
session_start();
if (!isset($_SESSION["tableRows"])) {
    $_SESSION["tableRows"] = array();
}

$currentTime = date("H:i:s");
$startTime = microtime(true);

$x = (double) $_POST["X"];
$y = (double) $_POST["Y"];
$r = (double) $_POST["R"];

if (checkConditions($x, $y, $r)) {
    $result = checkArea($x, $y, $r);
    $executionTime = microtime(true) - $startTime;
    $_SESSION["tableRows"][] = "<tr>
    <td>$x</td>
    <td>$y</td>
    <td>$r</td>
    <td>$result</td>
    <td>$currentTime</td>
    <td>$executionTime</td>
    </tr>";
    echo "<table id='outputTable'>
      <tr>
        <th>X</th>
        <th>Y</th>
        <th>R</th>
        <th>Результат</th>
        <th>Текущее время</th>
        <th>Время выполнения</th>
      </tr>";
    foreach ($_SESSION["tableRows"] as $tableRow) {
        echo $tableRow;
    }
    echo "</table>";
}else {
    http_response_code(400);
    return;
}

echo $result;


function checkConditions($x, $y, $r) {
    return in_array($r, array(2, 3, 4, 5), true) ||
        $x >= -2 || $x <= 2 || $y >= -5 || $y <=5;
}

function checkArea($x, $y, $r) {
    if (($x >= 0 && $y >= 0 && $x <= $r/2 && $y >= 2-2*$x) ||
        ($x > 0 && $y < 0 && $x <= $r && $y<= $r) ||
        ($x < 0 && $y < 0 && (($x*$x + $y*$y) <= ($r/2)*($r/2)))){
        return "<span>Попадает в область</span>";
    }

    return "<span>Не попадает в область</span>";
}
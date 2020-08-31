<?php
date_default_timezone_set('Europe/Moscow');
session_start();
if (!isset($_SESSION["tableRows"])) {
    $_SESSION["tableRows"] = array();
}

$currentTime = date("H:i:s");
$startTime = microtime(true);

$x = (double)$_POST["X"];
$y = (double)$_POST["Y"];
$r = (double)$_POST["R"];

if (checkConditions($x, $y, $r)) {
    $result = checkArea($x, $y, $r);
    $executionTime = ((microtime(true) - $startTime) * (10**6)) . "мкс";
    array_push($_SESSION["tableRows"], array( $x, $y, $r, $result, $currentTime, $executionTime));

    echo "
      <tr>
        <th>X</th>
        <th>Y</th>
        <th>R</th>
        <th>Результат</th>
        <th>Текущее время</th>
        <th>Время выполнения</th>
      </tr>";
    foreach ($_SESSION["tableRows"] as $tableRow) {
        echo "<tr>
        <td>$tableRow[0]</td>
        <td>$tableRow[1]</td>
        <td>$tableRow[2]</td>
        <td>$tableRow[3]</td>
        <td>$tableRow[4]</td>
        <td>$tableRow[5]</td>
      </tr>";
    }
} else {
    http_response_code(400);
    return;
}


function checkConditions($x, $y, $r)
{
    return in_array($r, array(2, 3, 4, 5), true) ||
        $x >= -2 || $x <= 2 || $y >= -5 || $y <= 5;
}

function checkArea($x, $y, $r)
{
    if ((($x >= 0) && ($y >= 0) && ($x <= ($r / 2)) && ($y <= $r - 2 * $x)) ||
        (($x > 0) && ($y < 0) && ($x <= $r) && ($y >= -$r)) ||
        (($x < 0) && ($y < 0) && (($x * $x + $y * $y) <= ($r / 2) * ($r / 2)) && ($x >= -($r / 2)) && ($y >= -($r / 2)))) {
        return "<span>Попадает в область</span>";
    }

    return "<span>Не попадает в область</span>";
}
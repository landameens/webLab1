const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

//прямоугольник
ctx.fillStyle = "rgba(250,119,229,0.46)";
ctx.fillRect(150, 180, 140, 70);

//дуга
ctx.moveTo(150, 180);
ctx.arc(150, 180, 70, Math.PI, (Math.PI / 2), true);
ctx.fill();

//треугольник
ctx.beginPath();
ctx.moveTo(150, 40);
ctx.lineTo(220, 180);
ctx.lineTo(150, 180);
ctx.lineTo(150, 40);
ctx.fill();
ctx.closePath();

//оси
ctx.fillStyle = "black";
ctx.beginPath();
ctx.moveTo(150, 0);
ctx.lineTo(150, 330);
ctx.moveTo(0, 180)
ctx.lineTo(330, 180);
ctx.closePath();
ctx.stroke();

//засечки
ctx.beginPath();
ctx.moveTo(147, 40);
ctx.lineTo(153, 40);
ctx.stroke();

ctx.moveTo(147, 110);
ctx.lineTo(153, 110);
ctx.stroke();

ctx.moveTo(220, 177);
ctx.lineTo(220, 183);
ctx.stroke();

ctx.moveTo(290, 177);
ctx.lineTo(290, 183);
ctx.stroke();

ctx.moveTo(147, 250);
ctx.lineTo(153, 250);
ctx.stroke();

ctx.moveTo(147, 320);
ctx.lineTo(153, 320);
ctx.stroke();

ctx.moveTo(80, 177);
ctx.lineTo(80, 183);
ctx.stroke();

ctx.moveTo(10, 177);
ctx.lineTo(10, 183);
ctx.stroke();

ctx.moveTo(320, 175);
ctx.lineTo(330, 180);
ctx.lineTo(320, 185);
ctx.stroke();

ctx.moveTo(145, 10);
ctx.lineTo(150, 0);
ctx.lineTo(155, 10);
ctx.stroke();
ctx.closePath();

ctx.font = "15px Verdana";
ctx.fillText("R/2", 210, 170);
ctx.fillText("R/2", 70, 170);
ctx.fillText("R/2", 160, 115);
ctx.fillText("R/2", 160, 255);

ctx.fillText("R", 285, 170);
ctx.fillText("R", 5, 170);
ctx.fillText("R", 160, 45);
ctx.fillText("R", 160, 325);


    let yExistence = $('#y_input').on('change', function () {
        yValueCheck($(this).val());
    });

    let rExistence = $('#r_input').on('change', function () {
        rValueCheck($(this).val());
    });

    let xExistence = !isNaN(parseFloat($('input[name=x]:checked').val()));

    $('.form_button').on('click', function () {
        let request = new FormData();

        request.append("Y", $('#y_input').val());
        request.append("R", $('#r_input').val());
        request.append("X", $('input[name=x]:checked').val());

        console.log(request);

        debugger;

        if (yExistence && rExistence && xExistence) {
            fetch('server/script.php', {
                method: "POST",
                headers: {"Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"},
                body: request,
            })
                .then(response => response.text())
                .then(result => console.log(result))
        }});

function yValueCheck(value) {
    const errorMessage = 'Значение Y должно быть в пределах от -5 до 5.';

    if (value === '') {
        $('#for_R').text('');
        return false;
    } else {
        if (!isNaN(Number(value))) {
            if (value >= -5) {
                if (value <= 5) {
                    console.log('Y validation is TRUE')
                    $('#for_Y').text('');
                    return true;
                } else {
                    $('#for_Y').text(errorMessage);
                    return false;
                }
            } else {
                $('#for_Y').text(errorMessage);
                return false;
            }
        } else {
            $('#for_Y').text(errorMessage);
            return false;
        }
    }
}

function rValueCheck(value) {
    const errorMessage = 'Значение R должно быть в пределах от 2 до 5.'

    if (value === '') {
        $('#for_R').text('');
        return false;
    } else {
        if (!isNaN(Number(value))) {
            if (value >= 2) {
                if (value <= 5) {
                    console.log('R validation is TRUE')
                    $('#for_R').text('');
                    return true;
                } else {
                    $('#for_R').text(errorMessage);
                    return false;
                }
            } else {
                $('#for_R').text(errorMessage);
                return false;
            }
        } else {
            $('#for_R').text(errorMessage);
            return false;
        }
    }
}

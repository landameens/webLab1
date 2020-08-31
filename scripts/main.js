let validateY = $('#y_input').on('change', function () {
    yValueCheck($(this).val());
});

let validateR = $('#r_input').on('change', function () {
    rValueCheck($(this).val());
});

let validateX = !isNaN(parseFloat($('input[name=x]:checked').val()));

$('.form_button').on('click', function () {
    let request = new FormData();

    request.append("Y", $('#y_input').val());
    request.append("R", $('#r_input').val());
    request.append("X", $('input[name=x]:checked').val());

    console.log(request);

    let yExistence = !isNaN(parseFloat($('#y_input').val()));
    let rExistence = !isNaN(parseFloat($('#r_input').val()));
    let xExistence = !isNaN(parseFloat($('input[name=x]:checked').val()));

    if (yExistence && rExistence && xExistence) {
        fetch('server/script.php', {
            method: "POST",
            body: request,
        })
            .then(response => response.text())
            .then(result => console.log(result))
    }
});

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

const $yInput = $('#y_input');
const $rInput = $('#r_input');
const $xInput = $('input[name=x]:checked');

$yInput.on('change', function () {
    yValueCheck($(this).val());
});

$rInput.on('change', function () {
    rValueCheck($(this).val());
});

$('.form_button').on('click', function () {
    const isValidY = !isNaN(parseFloat($yInput.val()));
    const isValidR = !isNaN(parseFloat($rInput.val()));
    const isValidX = !isNaN(parseFloat($xInput.val()));

    if (isValidY && isValidR && isValidX) {
        const request = new FormData();

        request.append("Y", $yInput.val());
        request.append("R", $rInput.val());
        request.append("X", $xInput.val());

        fetch('server/script.php', {
            method: "POST",
            body: request,
        })
            .then(response => response.text())
            .then(result => {
                console.log(result);
                $("table").html(result);
            })
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

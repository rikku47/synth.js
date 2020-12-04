function parseNoteValues() {
    return JSON.parse('notevalues.js');
}

function square() {

    var points = [];

    for (let index = 0; index <= 360; index++) {

        if (index == 0) {

            var point = {
                x: index,
                y: 200 + 100
            };

            points.push(point);

        } else if (index == 180) {

            var point = {
                x: index,
                y: 200 + 100
            };

            points.push(point);

            var point = {
                x: index,
                y: 200 - 100
            };

            points.push(point);

        } else if (index == 360) {

            var point = {
                x: index,
                y: 200 - 100
            };

            points.push(point);

            var point = {
                x: index,
                y: 200
            };

            points.push(point);

        }
    }

    return points;
}

function saw() {

    var points = [];

    for (let index = 0; index <= 360; index++) {

        if (index == 0) {

            var point = {
                x: index,
                y: 200 + 100
            };

            points.push(point);

        } else if (index == 180) {

            var point = {
                x: index,
                y: 200 - 100
            };

            points.push(point);

            var point = {
                x: index,
                y: 200 + 100
            };

            points.push(point);

        } else if (index == 360) {

            var point = {
                x: index,
                y: 200 - 100
            };
            points.push(point);

            var point = {
                x: index,
                y: 200
            };

            points.push(point);

        }
    }

    return points;
}

function triangle() {

    var points = [];

    for (let index = 0; index <= 360; index++) {

        var point = {
            x: index,
            y: 200
        };

        points.push(point);

    }

    return points;

}

var context = new AudioContext();
var o = context.createOscillator();
o.type = "sine";
o.connect(context.destination);
// o.start();
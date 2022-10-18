(function() {
    $(document).ready(function() {
        var count, rotateY, setValueFunc, value, zero;
        zero = 0;
        rotateY = 180;
        value = 0;
        count = 0;
        setValueFunc = function() {
            if (count % 2 === 0) {
                return $(".value_front").text(value);
            } else {
                return $(".value_back").text(value);
            }
        };
        $(".increment").on("mouseenter", function() {
            $(".increment").css({
                "opacity": "1"
            });
            return $(".decrement").css({
                "opacity": ".2"
            });
        });
        $(".container").on("mouseout", function() {
            $(".increment").css({
                "opacity": ".2"
            });
            return $(".decrement").css({
                "opacity": ".2"
            });
        });
        $(".decrement").on("mouseenter", function() {
            $(".decrement").css({
                "opacity": "1"
            });
            return $(".increment").css({
                "opacity": ".2"
            });
        });
        $(".increment").on("mousedown", function() {
            count++;
            $(".container").css({
                "transform": `rotateY(${zero = zero + rotateY}deg)`
            });
            value++;
            return setValueFunc();
        });
        return $(".decrement").on("mousedown", function() {
            count++;
            $(".container").css({
                "transform": `rotateY(${zero = zero - rotateY}deg)`
            });
            value--;
            return setValueFunc();
        });
    });

}).call(this);

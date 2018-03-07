// Wrap everything in a function
(function(i) {
    if (i=="OFF")
        return 0;
    else
        return Math.round(parseFloat(i) * 2.55);
})(input)
// input variable contains data passed by openhab
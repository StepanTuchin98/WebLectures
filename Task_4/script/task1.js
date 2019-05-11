function formSubmit() {
    var seq = document.getElementById("seq");
    var answer = document.getElementById("ans");
    answer.value = CharRemover(seq.value);


    function CharRemover(str) {
        str.split(" ").forEach(function (t) {
            for (var i = 0; i < t.length; i++) {
                if (t.lastIndexOf(t[i]) !== t.indexOf(t[i])) {
                    while(str.indexOf(t[i]) !== -1 && t[i] !== "!" &&
                    t[i] !== "." &&
                    t[i] !== "," &&
                    t[i] !== ";" &&
                    t[i] !== "?" &&
                    t[i] !== ":")
                        str = str.replace(t[i],"")
                }
            }
        });
        return str;
    }
}
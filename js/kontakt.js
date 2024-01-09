const myText = document.getElementById("text-area");

myText.style.cssText = `height: ${myText.scrollHeight}px; overflow-y: hidden`;
myText.addEventListener("input", () => {
    myText.style.height = "auto";
    myText.style.height = `${myText.scrollHeight}px`
});

$(".kontakt-forma-dva").submit((event) => {
    console.log("asdasdasd");
    event.preventDefault();
    const email = $('#email')[0].value;
    const pattern = /^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i;
    const poruka = $('textarea')[0].value;

    if (!pattern.test(email)) {
        window.alert('Morate popuniti email pravilno!');
        return;
    }
    if (poruka.length < 10) {
        window.alert('Poruka mora imati barem 10 slova!');
        return;
    }

    var broj1 = Math.floor(Math.random() * 21);
    var broj2 = Math.floor(Math.random() * 21);
    var zbir = broj1 + broj2;

    var spamTest = window.prompt(`Da bi ste poslali poruku molimo vas odgovorite na ovo anti-spam pitanje: ${broj1} + ${broj2} = ?`);

    console.log(zbir, spamTest);

    if (spamTest != zbir) {
        alert('Pogrešan odgovor na SPAM testu!');
        return;
    }

    $('form').html("<div class='poruka-poslata'><p style='color: lime; font-size: 32px; text-align: center;'>Poruka je poslata!</p><p style='color: white; text-align: center;'>Pokušaćemo da Vam odgovorimo u najkraćem mogućem roku.</p></div>");
});
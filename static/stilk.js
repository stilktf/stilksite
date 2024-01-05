function changeLanguage(event) {
    console.log("HELLO")
    let lang = event.target.value;
    console.log(lang)

    console.log("hi")
    window.location = "/" + lang;
}
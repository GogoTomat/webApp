function removeWords(sentence, words) {
    sentence = sentence.split(" ").filter((item) => !words.includes(item)).join(" ").replace(',', ' ').replace(/ .*/, '');
    return sentence;
}

let nickname = document.querySelector('#nickname')
if (nickname) {
    const upperNick = nickname.innerHTML.charAt(0).toUpperCase() + nickname.innerHTML.slice(1)

    const showNick = removeWords(upperNick, ["Dr.", "H.", "M.Si."])
    nickname = nickname.innerHTML = showNick
}

const showMenu = document.querySelector('#menu-click')
showMenu.addEventListener('click', function () {
    console.log("menu clicked");
    const icon = this.getAttribute("name") === "menu" ? "close" : "menu";
    this.setAttribute("name", icon)
    const menu = document.querySelector('#menu-nav')
    if (menu.classList.contains('menu-inactive')) {
        menu.classList.add('menu-active')
        menu.classList.remove('menu-inactive')
    } else {
        menu.classList.remove('menu-active')
        menu.classList.add('menu-inactive')
    }
})

const myMessage = document.querySelector('#pesan')
const messageCounter = document.querySelector('#pesan-counter')

if (myMessage) {
    const maxLength = myMessage.getAttribute('maxlength');
    const currentLength = myMessage.value.length;

    messageCounter.innerHTML = `${currentLength} / ${maxLength}`
    myMessage.addEventListener('input', function (e) {
        const target = e.target;

        if (target.keyCode == 13) {
            target.preventDefault();
        };
        target.value = target.value.replace(/(\r\n|\n|\r)/gm, "");

        const maxLength = target.getAttribute('maxlength');
        const currentLength = target.value.length;

        messageCounter.innerHTML = `${currentLength} / ${maxLength}`
    })

    myMessage.addEventListener('paste', function (e) {
        const target = e.target;
        this.value = this.value.replace(/\s+/g, " ")
    })
}


function main() {
    const config = {
        Domains: ["hackclub.com", "youtube.com", "discord.com", "reddit.com", "google.com"],
        TitleMovement: "",
        video: true,
        searchEngine: "google.com",
        background: "14147958_1920_1080_30fps.mp4" 
    }
    
    const welcome = [
        "Welcome",              // English
        "Bienvenido",           // Spanish
        "Bienvenue",            // French
        "Willkommen",           // German
        "Benvenuto",            // Italian
        "Bem-vindo",             // Portuguese
        "ようこそ",               // Japanese
        "欢迎",                  // Chinese
        "환영합니다",             // Korean
        "Добро пожаловать",     // Russian
        "Welkom",               // Dutch
        "Välkommen",            // Swedish
        "Velkommen",            // Norwegian
        "Tervetuloa",           // Finnish
        "Καλώς ήρθατε",         // Greek
        "Hoş geldiniz",         // Turkish
        "أهلاً وسهلاً",          // Arabic
        "ברוכים הבאים",         // Hebrew
        "स्वागत है",             // Hindi
        "ยินดีต้อนรับ",          // Thai
        "Chào mừng",            // Vietnamese
        "Witamy",               // Polish
        "Vitajte",              // Slovak
        "Üdvözöljük",           // Hungarian
        "Bine ați venit"        // Romanian
    ];

//  Ignore anything from below this line

    if (config.video) {
        const backVideo = document.createElement("video");
        backVideo.loop = true;
        backVideo.id = "backVideo";
        backVideo.autoplay = true;
        backVideo.src = config.background;
        backVideo.classList.add("videoPreLoad");
        backVideo.muted = true;
        document.body.appendChild(backVideo);
        setTimeout(() => {
            backVideo.classList.remove("videoPreLoad");
            backVideo.classList.add("video");
        }, 500);
    } else {
        document.body.style.background = config.background;
        document.body.style.backgroundSize = "cover";
        document.body.style.backgroundPosition = "center";
        document.body.style.backgroundRepeat = "no-repeat";
    }
    

    const apps = document.getElementById("apps");
    const input = document.getElementById("Search");

    const title = document.getElementById("title")

    input.placeholder = config.searchEngine === undefined? "Search a website" : `Search in ${config.searchEngine}`;
    if (config.TitleMovement === "") {

        let position = 0;
        let letterPos = 0;
        let deleating = true;

        setInterval(() => {
            if (deleating) {
                if (title.innerText.length === 1) {
                    title.style.opacity="0";
                    deleating = false;
                } else {
                    title.innerText=title.innerText.slice(0, -1);
                }
            } else {
                if (title.innerText.length === 1) {
                    if (position >= welcome.length) {
                        position = 0;
                    } else {
                        position++;
                    }
                    title.innerText=welcome[position][0];
                    title.innerText+=welcome[position][1];
                    title.style.opacity="1";
                    letterPos = 2;
                } else if (letterPos === welcome[position].length) {
                    deleating = true;
                } else {
                    title.innerText+=welcome[position][letterPos];
                    letterPos++;
                }
            }
        }, 175);
    } else {
        title.innerText = config.TitleMovement;
    }
    
    config.Domains.forEach((domain, id) => {
        apps.innerHTML += `<a href="https://${domain}" id="App${id}" class="apps">
            <img id="Image${id}" class="imageApp" src="https://www.google.com/s2/favicons?domain=${domain}&sz=64">
            <h5 class="appTitle" id="Title${id}">${domain}</h5>
        </a>`
    });

    window.addEventListener("keydown", (x) => {
        if (x.key === "Enter") {
            const ne = encodeURIComponent(input.value);
            if (config.searchEngine === "google.com") {
                window.location.href = `https://www.google.com/search?q=${ne}`;
            } else if (config.searchEngine === "duckduckgo.com") {
                window.location.href = `https://duckduckgo.com/?q=${ne}`;
            } else {
                window.location.href = ne;
            }
        }
    });

}

main();

console.log("Everything running succesful :D");
        const presentBox = document.getElementById('present_box');
        const present = document.getElementById('present');
        let presentState = 0;
        // Style the present box
        presentBox.style.width = "100vw";
        presentBox.style.height = "100vh";
        present.style.width = "100vw";
        present.style.height = "100vh";
                present.style.backgroundColor = "green";
        presentBox.style.display = "block";
        present.style.display = "none";
        present.style.justifyContent = "center";
        present.style.alignItems = "center";
        // Create content
                        const bbq = document.createElement('h1')
                const bbqContent = document.createTextNode("BBQ");
                bbq.appendChild(bbqContent);
                bbq.style.fontSize = "100px";
                bbq.style.position = "absolute";
                bbq.style.alignSelf = "start"
                function strobeColor(element, color1, color2, duration) {
                    let isColor1 = true;
                    setInterval(() => {
                        element.style.color = isColor1 ? color1 : color2;
                        isColor1 = !isColor1;
                    }, duration);
                }
                // Create the image element
                newIMG = document.createElement('img');
                newIMG.src = "./present.gif";
                newIMG.style.width = "75%";
                newIMG.style.height = "75%";
                edzhIMG = document.createElement('img');
                edzhIMG.src = "./bday.png";
                edzhIMG.style.width = "auto";
                edzhIMG.style.height = "75%";
                const rheinIMG = document.createElement('img');
                rheinIMG.src = "./giphy.gif";
                rheinIMG.style.width = "auto";
                rheinIMG.style.height = "75%";
                const rheinContent = document.createTextNode("Enjoy the taco man");
                const rheinText = document.createElement('h1');
                rheinText.appendChild(rheinContent);
                rheinText.style.fontSize = "100px";
                rheinText.style.transition = "0.5s";
                rheinText.style.transitionTimingFunction = "ease-in-out";
                rheinText.style.position = "absolute";
                rheinText.style.alignSelf = "start";
                rheinText.style.color = "yellow";
                const edzh = "09-05";
                    const casp = "13-05";
                    const rhein = "19-05";
                    const naur = "24-06";
                    const dudeArray = [edzh, casp, rhein, naur];
                function todayDate() {
                    const today = new Date();
                    const day = String(today.getDate()).padStart(2, '0');
                    const month = String(today.getMonth() + 1).padStart(2, '0');
                    const year = today.getFullYear();
                    let currentBday = null
                    for (let i = 0; i < dudeArray.length; i++) {
                        if (`${day}-${month}` === dudeArray[i]){
                            currentBday = dudeArray[i];
                            break;
                        } 
                }
                if (currentBday !== null) {
                            switch (currentBday) {
                                case edzh:
                                    presentBox.onclick = edzhPrez();
                                    break;
                                case casp:
                                    presentBox.onclick = CaspPrez();
                                    break;
                                default:
                                    presentBox.onclick = NoPrez();
                            }
                } else {
                    currentBday = NoPrez();
                }
            }
        presentBox.onclick = function() {
            rheinPrez();
        }
        present.onclick = function() {
            if (presentState === 1) {
                presentBox.style.display = "block";
                present.style.display = "none";
                presentState = 0;
            }
        };
        function NoPrez() {
            if (presentState === 0) {
                presentBox.style.display = "block";
                present.style.display = "none";
                presentState = 0;
            }
        };
        function edzhPrez() {
            if (presentState === 0) {
                presentBox.style.display = "none";
                present.style.display = "flex";
                present.appendChild(edzhIMG);

                presentState = 1;
            }
        };
        function CaspPrez() {
            if (presentState === 0) {
                presentBox.style.display = "none";
                present.style.display = "flex";
                present.appendChild(newIMG);
                                present.appendChild(bbq);
                strobeColor(bbq, "blue", "yellow", 1000);

                presentState = 1;
            }
        };
        function rheinPrez() {
            if (presentState === 0) {
                presentBox.style.display = "none";
                present.style.display = "flex";
                present.appendChild(rheinIMG);
                present.appendChild(rheinText);
                strobeColor(rheinText, "blue", "yellow", 300);
                presentState = 1;
            }
        };
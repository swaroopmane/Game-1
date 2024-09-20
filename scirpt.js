const charactersContainer = document.getElementById('characters');
const resultDiv = document.getElementById('result');
const nextButton = document.getElementById('next');
const levelDisplay = document.getElementById('levelDisplay');

const levels = [
    {
        characters: [
            { name: "शिक्षक", isVillain: false },
            { name: "पालक व्हिडिओ कॉल", isVillain: false },
            { name: "गृहकार्य करणारा विद्यार्थी", isVillain: false },
            { name: "फिशिंग पॉप-अप", isVillain: true }
        ]
    },
    {
        characters: [
            { name: "शाळेची बातमीपत्र", isVillain: false },
            { name: "पालक नियंत्रण", isVillain: false },
            { name: "शिक्षक व्हिडिओ लिंक", isVillain: false },
            { name: "फेक शाळेचा ई-मेल", isVillain: true }
        ]
    },
    {
        characters: [
            { name: "मित्राचा प्रोजेक्ट लिंक", isVillain: false },
            { name: "सुरक्षित वेबसाइटसंबंधी शिकवणे", isVillain: false },
            { name: "सुरक्षित साइटवर विद्यार्थी", isVillain: false },
            { name: "हॅकर प्रोफाइल", isVillain: true }
        ]
    },
    {
        characters: [
            { name: "ऑनलाइन गेम आमंत्रण", isVillain: false },
            { name: "खरे बातमी लेख", isVillain: false },
            { name: "संदिग्ध डाउनलोड लिंक", isVillain: true },
            { name: "कुटुंबासोबत व्हिडिओ कॉल", isVillain: false }
        ]
    },
    {
        characters: [
            { name: "शिक्षण क्विझ", isVillain: false },
            { name: "फ्री अॅप डाउनलोड", isVillain: true },
            { name: "विश्वासार्ह वेबसाइट", isVillain: false },
            { name: "ऑनलाइन खरेदी आदेश", isVillain: false }
        ]
    },
    {
        characters: [
            { name: "शाळेचा असाइनमेंट पेज", isVillain: false },
            { name: "अज्ञात मित्राची विनंती", isVillain: true },
            { name: "ऑनलाइन स्टडी ग्रुप", isVillain: false },
            { name: "शाळेचा कार्यक्रम जाहीरात", isVillain: false }
        ]
    },
    {
        characters: [
            { name: "संगीत स्ट्रीमिंग सेवा", isVillain: false },
            { name: "क्लिकबेट लेख", isVillain: true },
            { name: "क्लास शेड्यूल", isVillain: false },
            { name: "ऑनलाइन कोर्स नोंदणी", isVillain: false }
        ]
    },
    {
        characters: [
            { name: "फिटनेस चॅलेंज अॅप", isVillain: false },
            { name: "फेक चॅरिटी दान", isVillain: true },
            { name: "मित्राचा ब्लॉग", isVillain: false },
            { name: "इव्हेंट नोंदणी", isVillain: false }
        ]
    },
    {
        characters: [
            { name: "विश्वासार्ह स्रोताची बातमी", isVillain: false },
            { name: "परिचित गेमिंग साइट", isVillain: true },
            { name: "कुटुंबीयांचा ग्रुप चॅट", isVillain: false },
            { name: "समुदाय कार्यक्रम", isVillain: false }
        ]
    },
    {
        characters: [
            { name: "घरी असाइनमेंट", isVillain: false },
            { name: "ऑनलाइन क्विझ", isVillain: false },
            { name: "संदिग्ध ई-मेल अटॅचमेंट", isVillain: true },
            { name: "विश्वासार्ह ऑनलाइन लायब्ररी", isVillain: false }
        ]
    }
];

let currentLevel = 0;

function displayCharacters() {
    charactersContainer.innerHTML = '';
    const characters = levels[currentLevel].characters;

    characters.sort(() => Math.random() - 0.5); // Shuffle characters

    characters.forEach(character => {
        const charDiv = document.createElement('div');
        charDiv.classList.add('character');
        charDiv.innerText = character.name;
        charDiv.onclick = () => checkAnswer(character.isVillain);
        charactersContainer.appendChild(charDiv);
    });

    levelDisplay.innerText = `स्तर ${currentLevel + 1}`; // Update level display
}

function checkAnswer(isVillain) {
    if (isVillain) {
        resultDiv.innerText = "चांगला प्रयत्न! तुम्ही खलनायक शोधला!";
    } else {
        resultDiv.innerText = "अरेरे! तो खलनायक नाही!";
    }
    nextButton.style.display = 'block';
}

nextButton.onclick = () => {
    currentLevel++;
    if (currentLevel < levels.length) {
        resultDiv.innerText = '';
        nextButton.style.display = 'none';
        displayCharacters();
    } else {
        resultDiv.innerText = "बधाई! तुम्ही खेळ पूर्ण केला आहे!";
        nextButton.style.display = 'none';
    }
};

// Start the game
displayCharacters();

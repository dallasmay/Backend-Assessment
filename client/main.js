const complimentBtn = document.getElementById("complimentButton");
const fortuneBtn = document.getElementById("fortuneButton");
const quoteBtn = document.getElementById("quoteButton");
const quoteContainer = document.getElementById("quote-container");
const speakerContainer = document.getElementById("speaker");
const quoteForm = document.getElementById("input-form");
const deleteBtn = document.getElementById("deleteButton");

const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune")
        .then((res) => {
            const data = res.data;
            alert(data);
        })
};

const getQuote = () => {
    axios.get("http://localhost:4000/api/quote")
        .then((res) => {
            const {quote, speaker, image} = res.data;
            let words;
            words = quote.split(" ");
            words.unshift('"');
            words.push('"');

            async function myAsyncFunction() {
                for (let i = 0; i < words.length; i++) {
                    // Setting default delay time, testing for commas or periods to add pause by increasing delayTime (skipping the first element in the array as it will try to do .includes of undefined, throwing an error)
                    let delayTime = 250;
                    if (i !== 0) {
                        if (words[(i - 1)].includes(",")) {
                            delayTime = 950;
                        } else if (words[(i - 1)].includes(".")) {
                            delayTime = 1250;
                        }
                    };
                    // Creating span element (inline) and adding "hidden" class to it
                    let hiddenSpan = document.createElement("span");
                    hiddenSpan.classList.add("hidden");
                    
                    // Changing text content to current word and appending it to container
                    hiddenSpan.textContent = words[i] + " ";
                    quoteContainer.appendChild(hiddenSpan);
        
                    // Where the fun begins. Waits .25 seconds for all words minus words after commas or periods. Waits .95 seconds for words after commas and 1.25 seconds for words after periods
                    await delay(delayTime);
                    hiddenSpan.classList.toggle("reveal");
                };
                // Adding speaker to quote
                let speakerElement = document.createElement("div");
                speakerElement.classList.add("hidden");
                speakerElement.textContent = "-" + speaker;
                speakerContainer.appendChild(speakerElement);
                await delay(1500);
                speakerElement.classList.toggle("reveal");
            };
            myAsyncFunction();
        })
};

const postQuote = (e)  => {
    e.preventDefault();

    let quote = document.getElementById("quote-input");
    let speaker = document.getElementById("speaker-input");
    

    let bodyObj = {
        quote: quote.value,
        speaker: speaker.value, 
        image: ""
    }

    axios.post("http://localhost:4000/api/quoteInput", bodyObj).then((res) => {
        const {quote, speaker, image} = res.data;
            let words;
            words = quote.split(" ");
            words.unshift('"');
            words.push('"');

            async function myAsyncFunction() {
                for (let i = 0; i < words.length; i++) {
                    // Setting default delay time, testing for commas or periods to add pause by increasing delayTime (skipping the first element in the array as it will try to do .includes of undefined, throwing an error)
                    let delayTime = 250;
                    if (i !== 0) {
                        if (words[(i - 1)].includes(",")) {
                            delayTime = 950;
                        } else if (words[(i - 1)].includes(".")) {
                            delayTime = 1250;
                        }
                    };
                    // Creating span element (inline) and adding "hidden" class to it
                    let hiddenSpan = document.createElement("span");
                    hiddenSpan.classList.add("hidden");
                    
                    // Changing text content to current word and appending it to container
                    hiddenSpan.textContent = words[i] + " ";
                    quoteContainer.appendChild(hiddenSpan);
        
                    // Where the fun begins. Waits .25 seconds for all words minus words after commas or periods. Waits .95 seconds for words after commas and 1.25 seconds for words after periods
                    await delay(delayTime);
                    hiddenSpan.classList.toggle("reveal");
                };
                let speakerElement = document.createElement("div");
                speakerElement.classList.add("hidden");
                speakerElement.textContent = "-" + speaker;
                speakerContainer.appendChild(speakerElement);
                await delay(1500);
                speakerElement.classList.toggle("reveal");
            };
            myAsyncFunction();
    });

    quote.value = ''
    speaker.value = ''
};

const deleteAllInputQuotes = () => {
    axios.delete("http://localhost:4000/api/quoteDelete")
    .then((res) => {
        alert(res.data);
    })
};

// Setting up time delay function, makes setTimeout function run synchronously
function delay(n){
    return new Promise(function(resolve){
        setTimeout(resolve, n);
    });
};

complimentBtn.addEventListener('click', getCompliment);
fortuneBtn.addEventListener("click", getFortune);
quoteBtn.addEventListener("click", getQuote);
quoteForm.addEventListener("submit", postQuote);
deleteBtn.addEventListener("click", deleteAllInputQuotes);

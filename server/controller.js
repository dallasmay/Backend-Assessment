const quotes = [
    {
        quote: "In the darkest times, hope is something you give yourself. That is the meaning of inner strength",
        speaker: "Iroh",
        image: "https://i0.wp.com/www.society19.com/wp-content/uploads/2020/07/iroh.jpg?fit=1000%2C1000&ssl=1",
        id: 1
    }, 
    {
        quote: "Sometimes the best way to solve your own problems is to help someone else",
        speaker: "Iroh", 
        image: "https://upload.wikimedia.org/wikipedia/en/b/bb/General_Iroh.jpg",
        id: 2
    },
    {
        quote: "Happiness can be found, even in the darkest of times, if one only remembers to turn on the light",
        speaker: "Albus Dumbledore",
        image: "https://www.harrypotterfansclub.com/wp-content/uploads/what-is-the-full-name-of-albus-dumbledore-quora.jpeg",
        id: 3
    },
    {
        quote: "It is our choices that show what we truly are, far more than our abilities",
        speaker: "Albus Dumbledore",
        image: "https://fantasytopics.com/wp-content/uploads/2021/10/Richard-Harris-as-Dumbledore-1024x576.jpg.webp",
        id: 4
    },
    {
        quote: "Sometimes a hypocrite is nothing more than a man in the process of changing",
        speaker: "Dalinar Kholin",
        image: "https://preview.redd.it/nij2mkvzdde31.jpg?auto=webp&s=6ba4f53917ccac4efe45f2ba98358c88f434a20f",
        id: 5
    },
    {
        quote: "Aim for the sun. That way if you miss, at least your arrow will fall far away, and the person it kills will likely be someone you don't know",
        speaker: "Wit",
        image: "https://pbs.twimg.com/media/Ez_Ch0GUUAIzc80?format=jpg&name=medium",
        id: 6
    },
    {
        quote: "All you have to decide is what to do with the time that is given to you",
        speaker: "Gandalf",
        image: "",
        id: 7
    },
    {
        quote: "Some believe that it is only great power that can hold evil in check, but that is not what I have found. I found it is the small, everyday deeds of ordinary folk that keep the darkness at bay. Small acts of kindess and love",
        speaker: "Gandalf",
        image: "",
        id: 8
    }
];
module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },
    getFortune: (req, res) => {
        const fortunes = ["A lifetime friend shall soon be made", "Adventure can be real happiness", "All your hard work will soon pay off", "A beautiful, smart, and loving person will be coming into your life", "A friend is a present you give yourself", "Do not underestimate yourself. Human beings have unlimited potentials",];

        let randomIndex = Math.floor(Math.random() * fortunes.length);
        let randomFortune = fortunes[randomIndex];

        res.status(200).send(randomFortune);
    },
    getQuote: (req, res) => {
        
        // //choosing random quote
        // const indexGenerator = () => {
        //     return Math.floor(Math.random() * quotes.length);
        // };
        // let randomIndex = indexGenerator();    
        // let usedIndexes = [];
        // let randomQuote = "";
        // //ensuring no duplicate quotes per session
        // if (usedIndexes.length === 0) {
        //     usedIndexes.push(randomIndex);
        //     randomQuote = quotes[randomIndex].quote;
        // } else {
        //     while (usedIndexes.includes(randomIndex)) {
        //         indexGenerator();
        //     };
        // }
        let randomIndex = Math.floor(Math.random() * quotes.length);
        let randomQuoteObj = quotes[randomIndex];
        res.status(200).send(randomQuoteObj);
    },
    postQuote: (req, res) => {
        const quoteObject = req.body;
        quoteObject.id = quotes.length + 1;
        quotes.push(quoteObject);
        res.status(200).send(quoteObject);
    },
    deleteQuote: (req, res) => {
        if (quotes.length > 8) {
            quotes.splice(8, (quotes.length - 8))
            res.status(200).send("Quotes deleted successfully");
        } else {
            res.status(200).send("There are no inputted quotes to delete");
        }
            
    },

}
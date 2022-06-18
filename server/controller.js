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
        const quotes = [
            {
                quote: "In the darkest times, hope is something you give yourself. That is the meaning of inner strength",
                speaker: "Uncle Iroh",
                image: "https://i0.wp.com/www.society19.com/wp-content/uploads/2020/07/iroh.jpg?fit=1000%2C1000&ssl=1"
            }, 
            {
                quote: "Sometimes the best way to solve your own problems is to help someone else",
                speaker: "Uncle Iroh", 
                image: "https://upload.wikimedia.org/wikipedia/en/b/bb/General_Iroh.jpg"
            },
            {
                quote: "Happiness can be found even in the darkest of times, if one only remembers to turn on the light",
                speaker: "Albus Dumbledore",
                image: "https://www.harrypotterfansclub.com/wp-content/uploads/what-is-the-full-name-of-albus-dumbledore-quora.jpeg"
            },
            {
                quote: "It is our choices that show what we truly are, far more than our abilities",
                speaker: "Albus Dumbledore",
                image: "https://fantasytopics.com/wp-content/uploads/2021/10/Richard-Harris-as-Dumbledore-1024x576.jpg.webp"
            },
            {
                quote: "Sometimes a hypocrite is nothing more than a man in the process of changing",
                speaker: "Dalinar Kholin",
                image: "https://preview.redd.it/nij2mkvzdde31.jpg?auto=webp&s=6ba4f53917ccac4efe45f2ba98358c88f434a20f"
            },
            {
                quote: "Aim for the sun. That way if you miss, at least your arrow will fall far away, and the person it kills will likely be someone you don't know",
                speaker: "Wit",
                image: "https://pbs.twimg.com/media/Ez_Ch0GUUAIzc80?format=jpg&name=medium"
            }
        ];
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
    }

}
//creating server

const express = require ('express')
const server = express();
const cors = require ('cors');
server.use(cors());
const bodyParser = require('body-parser');
server.use(bodyParser.json())

//running server
server.listen(3000, () => console.log("Server being departed!"))

// results
const results = [
    {title: "Cheese - Wikipedia", content: "Cheese is a dairy product, derived from milk and produced in wide ranges of flavors, textures and forms by coagulation of the milk protein casein. It comprises proteins and fat from milk, usually the milk of cows, buffalo, goats, or sheep."},
    {title: "Cheese.com - World's Greatest Cheese Resource", content: "Cheese is nutritious food made mostly from the milk of cows but also other mammals, including sheep, goats, buffalo, reindeer, camels and yaks." },
    {title: "The 9 Healthiest Types of Cheese - Healthline ", content: "Mozzarella is lower in sodium and calories than most other cheeses. · Mozzarella also contains bacteria that act as probiotics, ..."},
    {title: "Cheeses of the World: 1222 Cheese Types - TasteAtlas", content: "Cheeses · Mozzarella · Cheddar · Feta · Ricotta · Parmigiano Reggiano · Brie de Meaux · Gouda Holland."},
    {title: "6 Most Popular Finnish Cheeses - TasteAtlas", content: "This rindless cheese is made from cow's milk. It has a creamy and firm texture, while the flavors are mild, slightly sharp, and tangy. Turunmaa is ..."},
    {title: "Cheese - Dairy Council of California", content: "Such unripened cheeses include goat cheese, feta, ricotta and cottage cheese. “These cheeses are produced by the coagulation of milk and ..."},
    {title: "Ranking cheeses by healthfulness - The Washington Post", content: "Cheese is an ancient food with origins that predate recorded history. Today it is one ... Cheese contains nutrients such as protein and calcium. The high-quality ..."},
    {title: "Cheese|food|Britannica", content: "Cheese, nutritious food consisting primarily of the curd, the semisolid substance formed when milk curdles, or coagulates. Curdling occurs naturally if milk is not ... "},
    {title: "Introduction to How Cheese Works|HowStuffWorks", content: "For example, many cheeses can't be sold in the United States because the FDA requires all raw-milk cheeses (cheese made with unpasteurized milk) to be aged ..."},
    {title: "The weird science of cheese|WIRED UK", content: "Cheese is not just food, it's a variety show. The multitude of aromas, flavours, and textures found in cheeses throughout the world is more than ..."}
]

// Index route
server.get('/googlesearch', (req, res) => res.send(results))

function newResult () {
    let randomResult = Math.floor(Math.random()*(results.length))
    return results[randomResult];
      }
    
//let feelingLucky = newResult()
//console.log(feelingLucky);
    
server.get('/feelinglucky', (req,res) => res.send(newResult()))

module.exports = server;




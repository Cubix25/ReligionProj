/*Rando vars*/
let i = 0;
let txt = "";
let button = "";
let questions = "";
let tempBool, tempText, randNum;

/*Questions (FIRST STRING IS THE TRUE ANSWER)*/
var Easy = [
    ["True","False","","","T/F: Do Orthodox Christian intinction their Eucharist into their wine? "],

    ["False","True","","","T/F: Both Orthodox and Catholic churches have candles in them? "],

    ["True","False","","","T/F: Orthodox Christians follow a monastic life? "],

    ["True","False","","","T/F: Is the Eastern Orthodox Church predominant in Greece, Russia, Ukraine, etc.?"],

    ["False","True","","","T/F: Did the Roman Catholic Church expand authority and influence before the Schisme?"],

    ["True","False","","","T/F: Do the places match the following compass directory? Rome – west  Constantinople – east"],

    ["False","True","","","T/F: Orthodox Christians have many denominations?"],

    ["True","False","","","T/F: Protestant Christians believe in salvation through faith alone?"],

    ["False","True","","","T/F: Chaste means to be unmarried?"],

    ["True","False","","","T/F: Orthodox Christians have the Eucharist leavened?"],

    ["Peter","Mary","Matthew ","John","Who did Jesus choose to be the first leader of the Apostles?"],

    ["Jordan River","The Red Sea","The Red Sea","The river of Nile","Where was Jesus baptized?"],

    ["Peter, 3 times","Matthew, 3 times","Peter, 6 times","Judas, 1 time","Who denied Jesus, and how many times"],

    ["3 days","40 days","13 days","50 days","For how long was Jesus dead before he was resurrected?"],

    ["40 days","13 days","3 days","50 days","How long was Jesus alive before ascending into Heaven?"],

    ["The birth of Jesus","The resurrection of Jesus","The conversion of Paul","The Council of Nicaea","Which of the following events marks the beginning of Christianity?"],

    ["12","10","15","20","How many disciples did Jesus have?"],

    ["Bethlehem","Jerusalem","Nazareth","Galilee","What is the name of the town where Jesus was born?"],

    ["Pontius Pilate","Caesar","Tiberius","Hadrian","Who was the Roman Governor of Jerusalem when Jesus was crucified?"],

    ["Easter","Good Friday","Epiphany","Christmas","The Holiest day of Celebration in Christianity is…"],

    ["Ash Wednesday","Ascension","Pentecost","Pentecost","Which of the following falls under the Lenten season?"],

    ["Easter","Christmas","Palm Sunday","Ascension","The church is decorated with flowers to represent new life, typically on…"],

    ["Good Friday","Ash Wednesday","Easter","Epiphany","What is the most solemn day in the Christian faith?"],

    ["True","False","","","T/F: Gift giving is a secular way Christmas is celebrated"],

    ["False","True","","","T/F: All the cristian denominations believe in the pope."],

    ["A manger","A hotel","A barn","A 5 star hilton","Where was Jesus born?"],

    ["A visit to a holy place or a religious event","A visit to any church in your local area","A visit to a fun holiday destination","A visit to an ancestral land","Pilgrimage is:"],

    ["Every sunday","Every 1st sunday of the month","Every day in the morning","Every friday evening","When does Liturgy take place?"],

    ["True","False","","","T/F: Sacraments are an ‘Outward sign of given grace."],

    ["3","5","7","25","How many main topics of sacraments are there?"],

    ["Original Sin","Being born","Dirt","Bad omens","Baptism cleanses the soul of what?"],

    ["Orthodox/Roman celebrate 7, Protestants celebrate 2","Orthodox/Roman celebrate 2, Protestant celebrate 7","Orthodox/Roman celebrate 6, Protestants celebrate 3","Both celebrate 7","Orthodox/Roman Catholics and Protestants celebrate different sacraments, how many do each celebrate?"],
]

var Medium = [
    ["Faith in God alone is needed to get into heaven","They both listen to the pope and agree with all that he has to say","They both support divorce, to the full extent","They both have the same basics of a rosary","What is the main similarity between protestants and catholics?"],

    ["Easter's date was decided and issues of cannon were decided","The Torah was set aside","The Nicaean Creed was updated to contain the Filioque Clause","Haloween's date was decided and issues of cannon were decided","What were the big achievements of the Nicean Council?"],

    ["He made him walk on water","He made him sacrifice his son","He made him give all his money to the poor","","How did Jesus test Peter's faith?"],

    ["His wife","God","Mary Magdalene","Judas","Who warned Pontius Pilate about killing Jesus?"]

    ["Carpenter","Fisherman","Shepherd","Blacksmith","What was Jesus' profession before he began his ministry?"],

    ["30","25","35","40","At what age did Jesus start his ministry?"],

    ["Four Sundays before Christmas","Three Sundays before Easter","Three Sundays before Christmas","Three weeks before Christmas","Advent, the time in which Christians anticipate the birth of Jesus, begins…"],

    ["Palm Sunday","Ash Wednesday","Easter Sunday","Holy Thursday","What day marks the beginning of the holiest period of the Christian calendar?"],

    ["Eternity","Ending","Beginning","Renewal","What is the best word to describe what the Advent wreath symbolizes?"],

    ["False","True","","","T/F: The Apostles were given the gift of tongue from Jesus"],

    ["False","True","","","T/F: Christmas is often referred to as the birthday of the church"],

    ["God incarnate","A guy","A carpenter","A cool guy","Who was Jesus?"],

    ["False","True","","","T/F: Do all christian denominations belive in purgatory?"],

    ["There is one God","Purgatory is a thing"," The unity of the trinity","there is original sin","What is a universal christian belief?"],

    ["False","True","","","T/F: The bible is entirely true."],

    ["Keep the holy trinity holy","You shall not have other Gods before me","You shall not commit adultery","You shall not steal","What is NOT one of the commandments?"],

    ["Moses","God","Jesus","John","Who was the messenger of the 10 commandments?"],

    ["Judaism","Buddasim","Monotheistic","Catholicism ","What religion created christianity?"],

    ["Lord’s Prayer","Apostles Creed","Oh, it’s just a necklace","Hail Mary","What prayer does a Rosary most widely represent?"],

    ["Baptismal Font","Heaven","Swimming pool","Baptistery","Where do baptisms take place in a Roman Catholic Church?"],

    ["True","False","","","T/F: “Eucharist”, “Mass”, “Liturgy”, are all names for different sacraments."],

    ["40","30","28","He never fasted","Jesus fasted for ___ days in the wilderness."],

    ["All of these are true","To stay away from specific foods","It’s a traditional practise","To seek pardon from misdeeds","Many fasted in the remembrance of Jesus:"],

    ["10% of their income","15% of their income","50% of their income","As much as they can","What is the expected donation each family should make to the church financially?"],

    ["Tithe","Donation","Tenth","Gratuity","What is a required donation called?"],

    ["False","True","","","Men and women are allowed to sit together in an Eastern Orthodox Church."],

    ["True","False","","","Men and women are allowed to sit together in an Roman Catholic Church"],

    ["Initiation, Vocation, Healing","Healing, Vocation, Initiation","Vocation, Initiation, Healing","Initiation, Healing, Vocation","What is the correct order of the sacraments?"],

    ["Orthodox are infants and get poured, Protestants are older and get dunked","Orthodox baptisms are older and get dunked, Protestant are infants and get poured","They follow the same practices","","Rituals in Baptism include"],

    ["Beliefs that bread and wine change their substance","40 days after easter Jesus gives his disciples gifts","Place worship on churches","Letter sent to all churches from Bishop","Transubstantiation is what?"],

    ["False","True","","","T/F: During Reconciliation, the Priest can tell others about your confessions"],

    ["Yes","No","Maybe","Idk","Are all 3 practices allowed to anoint the sick?"],
]

var Hard = [
    ["Protestants don’t believe in the divinity of the pope","Protestants don’t believe that Jesus was fully human and fully divine","Catholics believe that Mary is equal to Jesus","Catholics and Protestants share different versions of the same bible","What is the main difference between protestants and catholics?"],

    ["Hunting for Christian’s","Searching for Rabbis to talk to","Hoping to convert to Christianity ","Hunting for deer","What was Saul doing prior to his divine encounter with Jesus?"],

    ["Emperor Constantine","Joseph","The Apostle Peter","Pope Leo","Who ordered the first Nicene Council?"],

    ["325 CE","425 CE","300 CE","340 CE","When was the Nicene Creed written?"],

    ["Israel","Egypt","Rome","Afghanistan","In which of this modern day countries did Christianity begin?"],

    ["Golgotha","Gethsemane","Bethany","Capernaum","What was the name of the place where Jesus was crucified?"],

    ["Orthodox","Catholic","Protestant","None","Which Christian Denomination celebrates Christmas on January 7th?"],

    ["Good Friday","Easter Sunday","Holy Thursday","Epiphany","A day on which some congregations re-enact the final events of Jesus’ life, is…"],

    ["The washing of feet (by the priest)","The Last Supper","The final events of Jesus’ life (stations of the cross)","The marking of ashes on the forehead","On Holy Thursday, what is commonly reenacted in the church?"],

    ["The mortality of Christians (and all humans)","That Jesus died on the cross for our sins","The body and blood of Christ","The suffering of Christ on the cross","The mark of ashes on the forehead on Ash Wednesday represents/symbolizes…"],

    ["True","False","","","T/F: Pentecost marks the day in which the Wise Men visited Jesus"],

    ["People","Animals","Plants","Night","What was the last thing God created in the creation story?"],

    ["To remind them of baptism","For holy protection","To remind them of the holy trinity","because they are hot","Why do catholics bless themselves with holy water?"],

    ["The word of God","A book written by Gods followers"," A book about jesus life","A book that explains the world around us","What is the bible? (Most correct answer)"],

    ["Jesus's teachings","The disciples teachings","The teachings of the Catholic church","The teachings of the Catholic church","What are the beatitudes?"],

    ["The Apostles Creed","The Nicene creed","The Assasins creed","Creed 3 (The one with Micheal B. Jordan)","What is the creed used in western liturgy?"],

    ["Behind the royal door","5 feet to the left from the entrance","In the church","Tabernacle","Where is the altar placed in an Eastern Orthodox Church?"],

    ["Petition","Thanksgiving","Praise","Intercession","“Hey God, It’s me. Can I please get an XBOX for my birthday? Please, please, please?” What kind of prayer is this?"],

    ["Reflecting upon the bible to bring yourself closer to god","Staring at the bible for a long time","Doing anything without putting thought into it","Reading the bible everyday","Contemplative meditation is:"],

    ["Refers to the Virgin Mary","Is Jesus’s aunt","None of these answers are correct","Is not linked to Christianity","Our Lady of Fatima:"],

    ["Talking to yourself","Intercession","Petition","Thanksgiving","Which of the following are NOT a form of christian prayer:"],

    ["Knowledge, Wisdom","Counsel, Fortitude","Wisdom, Faith","Knowledge, Fear of the Lord","What gifts are bestowed during confirmation"],

    ["False","True","","","T/F: You are allowed to get re-married in the catholic church?"],

    ["Supper table was replaced by an alter","Church added more scarements to keep with times","Rituals were added","All sacraments are given at the same time for all","As the church evolved, what changed?"],
]

var Hellish = [
    ["Pope Leo and Patriarch Michael","Pope John-Paul and Pope William","Patriarch Michael and Pope John-Paul","The Apostle Peter and Mary","Who was the Great Schism a result of a disagreement between?"], 

    ["The Filioque Clause","The Father Clause ","The Pope Clause","The Clause of The Holy Spirit","What was the disagreement over the Nicean Creed about?"],

    ["The Catholic and Orthodox Churches","The Protestant and Anglican Churches","The Catholic and Protestant Churches","The Anglican and Orthodox Churches","Which churches originated from the Great Schism of 1054?"],

    ["18 years (beginning in 1543)","28 years (beginning in 1533)","16 years (beginning in 1545)","6 years (beginning in 1555)","How many years did the Church spend at the Council of Trent affirming its basic teachings?"],

    ["5 loaves of bread, and 2 fish","10 loaves of bread, and 2 apples","10 loaves of bread, and 4 fish","5 loaves of bread, and 2 apples","What did Jesus and his followers multiply to feed the 5000?"],

    ["Healing a blind man","Healing a leper","Raising Lazarus from the dead","Feeding the 5000","What was the last miracle that Jesus performed before his crucifixion?"],

    ["Thomas","Peter","James","John","What is the name of the disciple who doubted that Jesus had risen from the dead?"],

    ["Jesus visited his apostles and commissioned them to baptize all nations and spread his teachings","The Holy Spirit empowered the apostles with various spiritual gifts and abilities","The apostles were given the ability to speak other languages","None of these events happened","Which of the following DID NOT take place on Pentecost?"],

    ["The Wise Men","The Gospel Matthew","Jesus’ disciple Mary Magdalene","Jesus Mother, Mary","The Magi refers to…"],

    ["Killing of firstborn","Locusts","Darkness","Lice","What was the last plague on egypt?"],

    ["All of these answers are correct","Prayers, scripture readings, and singing of psalms","Consecration of wine and bread","Communions and collections","What were the main elements of worship that were established by the second century?"],

    ["Triple procession around alter","Grace of God is bestowed upon couple","Include hymns, liturgies","Spongbob","Which rituals are practiced by Orthodoxs during Marriage?"],

    ["Extensive education and formation","Laying of the fists","Formal clergies within the church","Videogame","Ordination involves what?"]
]

console.log(Easy.length + Medium.length + Hard.length + Hellish.length);

/*Reset btns and text*/
var questBtns =
    [
        "Easy", "Medium", "Hard", "Hellish"
    ]

/*Temp set of questions*/
let tempQuestions =
    [
        { answer: "Wher dad?", cor: false },
        { answer: "Whwer Papa?", cor: true },
        { answer: "Whwer Gringo?", cor: false },
        { answer: "Whwer baba?", cor: false }
    ]

let question = "What is correct?"

/*Changing the question buttons text*/
function changeQuest(difficulty){
    diff = difficulty
    if (difficulty === "Easy"){
        getArray(Easy);
    } else if (difficulty === "Medium"){
        getArray(Medium);
    } else if (difficulty === "Hard"){
        getArray(Hard);
    } else {
        getArray(Hellish);
    }
    tempQuestions = tempQuestions.sort((a, b) => 0.5 - Math.random());

    /*Change text*/
    txt = document.getElementById("txt"); //gets the p element
    txt.innerHTML = question; //changes the value to what the question is

    /*Changing the text of the btns*/
    for (i = 0; i < questBtns.length; i++) {
        button = document.getElementById(questBtns[i]); //gets the button element
        button.innerHTML = tempQuestions[i].answer; //changes the value to what the answers are
    }

    /*Changing Functions of the btns*/
    for (i = 0; i < questBtns.length; i++) {
        tempBool = tempQuestions[i].cor;
        button = document.getElementById(questBtns[i]).setAttribute("onClick", "javascript: continueBoard("+ tempBool+",\""+diff+"\")");
    }
}

/*Continue*/
function continueBoard(ans,diff){

    if (ans == true){
        if (diff === "Easy"){
            tempText = "Correct! Go forward 1 space"
        } else if (diff === "Medium"){
            tempText = "Correct! Go forward 2 space"
        } else if (diff === "Hard"){
            tempText = "Correct! Go forward 3 spaces"
        } else {
            tempText = "Correct! Go forward 4 spaces"
        }
    } else{
        if (diff === "Easy"){
            tempText = "Incorrect! Go backwards 1 space"
        } else if (diff === "Medium"){
            tempText = "Incorrect! Go backwards 2 space"
        } else if (diff === "Hard"){
            tempText = "Incorrect! Go backwards 3 spaces"
        } else {
            tempText = "Incorrect! Go backwards 4 spaces"
        }
    }

    /*Change text*/
    txt = document.getElementById("txt"); //gets the p element
    txt.innerHTML = tempText; //changes the value to what the question is

    /*Changing the text of the btns*/
    for (i = 0; i < questBtns.length; i++) {
        button = document.getElementById(questBtns[i]); //gets the button element
        button.innerHTML = "Continue" //changes the value to what the answers are
    }

    /*Changing Functions of the btns*/
    for (i = 0; i < questBtns.length; i++) {
        button = document.getElementById(questBtns[i]).setAttribute("onClick", "javascript: resetBoard();");
    }
}

/*Reseting*/
function resetBoard(){
    /*Change text*/
    txt = document.getElementById("txt"); //gets the p element
    txt.innerHTML = "Pick what question you got:"; //changes the value to what the question is

    /*Changing the text of the btns*/
    for (i = 0; i < questBtns.length; i++) {
        button = document.getElementById(questBtns[i]); //gets the button element
        button.innerHTML = questBtns[i]; //changes the value to what the question is
    }

    /*Changing Functions of the btns*/
    for (i = 0; i < questBtns.length; i++) {
        button = document.getElementById(questBtns[i]).setAttribute("onClick", "javascript: changeQuest(this.id);");
    }
}

function getArray(questionArray){
    randNum = Math.floor(Math.random() * questionArray.length);

    //Appending new questions to array
    for (let i = 0; i < questionArray[randNum].length - 1; i++) {
        tempQuestions[i].answer = questionArray[randNum][i]
        if(i == 0){
            tempQuestions[i].cor = true
        } else {
            tempQuestions[i].cor = false
        }
    }

    question = questionArray[randNum][4]
}

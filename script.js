//Heya

//document.getElementsByTagName("td")[0].setAttribute("id", "1");
var easy =
[
"Eat 5 japanese dishes",//Ät 5 japanska rätter",
"Speak japanese with someone",//"Snacka legit japanska med någon",
"Play gacha games",
"Play arcades",
"Karaoke Yakuza song",
"Get drunk",//Bli packad",
"Buy a music-cd",
"Picnic/grill in the park",
"Wear a mask",
"Ride the train",
"Find a bizarre insect",
"Find a cool flower",
"Hot spring",
"Visit a temple",
"Take pictures of beautiful vistas",//"Ta kort på fina vistas",
"Find a rap/dance battle",
"Watch TV",
"Find a cop",
"Get lost on the streets",
"Find a Jojo fan",
"Hit the gym",
"Go to the museum",
"Buy something weeby to yourself",//"Köp något weebigt till dig själv",
"Find a yakuza-member",
"Buy clothes",
"Visit a flower store",
"Play an arcade game on the hardest difficulty",
"Win a claw machine prize",
"Buy an artbook",
"Visit Kyoto",
"Give money to someone",
"Drink strong zero",
"Play mario party gambling",
"Buy an umbrella",
"Buy something from Nintendo store",
"Visit the same station 3 times (not Shibuya)",
"Visit a skytower",
"Find and visit a really cool random store",
"Café of your choice",
"Watch cherry blossom 🌸",
"Eat mochi",
"Eat Dango",
"Stand up for a bro",
"Fireworks",
"Go to the top floor of a high building (not skytower)",
"LUCKY SPACE!!",
"Recognize 5 things from anime / games",
"Withdraw money from the bank",
"Find Hello Kitty merch",
"Find Dragon ball merch",
"Eat non-Japanese food 3 times",
"Hear a song you recognize",
"Eat sushi for breakfast",
"Find the kanji for Flower somewhere (花)",
"Take a picture of a fish",
"Visit an \"All you can drink\"!",
"Buy a souvenir to someone",
"Touch grass",
"Visit some flea market"
];

var medium =
[
"Maid café",
"Muscle café",
"Trap café",
"Hang inside the weirdo section of some store (2 min)",
"Hang inside the weirdo section of some store (10 min)",
"Find and eat swedish food",
"Challenge someone on the arcades",
"Sing 8 genres on karaoke",
"Go to some concert / performance / theatre",
"Buy the least popular thing in a random store",//"Köp det minst populära av något i random butik",
"Take a picture with your favourite anime character",//"Ta en bild med din favorit anime karaktär",
"Find some graffiti",
"Cosplay",
"Win the top prize on some gacha game",
"Play Pachinko",
"Walk back home when no trains are going",//"Vandra hem då inga tåg går",
"Make a whole loop around the Yamanote line",//"Åk ett helt varv runt Yamanote line",
"Take a picture outside Nintendo HQ",//"Ta kort utanför Nintendo HQ",
"Weed store (or any random stoner store)",
"Witness the premier of something",
"Take the bullet-train",
"Stay up all night",
"Visit 3 different cafés",
"Play mario party / smash / mario kart",
"Buy an anime frame",
"Get sick (not intentionally)",
"Smuggle some bear into the karaoke",
"Buy some electric hardware",
"Ride all attractions in Nintendo world",
"See the waifu that's on your bingo card somewhere",
"Find Mother / Earthbound merch",
"Find a world map with Japan in the centre",
"Hear a Japanese song you recognize",
"Sleep early, before midnight (first day don't count)",
"Take the bullet-train",
"Find a swedish flag",
"Find the kanji for Pain somewhere (疼)",
"Buy a figurine (doesn't count as degenerate)",
"Eat some Nattō (納豆)",
"Watch a movie at the cinema",
"Find a doujin of a franchise of your choise",
"Hear some west coast rap music play somewhere"
//"Finish all Easy on the board"
]

var hard =
[
"Drink 15 bears at tanto",
"Eat the poisonous Fugu fish",
"Get first place in some arcade game",
"Be totally alone in the train",
"Appear in TV",
"Wear a kimono in the streets",
"Get to the top of Mt Fuji",
"Finish all achievements",
"Find some rap/dance battle, challenge and destroy them",
"Speak japanese for a whole day (no cheating)",
"Become a regular at the maid café so they recognize you",//"Bli stammis på maid-café så de känner igen dig.",
"Visit 5 different maid cafés",
"Meet a Nintendo employee",
"Meet Miyamoto",
"Meet Kojima",
"Join the Yakuza",
"8 player smash",
"IRL Mario kart in the streets",
"See someone familiar randomly somewhere",
"Get an autograph from your idol",
"Don't become sick at all",
"Get invited to someones home",
"Do everything on our bucket list",
"Get a tattoo",
"Get interviewed",
"Get involved in a murder mystery",
"Become a witness in court",
"Get haunted by ghost(s)",
"Finish all Easy and Medium on the board",
"UNLUCKY SPACE!!",
"Order a full performance at the maid café",
"Harambe café: maximum spice level",
"Buy souvenirs for everyone",
"Make an archeological discovery"
//"Get a job promotion during your trip"
];

//Degenerate kategori
var degenerate = [
  "Get strangled by the maid in muscle café",
  "Buy something degenerate",
  "Stop and take a picture in the middle of Shibuya crossing",
  "Get yourself into a tourist-trap",
  "Rent a girlfriend",
  "FRIEND'S CHOICE (degenerate version)",
  "Soy over something (somewhat genuinely)",
  "Recognize 10 things from anime",
  "Do something from Jojo",
  "Find someone named Nagito",
  "Do an irl stream for 2 hours"
];
//Placera ut 3 hard
//Placera ut 6 medium
//Placera ut 1 degenerate
//15 easy

//API: https://waifu.pics/docs
//TODO: You can change sfw to nsfw for interesting results
/*
fetch("https://api.waifu.pics/sfw/waifu")
  .then(res => res.json())
  .then(data => console.log(data.url));
*/
var alpha = 0.6;
var easy_color = "rgba(179, 255, 179,"+alpha+")";
var medium_color = "rgba(255, 255, 128,"+alpha+")";
var hard_color = "rgba(255, 153, 153,"+alpha+")";
var buddy_choice_color = "rgba(206, 235, 253,"+alpha+")"; //#ceebfd
var degenerate_color = "rgba(255,213,128,"+alpha+")";

var cellSize = 100;
var cellsPerRow = 5;
var userWidthInput = 0;
var userHeightInput = 0;

const magic_number = 34; //The nr 34 is hardcoded to perfectly fit our screen...
var boardWidth = (cellsPerRow*cellSize+magic_number);
var RedBordersHidden = false;
var BoardHidden = false;
//var spaceBetweenCells = 2; //This is the default distance between cells in html, unless overriden!

var WARNING_DONT_SET_TO_TRUE = false;
GenerateAnimeImages(1);
GenerateContentInTables();

AdjustMainBoard(); //Adjust the MainBoard div so it covers the bingo card perfectly for a screenshot!

//Generates the whole table and its contents!
function GenerateContentInTables()
{
  shuffle(easy);
  shuffle(medium);
  shuffle(hard);
  shuffle(degenerate);

  for(var i = 1; i <= cellsPerRow; i++) {
    for(var j = 1; j <= cellsPerRow; j++) {
      /*
          InnerHTML gives us what's inside <idx> which should be empty at first (expected)!
          But keeps getting added to on row 120.
      */
      var table = document.getElementById("id" + i);
      var inner = table.innerHTML;
      var idd = ((i-1) * 5) + j;
      table.innerHTML = inner + "<td id = \"" + idd + "\" height = \"" + cellSize + "px\" width = \"" + cellSize + "px\"></td>";
    }
  }

  var nums = [];
  for(var i = 1; i <= 25; i++) {
    nums.push(i);
  }
  shuffle(nums);
  //
  //easy
  for(var i = 0; i < 15; i++) {
    putInTable(nums[i], easy[i], easy_color); //light blue
  }
  //medium
  for(var i = 15; i < 20; i++) {
    putInTable(nums[i], medium[i-15], medium_color); //light blue
  }
  //hard
  for(var i = 20; i < 23; i++) {
    putInTable(nums[i], hard[i-20], hard_color); //light blue
  }

  putInTable(nums[23], degenerate[0], degenerate_color); //degenerate bingo card
  putInTable(nums[24], "FRIEND'S CHOICE", buddy_choice_color);
  //console.log(nums[0]);
  //putInTable(nums[0], easy[0], "#ceebfd");
}

function putInTable(pos, text, color) {
  //pos är en siffra från 1 till 25
  var idPos = Math.ceil(pos/5);
  //var inner = document.getElementById("id" + idPos).innerHTML;
  //var idnum = pos - ((idPos-1) * 5);
  //console.log(pos);
  var posComponent = document.getElementById(pos); //Each of those components have unique ID we can access via this.
  posComponent.innerHTML = text;
  //posComponent.setAttribute("style", "\"text-align:center\"; \"background-color:" + color + "\"");
  posComponent.setAttribute("style", "text-align:center");
  //posComponent.setAttribute("bgcolor", color);
  //posComponent.setAttribute("style", "background-color:" + color);
  posComponent.style.backgroundColor = color;
  //posComponent.setAttribute("opacity", "0.1");
}

function shuffle(arra1) {
    var ctr = arra1.length, temp, index;

// While there are elements in the array
    while (ctr > 0) {
// Pick a random index
        index = Math.floor(Math.random() * ctr);
// Decrease ctr by 1
        ctr--;
// And swap the last element with it
        temp = arra1[ctr];
        arra1[ctr] = arra1[index];
        arra1[index] = temp;
    }
    return arra1;
}

function AdjustMainBoard()
{
  var boardWidthScale = 2; //20 works
  var boardHeightScale = 1; //10 works

  var mainBoard = document.getElementById("MainBoard");
  var divWidth = boardWidth * 1.04 + boardWidthScale;
  var divOffset = boardWidth * 0.04 + boardWidthScale;
  mainBoard.style.width = divWidth + "px";
  mainBoard.style.marginLeft = -divOffset/2.0 + "px";
  var mainBoardChildren = document.getElementById("MainBoardChild");
  mainBoardChildren.style.marginLeft = divOffset/2.0 + "px";

  //Adjust height!
  mainBoard.style.height = boardWidth * 1.17 + boardHeightScale + "px";
  mainBoard.style.marginTop = 10 + "px";
  mainBoardChildren.style.marginTop = -10 + "px";
}

function RegenerateBoard()
{
  //Delete all cells
  for(var i = 1; i <= cellsPerRow; i++) {
      /*
          InnerHTML gives us what's inside <idx> which should be empty at first (expected)!
          But keeps getting added to on row 120.
      */
      var tableInner = document.getElementById("id" + i);
      while (tableInner.firstChild) {
        tableInner.removeChild(tableInner.lastChild);
      }
  }
  GenerateContentInTables();
}

function RegenerateAnimeImage(bool)
{
  const img = document.getElementById("Im0");
  img.remove();
  userWidthInput = 0;
  userHeightInput = 0;
  WARNING_DONT_SET_TO_TRUE = bool;
  GenerateAnimeImages(1);
}

function GenerateAnimeImages(number)
{
  for(var i = 0; i < number; i++)
  {
      FetchAndInsertImageInBody(i);
  }
}

function FetchAndInsertImageInBody(image_id)
{
  FetchAPIImage().then((url) => {
    var inner = document.getElementById("MainBoardChild").innerHTML;
    document.getElementById("MainBoardChild").innerHTML = inner + "<img id=Im" + image_id + " src=\'"+url+"\'></img>";
    FixImageAspectRatio2(image_id);
  });
}

function FixImageAspectRatio(image_id)
{
  var img = document.getElementById("Im"+image_id);
  img.setAttribute("style", "background-size:cover");

  img.style.width = "35%";
  img.style.marginLeft = "-50px";
  img.style.marginTop = '-600px';

  //These two are very important to make the image appear behind our table!
  img.style.zIndex = "-1";
  img.style.position = "absolute";
  img.style.visibility = "visible";
}

//Stretches the image to fit the whole screen!
function FixImageAspectRatio2(image_id)
{
  var img = document.getElementById("Im"+image_id);
  img.setAttribute("style", "background-size:cover");

  var stretchOffset = 25; //If this is 0 then our image width will perfectly fit the board!!
  var size = (cellsPerRow*cellSize+magic_number);

  img.style.width = size + stretchOffset + userWidthInput + "px";
  var heightOffset = 200;
  img.style.height = size + heightOffset + userHeightInput + "px";

  img.style.marginLeft = -((stretchOffset+userWidthInput)/2.0)+"px";
  img.style.marginTop = '-620px';

  //These two are very important to make the image appear behind our table!
  img.style.zIndex = "-1";
  img.style.position = "absolute";
  img.style.visibility = "visible";
}

/*
  This function puts and stretches the image over the whole table!
*/
function FetchAndInsertImageInBody2(image_id)
{
  FetchAPIImage().then((url) => {
    var inner = document.getElementById("table").innerHTML;
    document.getElementById("table").innerHTML = inner + "<img id=Im" + image_id + "crossorigin=\"anonymous\"" + " src=\'"+url+"\' width=\"30%\" ></img>";

    var img = document.getElementById("Im"+image_id);
    //img.setAttribute("position", "absolute");
    img.style.width = "30%";
    img.style.marginLeft = "-100px";
    img.style.marginTop = '-600px';

    //These two are very important to make the image appear behind our table!
    img.style.zIndex = "-1";
    img.style.position = "relative";

    img.style.Visibility = "visible";
    //img.setAttribute("crossOrigin","Anonymous");
  });
}

function FetchAPIImage()
{
  var type = WARNING_DONT_SET_TO_TRUE ? "nsfw" : "sfw";
  var url = fetch("https://api.waifu.pics/"+type+"/waifu")
  .then(res => res.json())
  .then(data => {
    return data.url;
  });
  return url;
}

//EventListeners for buttons!
function ChangeWidthButton(value)
{
    var img = document.getElementById("Im0");
    var currWidth = img.width;
    img.style.width = (currWidth + value) + "px";
    userWidthInput += value;
    FixImageAspectRatio2(0);
}

function ChangeHeightButton(value)
{
    var img = document.getElementById("Im0");
    var currHeight = img.height;
    img.style.height = (currHeight + value) + "px";
    userHeightInput += value;
    FixImageAspectRatio2(0);
}

function ChangeWidthSlider()
{
    //console.log(value);
    var img = document.getElementById("Im0");
    var sliderValue = document.getElementById("widthSlider").value;
    var currWidth = img.width;
    img.style.width = (Number(currWidth) + Number(sliderValue)) + "px";
    userWidthInput = Number(sliderValue);
    FixImageAspectRatio2(0);
}

function ChangeHeightSlider()
{
    var img = document.getElementById("Im0");
    var sliderValue = document.getElementById("heightSlider").value;
    var currHeight = img.height;
    img.style.height = (Number(currHeight) + Number(sliderValue)) + "px";
    userHeightInput = Number(sliderValue);
    FixImageAspectRatio2(0);
}

function ChangeName()
{
    var nameGraphics = document.getElementById("name");
    var nameInput = document.getElementById("fname").value;
    nameGraphics.innerHTML = nameInput;
}

function DisableRedBorders()
{
    var mainBoard = document.getElementById("MainBoard");
    if(!RedBordersHidden)
    {
        mainBoard.style.visibility ='hidden';
        RedBordersHidden = true;
    }
    else
    {
        mainBoard.style.visibility ='visible';
        RedBordersHidden = false;
    }
}

function HideBoard()
{
    var mainBoardChild = document.getElementById("MainBoardChild");
    if(!BoardHidden)
    {
        mainBoardChild.style.visibility ='hidden';
        BoardHidden = true;
        var mainBoard = document.getElementById("MainBoard");
        mainBoard.style.visibility ='hidden';
        RedBordersHidden = true;
    }
    else
    {
        mainBoardChild.style.visibility ='visible';
        BoardHidden = false;
        var mainBoard = document.getElementById("MainBoard");
        mainBoard.style.visibility ='visible';
        RedBordersHidden = false;
    }
}

/*
function SaveBoard()
{
  var canvas = document.getElementById("MainBoard");
  html2canvas(canvas);
  //var img    = canvas.toDataURL("image/png");
  //document.write('<img src="'+img+'"/>');
  console.log(canvas);
}
*/
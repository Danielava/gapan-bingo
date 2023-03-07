//document.getElementsByTagName("td")[0].setAttribute("id", "1");
var easy =
[
"Ät 5 japanska rätter",
"Snacka legit japanska med någon",
"Spela gacha games",
"Spela arcades",
"Karaoke Yakuza låt",
"Bli packad",
"Köp en musik-cd",
"Picnic/grill i parken",
"Gå runt med mask",
"Åk tåg",
"Hitta en bizarre insekt",
"Hitta en cool flower",
"Hot spring",
"Besök ett tempel",
"Ta kort på fina vistas",
"Hitta rap/dance battle",
"Titta på ett TV program",
"Hitta en polis",
"Bli lost i stan",
"Hitta ett Jojo fan",
"Hit the gym",
"Dra till museum",
"Köp något weebigt till dig själv",
"Hitta en yakuza",
"Köp kläder",
"Gå till en blombutik",
"Play an arcade game on the hardest difficulty",
"Vinn på clawmachine",
"Köp artbook",
"Åk till kyoto",
"Ge pengar till någon",
"Drick strong zero",
"Spela mario party gambling",
"Köp ett paraply",
"Köp något från Nintendo store",
"Besök samma station 3 gånger (inte Shibuya)",
"Besök något skytower",
"Hitta och gå till en ascool random butik",
"Valfritt café",
"Kolla på cherry blossom 🌸",
"Ät mochi",
"Ät Dango",
"Ställ upp för en bro",
"Fireworks",
"Go to the top floor of a high building (not skytower)",
"LUCKY SPACE!!",
"Recognize 5 things from anime",
"Withdraw money from the bank"
];

var medium =
[
"Maid café",
"Muscle café",
"Trap café",
"Häng inne på weirdo avdelning i random shop (2 min)",
"Häng inne på weirdo avdelning i random shop (10 min)",
"Hitta och ät svensk mat",
"Utmana någon på arcadaes",
"Sjung 8 genrer på karaoke",
"Gå på koncert / föreställning / teater",
"Köp det minst populära av något i random butik",
"Se samma japanis person 3 ggr",
"Ta en bild med din favorit anime karaktär",
"Hitta grafitti på nån vägg utomhus",
"Cosplaya någon",
"Vinn bästa priset på valfritt gacha game",
"Spela Pachinko",
"Vandra hem då inga tåg går",
"Åk ett helt varv runt Yamanote line",
"Ta kort utanför Nintendo HQ",
"Weed butiken (elr valfri stoner butik)",
"Se premiären av något",
"Ta kort med din waifu",
"Åk bullettrain",
"Var uppe hela natten",
"Dra till 3 olika cafés",
"Spela mario party / smash / mario kart",
"Köp en anime frame",
"Get sick (not intentionally)",
"Smuggla in öl till kareoken",
"Köp något elektroniskt",
"Alla attraktioner på Nintendo world",
"See the waifu that's on your bingo card somewhere"
]

var hard =
[
"Drick 15 öl på tanto",
"Ät giftiga fisken (Fugu)",
"Kom på toplistan på taiko drum (elr valfrit spel)",
"Var helt ensam på tåget",
"Kom med i TV",
"Gå runt i en kimono i stan",
"Gå till toppen av Mt Fuji",
"Klara alla achievements",
"Hitta rap/dance battle och utmana dom och krossa dom",
"Snacka japanska en hel dag (får inte fuska med penna)",
"Bli stammis på maid-café så de känner igen dig.",
"Besök 5 olika weirdo cafés",
"Träffa en Nintendo employee",
"Träffa Miyamoto",
"Träffa Kojima",
"Gå med i Yakuza",
"8 player smash",
"Mario kart på stan",
"Träffa nån bekant randomly",
"Få autograf av din idol",
"Don't become sick at all",
"Bli inbjuden till någons hem",
"Do everything on our bucket list",
"Get a tattoo",
"Bli intervjuad"
];

//Degenerate kategori
var degenerate = [
  "Bli strypt av maid i muscle café",
  "Köp något degenerate",
  "Stanna och ta kort i mitten av Shibuya crossing",
  "Hamna i en turistfälla",
  "Rent a girlfriend",
  "KOMPIS VAL (degenerate version)",
  "Soya över något (någorlunda genuint)",
  "Recognize 10 things from anime",
  "Do something from Jojo"
];

shuffle(easy);
shuffle(medium);
shuffle(hard);
shuffle(degenerate);
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
//var spaceBetweenCells = 2; //This is the default distance between cells in html, unless overriden!

var WARNING_DONT_SET_TO_TRUE = false;
GenerateAnimeImages(1);
GenerateContentInTables();

//Generates the whole table and its contents!
function GenerateContentInTables()
{
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
  putInTable(nums[24], "KOMPIS VAL", buddy_choice_color);
  //console.log(nums[0]);
  //putInTable(nums[0], easy[0], "#ceebfd");
  RecentreName();
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

//Makes name appear in centre of board!
function RecentreName()
{
  var name = document.getElementById("name");
  name.style.marginLeft = "-690px";
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
    var inner = document.getElementById("body").innerHTML;
    document.getElementById("body").innerHTML = inner + "<img id=Im" + image_id + " src=\'"+url+"\'></img>";
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
}

//Stretches the image to fit the whole screen!
function FixImageAspectRatio2(image_id)
{
  var img = document.getElementById("Im"+image_id);
  img.setAttribute("style", "background-size:cover");

  const magic_number = 34; //The nr 34 is hardcoded to perfectly fit our screen...
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
}

/*
  This function puts and stretches the image over the whole table!
*/
function FetchAndInsertImageInBody2(image_id)
{
  FetchAPIImage().then((url) => {
    var inner = document.getElementById("table").innerHTML;
    document.getElementById("table").innerHTML = inner + "<img id=Im" + image_id + " src=\'"+url+"\' width=\"30%\" ></img>";

    var img = document.getElementById("Im"+image_id);
    //img.setAttribute("position", "absolute");
    img.style.width = "30%";
    img.style.marginLeft = "-100px";
    img.style.marginTop = '-600px';

    //These two are very important to make the image appear behind our table!
    img.style.zIndex = "-1";
    img.style.position = "relative";
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



/*
  Put this in your html as a good test:
  <img id="Im1" src="https://i.waifu.pics/cG2o0Hs.jpg" style="width: 30%; margin-left: 0px; margin-top: -600px; z-index: -1; position: absolute;">
*/

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
var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

function setGradient()
{
	body.style.background = "Linear-gradient(to right,"
	+color1.value
	+","
	+color2.value
	+")";
	css.textContent = body.style.background+";";
}

color1.addEventListener("input", setGradient)
color2.addEventListener("input", setGradient)
//ternary
/*function isUserValid(bool)
{
	return bool;
}
var answer = isUserValid(true)? "you may enter":"Access deneid";

function condition()
{
	if(isUserValid(true))
	{
		return "you may enter";
	}
	else
	{
		return "Access Denied";
	}
}
//switch
function moveCommand(direction)
{
	var whatHappend;
	switch(direction)
	{
		case "forward":
		whatHappend="you killed the monster";
		break;
		case "back":
		whatHappend="return to the home";
		break;
		case "right":
		whatHappend="driving to it enjoy";
		break;
		case "left":
		whatHappend="trolling to the track";
		break;
		default:
		whatHappend="Not valid answer";
	}
	return whatHappend;
}
//let+const
const name="bobby";
let experience=100;
let wizardLevel=false;

if(experience>90)
{
	let wizardLevel=true;
	console.log('inside' wizardLevel);
}
console.log('outside' wizardLevel);
//obj
const obj = {
	player:"affrin",
	experience:110,
	wizardLevel:false
};
const player = obj.player;
const experience=obj.experience;
const wizardLevel=obj.wizardLevel;

const {player, experience}=obj;


const name ="jhon son";
const obj={
	[name]="hello";
	[1+6]="hi hi"
}
//template string

const name="swathi";
const age=34;
const pet="dog";

const greeting = `hello ${name} you seem to be ${age}. we have nice ${pet}.`;

const greet(name='', age=30, pet="cat")
{
	return `hello ${name} you seem to be ${age-10}. we have nice ${pet}.`;
}

const first=()=>
{
	const greet ="hii";
	const  second=()=>{
		alert(greet);
	}
	return second();
}
const newFunction=first();
newFunction();

//currying
const multiply=(a)=>(b)=>a*b;
const multiply5=multiply(5)
multiply5(3);

//compose
const compose=(f, g)=>(a)=>f(g(a));
const sum =(num)=>num+1;
compose(sum, sum)(5);

const add=(a,b)=>a+b;

//forEach
const array=[1, 4, 5, 7,8];
const double=[];
const foEacharray=array.forEach(num => {
	 double.push(num*2);
});
console.log('forEach', double);
const array=[1, 4, 5, 7,8];
//map
const mapArray = array.map(num => return num*3);
console.log('map', mapArray);

//filter
const filterarray=array.filter(num=> num>5);
console.log('filter', filterarray);

//reduce
const array=[1, 4, 5, 7,8];
const reduceArray=array.reduce((acc, num) => {
	return acc+num;
}, 0);
const array = [
  {
    username: "john",
    team: "red",
    score: 5,
    items: ["ball", "book", "pen"]
  },
  {
    username: "becky",
    team: "blue",
    score: 10,
    items: ["tape", "backpack", "pen"]
  },
  {
    username: "susy",
    team: "red",
    score: 55,
    items: ["ball", "eraser", "pen"]
  },
  {
    username: "tyson",
    team: "green",
    score: 1,
    items: ["book", "pen"]
  },

];
const newArray=array.reduce((acc, score)=>{
	return acc+user.score;
}, 0);
const newArray=array.filter(user=>{
	user.team==="red";
})
console.log("filter", newArray);
const newArray=array.map(user => let {username}=> username+"!");
console.log('mapA', newArray);
const newArray=[];
array.forEach(user => 
{
	let {username}=user;
	username=username+"!";
	newArray.push(username);
});
console.log('forEach', newArray);

class Player {
	constructor(name, type){
		this.name=name;
		this.type=type;
	}
	introduce() {
		console.log(`I am a ${this.name}. I am a ${this.type}`);
	}
}

class Wizard extends Player {
	constructor(name, type)
	{
		super(name, type);
	}
	play() {
		console.log(`I am ${this.name}`);
	}
}

const wizard1 = new Wizard('shally', 'healer');
const wizard2 = new Wizard("susan", "magic");
*/
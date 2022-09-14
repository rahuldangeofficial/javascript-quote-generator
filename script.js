let btn=document.querySelector('#new-quote');

let quote=document.querySelector('.quote');

let person=document.querySelector('.person');

const quotes = [{
	quote:'Spread love everywhere you go. Let no one ever come to you without leaving happier.',
	person:'- Mother Teresa'
},{
	quote:'When you reach the end of your rope, tie a knot in it and hang on.',
	person:'- Franklin D. Roosevelt'
},{
	quote:'Always remember that you are absolutely unique. Just like everyone else. ',
	person:'- Margaret Mead'
},{
	quote:"Don't judge each day by the harvest you reap but by the seeds that you plant.",
	person:'- Robert Louis Stevenson'
},{
	quote:'The future belongs to those who believe in the beauty of their dreams.',
	person:'- Eleanor Roosevelt'
},{
	quote:'Tell me and I forget. Teach me and I remember. Involve me and I learn.',
	person:'- Benjamin Franklin'
},{
	quote:'The best and most beautiful things in the world cannot be seen or even touched — they must be felt with the heart.',
	person:'- Helen Keller'
},{
	quote:'It is during our darkest moments that we must focus to see the light.',
	person:'- Aristotle'
},{
	quote:'Whoever is happy will make others happy too. ',
	person:'- Anne Frank'
},{
	quote:'Do not go where the path may lead, go instead where there is no path and leave a trail. ',
	person:'- Ralph Waldo Emerson'
},];

btn.addEventListener('click',function(){
	let random=Math.floor(Math.random()*quotes.length);
	quote.innerText=quotes[random].quote;
	person.innerText=quotes[random].person;
})



$('.container').css({
    'width':'70%',
    'height':'500px',
    
    'margin-left':'275px'
})
$('.butdiv').css({
    'margin-left':'580px',
    'margin-top':'50px'
})
$('.d').css({
    'height':'150px',
    'width':'25%',
   
    'float':'left',
    'margin-left':'50px',
    'margin-top':'165px'

})


function randInt(n) { 
    return Math.floor(Math.random() * (n + 1)) 
    }

    var questiondata=['what is the color ?','what is the word?']
    var colordata=['red','yellow','green','blue','black','pink','purple','orange','aqua','brown','grey']
    var answers=[$('.answer1').html(),$('.answer2').html()]
    
     var randqesust=function(){
       
           $('.question').append(questiondata[randInt(1)])
        
     }
     //// work and need to delete the prev item
    //  var randcolor=function(){
    //    // got a proble that some times give empty 
    //     $('.answer1').append(colordata[randInt(11)])
    //     $('.answer2').append(colordata[randInt(11)])

    //  }
    
var score=0
var wronganswers=0
var counter=0
var lvl=$('#mySelect').val()
function theTimer(){
    if ($('#mySelect').val()==='expert'){start(30)}
    else if ($('#mySelect').val()==='medium'){start(45)}
    else if ($('#mySelect').val()==='beginner'){start(60)}
}
function start(d){
 let time=d
const count=setInterval(() =>{
    time --;
    $('.timee').html(time);
    if(time<=0){
  clearInterval(count)
  scores.push(score)
alert('time is over ,your score is '+score+' in the '+lvl+' level ,try again ?')
$('.answer1').empty()
$('.answer2').empty()
$('.question').empty()
$('.neded').empty()
$('.scr').html(0)
}
}, 1000);}

    function scoreTo0(){
        return score=0
    }
var x= randInt(1)
        var randsug=function(){
         var colorword=colordata[randInt(10)]
         var colorvalue=colordata[randInt(10)]
         console.log('this is color',colorword,'this is colorvalue.color',colorvalue)
        
        
         if(x===1){
     
        $('.answer2').append(colorvalue)
        $('.answer1').append(colorword)
        $('.neded').append(colorword)
        $('.neded').css('color',colorvalue)
        $('.answer1').attr('name',colorvalue)
    
    }
        else if(x===0){
     
            $('.answer1').append(colorvalue)
            $('.answer2').append(colorword)
            $('.neded').append(colorword)
            $('.neded').css('color',colorvalue)    
            
        }
       
    
        
    }
    //  }
// ('.answer2').html() to compare same suggestion so they get always difiren color name
$('.start').click(function(){
    theTimer()
    randsug()
    randqesust()
   
   
})
$('.restart').click(function(){
    $('.answer1').empty()
    $('.answer2').empty()
    $('.question').empty()
    $('.neded').empty()
    score=0
    theTimer()
    randsug()
    randqesust()
    
   
   })
// we still miss to clear the timer each restart

$('.answer').click(function(){
    
 if($('.question').html()==='what is the word?'&&this.innerHTML===$('.neded').html()){
    score++
       $('.scr').html(score)
    }
    else if($('.question').html()==='what is the color ?'&&this.innerHTML===$('.neded')[0].style.color){
        score++
       $('.scr').html(score)
}
    if($('.answer1').html===$('.answer2').html){
        console.log('1')
    $('.answer1').empty()
    $('.answer2').empty()
    $('.question').empty()
    $('.neded').empty()
    
     randsug()
    randqesust()
    
    }
    
})


var scores=[];
//we need to local storage the scores so we can find the history of the scors

function store(){
    console.log(scores);
    localStorage.setItem('scores',JSON.stringify(scores));
    alert('Your history of scores :'+scores)
}
// got a problem of taking all the prev scores not only the last one
//dose not corectly

   // var randomquest=function(){
    //     if(randInt)
    //     $('#q1').addClass("answer1")
    //     $('#q2').addClass('answer2')

    //     $('#q2').addClass('answer2')
    //     $('#q1').addClass("answer1")
    // }
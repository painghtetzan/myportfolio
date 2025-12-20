function addclass(){
    const h1 = document.getElementById("title")
    text = 'Paing Htet Zan'
    
    for(let a of text){
        
        const span = document.createElement("span")
         span.style.display="inline-block"
        span.textContent = a  === " " ? "\u00A0" : a;
        span.style.opacity = 0
        h1.appendChild(span)
    }

    const spans  = h1.querySelectorAll("span")
    spans.forEach((span,i)=>{
        setTimeout(()=>{
           
            span.classList.add('animationFadeIn')  
        },i*100)

    })
    setTimeout(()=>{
            h1.innerHTML=''
            text = 'Full Stack Developer'
        
        for(let a of text){
            
            const span = document.createElement("span")
            span.style.display="inline-block"
            span.textContent = a === " " ? "\u00A0" : a;
            span.style.opacity = 0
            h1.appendChild(span)
        }

        const spans  = h1.querySelectorAll("span")
        spans.forEach((span,i)=>{
            setTimeout(()=>{
               
                
                span.classList.add('animationFadeIn')
                
                
            },i*100)
        })

            
        },5400)
       
        setTimeout(()=>{
            h1.innerHTML=''
            addclass()
        },11400)
}



addclass()


const maxHeight = document.documentElement.scrollHeight - window.innerHeight

function setWidth(percentage){
    document.getElementById('line').style.width = `${percentage}%`
}

document.addEventListener('scroll',()=>{
   const currentHeight = window.scrollY
   const curHeightPer =  (currentHeight / maxHeight ) * 100
    setWidth(curHeightPer)
})


const cards = document.querySelectorAll('.cardd')

var left =100 + (cards.length) * 15 
var top = 10
var zindex = cards.length
for(let i=0;i<cards.length;i++){
    top +=30
    left -=30
    zindex --
    cards[i].style.left = `${top}px`
    cards[i].style.left = `${left}px`
    cards[i].style.zIndex =zindex
}

let currentcard=0

function rightbutton(){
    if(currentcard <cards.length){
    if(cards[currentcard].classList.contains('cardfadeinani')){
        cards[currentcard].classList.remove('cardfadeinani')
    }

    cards[currentcard].classList.add('cardfadeoutani')
    
    setTimeout(()=>{
        cards[currentcard].style.opacity=0
        cards[currentcard].classList.add('disable')
        currentcard++
    },1450)
}
    
}


function leftbutton(){

    if(currentcard >0){
    if(cards[currentcard-1].classList.contains('cardfadeoutani')){
        cards[currentcard-1].classList.remove('cardfadeoutani')
    }

    cards[currentcard-1].classList.add('cardfadeinani')
    
    setTimeout(()=>{
        cards[currentcard-1].style.opacity=1
        cards[currentcard-1].classList.remove('disable')
        currentcard--
    },1450)
}
    
}


document.addEventListener('mousemove',(e)=>{
    
    let cursorposleft = e.clientX
    let cursorpostop = e.clientY

    let cardposleft = -(cursorposleft/7)
    let cardpostop = -(cursorpostop/7)


    cards.forEach((card)=>{
        card.style.transform = `translate(${cardposleft}px,${cardpostop}px)`
    })
    
})


const boxes = document.querySelectorAll('.floatbox')
const container = document.getElementById('div3')


const position = []

boxes.forEach((box)=>{
let randomspotx = container.clientWidth * Math.random()
let randomspoty = container.clientHeight * Math.random()

let movex = (Math.random() *2 ) * (Math.random() >0.5 ? 1 :-1)
let movey = (Math.random() *2 ) * (Math.random() >0.5 ? 1 :-1)
position.push({randomspotx:randomspotx,randomspoty:randomspoty,movex:movex,movey:movey})
})

function float(){
boxes.forEach((box,i)=>{
    

    let setx = position[i].randomspotx +position[i].movex
    let sety = position[i].randomspoty +position[i].movey
   


    if(setx <=0){
        position[i].movex *=-1
        setx = 0
    }
    if(setx >= container.clientWidth - box.offsetWidth){
        position[i].movex *=-1
        setx = container.clientWidth-box.offsetWidth
    }

  

    if(sety<=0){
        position[i].movey *=-1
        sety = 0
    }

    if(sety>=container.clientHeight - box.offsetHeight){
        position[i].movey *=-1
        sety = container.clientHeight - box.offsetHeight
    }

    position.forEach((item,i)=>{
        position.forEach((smallitem,l)=>{
            if(i!==l){
                if(Math.abs((item.randomspotx +item.movex)-(smallitem.randomspotx+smallitem.movex))<boxes[i].offsetWidth && Math.abs((item.randomspoty+item.movey)-(smallitem.randomspoty+smallitem.movey))<boxes[i].offsetHeight){
                    position[i].movex *=-1
                    position[i].movey *=-1
                    position[l].movex *=-1
                    position[l].movey *=-1
                    item.randomspotx += item.movex;
                    item.randomspoty += item.movey;
                }
    
            }
                
            })
    })
    position[i].randomspotx = setx
    position[i].randomspoty = sety

    box.style.transform = `translate(${setx}px,${sety}px)`

    
})
requestAnimationFrame(float)
}


float()


const form = document.getElementById('contact-form')
let status = document.getElementById('status')

form.addEventListener('submit',function(e){
    e.preventDefault()
    status.textContent = "Sending Message..."

    emailjs.sendForm("service_b609m8t","template_tcf1y45",this).then(
        function(){
            status.textContent="Sent Successfully"
            form.reset()
        }
    ).catch(
        function(error){
            console.log("Error sending message",error)
            status.textContent= 'Message sending failed.'
        }
    )
})


const elementstoreveal = document.querySelectorAll('.elementstoreveal')

const watch = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.add("active")
        }
        if(!entry.isIntersecting && entry.target.classList.contains('active')){
            entry.target.classList.remove("active")
        }
    })
})


function reveal(){
    elementstoreveal.forEach((element)=>{watch.observe(element)})
    requestAnimationFrame(reveal)
}

reveal()
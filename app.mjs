const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');

canvas.width = 1024
canvas.height = 576

c.fillRect(0, 0, canvas.width, canvas.height)

const gravity = 0.7
class Spaceship{
    constructor({position, velocity}) {
        this.position = position
        this.velocity =  velocity
        this .height = 150
        this.lastKey
    }

    draw() {
        c.fillStyle = 'pink'
        c.fillRect(this.position.x, this.position.y, 50, this.height)
   }
   update() {
        this.draw()

        this.position.x += this.velocity.x
        this.position.y += this.velocity.y

        if (this.position.y + this.height + this.velocity.y >=canvas.height) {
            this.velocity.y = 0
        }else this.velocity.y += gravity
    }   
}

let player = new Spaceship({
   position: {
    x: 0,
    y: 0
    },
    velocity: {
        x:0,
        y:10
    },
    })

    let enemy = new Spaceship({
    position:{
     x: 400,
     y: 100
     },
     velocity: {
        x:0,
        y:0
     }
 })

 console.log(player)
 
 const keys = {
    a: {
        pressed: false
    },
    d: {
        pressed: false
    },
    ArrowRight: {
        pressed: false
    },
    ArrowLeft: {
        pressed: false
    }
 }

function animate() {
   window.requestAnimationFrame(animate)
   c.fillStyle = 'black'
   c.fillRect(0,0, canvas.width, canvas.height)
   player.update()
   enemy.update() 

   player.velocity.x = 20
   enemy.velocity.x = 0

//player movement
if (keys.a.pressed && player.lastKey === 'a') {
    player.velocity.x = -5
  }else if (keys.d.pressed && player.lastKey === 'd') {
    player.velocity.x = 5
  }


//enemy movement
if (keys.ArrowLeft.pressed && enemy.lastKey === 'ArrowLeft') {
    enemy.velocity.x = -5
  }else if (keys.ArrowRight.pressed && enemy.lastKey === 'ArrowRight') {
    enemy.velocity.x = 5
  }
}

animate()

window.addEventListener('keydown',(event) => {
    switch (event.key) {
    case 'd':
        keys.d.pressed = true  
        player.lastKey = 'd'
         break
    case 'a':
        keys.a.pressed = true
        player.lastKey = 'a'
        break
    case 'w':
        player.velocity.y = -10
        lastKey = 'w'
        break

    case 'ArrowRight':
        keys.ArrowRight.pressed = true  
        enemy.lastKey = 'ArrowRight'
        break
    case 'ArrowLeft':
        keys.ArrowLeft.pressed = true
        enemy.lastKey = 'ArrowLeft'
        break
     case 'ArrowUp':
        enemy.velocity.y = -10
        break
    }
    console.log('event.key')
})

window.addEventListener('keyup',(event) => {
    switch (event.key) {
        case 'd':
            keys.d.pressed = false   
         break
         case 'a':
            keys.a.pressed = false
            case 'w':
            lastKey = 'w'
        break
    }

    // enemy keys
    switch (event.key) {
        case 'ArrowRight':
            keys.ArrowRight.pressed = false   
         break
         case 'ArrowLeft':
            keys.ArrowLeft.pressed = false
            case 'w':
            lastKey = 'w'
        break
    console.log('event.key')
    }
});


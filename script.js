const dino = document.querySelector('.dino');  const background = document.querySelector('.background');

let isJumping = false;  let isGameOver = false;  let position = 0;

function handleKeyUp(event) {
	
  if (event.keyCode === 32) {
  if (!isJumping) {
  jump(); }
  }
}

function jump() {
	
  isJumping = true;

  let upInterval = setInterval(() => {  if (position >= 150) 
    {
		
      clearInterval(upInterval);

      let downInterval = setInterval(() => {
		  
        if (position <= 0) 
		{
			
          clearInterval(downInterval);
          isJumping = false;
		  
        } else
			
		{
          position -= 10;  dino.style.bottom = position + 'px';
        }
		
      }, 
	  20);
	  
    } else 
	{
      position += 10;   dino.style.bottom = position + 'px';
    }
  }, 20);
  
}

function createCactus() {
	
  const cactus = document.createElement('div');
  
  let cactusPosition = 1000;  let randomTime = Math.random() * 5000;

  if (isGameOver) return;

  cactus.classList.add('cactus');  background.appendChild(cactus);  cactus.style.left = cactusPosition + 'px';

  let leftTimer = setInterval(() => 
  {
    if (cactusPosition < -50) 
	{
      
      clearInterval(leftTimer);  background.removeChild(cactus);
	  
    } else if (cactusPosition > 0 && cactusPosition < 50 && position < 50) {
		
      
      clearInterval(leftTimer);
      isGameOver = true;
	  
      document.body.innerHTML = '<h1 class="game-over">Game Over</h1>';
    } 
	else {
      cactusPosition -= 10;
      cactus.style.left = cactusPosition + 'px';
    }
	
  }, 20);

  setTimeout(createCactus, randomTime);
}

createCactus();
document.addEventListener('keyup', handleKeyUp);

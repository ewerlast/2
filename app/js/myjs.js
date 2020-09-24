document.querySelector('.left').onclick = runLeft;
document.querySelector('.right').onclick = runRight;

let right = 0;
let left = 0;
function runLeft(){
    right = right - 500;
     
    if(right <= -4000){
        right = right + 500;
    }   
    
        document.querySelector('.slider_content').style.marginLeft = right + 'px';

}

function runRight(){
    right = right + 500;
    if( right >= 500){
        right = right - 500;
    }   
    
        document.querySelector('.slider_content').style.marginLeft = right + 'px';
 
}
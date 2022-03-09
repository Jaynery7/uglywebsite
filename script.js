console.log('is it working ?')

let themeDots = document.getElementsByClassName('theme-dot')


for  (var i=0; themeDots.Length > i; i++)  {
    themeDots[i].addEventListener ('click', function(){
        
let mode = this.dataset.mode
        console.log('Option clicked', mode)
    })
}
const themeToggle = document.getElementById('dark-toggle'),
      buttonTheme = document.getElementById('bttn-theme')

if(localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) 
&& window.matchMedia('(prefers-color-scheme: dark)').matches)){
    if(localStorage.getItem('color-theme') === 'dark'){
        document.documentElement.classList.add('dark')
        buttonTheme.classList.remove('translate-x-[0px]')
        buttonTheme.classList.add('translate-x-[-120%]')
    }else{
        buttonTheme.classList.add('translate-x-[-120%]')
        buttonTheme.classList.remove('translate-x-[0px]')
    }
}

themeToggle.addEventListener('click', ()=> {
    buttonTheme.classList.toggle('translate-x-[0px]')
    document.documentElement.classList.toggle('dark')
})
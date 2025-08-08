function press(){
    // var locate = window.location.href
    // console.log(locate);
    
    // window.location.href = 'https://ww.google.com/'
    // window.location.assign('https://ww.google.com/')
    // window.location.replace('https://ww.google.com/')
    // window.location.reload(false) // cache reloading
    // window.location.reload(true) // server reloading

    // window.open('https://youTube.com')

    // var content = `<h1>Succesfully change page</h1>`
    // window.open().document.write(content)
    
    var win = window.open('https://www.google.com/','win','width = 200px', 'height = 100px','left = 100px', 'top = 100px')  
    
    if(win === null){
        alert('aap apna popap locker ko disable kar do')
        // win.open()
        // win.close()
    }
}
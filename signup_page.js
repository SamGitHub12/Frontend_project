function preview() {
    frame.src = URL.createObjectURL(event.target.files[0]);
}
function switchOff() {
    if(document.getElementById('myImage').src == 'file:///home/xioc9/Frontend_Project/switchon.png'){
        document.getElementById('myImage').src = 'switchoff.jpeg';
        document.querySelector('button').innerHTML = "Switch On";
    }
    else
    {
        document.getElementById('myImage').src = 'switchon.png';
        document.querySelector('button').innerHTML = "Switch Off";
    }
}
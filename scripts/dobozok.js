var arrDobozok=document.querySelectorAll('.DobozContainer div');
for(var i=0;i<arrDobozok.length;i++)
{
    arrDobozok[i].addEventListener('click', function(){
        var sender=event.target;

        alert(sender.innerText);
    }, false);
}
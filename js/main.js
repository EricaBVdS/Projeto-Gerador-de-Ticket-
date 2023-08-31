const input = document.querySelector("input")
const contentInput = document.querySelector('.input')
const button = document.querySelector("#btn")
const nameElement = document.querySelector("#name")
const photoElement = document.querySelector("#photo")
const errorElement = document.querySelector("#error")

const btnDownload = document.querySelector('#btn_download')
const contentDowload = document.querySelector('#download')


button.addEventListener('click', async () => {
    const username = input.value;
    const response = await fetch(`https://api.github.com/users/${username}`);
    const data = await response.json();
    const name = data.name;
    const photo = data.avatar_url;
    
    if(data !== undefined && data.message === 'Not Found' && input.value =='') {
        errorElement.style.display = 'block';
        nameElement.style.display = 'block';
        photoElement.style.display = 'block';
    } else {
        errorElement.style.display = 'none';
        contentInput.style.display = 'none'
        nameElement.style.display = 'block';
        photoElement.style.display = 'block';
        contentDowload.style.display = 'block';
        nameElement.innerHTML = name;
        photoElement.setAttribute('src', photo)
    }
})

//Download PDF

btnDownload.addEventListener('click', () => {
    const contentTicket= document.querySelector('.content-ticket')
    const options = {
        margin: 10,
        filename: 'Ticket.pdf',
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };

    html2pdf().from(contentTicket).set(options).save();
});


// Download JPEG
/*
btnDownload.addEventListener('click', () => {
    const contentTicket= document.querySelector('.content-ticket')

    html2canvas(contentTicket).then(canvas => {
        const link = document.createElement('a');
        link.download = 'Ticket.jpg';
        link.href = canvas.toDataURL('image/jpeg');
        link.click();
    })

})
*/

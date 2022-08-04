const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'd4fa5118b0msh46cdefc89896f1ap188c8cjsn21a175406a5d',
    'X-RapidAPI-Host': 'ip-geolocation-and-threat-detection.p.rapidapi.com'
  }
};

const IpInfo = ip => {
  return fetch(`https://ip-geolocation-and-threat-detection.p.rapidapi.com/${ip}`, options) 
  .then(res => res.json())
  .catch(err => console.error(err))
}

 

const $form = document.querySelector('#form')
const $input = document.querySelector('#ip')
const $submit = document.querySelector('#submit')
const $results = document.querySelector('#results')


$form.addEventListener('submit', async (event) => {
  event.preventDefault()
  const{value} = $input

  if(!value) return

  $submit.setAttribute('disabled', '')
  $submit.setAttribute('aria-busy', 'true')

  const ipInfo = await IpInfo(value)

  if(ipInfo) {
    $results.innerHTML = JSON.stringify(ipInfo, null, 2)
  }


  $submit.removeAttribute('disabled')
  $submit.removeAttribute('aria-busy')
})
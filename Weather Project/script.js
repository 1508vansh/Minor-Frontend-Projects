let button = document.querySelector('button');
let callBack = ()=>{
    let location = document.querySelector('#text').value;
    let Promise = fetch(`http://api.weatherapi.com/v1/current.json?key=4862849e3121457598c122107250301&q=${location}&aqi=yes`);
    let para = document.createElement('p');
    Promise.then((response)=>response.json())
    .then((data)=>para.innerHTML = `Location ${location} - Temperature : ${data.current.temp_c} degrees celsius, Weather - ${data.current.condition.text}`)
    .catch(error=>para.innerHTML = `Location ${location} is not found ! Please Enter a Valid Location`);
    document.querySelector('.location-text-box').appendChild(para);
    button.removeEventListener('click',callBack);
};
button.addEventListener('click',callBack);
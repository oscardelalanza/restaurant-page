const location = () => {

    const location = document.createElement('div');
    const address = document.createElement('div');
    const schedule = document.createElement('div');
    const title = document.createElement('h3');
    const street = document.createElement('p');
    const phone = document.createElement('p');
    const email = document.createElement('p');
    const subtitle = document.createElement('h4');
    const week = document.createElement('p');
    const weekend = document.createElement('p');

    title.innerText = 'Location';

    street.innerText = '1 Macquarie St, Sydney NSW 2000, Australia';
    phone.innerText = '+61 2 9240 2255';
    email.innerText = 'example@email.com';
    address.appendChild(street);
    address.appendChild(phone);
    address.appendChild(email);

    subtitle.innerText = 'Schedule';
    week.innerText = 'Monday to Friday 12:00 - 22:30';
    weekend.innerText = 'Saturday and Sunday 12:00 - 22:00';
    schedule.appendChild(subtitle);
    schedule.appendChild(week);
    schedule.appendChild(weekend);

    location.appendChild(title);
    location.appendChild(address);
    location.appendChild(schedule);

    return location;

};

// method for insert a map
const map = () => {

    const map = document.createElement('iframe');

    map.src = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d338.3397555421225!2d151.21314029242754!3d-33.85956641319514!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12ae67d5541c77%3A0x8af817cc7e3857d7!2sAria%20Restaurant%20Sydney!5e0!3m2!1ses!2smx!4v1578622220577!5m2!1ses!2smx';
    map.width = '800';
    map.height = '600';
    map.frameBorder = '0';
    map.style.border = '0';

    return map;
};

export {

    location,
    map,

}
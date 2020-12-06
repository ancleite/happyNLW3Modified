const map = L.map('mapid').setView([-19.9190315,-43.9397288], 16);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

//create icon
const icon = L.icon({
    iconUrl: "/images/icons8-pokestop-48.png",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    
})

let marker;

//create and add marker
map.on('click', (event) => {
    const lat = event.latlng.lat;
    const lng = event.latlng.lng;

    document.querySelector('[name=lat]').value = lat;
    document.querySelector('[name=lng]').value = lng;

    //remove icon
    marker && map.removeLayer(marker)

    //add icon layer
    marker = L.marker([lat, lng], {icon})
    .addTo(map)
})


//add photo's field

function addPhotoField() {
    //catch photo's container #images
    const container = document.querySelector('#images')
    //catch container to duplicate .new-upload
    const fieldsContainer = document.querySelectorAll('.new-upload')
    //do the duplication of the last image add
    const newFieldContainer = fieldsContainer[fieldsContainer.length - 1].cloneNode(true)
    //check if the field is empty, if is, no add to photo's container
    const input = newFieldContainer.children[0]
    if(input.value == "") {
        return
    }

    //clear the field before add to photo's container
    input.value = ""
    //add the duplication to container of #images
    container.appendChild(newFieldContainer)
}

function deleteField(event) {
    const span = event.currentTarget

    const fieldsContainer = document.querySelectorAll('.new-upload')
    if(fieldsContainer.length <= 1) {
        //clear the field's value
        span.parentNode.children[0].value = ""
        return
    }

    //delete the field
    span.parentNode.remove();
}


//select yes or no
function toggleSelect(event) {
    //remove class .active
    document.querySelectorAll('.button-select button')
    .forEach((button) => {
        button.classList.remove('active')
    })
    //add class .active
    const button = event.currentTarget
    button.classList.add('active')
    //refresh input hidde with the selected value
    const input = document.querySelector('[name="open_on_weekends"]')
    input.value = button.dataset.value

}

/*function validate(event) {
    const vlat = document.querySelector('[name=lat]').value
    const vlng = document.querySelector('[name=lng]').value
    if(vlat == "" || vlng == "") {
        event.preventDefault()
        alert('Selecione um ponto no mapa!')
    }
}*/
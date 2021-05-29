function cargarImagenes() {
    console.log("Cargar Imagenes");
    for (let num = 1; num <= 151; num++) {
        $('.pokemon').append(`<img id="${num}" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${num}.png">`);
    }
}
cargarImagenes();

let pokemon;
$(document).on('click', 'img', function () {
    pokemon = $(this).attr("id");
    $.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}/`, function (res) {
        let nombre = res.name;
        let fotofrente = res.sprites.front_default;
        let fotoback = res.sprites.back_default;
        let habilidad = res.abilities[0].ability.name;
        let altura = res.height;
        let peso = res.weight;
        console.log(res);
        $('.pokemon-seleccionado').html(`
            <div class="container">
                <section class="mx-auto my-5" style="max-width: 23rem;">
                    <div class="card testimonial-card mt-2 mb-3">
                        <div class="card-up aqua-gradient"></div>
                        <div class="avatar mx-auto white">
                            <img src=" ${fotofrente}"
                                class="rounded-circle img-fluid" alt="woman avatar"> </div>
                            <div class="card-body text-center">
                                <h4 class="card-title font-weight-bold"> ${nombre} </h4>
                                <hr>
                                <h5 class="card-title font-weight-bold"> Habilidad:  ${habilidad} </h5>
                                    <p><i class="fas fa-quote-left"></i> Peso: ${peso}Kg <br> Altura: ${altura} mts </p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>`);
    }, "json");
});

function load() {
	$.getJSON( "datapokemon.json", function( data ) {
        console.log(data);
    });
}
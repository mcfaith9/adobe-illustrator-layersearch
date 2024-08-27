function searchLayers(searchTerm) {
    var doc = app.activeDocument;
    var layers = doc.layers;
    var results = [];

    // Toggle visibility of layers
    for (var i = 0; i < layers.length; i++) {
        var layer = layers[i];
        if (layer.name.indexOf(searchTerm) !== -1) {
            layer.visible = true;
            results.push({
                name: layer.name,
                path: getLayerPath(layer)
            });
        } else {
            layer.visible = false;
        }
    }

    // Provide feedback to the user
    if (results.length > 0) {
        var resultText = "Found " + results.length + " layer(s) matching the search term:\n";
        
        // Manually iterate over the results array
        for (var j = 0; j < results.length; j++) {
            resultText += results[j].path + " - " + results[j].name + "\n";
        }

        alert(resultText);
    } else {
        alert("No layers found with the search term: " + searchTerm);
    }
}

// Function to get the full path of a layer
function getLayerPath(layer) {
    var path = [];
    while (layer) {
        path.unshift(layer.name);
        layer = layer.parent;
    }
    return path.join(" > ");
}

var searchTerm = prompt("Enter search term:", "");
if (searchTerm) {
    searchLayers(searchTerm);
}

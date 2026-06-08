var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_PROSPECTOS_1 = new ol.format.GeoJSON();
var features_PROSPECTOS_1 = format_PROSPECTOS_1.readFeatures(json_PROSPECTOS_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PROSPECTOS_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PROSPECTOS_1.addFeatures(features_PROSPECTOS_1);
var lyr_PROSPECTOS_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PROSPECTOS_1, 
                style: style_PROSPECTOS_1,
                popuplayertitle: 'PROSPECTOS',
                interactive: true,
                title: '<img src="styles/legend/PROSPECTOS_1.png" /> PROSPECTOS'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_PROSPECTOS_1.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_PROSPECTOS_1];
lyr_PROSPECTOS_1.set('fieldAliases', {'ID': 'ID', 'ESTADO': 'ESTADO', 'MUNICIPIO': 'MUNICIPIO', 'LOCALIDAD': 'LOCALIDAD', 'X': 'X', 'Y': 'Y', 'X_1': 'X_1', 'Y_1': 'Y_1', 'Z': 'Z', 'SUPERFICIE': 'SUPERFICIE', 'TENENCIA D': 'TENENCIA D', 'PROPIETARI': 'PROPIETARI', 'CONTACTO': 'CONTACTO', 'ACCESO': 'ACCESO', 'LITOLOGIA': 'LITOLOGIA', 'COLOR': 'COLOR', 'GEOLOGIA': 'GEOLOGIA', 'ESTATUS': 'ESTATUS', 'OBSERVACIO': 'OBSERVACIO', 'PDF': 'PDF', });
lyr_PROSPECTOS_1.set('fieldImages', {'ID': 'TextEdit', 'ESTADO': 'TextEdit', 'MUNICIPIO': 'TextEdit', 'LOCALIDAD': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'X_1': 'TextEdit', 'Y_1': 'TextEdit', 'Z': 'TextEdit', 'SUPERFICIE': 'TextEdit', 'TENENCIA D': 'TextEdit', 'PROPIETARI': 'TextEdit', 'CONTACTO': 'TextEdit', 'ACCESO': 'TextEdit', 'LITOLOGIA': 'TextEdit', 'COLOR': 'TextEdit', 'GEOLOGIA': 'TextEdit', 'ESTATUS': 'TextEdit', 'OBSERVACIO': 'TextEdit', 'PDF': 'TextEdit', });
lyr_PROSPECTOS_1.set('fieldLabels', {'ID': 'inline label - visible with data', 'ESTADO': 'inline label - visible with data', 'MUNICIPIO': 'inline label - visible with data', 'LOCALIDAD': 'inline label - visible with data', 'X': 'hidden field', 'Y': 'hidden field', 'X_1': 'inline label - visible with data', 'Y_1': 'inline label - visible with data', 'Z': 'hidden field', 'SUPERFICIE': 'inline label - visible with data', 'TENENCIA D': 'inline label - visible with data', 'PROPIETARI': 'inline label - visible with data', 'CONTACTO': 'inline label - visible with data', 'ACCESO': 'inline label - visible with data', 'LITOLOGIA': 'inline label - visible with data', 'COLOR': 'inline label - visible with data', 'GEOLOGIA': 'inline label - visible with data', 'ESTATUS': 'inline label - visible with data', 'OBSERVACIO': 'inline label - visible with data', 'PDF': 'inline label - visible with data', });
lyr_PROSPECTOS_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
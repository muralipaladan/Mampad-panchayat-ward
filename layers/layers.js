var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Boundary_1 = new ol.format.GeoJSON();
var features_Boundary_1 = format_Boundary_1.readFeatures(json_Boundary_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Boundary_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Boundary_1.addFeatures(features_Boundary_1);
var lyr_Boundary_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Boundary_1, 
                style: style_Boundary_1,
                popuplayertitle: 'Boundary',
                interactive: true,
                title: '<img src="styles/legend/Boundary_1.png" /> Boundary'
            });
var format_FinalN_Malappuram_Mampad1Malappuramcopy_2 = new ol.format.GeoJSON();
var features_FinalN_Malappuram_Mampad1Malappuramcopy_2 = format_FinalN_Malappuram_Mampad1Malappuramcopy_2.readFeatures(json_FinalN_Malappuram_Mampad1Malappuramcopy_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FinalN_Malappuram_Mampad1Malappuramcopy_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FinalN_Malappuram_Mampad1Malappuramcopy_2.addFeatures(features_FinalN_Malappuram_Mampad1Malappuramcopy_2);
var lyr_FinalN_Malappuram_Mampad1Malappuramcopy_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FinalN_Malappuram_Mampad1Malappuramcopy_2, 
                style: style_FinalN_Malappuram_Mampad1Malappuramcopy_2,
                popuplayertitle: 'FinalN_Malappuram_Mampad (1) — Malappuram copy',
                interactive: true,
                title: '<img src="styles/legend/FinalN_Malappuram_Mampad1Malappuramcopy_2.png" /> FinalN_Malappuram_Mampad (1) — Malappuram copy'
            });
var format_FinalN_Malappuram_Mampad1Malappuram_3 = new ol.format.GeoJSON();
var features_FinalN_Malappuram_Mampad1Malappuram_3 = format_FinalN_Malappuram_Mampad1Malappuram_3.readFeatures(json_FinalN_Malappuram_Mampad1Malappuram_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FinalN_Malappuram_Mampad1Malappuram_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FinalN_Malappuram_Mampad1Malappuram_3.addFeatures(features_FinalN_Malappuram_Mampad1Malappuram_3);
var lyr_FinalN_Malappuram_Mampad1Malappuram_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FinalN_Malappuram_Mampad1Malappuram_3, 
                style: style_FinalN_Malappuram_Mampad1Malappuram_3,
                popuplayertitle: 'FinalN_Malappuram_Mampad (1) — Malappuram',
                interactive: true,
    title: 'FinalN_Malappuram_Mampad (1) — Malappuram<br />\
    <img src="styles/legend/FinalN_Malappuram_Mampad1Malappuram_3_0.png" /> COMPANIPADY (9)<br />\
    <img src="styles/legend/FinalN_Malappuram_Mampad1Malappuram_3_1.png" /> ELAMPUZHA (16)<br />\
    <img src="styles/legend/FinalN_Malappuram_Mampad1Malappuram_3_2.png" /> IPPOTTINGAL (18)<br />\
    <img src="styles/legend/FinalN_Malappuram_Mampad1Malappuram_3_3.png" /> KARACHAL (21)<br />\
    <img src="styles/legend/FinalN_Malappuram_Mampad1Malappuram_3_4.png" /> KARIKKATTUMANNA (1)<br />\
    <img src="styles/legend/FinalN_Malappuram_Mampad1Malappuram_3_5.png" /> KATTUMUNDA (11)<br />\
    <img src="styles/legend/FinalN_Malappuram_Mampad1Malappuram_3_6.png" /> KATTUPOYIL (12)<br />\
    <img src="styles/legend/FinalN_Malappuram_Mampad1Malappuram_3_7.png" /> MAMPAD NORTH (9)<br />\
    <img src="styles/legend/FinalN_Malappuram_Mampad1Malappuram_3_8.png" /> MAMPAD SOUTH (17)<br />\
    <img src="styles/legend/FinalN_Malappuram_Mampad1Malappuram_3_9.png" /> MEPPADAM (14)<br />\
    <img src="styles/legend/FinalN_Malappuram_Mampad1Malappuram_3_10.png" /> NADUVAKKAD (7)<br />\
    <img src="styles/legend/FinalN_Malappuram_Mampad1Malappuram_3_11.png" /> ODAYIKKAL (22)<br />\
    <img src="styles/legend/FinalN_Malappuram_Mampad1Malappuram_3_12.png" /> PALAPARAMBU (5)<br />\
    <img src="styles/legend/FinalN_Malappuram_Mampad1Malappuram_3_13.png" /> PANTHALINGAL (13)<br />\
    <img src="styles/legend/FinalN_Malappuram_Mampad1Malappuram_3_14.png" /> PONGALLOOR (15)<br />\
    <img src="styles/legend/FinalN_Malappuram_Mampad1Malappuram_3_15.png" /> PULIKKALODI (8)<br />\
    <img src="styles/legend/FinalN_Malappuram_Mampad1Malappuram_3_16.png" /> PULLIPPADAM  (20)<br />\
    <img src="styles/legend/FinalN_Malappuram_Mampad1Malappuram_3_17.png" /> TANA (6)<br />\
    <img src="styles/legend/FinalN_Malappuram_Mampad1Malappuram_3_18.png" /> THALIPPOYIL (2)<br />\
    <img src="styles/legend/FinalN_Malappuram_Mampad1Malappuram_3_19.png" /> THRIKKAIKUTH (10)<br />\
    <img src="styles/legend/FinalN_Malappuram_Mampad1Malappuram_3_20.png" /> VADAPURAM (3)<br />\
    <img src="styles/legend/FinalN_Malappuram_Mampad1Malappuram_3_21.png" /> VALLIKKETTU (4)<br />\
    <img src="styles/legend/FinalN_Malappuram_Mampad1Malappuram_3_22.png" /> <br />' });

lyr_OSMStandard_0.setVisible(true);lyr_Boundary_1.setVisible(true);lyr_FinalN_Malappuram_Mampad1Malappuramcopy_2.setVisible(true);lyr_FinalN_Malappuram_Mampad1Malappuram_3.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_Boundary_1,lyr_FinalN_Malappuram_Mampad1Malappuramcopy_2,lyr_FinalN_Malappuram_Mampad1Malappuram_3];
lyr_Boundary_1.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Village': 'Village', });
lyr_FinalN_Malappuram_Mampad1Malappuramcopy_2.set('fieldAliases', {'ORIG_FID': 'ORIG_FID', 'District': 'District', 'LSGD': 'LSGD', 'Lsgd_Type': 'Lsgd_Type', 'Mob_No': 'Mob_No', 'Remarks': 'Remarks', 'Surveyor': 'Surveyor', 'Ward_Name': 'Ward_Name', 'Ward_No': 'Ward_No', });
lyr_FinalN_Malappuram_Mampad1Malappuram_3.set('fieldAliases', {'ORIG_FID': 'ORIG_FID', 'District': 'District', 'LSGD': 'LSGD', 'Lsgd_Type': 'Lsgd_Type', 'Mob_No': 'Mob_No', 'Remarks': 'Remarks', 'Surveyor': 'Surveyor', 'Ward_Name': 'Ward_Name', 'Ward_No': 'Ward_No', });
lyr_Boundary_1.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'Village': 'TextEdit', });
lyr_FinalN_Malappuram_Mampad1Malappuramcopy_2.set('fieldImages', {'ORIG_FID': 'Range', 'District': 'TextEdit', 'LSGD': 'TextEdit', 'Lsgd_Type': 'TextEdit', 'Mob_No': 'TextEdit', 'Remarks': 'TextEdit', 'Surveyor': 'TextEdit', 'Ward_Name': 'TextEdit', 'Ward_No': 'TextEdit', });
lyr_FinalN_Malappuram_Mampad1Malappuram_3.set('fieldImages', {'ORIG_FID': 'Range', 'District': 'TextEdit', 'LSGD': 'TextEdit', 'Lsgd_Type': 'TextEdit', 'Mob_No': 'TextEdit', 'Remarks': 'TextEdit', 'Surveyor': 'TextEdit', 'Ward_Name': 'TextEdit', 'Ward_No': 'TextEdit', });
lyr_Boundary_1.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'Village': 'no label', });
lyr_FinalN_Malappuram_Mampad1Malappuramcopy_2.set('fieldLabels', {'ORIG_FID': 'no label', 'District': 'no label', 'LSGD': 'no label', 'Lsgd_Type': 'no label', 'Mob_No': 'no label', 'Remarks': 'no label', 'Surveyor': 'no label', 'Ward_Name': 'no label', 'Ward_No': 'no label', });
lyr_FinalN_Malappuram_Mampad1Malappuram_3.set('fieldLabels', {'ORIG_FID': 'no label', 'District': 'no label', 'LSGD': 'no label', 'Lsgd_Type': 'no label', 'Mob_No': 'no label', 'Remarks': 'no label', 'Surveyor': 'no label', 'Ward_Name': 'no label', 'Ward_No': 'no label', });
lyr_FinalN_Malappuram_Mampad1Malappuram_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
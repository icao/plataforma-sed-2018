document.addEventListener('DOMContentLoaded', function () {

  var highlightLayer;

  function highlightFeature(e) {
    highlightLayer = e.target;

    if (e.target.feature.geometry.type === 'LineString') {
      highlightLayer.setStyle({
        color: '#ffff00',
      });
    } else {
      highlightLayer.setStyle({
        fillColor: '#ffff00',
        fillOpacity: 1
      });
    }
  }

  var map = L.map('map', {
    zoomControl: true,
    maxZoom: 28,
    minZoom: 1
  }).fitBounds([
    [19.1512055346, -99.4931042222],
    [19.6015641758, -98.7958746746]
  ]);
  var hash = new L.Hash(map);
  map.attributionControl.addAttribution('<a href="https://github.com/tomchadwin/qgis2web" target="_blank">qgis2web</a>');
  var bounds_group = new L.featureGroup([]);
  var basemap0 = L.tileLayer('http://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://economiaambiental.azc.uam.mx/">SED UAM-A</a> <a href="http://openstreetmap.org">OpenStreetMap</a> contributors,<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>,Tiles courtesy of <a href="http://hot.openstreetmap.org/" target="_blank">Humanitarian OpenStreetMap Team</a>',
    maxZoom: 25
  });
  basemap0.addTo(map);

  function setBounds() {}

  function pop_VSIndicedevulnerabilidadsocial_0(feature, layer) {
    layer.on({
      mouseout: function (e) {
        for (i in e.target._eventParents) {
          e.target._eventParents[i].resetStyle(e.target);
        }
      },
      mouseover: highlightFeature,
    });

    var popupContent = '<table>\
                    <tr>\
                        <th scope="row">CLAVE</th>\
                        <td>' + (feature.properties['CLAVE'] !== null ? Autolinker.link(String(feature.properties['CLAVE'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2"><strong>NOMBRE</strong><br />' + (feature.properties['NOMBRE'] !== null ? Autolinker.link(String(feature.properties['NOMBRE'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">POBLACIÓN TOTAL</th>\
                        <td>' + (feature.properties['POB_TOT'] !== null ? Autolinker.link(String(feature.properties['POB_TOT'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">SUPERFICIE KM2</th>\
                        <td>' + (feature.properties['SUP_KM2'] !== null ? Autolinker.link(String(feature.properties['SUP_KM2'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">DENSIDAD KM2</th>\
                        <td>' + (feature.properties['DEN_KM2'] !== null ? Autolinker.link(String(feature.properties['DEN_KM2'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">SUPERFICIE HA</th>\
                        <td>' + (feature.properties['SUP_HAS'] !== null ? Autolinker.link(String(feature.properties['SUP_HAS'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">DENSIDAD HA</th>\
                        <td>' + (feature.properties['DENSIDAD'] !== null ? Autolinker.link(String(feature.properties['DENSIDAD'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">DELEGACIÓN</th>\
                        <td>' + (feature.properties['DELEGACION'] !== null ? Autolinker.link(String(feature.properties['DELEGACION'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">INDICE DE VULNERABILIDAD SOCIAL</th>\
                        <td>' + (feature.properties['i_VS'] !== null ? Autolinker.link(String(feature.properties['i_VS'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">i_ICA</th>\
                        <td>' + (feature.properties['i_ICA'] !== null ? Autolinker.link(String(feature.properties['i_ICA'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">i_IED</th>\
                        <td>' + (feature.properties['i_IED'] !== null ? Autolinker.link(String(feature.properties['i_IED'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">i_IEGA</th>\
                        <td>' + (feature.properties['i_IEGA'] !== null ? Autolinker.link(String(feature.properties['i_IEGA'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">i_IES</th>\
                        <td>' + (feature.properties['i_IES'] !== null ? Autolinker.link(String(feature.properties['i_IES'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">i_RCAL</th>\
                        <td>' + (feature.properties['i_RCAL'] !== null ? Autolinker.link(String(feature.properties['i_RCAL'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">i_RDREN</th>\
                        <td>' + (feature.properties['i_RDREN'] !== null ? Autolinker.link(String(feature.properties['i_RDREN'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">i_RIGA</th>\
                        <td>' + (feature.properties['i_RIGA'] !== null ? Autolinker.link(String(feature.properties['i_RIGA'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">i_RSUM</th>\
                        <td>' + (feature.properties['i_RSUM'] !== null ? Autolinker.link(String(feature.properties['i_RSUM'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">i_VE</th>\
                        <td>' + (feature.properties['i_VE'] !== null ? Autolinker.link(String(feature.properties['i_VE'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">i_VF</th>\
                        <td>' + (feature.properties['i_VF'] !== null ? Autolinker.link(String(feature.properties['i_VF'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">i_VIGA</th>\
                        <td>' + (feature.properties['i_VIGA'] !== null ? Autolinker.link(String(feature.properties['i_VIGA'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">i_VP</th>\
                        <td>' + (feature.properties['i_VP'] !== null ? Autolinker.link(String(feature.properties['i_VP'])) : '') + '</td>\
                    </tr>\
                </table>';
    layer.bindPopup(popupContent, {
      maxHeight: 500,
      maxWidth: 800
    });
  }

  function style_VSIndicedevulnerabilidadsocial_0_0(feature) {
    if (feature.properties['i_VS'] >= 0.890000 && feature.properties['i_VS'] <= 2.708000) {
      return {
        pane: 'pane_VSIndicedevulnerabilidadsocial_0',
        opacity: 1,
        color: 'rgba(0,0,0,0.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0,
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(244, 67, 54, 0.8)',
      }
    }
    if (feature.properties['i_VS'] >= 2.708000 && feature.properties['i_VS'] <= 4.526000) {
      return {
        pane: 'pane_VSIndicedevulnerabilidadsocial_0',
        opacity: 1,
        color: 'rgba(0,0,0,0.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0,
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(255, 193, 7, 0.8)',
      }
    }
    if (feature.properties['i_VS'] >= 4.526000 && feature.properties['i_VS'] <= 6.344000) {
      return {
        pane: 'pane_VSIndicedevulnerabilidadsocial_0',
        opacity: 1,
        color: 'rgba(0,0,0,0.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0,
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(100, 221, 23, 0.8)',
      }
    }
    if (feature.properties['i_VS'] >= 6.344000 && feature.properties['i_VS'] <= 8.162000) {
      return {
        pane: 'pane_VSIndicedevulnerabilidadsocial_0',
        opacity: 1,
        color: 'rgba(0,0,0,0.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0,
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(33, 150, 243, 0.8)',
      }
    }
    if (feature.properties['i_VS'] >= 8.162000 && feature.properties['i_VS'] <= 9.980000) {
      return {
        pane: 'pane_VSIndicedevulnerabilidadsocial_0',
        opacity: 1,
        color: 'rgba(0,0,0,0.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0,
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(34, 73, 204, 0.8)',
      }
    }
  }
  map.createPane('pane_VSIndicedevulnerabilidadsocial_0');
  map.getPane('pane_VSIndicedevulnerabilidadsocial_0').style.zIndex = 400;
  map.getPane('pane_VSIndicedevulnerabilidadsocial_0').style['mix-blend-mode'] = 'normal';
  var layer_VSIndicedevulnerabilidadsocial_0 = new L.geoJson(json_VSIndicedevulnerabilidadsocial_0, {
    attribution: '<a href=""></a>',
    pane: 'pane_VSIndicedevulnerabilidadsocial_0',
    onEachFeature: pop_VSIndicedevulnerabilidadsocial_0,
    style: style_VSIndicedevulnerabilidadsocial_0_0,
  });
  bounds_group.addLayer(layer_VSIndicedevulnerabilidadsocial_0);

  function pop_VPIndicedevulnerabilidadpolitica_1(feature, layer) {

    layer.on({
      mouseout: function (e) {
        for (i in e.target._eventParents) {
          e.target._eventParents[i].resetStyle(e.target);
        }
      },
      mouseover: highlightFeature,
    });
    var popupContent = '<table>\
                    <tr>\
                        <th scope="row">CLAVE</th>\
                        <td>' + (feature.properties['CLAVE'] !== null ? Autolinker.link(String(feature.properties['CLAVE'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2"><strong>NOMBRE</strong><br />' + (feature.properties['NOMBRE'] !== null ? Autolinker.link(String(feature.properties['NOMBRE'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">POBLACIÓN TOTAL</th>\
                        <td>' + (feature.properties['POB_TOT'] !== null ? Autolinker.link(String(feature.properties['POB_TOT'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">SUPERFICIE KM2</th>\
                        <td>' + (feature.properties['SUP_KM2'] !== null ? Autolinker.link(String(feature.properties['SUP_KM2'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">DENSIDAD KM2</th>\
                        <td>' + (feature.properties['DEN_KM2'] !== null ? Autolinker.link(String(feature.properties['DEN_KM2'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">SUPERFICIE HA</th>\
                        <td>' + (feature.properties['SUP_HAS'] !== null ? Autolinker.link(String(feature.properties['SUP_HAS'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">DENSIDAD HA</th>\
                        <td>' + (feature.properties['DENSIDAD'] !== null ? Autolinker.link(String(feature.properties['DENSIDAD'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">DELEGACIÓN</th>\
                        <td>' + (feature.properties['DELEGACION'] !== null ? Autolinker.link(String(feature.properties['DELEGACION'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">i_VS</th>\
                        <td>' + (feature.properties['i_VS'] !== null ? Autolinker.link(String(feature.properties['i_VS'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">i_ICA</th>\
                        <td>' + (feature.properties['i_ICA'] !== null ? Autolinker.link(String(feature.properties['i_ICA'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">i_IED</th>\
                        <td>' + (feature.properties['i_IED'] !== null ? Autolinker.link(String(feature.properties['i_IED'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">i_IEGA</th>\
                        <td>' + (feature.properties['i_IEGA'] !== null ? Autolinker.link(String(feature.properties['i_IEGA'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">i_IES</th>\
                        <td>' + (feature.properties['i_IES'] !== null ? Autolinker.link(String(feature.properties['i_IES'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">i_RCAL</th>\
                        <td>' + (feature.properties['i_RCAL'] !== null ? Autolinker.link(String(feature.properties['i_RCAL'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">i_RDREN</th>\
                        <td>' + (feature.properties['i_RDREN'] !== null ? Autolinker.link(String(feature.properties['i_RDREN'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">i_RIGA</th>\
                        <td>' + (feature.properties['i_RIGA'] !== null ? Autolinker.link(String(feature.properties['i_RIGA'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">i_RSUM</th>\
                        <td>' + (feature.properties['i_RSUM'] !== null ? Autolinker.link(String(feature.properties['i_RSUM'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">i_VE</th>\
                        <td>' + (feature.properties['i_VE'] !== null ? Autolinker.link(String(feature.properties['i_VE'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">i_VF</th>\
                        <td>' + (feature.properties['i_VF'] !== null ? Autolinker.link(String(feature.properties['i_VF'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">i_VIGA</th>\
                        <td>' + (feature.properties['i_VIGA'] !== null ? Autolinker.link(String(feature.properties['i_VIGA'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">INDICE DE VULNERABILIDAD POLITICA</th>\
                        <td>' + (feature.properties['i_VP'] !== null ? Autolinker.link(String(feature.properties['i_VP'])) : '') + '</td>\
                    </tr>\
                </table>';
    layer.bindPopup(popupContent, {
      maxHeight: 500,
      maxWidth: 800
    });
  }

  function style_VPIndicedevulnerabilidadpolitica_1_0(feature) {
    if (feature.properties['i_VP'] >= 0.630000 && feature.properties['i_VP'] <= 2.502000) {
      return {
        pane: 'pane_VPIndicedevulnerabilidadpolitica_1',
        opacity: 1,
        color: 'rgba(0,0,0,0.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0,
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(244, 67, 54, 0.8)',
      }
    }
    if (feature.properties['i_VP'] >= 2.502000 && feature.properties['i_VP'] <= 4.374000) {
      return {
        pane: 'pane_VPIndicedevulnerabilidadpolitica_1',
        opacity: 1,
        color: 'rgba(0,0,0,0.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0,
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(255, 193, 7, 0.8)',
      }
    }
    if (feature.properties['i_VP'] >= 4.374000 && feature.properties['i_VP'] <= 6.246000) {
      return {
        pane: 'pane_VPIndicedevulnerabilidadpolitica_1',
        opacity: 1,
        color: 'rgba(0,0,0,0.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0,
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(100, 221, 23, 0.8)',
      }
    }
    if (feature.properties['i_VP'] >= 6.246000 && feature.properties['i_VP'] <= 8.118000) {
      return {
        pane: 'pane_VPIndicedevulnerabilidadpolitica_1',
        opacity: 1,
        color: 'rgba(0,0,0,0.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0,
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(33, 150, 243, 0.8)',
      }
    }
    if (feature.properties['i_VP'] >= 8.118000 && feature.properties['i_VP'] <= 9.990000) {
      return {
        pane: 'pane_VPIndicedevulnerabilidadpolitica_1',
        opacity: 1,
        color: 'rgba(0,0,0,0.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0,
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(34, 73, 204, 0.8)',
      }
    }
  }
  map.createPane('pane_VPIndicedevulnerabilidadpolitica_1');
  map.getPane('pane_VPIndicedevulnerabilidadpolitica_1').style.zIndex = 401;
  map.getPane('pane_VPIndicedevulnerabilidadpolitica_1').style['mix-blend-mode'] = 'normal';
  var layer_VPIndicedevulnerabilidadpolitica_1 = new L.geoJson(json_VPIndicedevulnerabilidadpolitica_1, {
    attribution: '<a href=""></a>',
    pane: 'pane_VPIndicedevulnerabilidadpolitica_1',
    onEachFeature: pop_VPIndicedevulnerabilidadpolitica_1,
    style: style_VPIndicedevulnerabilidadpolitica_1_0,
  });
  bounds_group.addLayer(layer_VPIndicedevulnerabilidadpolitica_1);

  function pop_VIGAIndicedevulnerabilidadantelaineficaciadelagestiondelagua_2(feature, layer) {
    layer.on({
      mouseout: function (e) {
        for (i in e.target._eventParents) {
          e.target._eventParents[i].resetStyle(e.target);
        }
      },
      mouseover: highlightFeature,
    });
    layer.on({
      mouseout: function (e) {
        for (i in e.target._eventParents) {
          e.target._eventParents[i].resetStyle(e.target);
        }
      },
      mouseover: highlightFeature,
    });
    var popupContent = '<table>\
                    <tr>\
                        <th scope="row">CLAVE</th>\
                        <td>' + (feature.properties['CLAVE'] !== null ? Autolinker.link(String(feature.properties['CLAVE'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2"><strong>NOMBRE</strong><br />' + (feature.properties['NOMBRE'] !== null ? Autolinker.link(String(feature.properties['NOMBRE'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">POBLACIÓN TOTAL</th>\
                        <td>' + (feature.properties['POB_TOT'] !== null ? Autolinker.link(String(feature.properties['POB_TOT'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">SUPERFICIE KM2</th>\
                        <td>' + (feature.properties['SUP_KM2'] !== null ? Autolinker.link(String(feature.properties['SUP_KM2'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">DENSIDAD KM2</th>\
                        <td>' + (feature.properties['DEN_KM2'] !== null ? Autolinker.link(String(feature.properties['DEN_KM2'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">SUPERFICIE HA</th>\
                        <td>' + (feature.properties['SUP_HAS'] !== null ? Autolinker.link(String(feature.properties['SUP_HAS'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">DENSIDAD HA</th>\
                        <td>' + (feature.properties['DENSIDAD'] !== null ? Autolinker.link(String(feature.properties['DENSIDAD'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">DELEGACIÓN</th>\
                        <td>' + (feature.properties['DELEGACION'] !== null ? Autolinker.link(String(feature.properties['DELEGACION'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">i_VS</th>\
                        <td>' + (feature.properties['i_VS'] !== null ? Autolinker.link(String(feature.properties['i_VS'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">i_ICA</th>\
                        <td>' + (feature.properties['i_ICA'] !== null ? Autolinker.link(String(feature.properties['i_ICA'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">i_IED</th>\
                        <td>' + (feature.properties['i_IED'] !== null ? Autolinker.link(String(feature.properties['i_IED'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">i_IEGA</th>\
                        <td>' + (feature.properties['i_IEGA'] !== null ? Autolinker.link(String(feature.properties['i_IEGA'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">i_IES</th>\
                        <td>' + (feature.properties['i_IES'] !== null ? Autolinker.link(String(feature.properties['i_IES'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">i_RCAL</th>\
                        <td>' + (feature.properties['i_RCAL'] !== null ? Autolinker.link(String(feature.properties['i_RCAL'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">i_RDREN</th>\
                        <td>' + (feature.properties['i_RDREN'] !== null ? Autolinker.link(String(feature.properties['i_RDREN'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">i_RIGA</th>\
                        <td>' + (feature.properties['i_RIGA'] !== null ? Autolinker.link(String(feature.properties['i_RIGA'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">i_RSUM</th>\
                        <td>' + (feature.properties['i_RSUM'] !== null ? Autolinker.link(String(feature.properties['i_RSUM'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">i_VE</th>\
                        <td>' + (feature.properties['i_VE'] !== null ? Autolinker.link(String(feature.properties['i_VE'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">i_VF</th>\
                        <td>' + (feature.properties['i_VF'] !== null ? Autolinker.link(String(feature.properties['i_VF'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">INDICE DE VULNERABILIDAD ANTE LA INEFICACIA DE LA GESTION DEL AGUA</th>\
                        <td>' + (feature.properties['i_VIGA'] !== null ? Autolinker.link(String(feature.properties['i_VIGA'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">i_VP</th>\
                        <td>' + (feature.properties['i_VP'] !== null ? Autolinker.link(String(feature.properties['i_VP'])) : '') + '</td>\
                    </tr>\
                </table>';
    layer.bindPopup(popupContent, {
      maxHeight: 500,
      maxWidth: 800
    });
  }

  function style_VIGAIndicedevulnerabilidadantelaineficaciadelagestiondelagua_2_0(feature) {
    if (feature.properties['i_VIGA'] >= 2.750000 && feature.properties['i_VIGA'] <= 3.944000) {
      return {
        pane: 'pane_VIGAIndicedevulnerabilidadantelaineficaciadelagestiondelagua_2',
        opacity: 1,
        color: 'rgba(0,0,0,0.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0,
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(244, 67, 54, 0.8)',
      }
    }
    if (feature.properties['i_VIGA'] >= 3.944000 && feature.properties['i_VIGA'] <= 5.138000) {
      return {
        pane: 'pane_VIGAIndicedevulnerabilidadantelaineficaciadelagestiondelagua_2',
        opacity: 1,
        color: 'rgba(0,0,0,0.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0,
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(255, 193, 7, 0.8)',
      }
    }
    if (feature.properties['i_VIGA'] >= 5.138000 && feature.properties['i_VIGA'] <= 6.332000) {
      return {
        pane: 'pane_VIGAIndicedevulnerabilidadantelaineficaciadelagestiondelagua_2',
        opacity: 1,
        color: 'rgba(0,0,0,0.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0,
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(100, 221, 23, 0.8)',
      }
    }
    if (feature.properties['i_VIGA'] >= 6.332000 && feature.properties['i_VIGA'] <= 7.526000) {
      return {
        pane: 'pane_VIGAIndicedevulnerabilidadantelaineficaciadelagestiondelagua_2',
        opacity: 1,
        color: 'rgba(0,0,0,0.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0,
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(33, 150, 243, 0.8)',
      }
    }
    if (feature.properties['i_VIGA'] >= 7.526000 && feature.properties['i_VIGA'] <= 8.720000) {
      return {
        pane: 'pane_VIGAIndicedevulnerabilidadantelaineficaciadelagestiondelagua_2',
        opacity: 1,
        color: 'rgba(0,0,0,0.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0,
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(34, 73, 204, 0.8)',
      }
    }
  }
  map.createPane('pane_VIGAIndicedevulnerabilidadantelaineficaciadelagestiondelagua_2');
  map.getPane('pane_VIGAIndicedevulnerabilidadantelaineficaciadelagestiondelagua_2').style.zIndex = 402;
  map.getPane('pane_VIGAIndicedevulnerabilidadantelaineficaciadelagestiondelagua_2').style['mix-blend-mode'] = 'normal';
  var layer_VIGAIndicedevulnerabilidadantelaineficaciadelagestiondelagua_2 = new L.geoJson(json_VIGAIndicedevulnerabilidadantelaineficaciadelagestiondelagua_2, {
    attribution: '<a href=""></a>',
    pane: 'pane_VIGAIndicedevulnerabilidadantelaineficaciadelagestiondelagua_2',
    onEachFeature: pop_VIGAIndicedevulnerabilidadantelaineficaciadelagestiondelagua_2,
    style: style_VIGAIndicedevulnerabilidadantelaineficaciadelagestiondelagua_2_0,
  });
  bounds_group.addLayer(layer_VIGAIndicedevulnerabilidadantelaineficaciadelagestiondelagua_2);

  function pop_VFIndicedevulnerabilidadfisica_3(feature, layer) {
    layer.on({
      mouseout: function (e) {
        for (i in e.target._eventParents) {
          e.target._eventParents[i].resetStyle(e.target);
        }
      },
      mouseover: highlightFeature,
    });
    var popupContent = '<table>\
                    <tr>\
                        <th scope="row">CLAVE</th>\
                        <td>' + (feature.properties['CLAVE'] !== null ? Autolinker.link(String(feature.properties['CLAVE'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2"><strong>NOMBRE</strong><br />' + (feature.properties['NOMBRE'] !== null ? Autolinker.link(String(feature.properties['NOMBRE'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">POBLACIÓN TOTAL</th>\
                        <td>' + (feature.properties['POB_TOT'] !== null ? Autolinker.link(String(feature.properties['POB_TOT'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">SUPERFICIE KM2</th>\
                        <td>' + (feature.properties['SUP_KM2'] !== null ? Autolinker.link(String(feature.properties['SUP_KM2'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">DENSIDAD KM2</th>\
                        <td>' + (feature.properties['DEN_KM2'] !== null ? Autolinker.link(String(feature.properties['DEN_KM2'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">SUPERFICIE HA</th>\
                        <td>' + (feature.properties['SUP_HAS'] !== null ? Autolinker.link(String(feature.properties['SUP_HAS'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">DENSIDAD HA</th>\
                        <td>' + (feature.properties['DENSIDAD'] !== null ? Autolinker.link(String(feature.properties['DENSIDAD'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">DELEGACIÓN</th>\
                        <td>' + (feature.properties['DELEGACION'] !== null ? Autolinker.link(String(feature.properties['DELEGACION'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">i_VS</th>\
                        <td>' + (feature.properties['i_VS'] !== null ? Autolinker.link(String(feature.properties['i_VS'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">i_ICA</th>\
                        <td>' + (feature.properties['i_ICA'] !== null ? Autolinker.link(String(feature.properties['i_ICA'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">i_IED</th>\
                        <td>' + (feature.properties['i_IED'] !== null ? Autolinker.link(String(feature.properties['i_IED'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">i_IEGA</th>\
                        <td>' + (feature.properties['i_IEGA'] !== null ? Autolinker.link(String(feature.properties['i_IEGA'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">i_IES</th>\
                        <td>' + (feature.properties['i_IES'] !== null ? Autolinker.link(String(feature.properties['i_IES'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">i_RCAL</th>\
                        <td>' + (feature.properties['i_RCAL'] !== null ? Autolinker.link(String(feature.properties['i_RCAL'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">i_RDREN</th>\
                        <td>' + (feature.properties['i_RDREN'] !== null ? Autolinker.link(String(feature.properties['i_RDREN'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">i_RIGA</th>\
                        <td>' + (feature.properties['i_RIGA'] !== null ? Autolinker.link(String(feature.properties['i_RIGA'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">i_RSUM</th>\
                        <td>' + (feature.properties['i_RSUM'] !== null ? Autolinker.link(String(feature.properties['i_RSUM'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">i_VE</th>\
                        <td>' + (feature.properties['i_VE'] !== null ? Autolinker.link(String(feature.properties['i_VE'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">INDICE DE VULNERABILIDAD FISICA</th>\
                        <td>' + (feature.properties['i_VF'] !== null ? Autolinker.link(String(feature.properties['i_VF'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">i_VIGA</th>\
                        <td>' + (feature.properties['i_VIGA'] !== null ? Autolinker.link(String(feature.properties['i_VIGA'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">i_VP</th>\
                        <td>' + (feature.properties['i_VP'] !== null ? Autolinker.link(String(feature.properties['i_VP'])) : '') + '</td>\
                    </tr>\
                </table>';
    layer.bindPopup(popupContent, {
      maxHeight: 500,
      maxWidth: 800
    });
  }

  function style_VFIndicedevulnerabilidadfisica_3_0(feature) {
    if (feature.properties['i_VF'] >= 0.870000 && feature.properties['i_VF'] <= 2.450000) {
      return {
        pane: 'pane_VFIndicedevulnerabilidadfisica_3',
        opacity: 1,
        color: 'rgba(0,0,0,0.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0,
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(244, 67, 54, 0.8)',
      }
    }
    if (feature.properties['i_VF'] >= 2.450000 && feature.properties['i_VF'] <= 4.030000) {
      return {
        pane: 'pane_VFIndicedevulnerabilidadfisica_3',
        opacity: 1,
        color: 'rgba(0,0,0,0.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0,
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(255, 193, 7, 0.8)',
      }
    }
    if (feature.properties['i_VF'] >= 4.030000 && feature.properties['i_VF'] <= 5.610000) {
      return {
        pane: 'pane_VFIndicedevulnerabilidadfisica_3',
        opacity: 1,
        color: 'rgba(0,0,0,0.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0,
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(100, 221, 23, 0.8)',
      }
    }
    if (feature.properties['i_VF'] >= 5.610000 && feature.properties['i_VF'] <= 7.190000) {
      return {
        pane: 'pane_VFIndicedevulnerabilidadfisica_3',
        opacity: 1,
        color: 'rgba(0,0,0,0.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0,
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(33, 150, 243, 0.8)',
      }
    }
    if (feature.properties['i_VF'] >= 7.190000 && feature.properties['i_VF'] <= 8.770000) {
      return {
        pane: 'pane_VFIndicedevulnerabilidadfisica_3',
        opacity: 1,
        color: 'rgba(0,0,0,0.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0,
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(34, 73, 204, 0.8)',
      }
    }
  }
  map.createPane('pane_VFIndicedevulnerabilidadfisica_3');
  map.getPane('pane_VFIndicedevulnerabilidadfisica_3').style.zIndex = 403;
  map.getPane('pane_VFIndicedevulnerabilidadfisica_3').style['mix-blend-mode'] = 'normal';
  var layer_VFIndicedevulnerabilidadfisica_3 = new L.geoJson(json_VFIndicedevulnerabilidadfisica_3, {
    attribution: '<a href=""></a>',
    pane: 'pane_VFIndicedevulnerabilidadfisica_3',
    onEachFeature: pop_VFIndicedevulnerabilidadfisica_3,
    style: style_VFIndicedevulnerabilidadfisica_3_0,
  });
  bounds_group.addLayer(layer_VFIndicedevulnerabilidadfisica_3);

  function pop_VEIndicedevulnerabilidadeconomica_4(feature, layer) {
    layer.on({
      mouseout: function (e) {
        for (i in e.target._eventParents) {
          e.target._eventParents[i].resetStyle(e.target);
        }
      },
      mouseover: highlightFeature,
    });
    var popupContent = '<table>\
                    <tr>\
                        <th scope="row">CLAVE</th>\
                        <td>' + (feature.properties['CLAVE'] !== null ? Autolinker.link(String(feature.properties['CLAVE'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2"><strong>NOMBRE</strong><br />' + (feature.properties['NOMBRE'] !== null ? Autolinker.link(String(feature.properties['NOMBRE'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">POBLACIÓN TOTAL</th>\
                        <td>' + (feature.properties['POB_TOT'] !== null ? Autolinker.link(String(feature.properties['POB_TOT'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">SUPERFICIE KM2</th>\
                        <td>' + (feature.properties['SUP_KM2'] !== null ? Autolinker.link(String(feature.properties['SUP_KM2'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">DENSIDAD KM2</th>\
                        <td>' + (feature.properties['DEN_KM2'] !== null ? Autolinker.link(String(feature.properties['DEN_KM2'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">SUPERFICIE HA</th>\
                        <td>' + (feature.properties['SUP_HAS'] !== null ? Autolinker.link(String(feature.properties['SUP_HAS'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">DENSIDAD HA</th>\
                        <td>' + (feature.properties['DENSIDAD'] !== null ? Autolinker.link(String(feature.properties['DENSIDAD'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">DELEGACIÓN</th>\
                        <td>' + (feature.properties['DELEGACION'] !== null ? Autolinker.link(String(feature.properties['DELEGACION'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">i_VS</th>\
                        <td>' + (feature.properties['i_VS'] !== null ? Autolinker.link(String(feature.properties['i_VS'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">i_ICA</th>\
                        <td>' + (feature.properties['i_ICA'] !== null ? Autolinker.link(String(feature.properties['i_ICA'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">i_IED</th>\
                        <td>' + (feature.properties['i_IED'] !== null ? Autolinker.link(String(feature.properties['i_IED'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">i_IEGA</th>\
                        <td>' + (feature.properties['i_IEGA'] !== null ? Autolinker.link(String(feature.properties['i_IEGA'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">i_IES</th>\
                        <td>' + (feature.properties['i_IES'] !== null ? Autolinker.link(String(feature.properties['i_IES'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">i_RCAL</th>\
                        <td>' + (feature.properties['i_RCAL'] !== null ? Autolinker.link(String(feature.properties['i_RCAL'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">i_RDREN</th>\
                        <td>' + (feature.properties['i_RDREN'] !== null ? Autolinker.link(String(feature.properties['i_RDREN'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">i_RIGA</th>\
                        <td>' + (feature.properties['i_RIGA'] !== null ? Autolinker.link(String(feature.properties['i_RIGA'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">INDICE DE RIESGO POR LA FALTA DEL SUMINISTRO</th>\
                        <td>' + (feature.properties['i_RSUM'] !== null ? Autolinker.link(String(feature.properties['i_RSUM'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">i_VE</th>\
                        <td>' + (feature.properties['i_VE'] !== null ? Autolinker.link(String(feature.properties['i_VE'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">i_VF</th>\
                        <td>' + (feature.properties['i_VF'] !== null ? Autolinker.link(String(feature.properties['i_VF'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">i_VIGA</th>\
                        <td>' + (feature.properties['i_VIGA'] !== null ? Autolinker.link(String(feature.properties['i_VIGA'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">i_VP</th>\
                        <td>' + (feature.properties['i_VP'] !== null ? Autolinker.link(String(feature.properties['i_VP'])) : '') + '</td>\
                    </tr>\
                </table>';
    layer.bindPopup(popupContent, {
      maxHeight: 500,
      maxWidth: 800
    });
  }

  function style_VEIndicedevulnerabilidadeconomica_4_0(feature) {
    if (feature.properties['i_RSUM'] >= 0.200000 && feature.properties['i_RSUM'] <= 1.740000) {
      return {
        pane: 'pane_VEIndicedevulnerabilidadeconomica_4',
        opacity: 1,
        color: 'rgba(0,0,0,0.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0,
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(244, 67, 54, 0.8)',
      }
    }
    if (feature.properties['i_RSUM'] >= 1.740000 && feature.properties['i_RSUM'] <= 3.280000) {
      return {
        pane: 'pane_VEIndicedevulnerabilidadeconomica_4',
        opacity: 1,
        color: 'rgba(0,0,0,0.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0,
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(255, 193, 7, 0.8)',
      }
    }
    if (feature.properties['i_RSUM'] >= 3.280000 && feature.properties['i_RSUM'] <= 4.820000) {
      return {
        pane: 'pane_VEIndicedevulnerabilidadeconomica_4',
        opacity: 1,
        color: 'rgba(0,0,0,0.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0,
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(100, 221, 23, 0.8)',
      }
    }
    if (feature.properties['i_RSUM'] >= 4.820000 && feature.properties['i_RSUM'] <= 6.360000) {
      return {
        pane: 'pane_VEIndicedevulnerabilidadeconomica_4',
        opacity: 1,
        color: 'rgba(0,0,0,0.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0,
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(33, 150, 243, 0.8)',
      }
    }
    if (feature.properties['i_RSUM'] >= 6.360000 && feature.properties['i_RSUM'] <= 7.900000) {
      return {
        pane: 'pane_VEIndicedevulnerabilidadeconomica_4',
        opacity: 1,
        color: 'rgba(0,0,0,0.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0,
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(34, 73, 204, 0.8)',
      }
    }
  }
  map.createPane('pane_VEIndicedevulnerabilidadeconomica_4');
  map.getPane('pane_VEIndicedevulnerabilidadeconomica_4').style.zIndex = 404;
  map.getPane('pane_VEIndicedevulnerabilidadeconomica_4').style['mix-blend-mode'] = 'normal';
  var layer_VEIndicedevulnerabilidadeconomica_4 = new L.geoJson(json_VEIndicedevulnerabilidadeconomica_4, {
    attribution: '<a href=""></a>',
    pane: 'pane_VEIndicedevulnerabilidadeconomica_4',
    onEachFeature: pop_VEIndicedevulnerabilidadeconomica_4,
    style: style_VEIndicedevulnerabilidadeconomica_4_0,
  });
  bounds_group.addLayer(layer_VEIndicedevulnerabilidadeconomica_4);

  function pop_RSUMIndicederiesgoporlafaltadelsuministro_5(feature, layer) {
    layer.on({
      mouseout: function (e) {
        for (i in e.target._eventParents) {
          e.target._eventParents[i].resetStyle(e.target);
        }
      },
      mouseover: highlightFeature,
    });
    var popupContent = '<table>\
                    <tr>\
                        <th scope="row">CLAVE</th>\
                        <td>' + (feature.properties['CLAVE'] !== null ? Autolinker.link(String(feature.properties['CLAVE'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2"><strong>NOMBRE</strong><br />' + (feature.properties['NOMBRE'] !== null ? Autolinker.link(String(feature.properties['NOMBRE'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">POBLACIÓN TOTAL</th>\
                        <td>' + (feature.properties['POB_TOT'] !== null ? Autolinker.link(String(feature.properties['POB_TOT'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">SUPERFICIE KM2</th>\
                        <td>' + (feature.properties['SUP_KM2'] !== null ? Autolinker.link(String(feature.properties['SUP_KM2'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">DENSIDAD KM2</th>\
                        <td>' + (feature.properties['DEN_KM2'] !== null ? Autolinker.link(String(feature.properties['DEN_KM2'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">SUPERFICIE HA</th>\
                        <td>' + (feature.properties['SUP_HAS'] !== null ? Autolinker.link(String(feature.properties['SUP_HAS'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">DENSIDAD HA</th>\
                        <td>' + (feature.properties['DENSIDAD'] !== null ? Autolinker.link(String(feature.properties['DENSIDAD'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">DELEGACIÓN</th>\
                        <td>' + (feature.properties['DELEGACION'] !== null ? Autolinker.link(String(feature.properties['DELEGACION'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">i_VS</th>\
                        <td>' + (feature.properties['i_VS'] !== null ? Autolinker.link(String(feature.properties['i_VS'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">i_ICA</th>\
                        <td>' + (feature.properties['i_ICA'] !== null ? Autolinker.link(String(feature.properties['i_ICA'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">i_IED</th>\
                        <td>' + (feature.properties['i_IED'] !== null ? Autolinker.link(String(feature.properties['i_IED'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">i_IEGA</th>\
                        <td>' + (feature.properties['i_IEGA'] !== null ? Autolinker.link(String(feature.properties['i_IEGA'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">i_IES</th>\
                        <td>' + (feature.properties['i_IES'] !== null ? Autolinker.link(String(feature.properties['i_IES'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">i_RCAL</th>\
                        <td>' + (feature.properties['i_RCAL'] !== null ? Autolinker.link(String(feature.properties['i_RCAL'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">i_RDREN</th>\
                        <td>' + (feature.properties['i_RDREN'] !== null ? Autolinker.link(String(feature.properties['i_RDREN'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">i_RIGA</th>\
                        <td>' + (feature.properties['i_RIGA'] !== null ? Autolinker.link(String(feature.properties['i_RIGA'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">INDICE DE RIESGO POR LA FALTA DEL SUMINISTRO</th>\
                        <td>' + (feature.properties['i_RSUM'] !== null ? Autolinker.link(String(feature.properties['i_RSUM'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">i_VE</th>\
                        <td>' + (feature.properties['i_VE'] !== null ? Autolinker.link(String(feature.properties['i_VE'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">i_VF</th>\
                        <td>' + (feature.properties['i_VF'] !== null ? Autolinker.link(String(feature.properties['i_VF'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">i_VIGA</th>\
                        <td>' + (feature.properties['i_VIGA'] !== null ? Autolinker.link(String(feature.properties['i_VIGA'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">i_VP</th>\
                        <td>' + (feature.properties['i_VP'] !== null ? Autolinker.link(String(feature.properties['i_VP'])) : '') + '</td>\
                    </tr>\
                </table>';
    layer.bindPopup(popupContent, {
      maxHeight: 500,
      maxWidth: 800
    });
  }

  function style_RSUMIndicederiesgoporlafaltadelsuministro_5_0(feature) {
    if (feature.properties['i_RSUM'] >= 0.200000 && feature.properties['i_RSUM'] <= 1.740000) {
      return {
        pane: 'pane_RSUMIndicederiesgoporlafaltadelsuministro_5',
        opacity: 1,
        color: 'rgba(0,0,0,0.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0,
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(244, 67, 54, 0.8)',
      }
    }
    if (feature.properties['i_RSUM'] >= 1.740000 && feature.properties['i_RSUM'] <= 3.280000) {
      return {
        pane: 'pane_RSUMIndicederiesgoporlafaltadelsuministro_5',
        opacity: 1,
        color: 'rgba(0,0,0,0.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0,
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(255, 193, 7, 0.8)',
      }
    }
    if (feature.properties['i_RSUM'] >= 3.280000 && feature.properties['i_RSUM'] <= 4.820000) {
      return {
        pane: 'pane_RSUMIndicederiesgoporlafaltadelsuministro_5',
        opacity: 1,
        color: 'rgba(0,0,0,0.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0,
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(100, 221, 23, 0.8)',
      }
    }
    if (feature.properties['i_RSUM'] >= 4.820000 && feature.properties['i_RSUM'] <= 6.360000) {
      return {
        pane: 'pane_RSUMIndicederiesgoporlafaltadelsuministro_5',
        opacity: 1,
        color: 'rgba(0,0,0,0.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0,
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(33, 150, 243, 0.8)',
      }
    }
    if (feature.properties['i_RSUM'] >= 6.360000 && feature.properties['i_RSUM'] <= 7.900000) {
      return {
        pane: 'pane_RSUMIndicederiesgoporlafaltadelsuministro_5',
        opacity: 1,
        color: 'rgba(0,0,0,0.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0,
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(34, 73, 204, 0.8)',
      }
    }
  }
  map.createPane('pane_RSUMIndicederiesgoporlafaltadelsuministro_5');
  map.getPane('pane_RSUMIndicederiesgoporlafaltadelsuministro_5').style.zIndex = 405;
  map.getPane('pane_RSUMIndicederiesgoporlafaltadelsuministro_5').style['mix-blend-mode'] = 'normal';
  var layer_RSUMIndicederiesgoporlafaltadelsuministro_5 = new L.geoJson(json_RSUMIndicederiesgoporlafaltadelsuministro_5, {
    attribution: '<a href=""></a>',
    pane: 'pane_RSUMIndicederiesgoporlafaltadelsuministro_5',
    onEachFeature: pop_RSUMIndicederiesgoporlafaltadelsuministro_5,
    style: style_RSUMIndicederiesgoporlafaltadelsuministro_5_0,
  });
  bounds_group.addLayer(layer_RSUMIndicederiesgoporlafaltadelsuministro_5);

  function pop_RIGAIndicederiesgoantelaineficaciadelagestiondelagua_6(feature, layer) {
    layer.on({
      mouseout: function (e) {
        for (i in e.target._eventParents) {
          e.target._eventParents[i].resetStyle(e.target);
        }
      },
      mouseover: highlightFeature,
    });
    var popupContent = '<table>\
                    <tr>\
                        <th scope="row">CLAVE</th>\
                        <td>' + (feature.properties['CLAVE'] !== null ? Autolinker.link(String(feature.properties['CLAVE'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2"><strong>NOMBRE</strong><br />' + (feature.properties['NOMBRE'] !== null ? Autolinker.link(String(feature.properties['NOMBRE'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">POBLACIÓN TOTAL</th>\
                        <td>' + (feature.properties['POB_TOT'] !== null ? Autolinker.link(String(feature.properties['POB_TOT'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">SUPERFICIE KM2</th>\
                        <td>' + (feature.properties['SUP_KM2'] !== null ? Autolinker.link(String(feature.properties['SUP_KM2'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">DENSIDAD KM2</th>\
                        <td>' + (feature.properties['DEN_KM2'] !== null ? Autolinker.link(String(feature.properties['DEN_KM2'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">SUPERFICIE HA</th>\
                        <td>' + (feature.properties['SUP_HAS'] !== null ? Autolinker.link(String(feature.properties['SUP_HAS'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">DENSIDAD HA</th>\
                        <td>' + (feature.properties['DENSIDAD'] !== null ? Autolinker.link(String(feature.properties['DENSIDAD'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">DELEGACIÓN</th>\
                        <td>' + (feature.properties['DELEGACION'] !== null ? Autolinker.link(String(feature.properties['DELEGACION'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">i_VS</th>\
                        <td>' + (feature.properties['i_VS'] !== null ? Autolinker.link(String(feature.properties['i_VS'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">i_ICA</th>\
                        <td>' + (feature.properties['i_ICA'] !== null ? Autolinker.link(String(feature.properties['i_ICA'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">i_IED</th>\
                        <td>' + (feature.properties['i_IED'] !== null ? Autolinker.link(String(feature.properties['i_IED'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">i_IEGA</th>\
                        <td>' + (feature.properties['i_IEGA'] !== null ? Autolinker.link(String(feature.properties['i_IEGA'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">i_IES</th>\
                        <td>' + (feature.properties['i_IES'] !== null ? Autolinker.link(String(feature.properties['i_IES'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">i_RCAL</th>\
                        <td>' + (feature.properties['i_RCAL'] !== null ? Autolinker.link(String(feature.properties['i_RCAL'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">i_RDREN</th>\
                        <td>' + (feature.properties['i_RDREN'] !== null ? Autolinker.link(String(feature.properties['i_RDREN'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">INDICE DE RIESGO ANTE LA INEFICACIA DE LA GESTION DEL AGUA</th>\
                        <td>' + (feature.properties['i_RIGA'] !== null ? Autolinker.link(String(feature.properties['i_RIGA'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">i_RSUM</th>\
                        <td>' + (feature.properties['i_RSUM'] !== null ? Autolinker.link(String(feature.properties['i_RSUM'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">i_VE</th>\
                        <td>' + (feature.properties['i_VE'] !== null ? Autolinker.link(String(feature.properties['i_VE'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">i_VF</th>\
                        <td>' + (feature.properties['i_VF'] !== null ? Autolinker.link(String(feature.properties['i_VF'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">i_VIGA</th>\
                        <td>' + (feature.properties['i_VIGA'] !== null ? Autolinker.link(String(feature.properties['i_VIGA'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">i_VP</th>\
                        <td>' + (feature.properties['i_VP'] !== null ? Autolinker.link(String(feature.properties['i_VP'])) : '') + '</td>\
                    </tr>\
                </table>';
    layer.bindPopup(popupContent, {
      maxHeight: 500,
      maxWidth: 800
    });
  }

  function style_RIGAIndicederiesgoantelaineficaciadelagestiondelagua_6_0(feature) {
    if (feature.properties['i_RIGA'] >= 0.400000 && feature.properties['i_RIGA'] <= 1.720000) {
      return {
        pane: 'pane_RIGAIndicederiesgoantelaineficaciadelagestiondelagua_6',
        opacity: 1,
        color: 'rgba(0,0,0,0.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0,
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(244, 67, 54, 0.8)',
      }
    }
    if (feature.properties['i_RIGA'] >= 1.720000 && feature.properties['i_RIGA'] <= 3.040000) {
      return {
        pane: 'pane_RIGAIndicederiesgoantelaineficaciadelagestiondelagua_6',
        opacity: 1,
        color: 'rgba(0,0,0,0.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0,
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(255, 193, 7, 0.8)',
      }
    }
    if (feature.properties['i_RIGA'] >= 3.040000 && feature.properties['i_RIGA'] <= 4.360000) {
      return {
        pane: 'pane_RIGAIndicederiesgoantelaineficaciadelagestiondelagua_6',
        opacity: 1,
        color: 'rgba(0,0,0,0.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0,
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(100, 221, 23, 0.8)',
      }
    }
    if (feature.properties['i_RIGA'] >= 4.360000 && feature.properties['i_RIGA'] <= 5.680000) {
      return {
        pane: 'pane_RIGAIndicederiesgoantelaineficaciadelagestiondelagua_6',
        opacity: 1,
        color: 'rgba(0,0,0,0.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0,
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(33, 150, 243, 0.8)',
      }
    }
    if (feature.properties['i_RIGA'] >= 5.680000 && feature.properties['i_RIGA'] <= 7.000000) {
      return {
        pane: 'pane_RIGAIndicederiesgoantelaineficaciadelagestiondelagua_6',
        opacity: 1,
        color: 'rgba(0,0,0,0.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0,
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(34, 73, 204, 0.8)',
      }
    }
  }
  map.createPane('pane_RIGAIndicederiesgoantelaineficaciadelagestiondelagua_6');
  map.getPane('pane_RIGAIndicederiesgoantelaineficaciadelagestiondelagua_6').style.zIndex = 406;
  map.getPane('pane_RIGAIndicederiesgoantelaineficaciadelagestiondelagua_6').style['mix-blend-mode'] = 'normal';
  var layer_RIGAIndicederiesgoantelaineficaciadelagestiondelagua_6 = new L.geoJson(json_RIGAIndicederiesgoantelaineficaciadelagestiondelagua_6, {
    attribution: '<a href=""></a>',
    pane: 'pane_RIGAIndicederiesgoantelaineficaciadelagestiondelagua_6',
    onEachFeature: pop_RIGAIndicederiesgoantelaineficaciadelagestiondelagua_6,
    style: style_RIGAIndicederiesgoantelaineficaciadelagestiondelagua_6_0,
  });
  bounds_group.addLayer(layer_RIGAIndicederiesgoantelaineficaciadelagestiondelagua_6);

  function pop_RDRENIndicederiesgoporfallaseneldrenaje_7(feature, layer) {
    layer.on({
      mouseout: function (e) {
        for (i in e.target._eventParents) {
          e.target._eventParents[i].resetStyle(e.target);
        }
      },
      mouseover: highlightFeature,
    });
    var popupContent = '<table>\
                    <tr>\
                        <th scope="row">CLAVE</th>\
                        <td>' + (feature.properties['CLAVE'] !== null ? Autolinker.link(String(feature.properties['CLAVE'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2"><strong>NOMBRE</strong><br />' + (feature.properties['NOMBRE'] !== null ? Autolinker.link(String(feature.properties['NOMBRE'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">POBLACIÓN TOTAL</th>\
                        <td>' + (feature.properties['POB_TOT'] !== null ? Autolinker.link(String(feature.properties['POB_TOT'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">SUPERFICIE KM2</th>\
                        <td>' + (feature.properties['SUP_KM2'] !== null ? Autolinker.link(String(feature.properties['SUP_KM2'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">DENSIDAD KM2</th>\
                        <td>' + (feature.properties['DEN_KM2'] !== null ? Autolinker.link(String(feature.properties['DEN_KM2'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">SUPERFICIE HA</th>\
                        <td>' + (feature.properties['SUP_HAS'] !== null ? Autolinker.link(String(feature.properties['SUP_HAS'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">DENSIDAD HA</th>\
                        <td>' + (feature.properties['DENSIDAD'] !== null ? Autolinker.link(String(feature.properties['DENSIDAD'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">DELEGACIÓN</th>\
                        <td>' + (feature.properties['DELEGACION'] !== null ? Autolinker.link(String(feature.properties['DELEGACION'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">i_VS</th>\
                        <td>' + (feature.properties['i_VS'] !== null ? Autolinker.link(String(feature.properties['i_VS'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">i_ICA</th>\
                        <td>' + (feature.properties['i_ICA'] !== null ? Autolinker.link(String(feature.properties['i_ICA'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">i_IED</th>\
                        <td>' + (feature.properties['i_IED'] !== null ? Autolinker.link(String(feature.properties['i_IED'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">i_IEGA</th>\
                        <td>' + (feature.properties['i_IEGA'] !== null ? Autolinker.link(String(feature.properties['i_IEGA'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">i_IES</th>\
                        <td>' + (feature.properties['i_IES'] !== null ? Autolinker.link(String(feature.properties['i_IES'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">i_RCAL</th>\
                        <td>' + (feature.properties['i_RCAL'] !== null ? Autolinker.link(String(feature.properties['i_RCAL'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">INDICE DE RIESGO POR FALLAS EN EL DRENAJE</th>\
                        <td>' + (feature.properties['i_RDREN'] !== null ? Autolinker.link(String(feature.properties['i_RDREN'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">i_RIGA</th>\
                        <td>' + (feature.properties['i_RIGA'] !== null ? Autolinker.link(String(feature.properties['i_RIGA'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">i_RSUM</th>\
                        <td>' + (feature.properties['i_RSUM'] !== null ? Autolinker.link(String(feature.properties['i_RSUM'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">i_VE</th>\
                        <td>' + (feature.properties['i_VE'] !== null ? Autolinker.link(String(feature.properties['i_VE'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">i_VF</th>\
                        <td>' + (feature.properties['i_VF'] !== null ? Autolinker.link(String(feature.properties['i_VF'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">i_VIGA</th>\
                        <td>' + (feature.properties['i_VIGA'] !== null ? Autolinker.link(String(feature.properties['i_VIGA'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">i_VP</th>\
                        <td>' + (feature.properties['i_VP'] !== null ? Autolinker.link(String(feature.properties['i_VP'])) : '') + '</td>\
                    </tr>\
                </table>';
    layer.bindPopup(popupContent, {
      maxHeight: 500,
      maxWidth: 800
    });
  }

  function style_RDRENIndicederiesgoporfallaseneldrenaje_7_0(feature) {
    if (feature.properties['i_RDREN'] >= 0.200000 && feature.properties['i_RDREN'] <= 1.560000) {
      return {
        pane: 'pane_RDRENIndicederiesgoporfallaseneldrenaje_7',
        opacity: 1,
        color: 'rgba(0,0,0,0.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0,
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(244, 67, 54, 0.8)',
      }
    }
    if (feature.properties['i_RDREN'] >= 1.560000 && feature.properties['i_RDREN'] <= 2.920000) {
      return {
        pane: 'pane_RDRENIndicederiesgoporfallaseneldrenaje_7',
        opacity: 1,
        color: 'rgba(0,0,0,0.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0,
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(255, 193, 7, 0.8)',
      }
    }
    if (feature.properties['i_RDREN'] >= 2.920000 && feature.properties['i_RDREN'] <= 4.280000) {
      return {
        pane: 'pane_RDRENIndicederiesgoporfallaseneldrenaje_7',
        opacity: 1,
        color: 'rgba(0,0,0,0.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0,
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(100, 221, 23, 0.8)',
      }
    }
    if (feature.properties['i_RDREN'] >= 4.280000 && feature.properties['i_RDREN'] <= 5.640000) {
      return {
        pane: 'pane_RDRENIndicederiesgoporfallaseneldrenaje_7',
        opacity: 1,
        color: 'rgba(0,0,0,0.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0,
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(33, 150, 243, 0.8)',
      }
    }
    if (feature.properties['i_RDREN'] >= 5.640000 && feature.properties['i_RDREN'] <= 7.000000) {
      return {
        pane: 'pane_RDRENIndicederiesgoporfallaseneldrenaje_7',
        opacity: 1,
        color: 'rgba(0,0,0,0.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0,
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(34, 73, 204, 0.8)',
      }
    }
  }
  map.createPane('pane_RDRENIndicederiesgoporfallaseneldrenaje_7');
  map.getPane('pane_RDRENIndicederiesgoporfallaseneldrenaje_7').style.zIndex = 407;
  map.getPane('pane_RDRENIndicederiesgoporfallaseneldrenaje_7').style['mix-blend-mode'] = 'normal';
  var layer_RDRENIndicederiesgoporfallaseneldrenaje_7 = new L.geoJson(json_RDRENIndicederiesgoporfallaseneldrenaje_7, {
    attribution: '<a href=""></a>',
    pane: 'pane_RDRENIndicederiesgoporfallaseneldrenaje_7',
    onEachFeature: pop_RDRENIndicederiesgoporfallaseneldrenaje_7,
    style: style_RDRENIndicederiesgoporfallaseneldrenaje_7_0,
  });
  bounds_group.addLayer(layer_RDRENIndicederiesgoporfallaseneldrenaje_7);

  function pop_RCALIndicederiesgoporlafaltadecalidad_8(feature, layer) {
    layer.on({
      mouseout: function (e) {
        for (i in e.target._eventParents) {
          e.target._eventParents[i].resetStyle(e.target);
        }
      },
      mouseover: highlightFeature,
    });
    var popupContent = '<table>\
                    <tr>\
                        <th scope="row">CLAVE</th>\
                        <td>' + (feature.properties['CLAVE'] !== null ? Autolinker.link(String(feature.properties['CLAVE'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2"><strong>NOMBRE</strong><br />' + (feature.properties['NOMBRE'] !== null ? Autolinker.link(String(feature.properties['NOMBRE'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">POBLACIÓN TOTAL</th>\
                        <td>' + (feature.properties['POB_TOT'] !== null ? Autolinker.link(String(feature.properties['POB_TOT'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">SUPERFICIE KM2</th>\
                        <td>' + (feature.properties['SUP_KM2'] !== null ? Autolinker.link(String(feature.properties['SUP_KM2'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">DENSIDAD KM2</th>\
                        <td>' + (feature.properties['DEN_KM2'] !== null ? Autolinker.link(String(feature.properties['DEN_KM2'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">SUPERFICIE HA</th>\
                        <td>' + (feature.properties['SUP_HAS'] !== null ? Autolinker.link(String(feature.properties['SUP_HAS'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">DENSIDAD HA</th>\
                        <td>' + (feature.properties['DENSIDAD'] !== null ? Autolinker.link(String(feature.properties['DENSIDAD'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">DELEGACIÓN</th>\
                        <td>' + (feature.properties['DELEGACION'] !== null ? Autolinker.link(String(feature.properties['DELEGACION'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">i_VS</th>\
                        <td>' + (feature.properties['i_VS'] !== null ? Autolinker.link(String(feature.properties['i_VS'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">i_ICA</th>\
                        <td>' + (feature.properties['i_ICA'] !== null ? Autolinker.link(String(feature.properties['i_ICA'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">i_IED</th>\
                        <td>' + (feature.properties['i_IED'] !== null ? Autolinker.link(String(feature.properties['i_IED'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">i_IEGA</th>\
                        <td>' + (feature.properties['i_IEGA'] !== null ? Autolinker.link(String(feature.properties['i_IEGA'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">INDICE DE EFICACIA EN EL SUMINISTRO</th>\
                        <td>' + (feature.properties['i_IES'] !== null ? Autolinker.link(String(feature.properties['i_IES'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">i_RCAL</th>\
                        <td>' + (feature.properties['i_RCAL'] !== null ? Autolinker.link(String(feature.properties['i_RCAL'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">i_RDREN</th>\
                        <td>' + (feature.properties['i_RDREN'] !== null ? Autolinker.link(String(feature.properties['i_RDREN'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">i_RIGA</th>\
                        <td>' + (feature.properties['i_RIGA'] !== null ? Autolinker.link(String(feature.properties['i_RIGA'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">i_RSUM</th>\
                        <td>' + (feature.properties['i_RSUM'] !== null ? Autolinker.link(String(feature.properties['i_RSUM'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">i_VE</th>\
                        <td>' + (feature.properties['i_VE'] !== null ? Autolinker.link(String(feature.properties['i_VE'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">i_VF</th>\
                        <td>' + (feature.properties['i_VF'] !== null ? Autolinker.link(String(feature.properties['i_VF'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">i_VIGA</th>\
                        <td>' + (feature.properties['i_VIGA'] !== null ? Autolinker.link(String(feature.properties['i_VIGA'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">i_VP</th>\
                        <td>' + (feature.properties['i_VP'] !== null ? Autolinker.link(String(feature.properties['i_VP'])) : '') + '</td>\
                    </tr>\
                </table>';
    layer.bindPopup(popupContent, {
      maxHeight: 500,
      maxWidth: 800
    });
  }

  function style_RCALIndicederiesgoporlafaltadecalidad_8_0(feature) {
    if (feature.properties['i_IES'] >= 0.680000 && feature.properties['i_IES'] <= 2.450000) {
      return {
        pane: 'pane_RCALIndicederiesgoporlafaltadecalidad_8',
        opacity: 1,
        color: 'rgba(0,0,0,0.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0,
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(244, 67, 54, 0.8)',
      }
    }
    if (feature.properties['i_IES'] >= 2.450000 && feature.properties['i_IES'] <= 4.220000) {
      return {
        pane: 'pane_RCALIndicederiesgoporlafaltadecalidad_8',
        opacity: 1,
        color: 'rgba(0,0,0,0.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0,
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(255, 193, 7, 0.8)',
      }
    }
    if (feature.properties['i_IES'] >= 4.220000 && feature.properties['i_IES'] <= 5.990000) {
      return {
        pane: 'pane_RCALIndicederiesgoporlafaltadecalidad_8',
        opacity: 1,
        color: 'rgba(0,0,0,0.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0,
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(100, 221, 23, 0.8)',
      }
    }
    if (feature.properties['i_IES'] >= 5.990000 && feature.properties['i_IES'] <= 7.760000) {
      return {
        pane: 'pane_RCALIndicederiesgoporlafaltadecalidad_8',
        opacity: 1,
        color: 'rgba(0,0,0,0.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0,
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(33, 150, 243, 0.8)',
      }
    }
    if (feature.properties['i_IES'] >= 7.760000 && feature.properties['i_IES'] <= 9.530000) {
      return {
        pane: 'pane_RCALIndicederiesgoporlafaltadecalidad_8',
        opacity: 1,
        color: 'rgba(0,0,0,0.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0,
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(34, 73, 204, 0.8)',
      }
    }
  }
  map.createPane('pane_RCALIndicederiesgoporlafaltadecalidad_8');
  map.getPane('pane_RCALIndicederiesgoporlafaltadecalidad_8').style.zIndex = 408;
  map.getPane('pane_RCALIndicederiesgoporlafaltadecalidad_8').style['mix-blend-mode'] = 'normal';
  var layer_RCALIndicederiesgoporlafaltadecalidad_8 = new L.geoJson(json_RCALIndicederiesgoporlafaltadecalidad_8, {
    attribution: '<a href=""></a>',
    pane: 'pane_RCALIndicederiesgoporlafaltadecalidad_8',
    onEachFeature: pop_RCALIndicederiesgoporlafaltadecalidad_8,
    style: style_RCALIndicederiesgoporlafaltadecalidad_8_0,
  });
  bounds_group.addLayer(layer_RCALIndicederiesgoporlafaltadecalidad_8);

  function pop_IESIndicedeeficaciaenelsuministro_9(feature, layer) {
    layer.on({
      mouseout: function (e) {
        for (i in e.target._eventParents) {
          e.target._eventParents[i].resetStyle(e.target);
        }
      },
      mouseover: highlightFeature,
    });
    var popupContent = '<table>\
                    <tr>\
                        <th scope="row">CLAVE</th>\
                        <td>' + (feature.properties['CLAVE'] !== null ? Autolinker.link(String(feature.properties['CLAVE'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2"><strong>NOMBRE</strong><br />' + (feature.properties['NOMBRE'] !== null ? Autolinker.link(String(feature.properties['NOMBRE'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">POBLACIÓN TOTAL</th>\
                        <td>' + (feature.properties['POB_TOT'] !== null ? Autolinker.link(String(feature.properties['POB_TOT'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">SUPERFICIE KM2</th>\
                        <td>' + (feature.properties['SUP_KM2'] !== null ? Autolinker.link(String(feature.properties['SUP_KM2'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">DENSIDAD KM2</th>\
                        <td>' + (feature.properties['DEN_KM2'] !== null ? Autolinker.link(String(feature.properties['DEN_KM2'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">SUPERFICIE HA</th>\
                        <td>' + (feature.properties['SUP_HAS'] !== null ? Autolinker.link(String(feature.properties['SUP_HAS'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">DENSIDAD HA</th>\
                        <td>' + (feature.properties['DENSIDAD'] !== null ? Autolinker.link(String(feature.properties['DENSIDAD'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">DELEGACIÓN</th>\
                        <td>' + (feature.properties['DELEGACION'] !== null ? Autolinker.link(String(feature.properties['DELEGACION'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">i_VS</th>\
                        <td>' + (feature.properties['i_VS'] !== null ? Autolinker.link(String(feature.properties['i_VS'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">i_ICA</th>\
                        <td>' + (feature.properties['i_ICA'] !== null ? Autolinker.link(String(feature.properties['i_ICA'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">i_IED</th>\
                        <td>' + (feature.properties['i_IED'] !== null ? Autolinker.link(String(feature.properties['i_IED'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">i_IEGA</th>\
                        <td>' + (feature.properties['i_IEGA'] !== null ? Autolinker.link(String(feature.properties['i_IEGA'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">INDICE DE EFICACIA EN EL SUMINISTRO</th>\
                        <td>' + (feature.properties['i_IES'] !== null ? Autolinker.link(String(feature.properties['i_IES'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">i_RCAL</th>\
                        <td>' + (feature.properties['i_RCAL'] !== null ? Autolinker.link(String(feature.properties['i_RCAL'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">i_RDREN</th>\
                        <td>' + (feature.properties['i_RDREN'] !== null ? Autolinker.link(String(feature.properties['i_RDREN'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">i_RIGA</th>\
                        <td>' + (feature.properties['i_RIGA'] !== null ? Autolinker.link(String(feature.properties['i_RIGA'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">i_RSUM</th>\
                        <td>' + (feature.properties['i_RSUM'] !== null ? Autolinker.link(String(feature.properties['i_RSUM'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">i_VE</th>\
                        <td>' + (feature.properties['i_VE'] !== null ? Autolinker.link(String(feature.properties['i_VE'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">i_VF</th>\
                        <td>' + (feature.properties['i_VF'] !== null ? Autolinker.link(String(feature.properties['i_VF'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">i_VIGA</th>\
                        <td>' + (feature.properties['i_VIGA'] !== null ? Autolinker.link(String(feature.properties['i_VIGA'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">i_VP</th>\
                        <td>' + (feature.properties['i_VP'] !== null ? Autolinker.link(String(feature.properties['i_VP'])) : '') + '</td>\
                    </tr>\
                </table>';
    layer.bindPopup(popupContent, {
      maxHeight: 500,
      maxWidth: 800
    });
  }

  function style_IESIndicedeeficaciaenelsuministro_9_0(feature) {
    if (feature.properties['i_IES'] >= 0.680000 && feature.properties['i_IES'] <= 2.450000) {
      return {
        pane: 'pane_IESIndicedeeficaciaenelsuministro_9',
        opacity: 1,
        color: 'rgba(0,0,0,0.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0,
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(244, 67, 54, 0.8)',
      }
    }
    if (feature.properties['i_IES'] >= 2.450000 && feature.properties['i_IES'] <= 4.220000) {
      return {
        pane: 'pane_IESIndicedeeficaciaenelsuministro_9',
        opacity: 1,
        color: 'rgba(0,0,0,0.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0,
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(255, 193, 7, 0.8)',
      }
    }
    if (feature.properties['i_IES'] >= 4.220000 && feature.properties['i_IES'] <= 5.990000) {
      return {
        pane: 'pane_IESIndicedeeficaciaenelsuministro_9',
        opacity: 1,
        color: 'rgba(0,0,0,0.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0,
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(100, 221, 23, 0.8)',
      }
    }
    if (feature.properties['i_IES'] >= 5.990000 && feature.properties['i_IES'] <= 7.760000) {
      return {
        pane: 'pane_IESIndicedeeficaciaenelsuministro_9',
        opacity: 1,
        color: 'rgba(0,0,0,0.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0,
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(33, 150, 243, 0.8)',
      }
    }
    if (feature.properties['i_IES'] >= 7.760000 && feature.properties['i_IES'] <= 9.530000) {
      return {
        pane: 'pane_IESIndicedeeficaciaenelsuministro_9',
        opacity: 1,
        color: 'rgba(0,0,0,0.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0,
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(34, 73, 204, 0.8)',
      }
    }
  }
  map.createPane('pane_IESIndicedeeficaciaenelsuministro_9');
  map.getPane('pane_IESIndicedeeficaciaenelsuministro_9').style.zIndex = 409;
  map.getPane('pane_IESIndicedeeficaciaenelsuministro_9').style['mix-blend-mode'] = 'normal';
  var layer_IESIndicedeeficaciaenelsuministro_9 = new L.geoJson(json_IESIndicedeeficaciaenelsuministro_9, {
    attribution: '<a href=""></a>',
    pane: 'pane_IESIndicedeeficaciaenelsuministro_9',
    onEachFeature: pop_IESIndicedeeficaciaenelsuministro_9,
    style: style_IESIndicedeeficaciaenelsuministro_9_0,
  });
  bounds_group.addLayer(layer_IESIndicedeeficaciaenelsuministro_9);

  function pop_IEGAIndicedeeficaciadelagestiondelAgua_10(feature, layer) {
    layer.on({
      mouseout: function (e) {
        for (i in e.target._eventParents) {
          e.target._eventParents[i].resetStyle(e.target);
        }
      },
      mouseover: highlightFeature,
    });
    var popupContent = '<table>\
                    <tr>\
                        <th scope="row">CLAVE</th>\
                        <td>' + (feature.properties['CLAVE'] !== null ? Autolinker.link(String(feature.properties['CLAVE'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2"><strong>NOMBRE</strong><br />' + (feature.properties['NOMBRE'] !== null ? Autolinker.link(String(feature.properties['NOMBRE'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">POBLACIÓN TOTAL</th>\
                        <td>' + (feature.properties['POB_TOT'] !== null ? Autolinker.link(String(feature.properties['POB_TOT'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">SUPERFICIE KM2</th>\
                        <td>' + (feature.properties['SUP_KM2'] !== null ? Autolinker.link(String(feature.properties['SUP_KM2'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">DENSIDAD KM2</th>\
                        <td>' + (feature.properties['DEN_KM2'] !== null ? Autolinker.link(String(feature.properties['DEN_KM2'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">SUPERFICIE HA</th>\
                        <td>' + (feature.properties['SUP_HAS'] !== null ? Autolinker.link(String(feature.properties['SUP_HAS'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">DENSIDAD HA</th>\
                        <td>' + (feature.properties['DENSIDAD'] !== null ? Autolinker.link(String(feature.properties['DENSIDAD'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">DELEGACIÓN</th>\
                        <td>' + (feature.properties['DELEGACION'] !== null ? Autolinker.link(String(feature.properties['DELEGACION'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">i_VS</th>\
                        <td>' + (feature.properties['i_VS'] !== null ? Autolinker.link(String(feature.properties['i_VS'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">i_ICA</th>\
                        <td>' + (feature.properties['i_ICA'] !== null ? Autolinker.link(String(feature.properties['i_ICA'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">i_IED</th>\
                        <td>' + (feature.properties['i_IED'] !== null ? Autolinker.link(String(feature.properties['i_IED'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">INDICE DE EFICACIA DE LA GESTION DEL AGUA</th>\
                        <td>' + (feature.properties['i_IEGA'] !== null ? Autolinker.link(String(feature.properties['i_IEGA'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">i_IES</th>\
                        <td>' + (feature.properties['i_IES'] !== null ? Autolinker.link(String(feature.properties['i_IES'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">i_RCAL</th>\
                        <td>' + (feature.properties['i_RCAL'] !== null ? Autolinker.link(String(feature.properties['i_RCAL'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">i_RDREN</th>\
                        <td>' + (feature.properties['i_RDREN'] !== null ? Autolinker.link(String(feature.properties['i_RDREN'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">i_RIGA</th>\
                        <td>' + (feature.properties['i_RIGA'] !== null ? Autolinker.link(String(feature.properties['i_RIGA'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">i_RSUM</th>\
                        <td>' + (feature.properties['i_RSUM'] !== null ? Autolinker.link(String(feature.properties['i_RSUM'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">i_VE</th>\
                        <td>' + (feature.properties['i_VE'] !== null ? Autolinker.link(String(feature.properties['i_VE'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">i_VF</th>\
                        <td>' + (feature.properties['i_VF'] !== null ? Autolinker.link(String(feature.properties['i_VF'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">i_VIGA</th>\
                        <td>' + (feature.properties['i_VIGA'] !== null ? Autolinker.link(String(feature.properties['i_VIGA'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">i_VP</th>\
                        <td>' + (feature.properties['i_VP'] !== null ? Autolinker.link(String(feature.properties['i_VP'])) : '') + '</td>\
                    </tr>\
                </table>';
    layer.bindPopup(popupContent, {
      maxHeight: 500,
      maxWidth: 800
    });
  }

  function style_IEGAIndicedeeficaciadelagestiondelAgua_10_0(feature) {
    if (feature.properties['i_IEGA'] >= 1.300000 && feature.properties['i_IEGA'] <= 2.806000) {
      return {
        pane: 'pane_IEGAIndicedeeficaciadelagestiondelAgua_10',
        opacity: 1,
        color: 'rgba(0,0,0,0.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0,
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(244, 67, 54, 0.8)',
      }
    }
    if (feature.properties['i_IEGA'] >= 2.806000 && feature.properties['i_IEGA'] <= 4.312000) {
      return {
        pane: 'pane_IEGAIndicedeeficaciadelagestiondelAgua_10',
        opacity: 1,
        color: 'rgba(0,0,0,0.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0,
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(255, 193, 7, 0.8)',
      }
    }
    if (feature.properties['i_IEGA'] >= 4.312000 && feature.properties['i_IEGA'] <= 5.818000) {
      return {
        pane: 'pane_IEGAIndicedeeficaciadelagestiondelAgua_10',
        opacity: 1,
        color: 'rgba(0,0,0,0.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0,
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(100, 221, 23, 0.8)',
      }
    }
    if (feature.properties['i_IEGA'] >= 5.818000 && feature.properties['i_IEGA'] <= 7.324000) {
      return {
        pane: 'pane_IEGAIndicedeeficaciadelagestiondelAgua_10',
        opacity: 1,
        color: 'rgba(0,0,0,0.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0,
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(33, 150, 243, 0.8)',
      }
    }
    if (feature.properties['i_IEGA'] >= 7.324000 && feature.properties['i_IEGA'] <= 8.830000) {
      return {
        pane: 'pane_IEGAIndicedeeficaciadelagestiondelAgua_10',
        opacity: 1,
        color: 'rgba(0,0,0,0.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0,
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(34, 73, 204, 0.8)',
      }
    }
  }
  map.createPane('pane_IEGAIndicedeeficaciadelagestiondelAgua_10');
  map.getPane('pane_IEGAIndicedeeficaciadelagestiondelAgua_10').style.zIndex = 410;
  map.getPane('pane_IEGAIndicedeeficaciadelagestiondelAgua_10').style['mix-blend-mode'] = 'normal';
  var layer_IEGAIndicedeeficaciadelagestiondelAgua_10 = new L.geoJson(json_IEGAIndicedeeficaciadelagestiondelAgua_10, {
    attribution: '<a href=""></a>',
    pane: 'pane_IEGAIndicedeeficaciadelagestiondelAgua_10',
    onEachFeature: pop_IEGAIndicedeeficaciadelagestiondelAgua_10,
    style: style_IEGAIndicedeeficaciadelagestiondelAgua_10_0,
  });
  bounds_group.addLayer(layer_IEGAIndicedeeficaciadelagestiondelAgua_10);

  function pop_IEDIndicedeeficaciadelserviciodedrenaje_11(feature, layer) {
    layer.on({
      mouseout: function (e) {
        for (i in e.target._eventParents) {
          e.target._eventParents[i].resetStyle(e.target);
        }
      },
      mouseover: highlightFeature,
    });
    var popupContent = '<table>\
                    <tr>\
                        <th scope="row">CLAVE</th>\
                        <td>' + (feature.properties['CLAVE'] !== null ? Autolinker.link(String(feature.properties['CLAVE'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2"><strong>NOMBRE</strong><br />' + (feature.properties['NOMBRE'] !== null ? Autolinker.link(String(feature.properties['NOMBRE'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">POBLACIÓN TOTAL</th>\
                        <td>' + (feature.properties['POB_TOT'] !== null ? Autolinker.link(String(feature.properties['POB_TOT'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">SUPERFICIE KM2</th>\
                        <td>' + (feature.properties['SUP_KM2'] !== null ? Autolinker.link(String(feature.properties['SUP_KM2'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">DENSIDAD KM2</th>\
                        <td>' + (feature.properties['DEN_KM2'] !== null ? Autolinker.link(String(feature.properties['DEN_KM2'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">SUPERFICIE HA</th>\
                        <td>' + (feature.properties['SUP_HAS'] !== null ? Autolinker.link(String(feature.properties['SUP_HAS'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">DENSIDAD HA</th>\
                        <td>' + (feature.properties['DENSIDAD'] !== null ? Autolinker.link(String(feature.properties['DENSIDAD'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">DELEGACION</th>\
                        <td>' + (feature.properties['DELEGACION'] !== null ? Autolinker.link(String(feature.properties['DELEGACION'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">i_VS</th>\
                        <td>' + (feature.properties['i_VS'] !== null ? Autolinker.link(String(feature.properties['i_VS'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">i_ICA</th>\
                        <td>' + (feature.properties['i_ICA'] !== null ? Autolinker.link(String(feature.properties['i_ICA'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">INDICE DE EFICACIA DEL SERVICIO DEL DRENAJE</th>\
                        <td>' + (feature.properties['i_IED'] !== null ? Autolinker.link(String(feature.properties['i_IED'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">i_IEGA</th>\
                        <td>' + (feature.properties['i_IEGA'] !== null ? Autolinker.link(String(feature.properties['i_IEGA'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">i_IES</th>\
                        <td>' + (feature.properties['i_IES'] !== null ? Autolinker.link(String(feature.properties['i_IES'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">i_RCAL</th>\
                        <td>' + (feature.properties['i_RCAL'] !== null ? Autolinker.link(String(feature.properties['i_RCAL'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">i_RDREN</th>\
                        <td>' + (feature.properties['i_RDREN'] !== null ? Autolinker.link(String(feature.properties['i_RDREN'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">i_RIGA</th>\
                        <td>' + (feature.properties['i_RIGA'] !== null ? Autolinker.link(String(feature.properties['i_RIGA'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">i_RSUM</th>\
                        <td>' + (feature.properties['i_RSUM'] !== null ? Autolinker.link(String(feature.properties['i_RSUM'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">i_VE</th>\
                        <td>' + (feature.properties['i_VE'] !== null ? Autolinker.link(String(feature.properties['i_VE'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">i_VF</th>\
                        <td>' + (feature.properties['i_VF'] !== null ? Autolinker.link(String(feature.properties['i_VF'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">i_VIGA</th>\
                        <td>' + (feature.properties['i_VIGA'] !== null ? Autolinker.link(String(feature.properties['i_VIGA'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">i_VP</th>\
                        <td>' + (feature.properties['i_VP'] !== null ? Autolinker.link(String(feature.properties['i_VP'])) : '') + '</td>\
                    </tr>\
                </table>';
    layer.bindPopup(popupContent, {
      maxHeight: 500,
      maxWidth: 800
    });
  }

  function style_IEDIndicedeeficaciadelserviciodedrenaje_11_0(feature) {
    if (feature.properties['i_IED'] >= 0.580000 && feature.properties['i_IED'] <= 2.248000) {
      return {
        pane: 'pane_IEDIndicedeeficaciadelserviciodedrenaje_11',
        opacity: 1,
        color: 'rgba(0,0,0,0.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0,
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(244, 67, 54, 0.8)',
      }
    }
    if (feature.properties['i_IED'] >= 2.248000 && feature.properties['i_IED'] <= 3.916000) {
      return {
        pane: 'pane_IEDIndicedeeficaciadelserviciodedrenaje_11',
        opacity: 1,
        color: 'rgba(0,0,0,0.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0,
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(255, 193, 7, 0.8)',
      }
    }
    if (feature.properties['i_IED'] >= 3.916000 && feature.properties['i_IED'] <= 5.584000) {
      return {
        pane: 'pane_IEDIndicedeeficaciadelserviciodedrenaje_11',
        opacity: 1,
        color: 'rgba(0,0,0,0.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0,
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(100, 221, 23, 0.8)',
      }
    }
    if (feature.properties['i_IED'] >= 5.584000 && feature.properties['i_IED'] <= 7.252000) {
      return {
        pane: 'pane_IEDIndicedeeficaciadelserviciodedrenaje_11',
        opacity: 1,
        color: 'rgba(0,0,0,0.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0,
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(33, 150, 243, 0.8)',
      }
    }
    if (feature.properties['i_IED'] >= 7.252000 && feature.properties['i_IED'] <= 8.920000) {
      return {
        pane: 'pane_IEDIndicedeeficaciadelserviciodedrenaje_11',
        opacity: 1,
        color: 'rgba(0,0,0,0.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0,
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(34, 73, 204, 0.8)',
      }
    }
  }
  map.createPane('pane_IEDIndicedeeficaciadelserviciodedrenaje_11');
  map.getPane('pane_IEDIndicedeeficaciadelserviciodedrenaje_11').style.zIndex = 411;
  map.getPane('pane_IEDIndicedeeficaciadelserviciodedrenaje_11').style['mix-blend-mode'] = 'normal';
  var layer_IEDIndicedeeficaciadelserviciodedrenaje_11 = new L.geoJson(json_IEDIndicedeeficaciadelserviciodedrenaje_11, {
    attribution: '<a href=""></a>',
    pane: 'pane_IEDIndicedeeficaciadelserviciodedrenaje_11',
    onEachFeature: pop_IEDIndicedeeficaciadelserviciodedrenaje_11,
    style: style_IEDIndicedeeficaciadelserviciodedrenaje_11_0,
  });
  bounds_group.addLayer(layer_IEDIndicedeeficaciadelserviciodedrenaje_11);

  function pop_ICAIndicedeeficaciaenlacalidaddelagua_12(feature, layer) {
    layer.on({
      mouseout: function (e) {
        for (i in e.target._eventParents) {
          e.target._eventParents[i].resetStyle(e.target);
        }
      },
      mouseover: highlightFeature,
    });
    var popupContent = '<table>\
                    <tr>\
                        <th scope="row">CLAVE</th>\
                        <td>' + (feature.properties['CLAVE'] !== null ? Autolinker.link(String(feature.properties['CLAVE'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2"><strong>NOMBRE</strong><br />' + (feature.properties['NOMBRE'] !== null ? Autolinker.link(String(feature.properties['NOMBRE'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">POBLACIÓN TOTAL</th>\
                        <td>' + (feature.properties['POB_TOT'] !== null ? Autolinker.link(String(feature.properties['POB_TOT'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">SUPERFICIE KM2</th>\
                        <td>' + (feature.properties['SUP_KM2'] !== null ? Autolinker.link(String(feature.properties['SUP_KM2'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">DENSIDAD KM2</th>\
                        <td>' + (feature.properties['DEN_KM2'] !== null ? Autolinker.link(String(feature.properties['DEN_KM2'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">SUPERFICIE HA</th>\
                        <td>' + (feature.properties['SUP_HAS'] !== null ? Autolinker.link(String(feature.properties['SUP_HAS'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">DENSIDAD HA</th>\
                        <td>' + (feature.properties['DENSIDAD'] !== null ? Autolinker.link(String(feature.properties['DENSIDAD'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">DELEGACIÓN</th>\
                        <td>' + (feature.properties['DELEGACION'] !== null ? Autolinker.link(String(feature.properties['DELEGACION'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">i_VS</th>\
                        <td>' + (feature.properties['i_VS'] !== null ? Autolinker.link(String(feature.properties['i_VS'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">INDICE DE EFICACIA DE LA CALIDAD DEL AGUA</th>\
                        <td>' + (feature.properties['i_ICA'] !== null ? Autolinker.link(String(feature.properties['i_ICA'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">i_IED</th>\
                        <td>' + (feature.properties['i_IED'] !== null ? Autolinker.link(String(feature.properties['i_IED'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">i_IEGA</th>\
                        <td>' + (feature.properties['i_IEGA'] !== null ? Autolinker.link(String(feature.properties['i_IEGA'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">i_IES</th>\
                        <td>' + (feature.properties['i_IES'] !== null ? Autolinker.link(String(feature.properties['i_IES'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">i_RCAL</th>\
                        <td>' + (feature.properties['i_RCAL'] !== null ? Autolinker.link(String(feature.properties['i_RCAL'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">i_RDREN</th>\
                        <td>' + (feature.properties['i_RDREN'] !== null ? Autolinker.link(String(feature.properties['i_RDREN'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">i_RIGA</th>\
                        <td>' + (feature.properties['i_RIGA'] !== null ? Autolinker.link(String(feature.properties['i_RIGA'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">i_RSUM</th>\
                        <td>' + (feature.properties['i_RSUM'] !== null ? Autolinker.link(String(feature.properties['i_RSUM'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">i_VE</th>\
                        <td>' + (feature.properties['i_VE'] !== null ? Autolinker.link(String(feature.properties['i_VE'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">i_VF</th>\
                        <td>' + (feature.properties['i_VF'] !== null ? Autolinker.link(String(feature.properties['i_VF'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">i_VIGA</th>\
                        <td>' + (feature.properties['i_VIGA'] !== null ? Autolinker.link(String(feature.properties['i_VIGA'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">i_VP</th>\
                        <td>' + (feature.properties['i_VP'] !== null ? Autolinker.link(String(feature.properties['i_VP'])) : '') + '</td>\
                    </tr>\
                </table>';
    layer.bindPopup(popupContent, {
      maxHeight: 500,
      maxWidth: 800
    });
  }

  function style_ICAIndicedeeficaciaenlacalidaddelagua_12_0(feature) {
    if (feature.properties['i_ICA'] >= 0.580000 && feature.properties['i_ICA'] <= 2.248000) {
      return {
        pane: 'pane_ICAIndicedeeficaciaenlacalidaddelagua_12',
        opacity: 1,
        color: 'rgba(0,0,0,0.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0,
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(244, 67, 54, 0.8)',
      }
    }
    if (feature.properties['i_ICA'] >= 2.248000 && feature.properties['i_ICA'] <= 3.916000) {
      return {
        pane: 'pane_ICAIndicedeeficaciaenlacalidaddelagua_12',
        opacity: 1,
        color: 'rgba(0,0,0,0.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0,
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(255, 193, 7, 0.8)',
      }
    }
    if (feature.properties['i_ICA'] >= 3.916000 && feature.properties['i_ICA'] <= 5.584000) {
      return {
        pane: 'pane_ICAIndicedeeficaciaenlacalidaddelagua_12',
        opacity: 1,
        color: 'rgba(0,0,0,0.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0,
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(100, 221, 23, 0.8)',
      }
    }
    if (feature.properties['i_ICA'] >= 5.584000 && feature.properties['i_ICA'] <= 7.252000) {
      return {
        pane: 'pane_ICAIndicedeeficaciaenlacalidaddelagua_12',
        opacity: 1,
        color: 'rgba(0,0,0,0.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0,
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(33, 150, 243, 0.8)',
      }
    }
    if (feature.properties['i_ICA'] >= 7.252000 && feature.properties['i_ICA'] <= 8.920000) {
      return {
        pane: 'pane_ICAIndicedeeficaciaenlacalidaddelagua_12',
        opacity: 1,
        color: 'rgba(0,0,0,0.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0,
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(34, 73, 204, 0.8)',
      }
    }
  }
  map.createPane('pane_ICAIndicedeeficaciaenlacalidaddelagua_12');
  map.getPane('pane_ICAIndicedeeficaciaenlacalidaddelagua_12').style.zIndex = 412;
  map.getPane('pane_ICAIndicedeeficaciaenlacalidaddelagua_12').style['mix-blend-mode'] = 'normal';
  var layer_ICAIndicedeeficaciaenlacalidaddelagua_12 = new L.geoJson(json_ICAIndicedeeficaciaenlacalidaddelagua_12, {
    attribution: '<a href=""></a>',
    pane: 'pane_ICAIndicedeeficaciaenlacalidaddelagua_12',
    onEachFeature: pop_ICAIndicedeeficaciaenlacalidaddelagua_12,
    style: style_ICAIndicedeeficaciaenlacalidaddelagua_12_0,
  });
  bounds_group.addLayer(layer_ICAIndicedeeficaciaenlacalidaddelagua_12);
  map.addLayer(layer_ICAIndicedeeficaciaenlacalidaddelagua_12);
  var baseMaps = {};
  L.control.layers(baseMaps, {
    'ICA - Indice de eficacia en la calidad del agua<br /><table><tr><td style="text-align: center;"><img src="legend/ICAIndicedeeficaciaenlacalidaddelagua_12_0582240.png" /></td><td> 0.58 - 2.24</td></tr><tr><td style="text-align: center;"><img src="legend/ICAIndicedeeficaciaenlacalidaddelagua_12_2243911.png" /></td><td> 2.24 - 3.91</td></tr><tr><td style="text-align: center;"><img src="legend/ICAIndicedeeficaciaenlacalidaddelagua_12_3915582.png" /></td><td> 3.91 - 5.58</td></tr><tr><td style="text-align: center;"><img src="legend/ICAIndicedeeficaciaenlacalidaddelagua_12_5587253.png" /></td><td> 5.58 - 7.25</td></tr><tr><td style="text-align: center;"><img src="legend/ICAIndicedeeficaciaenlacalidaddelagua_12_7258924.png" /></td><td> 7.25 - 8.92</td></tr></table>': layer_ICAIndicedeeficaciaenlacalidaddelagua_12,
    'IED - Indice de eficacia del servicio de drenaje<br /><table><tr><td style="text-align: center;"><img src="legend/IEDIndicedeeficaciadelserviciodedrenaje_11_0582240.png" /></td><td> 0.58 - 2.24</td></tr><tr><td style="text-align: center;"><img src="legend/IEDIndicedeeficaciadelserviciodedrenaje_11_2243911.png" /></td><td> 2.24 - 3.91 </td></tr><tr><td style="text-align: center;"><img src="legend/IEDIndicedeeficaciadelserviciodedrenaje_11_3915582.png" /></td><td> 3.91 - 5.58</td></tr><tr><td style="text-align: center;"><img src="legend/IEDIndicedeeficaciadelserviciodedrenaje_11_5587253.png" /></td><td> 5.58 - 7.25</td></tr><tr><td style="text-align: center;"><img src="legend/IEDIndicedeeficaciadelserviciodedrenaje_11_7258924.png" /></td><td> 7.25 - 8.92 </td></tr></table>': layer_IEDIndicedeeficaciadelserviciodedrenaje_11,
    'IEGA- Indice de eficacia de la gestion del Agua<br /><table><tr><td style="text-align: center;"><img src="legend/IEGAIndicedeeficaciadelagestiondelAgua_10_1302800.png" /></td><td> 1.30 - 2.80</td></tr><tr><td style="text-align: center;"><img src="legend/IEGAIndicedeeficaciadelagestiondelAgua_10_2804311.png" /></td><td> 2.80 - 4.31</td></tr><tr><td style="text-align: center;"><img src="legend/IEGAIndicedeeficaciadelagestiondelAgua_10_4315812.png" /></td><td> 4.31 - 5.81 </td></tr><tr><td style="text-align: center;"><img src="legend/IEGAIndicedeeficaciadelagestiondelAgua_10_5817323.png" /></td><td> 5.81 - 7.32</td></tr><tr><td style="text-align: center;"><img src="legend/IEGAIndicedeeficaciadelagestiondelAgua_10_7328834.png" /></td><td> 7.32 - 8.83</td></tr></table>': layer_IEGAIndicedeeficaciadelagestiondelAgua_10,
    'IES - Indice de eficacia en el suministro<br /><table><tr><td style="text-align: center;"><img src="legend/IESIndicedeeficaciaenelsuministro_9_0682450.png" /></td><td> 0.68 - 2.45</td></tr><tr><td style="text-align: center;"><img src="legend/IESIndicedeeficaciaenelsuministro_9_2454221.png" /></td><td> 2.45 - 4.22</td></tr><tr><td style="text-align: center;"><img src="legend/IESIndicedeeficaciaenelsuministro_9_4225992.png" /></td><td> 4.22- 5.99</td></tr><tr><td style="text-align: center;"><img src="legend/IESIndicedeeficaciaenelsuministro_9_5997763.png" /></td><td> 5.99 - 7.76</td></tr><tr><td style="text-align: center;"><img src="legend/IESIndicedeeficaciaenelsuministro_9_7769534.png" /></td><td> 7.76- 9.53</td></tr></table>': layer_IESIndicedeeficaciaenelsuministro_9,
    'RCAL - Indice de riesgo por la falta de calidad<br /><table><tr><td style="text-align: center;"><img src="legend/RCALIndicederiesgoporlafaltadecalidad_8_0682450.png" /></td><td> 0.68 - 2.45</td></tr><tr><td style="text-align: center;"><img src="legend/RCALIndicederiesgoporlafaltadecalidad_8_2454221.png" /></td><td> 2.45 - 4.22</td></tr><tr><td style="text-align: center;"><img src="legend/RCALIndicederiesgoporlafaltadecalidad_8_4225992.png" /></td><td> 4.22 - 5.99 </td></tr><tr><td style="text-align: center;"><img src="legend/RCALIndicederiesgoporlafaltadecalidad_8_5997763.png" /></td><td> 5.99 - 7.76 </td></tr><tr><td style="text-align: center;"><img src="legend/RCALIndicederiesgoporlafaltadecalidad_8_7769534.png" /></td><td> 7.76 - 9.53 </td></tr></table>': layer_RCALIndicederiesgoporlafaltadecalidad_8,
    'RDREN - Indice de riesgo por fallas en el drenaje<br /><table><tr><td style="text-align: center;"><img src="legend/RDRENIndicederiesgoporfallaseneldrenaje_7_0020150.png" /></td><td> 0.02 - 0.15 </td></tr><tr><td style="text-align: center;"><img src="legend/RDRENIndicederiesgoporfallaseneldrenaje_7_0150291.png" /></td><td> 0.15 - 0.29</td></tr><tr><td style="text-align: center;"><img src="legend/RDRENIndicederiesgoporfallaseneldrenaje_7_0290422.png" /></td><td> 0.29 - 0.42</td></tr><tr><td style="text-align: center;"><img src="legend/RDRENIndicederiesgoporfallaseneldrenaje_7_0420563.png" /></td><td> 0.42 - 0.56</td></tr><tr><td style="text-align: center;"><img src="legend/RDRENIndicederiesgoporfallaseneldrenaje_7_0560704.png" /></td><td> 0.56 - 0.70</td></tr></table>': layer_RDRENIndicederiesgoporfallaseneldrenaje_7,
    'RIGA - Indice de riesgo ante la ineficacia de la gestion del agua<br /><table><tr><td style="text-align: center;"><img src="legend/RIGAIndicederiesgoantelaineficaciadelagestiondelagua_6_0040170.png" /></td><td> 0.04 - 0.17</td></tr><tr><td style="text-align: center;"><img src="legend/RIGAIndicederiesgoantelaineficaciadelagestiondelagua_6_0170301.png" /></td><td> 0.17 - 0.30</td></tr><tr><td style="text-align: center;"><img src="legend/RIGAIndicederiesgoantelaineficaciadelagestiondelagua_6_0300432.png" /></td><td> 0.30 - 0.43</td></tr><tr><td style="text-align: center;"><img src="legend/RIGAIndicederiesgoantelaineficaciadelagestiondelagua_6_0430563.png" /></td><td> 0.43 - 0.56</td></tr><tr><td style="text-align: center;"><img src="legend/RIGAIndicederiesgoantelaineficaciadelagestiondelagua_6_0560704.png" /></td><td> 0.56 - 0.70</td></tr></table>': layer_RIGAIndicederiesgoantelaineficaciadelagestiondelagua_6,
    'RSUM - Indice de riesgo por la falta del suministro<br /><table><tr><td style="text-align: center;"><img src="legend/RSUMIndicederiesgoporlafaltadelsuministro_5_0020170.png" /></td><td> 0.02 - 0.17 </td></tr><tr><td style="text-align: center;"><img src="legend/RSUMIndicederiesgoporlafaltadelsuministro_5_0170321.png" /></td><td> 0.17 - 0.32 </td></tr><tr><td style="text-align: center;"><img src="legend/RSUMIndicederiesgoporlafaltadelsuministro_5_0320482.png" /></td><td> 0.32 - 0.48 </td></tr><tr><td style="text-align: center;"><img src="legend/RSUMIndicederiesgoporlafaltadelsuministro_5_0480633.png" /></td><td> 0.48 - 0.63</td></tr><tr><td style="text-align: center;"><img src="legend/RSUMIndicederiesgoporlafaltadelsuministro_5_0630794.png" /></td><td> 0.63 - 0.79 </td></tr></table>': layer_RSUMIndicederiesgoporlafaltadelsuministro_5,
    'VE - Indice de vulnerabilidad economica<br /><table><tr><td style="text-align: center;"><img src="legend/VEIndicedevulnerabilidadeconomica_4_0020170.png" /></td><td> 0.02 - 0.17</td></tr><tr><td style="text-align: center;"><img src="legend/VEIndicedevulnerabilidadeconomica_4_0170321.png" /></td><td> 0.17 - 0.32</td></tr><tr><td style="text-align: center;"><img src="legend/VEIndicedevulnerabilidadeconomica_4_0320482.png" /></td><td> 0.32 - 0.48</td></tr><tr><td style="text-align: center;"><img src="legend/VEIndicedevulnerabilidadeconomica_4_0480633.png" /></td><td> 0.48 - 0.63</td></tr><tr><td style="text-align: center;"><img src="legend/VEIndicedevulnerabilidadeconomica_4_0630794.png" /></td><td> 0.63 - 0.79</td></tr></table>': layer_VEIndicedevulnerabilidadeconomica_4,
    'VF - Indice de vulnerabilidad fisica<br /><table><tr><td style="text-align: center;"><img src="legend/VFIndicedevulnerabilidadfisica_3_0872450.png" /></td><td> 0.87 - 2.45</td></tr><tr><td style="text-align: center;"><img src="legend/VFIndicedevulnerabilidadfisica_3_2454031.png" /></td><td> 2.45 - 4.03</td></tr><tr><td style="text-align: center;"><img src="legend/VFIndicedevulnerabilidadfisica_3_4035612.png" /></td><td> 4.03 - 5.61</td></tr><tr><td style="text-align: center;"><img src="legend/VFIndicedevulnerabilidadfisica_3_5617193.png" /></td><td> 5.61 - 7.19</td></tr><tr><td style="text-align: center;"><img src="legend/VFIndicedevulnerabilidadfisica_3_7198774.png" /></td><td> 7.19 - 8.77</td></tr></table>': layer_VFIndicedevulnerabilidadfisica_3,
    'VIGA - Indice de vulnerabilidad ante la ineficacia de la gestion del agua<br /><table><tr><td style="text-align: center;"><img src="legend/VIGAIndicedevulnerabilidadantelaineficaciadelagestiondelagua_2_2753940.png" /></td><td> 2.75 - 3.94</td></tr><tr><td style="text-align: center;"><img src="legend/VIGAIndicedevulnerabilidadantelaineficaciadelagestiondelagua_2_3945131.png" /></td><td> 3.94 - 5.13</td></tr><tr><td style="text-align: center;"><img src="legend/VIGAIndicedevulnerabilidadantelaineficaciadelagestiondelagua_2_5136332.png" /></td><td> 5.13 - 6.33</td></tr><tr><td style="text-align: center;"><img src="legend/VIGAIndicedevulnerabilidadantelaineficaciadelagestiondelagua_2_6337523.png" /></td><td> 6.33 - 7.52</td></tr><tr><td style="text-align: center;"><img src="legend/VIGAIndicedevulnerabilidadantelaineficaciadelagestiondelagua_2_7528724.png" /></td><td> 7.52 - 8.72</td></tr></table>': layer_VIGAIndicedevulnerabilidadantelaineficaciadelagestiondelagua_2,
    'VP - Indice de vulnerabilidad politica<br /><table><tr><td style="text-align: center;"><img src="legend/VPIndicedevulnerabilidadpolitica_1_0632500.png" /></td><td> 0.63 - 2.50</td></tr><tr><td style="text-align: center;"><img src="legend/VPIndicedevulnerabilidadpolitica_1_2504371.png" /></td><td> 2.50 - 4.37</td></tr><tr><td style="text-align: center;"><img src="legend/VPIndicedevulnerabilidadpolitica_1_4376242.png" /></td><td> 4.37 - 6.24</td></tr><tr><td style="text-align: center;"><img src="legend/VPIndicedevulnerabilidadpolitica_1_6248113.png" /></td><td> 6.24 - 8.11</td></tr><tr><td style="text-align: center;"><img src="legend/VPIndicedevulnerabilidadpolitica_1_8119994.png" /></td><td> 8.11 - 9.99</td></tr></table>': layer_VPIndicedevulnerabilidadpolitica_1,
    'VS - Indice de vulnerabilidad social<br /><table><tr><td style="text-align: center;"><img src="legend/VSIndicedevulnerabilidadsocial_0_0892700.png" /></td><td> 0.89 - 2.70</td></tr><tr><td style="text-align: center;"><img src="legend/VSIndicedevulnerabilidadsocial_0_2704521.png" /></td><td> 2.70 - 4.52</td></tr><tr><td style="text-align: center;"><img src="legend/VSIndicedevulnerabilidadsocial_0_4526342.png" /></td><td> 4.52 - 6.34</td></tr><tr><td style="text-align: center;"><img src="legend/VSIndicedevulnerabilidadsocial_0_6348163.png" /></td><td> 6.34 - 8.16</td></tr><tr><td style="text-align: center;"><img src="legend/VSIndicedevulnerabilidadsocial_0_8169984.png" /></td><td> 8.16 - 9.98</td></tr></table>': layer_VSIndicedevulnerabilidadsocial_0,
  }).addTo(map);
  setBounds();
  /*
       map.addControl(new L.Control.Search({
     layer: layer_VSIndicedevulnerabilidadsocial_0,
  initial: false,
  hideMarkerOnCollapse: true,
  Marker: false,
  propertyName: 'NOMBRE'}));
  */
  var searchControl = new L.Control.Search({
    layer: layer_VSIndicedevulnerabilidadsocial_0,
    initial: false,
    hideMarkerOnCollapse: true,
    propertyName: 'NOMBRE'
  });

  searchControl.on('search:locationfound', function (e) {
    e.layer.openPopup();
  });

  map.addControl(searchControl);



});
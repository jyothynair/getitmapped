//Custom Control

      /**
       * Define a namespace for the application.
       */
      window.app = {};
      var app = window.app;


      //
      // Define rotate to north control.
      //


      /**
       * @constructor
       * @extends {ol.control.Control}
       * @param {Object=} opt_options Control options.
       */
      app.Drawit = function(opt_options) {

        var options = opt_options || {};

        var button = document.createElement('button');
        button.innerHTML = 'D';

        var this_ = this;
        var startnstop = function() {
          //this_.getMap().getView().setRotation(0);
          alert('draw started')
        };

        button.addEventListener('click', startnstop, false);
        button.addEventListener('touchstart', startnstop, false);

        var element = document.createElement('div');
        element.className = 'drawing ol-unselectable ol-control';
        element.appendChild(button);

        ol.control.Control.call(this, {
          element: element,
          target: options.target
        });

      };
      ol.inherits(app.Drawit, ol.control.Control);

// VIEW
var myview = new ol.View({
    center : [8120237.195139669, 2173610.431696752],
    zoom :15
})

//baselayer
var baselayer= new ol.layer.Tile({
    source : new ol.source.OSM({
        attributions : 'Getitmapped_Survey_App'
    })
})
//layerarray
var layerarray = [baselayer]
    //map
var map = new ol.Map({
    target :'mymap',
    view : myview,
    layers : layerarray,
    controls: ol.control.defaults({
        attributionOptions: {
          collapsible: false
        }
      }).extend([
        new app.Drawit()
      ])
})
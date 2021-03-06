import { MapTypeStyle } from 'angular2-google-maps/core/services/google-maps-types';

export class MapParams {

  public static latitude = 59.9342802;
  public static longitude = 30.3350986;
  public static zoom = 8;
  public static disableDefaultUI = false;
  public static zoomControl = false;
  public static styles: MapTypeStyle[] = [
    {
      'elementType': 'geometry',
      'stylers': [
        {
          'hue': '#ff4400'
        },
        {
          'saturation': -68
        },
        {
          'lightness': -4
        },
        {
          'gamma': 0.72
        }
      ]
    },
    {
      'featureType': 'landscape.man_made',
      'elementType': 'geometry',
      'stylers': [
        {
          'hue': '#0077ff'
        },
        {
          'gamma': 3.1
        }
      ]
    },
    {
      'featureType': 'water',
      'stylers': [
        {
          'hue': '#00ccff'
        },
        {
          'gamma': 0.44
        },
        {
          'saturation': -33
        }
      ]
    },
    {
      'featureType': 'poi.park',
      'stylers': [
        {
          'hue': '#44ff00'
        },
        {
          'saturation': -23
        }
      ]
    },
    {
      'featureType': 'water',
      'elementType': 'labels.text.fill',
      'stylers': [
        {
          'hue': '#007fff'
        },
        {
          'gamma': 0.77
        },
        {
          'saturation': 65
        },
        {
          'lightness': 99
        }
      ]
    },
    {
      'featureType': 'water',
      'elementType': 'labels.text.stroke',
      'stylers': [
        {
          'gamma': 0.11
        },
        {
          'weight': 5.6
        },
        {
          'saturation': 99
        },
        {
          'hue': '#0091ff'
        },
        {
          'lightness': -86
        }
      ]
    },
    {
      'featureType': 'transit.line',
      'elementType': 'geometry',
      'stylers': [
        {
          'lightness': -48
        },
        {
          'hue': '#ff5e00'
        },
        {
          'gamma': 1.2
        },
        {
          'saturation': -23
        }
      ]
    },
    {
      'featureType': 'transit',
      'elementType': 'labels.text.stroke',
      'stylers': [
        {
          'saturation': -64
        },
        {
          'hue': '#ff9100'
        },
        {
          'lightness': 16
        },
        {
          'gamma': 0.47
        },
        {
          'weight': 2.7
        }
      ]
    }
  ];
}

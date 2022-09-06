// axios.get(
//   "https://lvstaging.space/mv/public/checkIns?since=2022-07-18T16:59:00Z",
//   {
//     headers: {
//       "Authorization": "Token deb737484209fe0c30f13ed8f4037600",
//       "Access-Control-Allow-Origin": "http://localhost:8080/",
//       "Access-Control-Allow-Header": "mode",
//       'mode': 'no-cors'
//     }
//   }
// ).then((response) => {
//   console.log(response.data);
// });

const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const checkIns = [
  {
     "address_components" : [],
     "business" : {
        "id" : "kxlr456q",
        "name" : "Bettys Best Maid Cleaning Service",
        "place_id" : "ChIJUXC5nQhtkFQRK1daqKRwwgk"
     },
     "category" : {
        "id" : "9vzd7zoj",
        "title" : "first"
     },
     "coords" : {},
     "created_at" : "2022-07-30T11:16:45Z",
     "customer" : null,
     "description" : "testing multiple checkIn send on hittin dat button numerous times ",
     "employee" : {
        "id" : "xqzkwz1g",
        "name" : "thats my awesome name last name"
     },
     "formatted_address" : "13420 NE 16th St, Bellevue, WA 98005, US",
     "from_office" : true,
     "id" : "0vzw45re",
     "images" : []
  },
  {
     "address_components" : [],
     "business" : {
        "id" : "kxlr456q",
        "name" : "Bettys Best Maid Cleaning Service",
        "place_id" : "ChIJUXC5nQhtkFQRK1daqKRwwgk"
     },
     "category" : {
        "id" : "9v5q7lgj",
        "title" : "second"
     },
     "coords" : {},
     "created_at" : "2022-07-30T11:14:27Z",
     "customer" : null,
     "description" : "foobar",
     "employee" : {
        "id" : "xqzkwz1g",
        "name" : "thats my awesome name last name"
     },
     "formatted_address" : "13420 NE 16th St, Bellevue, WA 98005, US",
     "from_office" : true,
     "id" : "gel485mw",
     "images" : []
  },
  {
     "address_components" : [],
     "business" : {
        "id" : "kxlr456q",
        "name" : "Bettys Best Maid Cleaning Service",
        "place_id" : "ChIJUXC5nQhtkFQRK1daqKRwwgk"
     },
     "category" : {
        "id" : "9vzd7zoj",
        "title" : "first"
     },
     "coords" : {},
     "created_at" : "2022-07-30T10:47:18Z",
     "customer" : null,
     "description" : "testing customer name 4 zi flow: create, save as draft, push live",
     "employee" : {
        "id" : "xqzkwz1g",
        "name" : "thats my awesome name last name"
     },
     "formatted_address" : "13420 NE 16th St, Bellevue, WA 98005, US",
     "from_office" : true,
     "id" : "73zyx5op",
     "images" : []
  },
  {
     "address_components" : [
        {
           "long_name" : "9021",
           "short_name" : "9021",
           "types" : [
              "street_number"
           ]
        },
        {
           "long_name" : "Centreville Road",
           "short_name" : "Centreville Rd",
           "types" : [
              "route"
           ]
        },
        {
           "long_name" : "Manassas",
           "short_name" : "Manassas",
           "types" : [
              "locality",
              "political"
           ]
        },
        {
           "long_name" : "Virginia",
           "short_name" : "VA",
           "types" : [
              "administrative_area_level_1",
              "political"
           ]
        },
        {
           "long_name" : "United States",
           "short_name" : "US",
           "types" : [
              "country",
              "political"
           ]
        },
        {
           "long_name" : "20110",
           "short_name" : "20110",
           "types" : [
              "postal_code"
           ]
        },
        {
           "long_name" : "8419",
           "short_name" : "8419",
           "types" : [
              "postal_code_suffix"
           ]
        }
     ],
     "business" : {
        "id" : "kxlr456q",
        "name" : "Bettys Best Maid Cleaning Service",
        "place_id" : "ChIJUXC5nQhtkFQRK1daqKRwwgk"
     },
     "category" : {
        "id" : "9v5q7lgj",
        "title" : "second"
     },
     "coords" : {},
     "created_at" : "2022-07-30T10:30:59Z",
     "customer" : null,
     "description" : "ima writing ziss loooooong checkIn texxxxt to see if we have point 7 covered. the one that's about zi thext multiline",
     "employee" : {
        "id" : "xqzkwz1g",
        "name" : "thats my awesome name last name"
     },
     "formatted_address" : "9021 Centreville Rd, Manassas, VA 20110, USA",
     "from_office" : false,
     "id" : "qxl09lg4",
     "images" : [
        {
           "full_url" : "https://u.lvstaging.space/image/9x/9xlno75m/temp_image_659de870-b3e0-466f-b096-368ccfcc4b36.jpeg",
           "thumbnail_url" : "https://u.lvstaging.space/image/9x/9xlno75m/preview_temp_image_659de870-b3e0-466f-b096-368ccfcc4b36.jpeg"
        },
        {
           "full_url" : "https://u.lvstaging.space/image/x3/x3zxvklp/temp_image_d9cad4b5-486c-47cf-9d30-858e80cd9015.jpeg",
           "thumbnail_url" : "https://u.lvstaging.space/image/x3/x3zxvklp/preview_temp_image_d9cad4b5-486c-47cf-9d30-858e80cd9015.jpeg"
        },
        {
           "full_url" : "https://u.lvstaging.space/image/3v/3v5jv758/temp_image_3c2cd2ed-61ca-4fdc-b0a0-859446387e8a.jpeg",
           "thumbnail_url" : "https://u.lvstaging.space/image/3v/3v5jv758/preview_temp_image_3c2cd2ed-61ca-4fdc-b0a0-859446387e8a.jpeg"
        },
        {
           "full_url" : "https://u.lvstaging.space/image/dg/dg59d3z7/temp_image_e1d7bf14-cc07-4e0e-a41f-eff9f67e5472.jpeg",
           "thumbnail_url" : "https://u.lvstaging.space/image/dg/dg59d3z7/preview_temp_image_e1d7bf14-cc07-4e0e-a41f-eff9f67e5472.jpeg"
        },
        {
           "full_url" : "https://u.lvstaging.space/image/y8/y8lg865d/temp_image_8cbea85b-1eac-425d-8fcf-9ae883532a99.jpeg",
           "thumbnail_url" : "https://u.lvstaging.space/image/y8/y8lg865d/preview_temp_image_8cbea85b-1eac-425d-8fcf-9ae883532a99.jpeg"
        }
     ]
  },
  {
     "address_components" : [
        {
           "long_name" : "301",
           "short_name" : "301",
           "types" : [
              "subpremise"
           ]
        },
        {
           "long_name" : "1078",
           "short_name" : "1078",
           "types" : [
              "street_number"
           ]
        },
        {
           "long_name" : "Howard Street",
           "short_name" : "Howard St",
           "types" : [
              "route"
           ]
        },
        {
           "long_name" : "SoMa",
           "short_name" : "SoMa",
           "types" : [
              "neighborhood",
              "political"
           ]
        },
        {
           "long_name" : "San Francisco",
           "short_name" : "SF",
           "types" : [
              "locality",
              "political"
           ]
        },
        {
           "long_name" : "San Francisco County",
           "short_name" : "San Francisco County",
           "types" : [
              "administrative_area_level_2",
              "political"
           ]
        },
        {
           "long_name" : "California",
           "short_name" : "CA",
           "types" : [
              "administrative_area_level_1",
              "political"
           ]
        },
        {
           "long_name" : "United States",
           "short_name" : "US",
           "types" : [
              "country",
              "political"
           ]
        },
        {
           "long_name" : "94103",
           "short_name" : "94103",
           "types" : [
              "postal_code"
           ]
        }
     ],
     "business" : {
        "id" : "kxlr456q",
        "name" : "Bettys Best Maid Cleaning Service",
        "place_id" : "ChIJUXC5nQhtkFQRK1daqKRwwgk"
     },
     "category" : {
        "id" : "9vzd7zoj",
        "title" : "first"
     },
     "coords" : {
        "lat" : "37.7784845",
        "lng" : "-122.4090121"
     },
     "created_at" : "2022-07-20T15:27:43Z",
     "customer" : "John Doe",
     "description" : "I did something",
     "employee" : {
        "id" : "kxlr456q",
        "name" : "Tony N QA"
     },
     "formatted_address" : "1078 Howard St #301, San Francisco, CA 94103, USA",
     "from_office" : false,
     "id" : "2elmk5pj",
     "images" : [
        {
           "full_url" : "https://u.lvstaging.space/image/ge/gel4r2zm/1658330855556.png",
           "thumbnail_url" : "https://u.lvstaging.space/image/ge/gel4r2zm/preview_1658330855556.png"
        }
     ]
  },
  {
     "address_components" : [
        {
           "long_name" : "6",
           "short_name" : "6",
           "types" : [
              "street_number"
           ]
        },
        {
           "long_name" : "Vojvode Petka",
           "short_name" : "Vojvode Petka",
           "types" : [
              "route"
           ]
        },
        {
           "long_name" : "VraÄar",
           "short_name" : "VraÄar",
           "types" : [
              "sublocality_level_1",
              "sublocality",
              "political"
           ]
        },
        {
           "long_name" : "Beograd",
           "short_name" : "BG",
           "types" : [
              "locality",
              "political"
           ]
        },
        {
           "long_name" : "Grad Beograd",
           "short_name" : "Grad Beograd",
           "types" : [
              "administrative_area_level_2",
              "political"
           ]
        },
        {
           "long_name" : "Serbia",
           "short_name" : "RS",
           "types" : [
              "country",
              "political"
           ]
        }
     ],
     "business" : {
        "id" : "kxlr456q",
        "name" : "Bettys Best Maid Cleaning Service",
        "place_id" : "ChIJUXC5nQhtkFQRK1daqKRwwgk"
     },
     "category" : {
        "id" : "9v5q7lgj",
        "title" : "second"
     },
     "coords" : {
        "lat" : "44.7986552",
        "lng" : "20.4849684"
     },
     "created_at" : "2022-07-20T15:20:57Z",
     "customer" : "No customer",
     "description" : "New one checkIn in Belgrade",
     "employee" : {
        "id" : "golve5xy",
        "name" : "Steve Ballmer"
     },
     "formatted_address" : "Vojvode Petka 6, Beograd, Serbia",
     "from_office" : false,
     "id" : "9v53vz1r",
     "images" : [
        {
           "full_url" : "https://u.lvstaging.space/image/73/73zy1wzo/1658330445198.png",
           "thumbnail_url" : "https://u.lvstaging.space/image/73/73zy1wzo/preview_1658330445198.png"
        }
     ]
  },
  {
     "address_components" : [
        {
           "long_name" : "undefined",
           "short_name" : "undefined",
           "types" : [
              "street_number"
           ]
        },
        {
           "long_name" : "undefined",
           "short_name" : "undefined",
           "types" : [
              "route"
           ]
        },
        {
           "long_name" : "undefined",
           "short_name" : "undefined",
           "types" : [
              "locality",
              "political"
           ]
        },
        {
           "long_name" : "undefined",
           "short_name" : "undefined",
           "types" : [
              "administrative_area_level_3",
              "political"
           ]
        },
        {
           "long_name" : "undefined",
           "short_name" : "undefined",
           "types" : [
              "administrative_area_level_2",
              "political"
           ]
        },
        {
           "long_name" : "undefined",
           "short_name" : "undefined",
           "types" : [
              "administrative_area_level_1",
              "political"
           ]
        },
        {
           "long_name" : "undefined",
           "short_name" : "undefined",
           "types" : [
              "country",
              "political"
           ]
        },
        {
           "long_name" : "undefined",
           "short_name" : "undefined",
           "types" : [
              "postal_code"
           ]
        }
     ],
     "business" : {
        "id" : "kxlr456q",
        "name" : "Bettys Best Maid Cleaning Service",
        "place_id" : "ChIJUXC5nQhtkFQRK1daqKRwwgk"
     },
     "category" : {
        "id" : "9vzd7zoj",
        "title" : "first"
     },
     "coords" : {
        "lat" : "47.21963",
        "lng" : "39.706588"
     },
     "created_at" : "2022-07-18T16:59:42Z",
     "customer" : "No name customer",
     "description" : "This is fine chekin",
     "employee" : {
        "id" : "golve5xy",
        "name" : "Steve Ballmer"
     },
     "formatted_address" : "Bol'shaya Sadovaya Ulitsa, 42, Rostov, Rostovskaya oblast', Russia, 344002",
     "from_office" : false,
     "id" : "xqzkwz1g",
     "images" : [
        {
           "full_url" : "https://u.lvstaging.space/image/qx/qxl0xmlg/1658163513410.jpeg",
           "thumbnail_url" : "https://u.lvstaging.space/image/qx/qxl0xmlg/preview_1658163513410.jpeg"
        }
     ]
  },
  {
     "address_components" : [
        {
           "long_name" : "undefined",
           "short_name" : "undefined",
           "types" : [
              "route"
           ]
        },
        {
           "long_name" : "undefined",
           "short_name" : "undefined",
           "types" : [
              "locality",
              "political"
           ]
        },
        {
           "long_name" : "undefined",
           "short_name" : "undefined",
           "types" : [
              "administrative_area_level_2",
              "political"
           ]
        },
        {
           "long_name" : "undefined",
           "short_name" : "undefined",
           "types" : [
              "administrative_area_level_1",
              "political"
           ]
        },
        {
           "long_name" : "undefined",
           "short_name" : "undefined",
           "types" : [
              "country",
              "political"
           ]
        }
     ],
     "business" : {
        "id" : "kxlr456q",
        "name" : "Bettys Best Maid Cleaning Service",
        "place_id" : "ChIJUXC5nQhtkFQRK1daqKRwwgk"
     },
     "category" : {
        "id" : "mwl6v5de",
        "title" : "third"
     },
     "coords" : {
        "lat" : "45.2333069",
        "lng" : "19.7923771"
     },
     "created_at" : "2022-07-18T15:50:04Z",
     "customer" : "No customer",
     "description" : "I don't know what I did",
     "employee" : {
        "id" : "golve5xy",
        "name" : "Steve Ballmer"
     },
     "formatted_address" : "Nova, Novi Sad, Serbia",
     "from_office" : false,
     "id" : "golve5xy",
     "images" : [
        {
           "full_url" : "https://u.lvstaging.space/image/9v/9v531rz1/1658159397305.jpeg",
           "thumbnail_url" : "https://u.lvstaging.space/image/9v/9v531rz1/preview_1658159397305.jpeg"
        },
        {
           "full_url" : "https://u.lvstaging.space/image/2e/2elm98zp/1658159397315.jpeg",
           "thumbnail_url" : "https://u.lvstaging.space/image/2e/2elm98zp/preview_1658159397315.jpeg"
        }
     ]
  },
  {
     "address_components" : [
        {
           "long_name" : "undefined",
           "short_name" : "undefined",
           "types" : [
              "street_number"
           ]
        },
        {
           "long_name" : "undefined",
           "short_name" : "undefined",
           "types" : [
              "route"
           ]
        },
        {
           "long_name" : "undefined",
           "short_name" : "undefined",
           "types" : [
              "locality",
              "political"
           ]
        },
        {
           "long_name" : "undefined",
           "short_name" : "undefined",
           "types" : [
              "administrative_area_level_3",
              "political"
           ]
        },
        {
           "long_name" : "undefined",
           "short_name" : "undefined",
           "types" : [
              "administrative_area_level_2",
              "political"
           ]
        },
        {
           "long_name" : "undefined",
           "short_name" : "undefined",
           "types" : [
              "administrative_area_level_1",
              "political"
           ]
        },
        {
           "long_name" : "undefined",
           "short_name" : "undefined",
           "types" : [
              "country",
              "political"
           ]
        },
        {
           "long_name" : "undefined",
           "short_name" : "undefined",
           "types" : [
              "postal_code"
           ]
        }
     ],
     "business" : {
        "id" : "kxlr456q",
        "name" : "Bettys Best Maid Cleaning Service",
        "place_id" : "ChIJUXC5nQhtkFQRK1daqKRwwgk"
     },
     "category" : {
        "id" : "9v5q7lgj",
        "title" : "second"
     },
     "coords" : {
        "lat" : "47.21799739999999",
        "lng" : "39.6993478"
     },
     "created_at" : "2022-07-18T15:45:11Z",
     "customer" : "Fine customer",
     "description" : "The chekin is fine ",
     "employee" : {
        "id" : "golve5xy",
        "name" : "Steve Ballmer"
     },
     "formatted_address" : "Bol'shaya Sadovaya Ulitsa, 12, Rostov, Rostovskaya oblast', Russia, 344050",
     "from_office" : false,
     "id" : "v4z7nljq",
     "images" : [
        {
           "full_url" : "https://u.lvstaging.space/image/xq/xqzkwgz1/1658159104562.png",
           "thumbnail_url" : "https://u.lvstaging.space/image/xq/xqzkwgz1/preview_1658159104562.png"
        }
     ]
  },
  {
     "address_components" : [
        {
           "long_name" : "undefined",
           "short_name" : "undefined",
           "types" : [
              "street_number"
           ]
        },
        {
           "long_name" : "undefined",
           "short_name" : "undefined",
           "types" : [
              "route"
           ]
        },
        {
           "long_name" : "undefined",
           "short_name" : "undefined",
           "types" : [
              "sublocality_level_1",
              "sublocality",
              "political"
           ]
        },
        {
           "long_name" : "undefined",
           "short_name" : "undefined",
           "types" : [
              "locality",
              "political"
           ]
        },
        {
           "long_name" : "undefined",
           "short_name" : "undefined",
           "types" : [
              "administrative_area_level_2",
              "political"
           ]
        },
        {
           "long_name" : "undefined",
           "short_name" : "undefined",
           "types" : [
              "country",
              "political"
           ]
        },
        {
           "long_name" : "undefined",
           "short_name" : "undefined",
           "types" : [
              "postal_code"
           ]
        }
     ],
     "business" : {
        "id" : "kxlr456q",
        "name" : "Bettys Best Maid Cleaning Service",
        "place_id" : "ChIJUXC5nQhtkFQRK1daqKRwwgk"
     },
     "category" : {
        "id" : "9vzd7zoj",
        "title" : "first"
     },
     "coords" : {
        "lat" : "44.807723",
        "lng" : "20.4684875"
     },
     "created_at" : "2022-07-18T15:38:20Z",
     "customer" : "Major customer",
     "description" : "This is a description",
     "employee" : {
        "id" : "golve5xy",
        "name" : "Steve Ballmer"
     },
     "formatted_address" : "Svetozara MarkoviÄa 12, Beograd 11000, Serbia",
     "from_office" : false,
     "id" : "v4z2d5r3",
     "images" : [
        {
          "full_url" : "https://u.lvstaging.space/image/go/golv215x/1658158686404.png",
          "thumbnail_url" : "https://u.lvstaging.space/image/go/golv215x/preview_1658158686404.png"
        }
     ]
  }
];

function getCheckInHTML(checkIn, hasMiniMap=false) {
   const getFormattedDate = (date) => {
      const d = new Date(date);
      return `${monthNames[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`
   }
   const html =  `
      <div 
         id="${hasMiniMap ? "mini-map-" : ""}check-in-${checkIn.id}"
         class="local-viking__check-in ${hasMiniMap ? 'local-viking__check-in--dark-background' : ''}"
      >
         <div class="local-viking__check-in__header">
            <div class="local-viking__check-in__header__title">
               ${checkIn.customer ? checkIn.customer : "No customer"}
            </div>
            <div class="local-viking__check-in__header__date">
               ${getFormattedDate(checkIn.created_at)}
            </div>
         </div>
         <div class="local-viking__check-in__body">
            <div class="local-viking__check-in__body__text">
               ${checkIn.description}
            </div>
            <div class="local-viking__check-in__body__images">
               ${hasMiniMap && (checkIn.coords && Object.keys(checkIn.coords).length) ? `<div class="mini-map"></div>` : ""}
               ${
                  checkIn.images.length > 0 ? `
                     ${
                        checkIn.images.map((image, index) => {
                        return `
                           <div
                              style="background-image: url(${image.thumbnail_url});"
                           ></div>
                        `
                        }).join("")
                     }
                  ` : ""
               }
            </div>
         </div>
         <div class="local-viking__check-in__footer">
            <span class="local-viking__check-in__footer__tag">
               ${checkIn.business.name}
            </span>
         </div>
      </div>
  `
   return html;
}

function getAllCheckInHTML(checkIns, hasMiniMap=false) {
  return checkIns.map(checkIn => getCheckInHTML(checkIn, hasMiniMap));
}

function initPinsMap() {
  const map = new google.maps.Map(document.querySelector(".local-viking-pins-on-map__big-map__map"), {
    zoom: 8,
    center: { lat: 44.807723, lng: 20.4684875 },
  });
  checkIns.forEach((checkIn, i) => {
    if (!checkIn.coords || !Object.keys(checkIn.coords).length) {
      return
    }
    const position = {lat: Number(checkIn.coords.lat), lng: Number(checkIn.coords.lng)}
    new google.maps.Marker({
      position,
      map,
    });
  });
}

function initMiniMaps() {
   checkIns.forEach((checkIn, i) => {
     const elem = document.getElementById(`mini-map-check-in-${checkIn.id}`);
     const mapElem = elem.querySelector(".mini-map");
     if (!mapElem) {
         return
     }
     const position = {lat: Number(checkIn.coords.lat), lng: Number(checkIn.coords.lng)}
     const map = new google.maps.Map(mapElem, {
       zoom: 15,
       center: position,
     });
     
     new google.maps.Marker({
       position,
       map,
     });
   });
}

function initMaps() {
   initMiniMaps();
   initPinsMap();
}

function populateCheckins(checkinsHTMLList, columnsContainerSelector) {
   const checkinsContainer = document.querySelector(columnsContainerSelector);
   const allCheckins = checkinsHTMLList.join("");
   checkinsContainer.innerHTML = `
      <div class="local-viking__grid-sizer"></div>
      ${allCheckins}
   `;
   const msnry = new Masonry(checkinsContainer, {
      itemSelector: '.local-viking__check-in',
      columnWidth: '.local-viking__grid-sizer',
      percentPosition: true,
      gutter: 16,
      isFitWidth: true
   });
   return msnry;
}

function initPopulation() {
   populateCheckins(getAllCheckInHTML(checkIns), ".local-viking-pins-on-map .local-viking__check-ins")
   populateCheckins(getAllCheckInHTML(checkIns, true), ".local-viking-mini-maps .local-viking__check-ins")
}

initPopulation();

window.initMap = initMaps;

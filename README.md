# How To Make A Map On Mapbox?

How can we generate a map inside React.js with the help of Mapbox website... 🌍

<img src="https://navid5155.hashnode.dev/_next/image?url=https%3A%2F%2Fcdn.hashnode.com%2Fres%2Fhashnode%2Fimage%2Fupload%2Fv1624730397590%2FbFD8mVZMV.jpeg%3Fw%3D1600%26h%3D840%26fit%3Dcrop%26crop%3Dentropy%26auto%3Dcompress%2Cformat%26format%3Dwebp&w=1920&q=75" alt="logo" />

First of all, we will create an account on the website of [Mapbox](https://www.mapbox.com/).

And as soon as we create an account on the Mapbox website, I will post a token to us. which we will use in our program i.e. code

<hr />


## It will look something like this. ⬇️


>  NOTE : I have removed some words from this, please do not try it, it will not work. 😊😊😊😊😊 I just put for example. 


```javascript

pk.eyJ1IjoibmFaWQMTU1IiwiYSIImNrcWRhdGg1NzAzMsydm1seXBidXY3zEifQ.gHgXk-VTNt30bvKm_eMWyA

```
and after that, we will install an extension using npm or yarn.


```javascript

$ npm i mapbox-gl

```
or

```javascript

$ yarn add mapbox-gl

```

After installing we will import this extension. and we will access token so that he is ready to do his job.

We will access the token with something like. ⬇️

```javascript
mapboxgl.accessToken = pk.eyJ1IjoibmFaWQMTU1IiwiYSIImNrcWRhdGg1NzAzMsydm1seXBidXY3zEifQ.gHgXk-VTNt30bvKm_eMWyA
```

and we will write code something like this using use state. So that our program is completely ready to run on the browser. and give us the output in the correct proof.

```javascript


 const mapboxElRef = useRef(null);

    useEffect(() => {
        const map = new mapboxgl.Map({
            container: mapboxElRef.current,
            style: "mapbox://styles/notalemesa/ck8dqwdum09ju1ioj65e3ql3k",
            center: [27, 32],
            zoom: 2
        });

        map.addControl(new mapboxgl.NavigationControl());
    }, []);

```
and we will return our component. like that ⬇️ .

```javascript

<div className="App">
       <div className="mapContainer">
           <div className="mapBox" ref={mapboxElRef} />
       </div>
</div>

```

nd after that our complete map will be generated and will output something like this to the browser.
https://navid5155.hashnode.dev/how-to-make-a-map-on-mapbox

<img src="https://cdn.hashnode.com/res/hashnode/image/upload/v1624729511511/F2RtZL0ZW.png?auto=compress,format&format=webp" alt="logo..." />

<hr />

Live Demo and Project Code 👨‍💻

source code : github.com/NavidMansuri5155/World_Map.io
> NOTE : This code outputs perfectly but the page is not uploaded after posting. 😔

<hr />

Thank you for reading 🙏

If you enjoyed this article or found it helpful, give it a thumbs-up 👍

Feel free to connect 👋

[Instagram](https://www.instagram.com/nabizada_navid_mansuri/) , [Facebook](https://www.facebook.com/navid.mansuri.5/), [Twitter](https://twitter.com/NAVIDMANSURI7)

Happy coding..👨‍💻





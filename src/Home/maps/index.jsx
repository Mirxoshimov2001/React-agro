import { YMaps, Map, Placemark } from "react-yandex-maps";

const Maps =() => {
    return(
        <YMaps>
            <div style={{ width: '100%', height: '400px' }}>
            <Map
                defaultState={{
                center: [40.789582, 72.258263],
                zoom: 10,
                
                }}

                width={"100%"}
                height={"100%"}
            >
                <Placemark geometry={[40.789582, 72.258263]} />
            </Map>
            </div>
        </YMaps>   
    )
}

export default Maps;
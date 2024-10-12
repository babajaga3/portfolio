import { useRef, useEffect } from 'react'
import GlobeGL, { GlobeMethods } from 'react-globe.gl'
import { MeshPhongMaterial } from 'three'
import globeData from '@/assets/globe.json'


export function Globe() {
  const globeRef = useRef<GlobeMethods>()

  const myData = [
    {
      lat: 43.340579804289035,
      lng: 23.94332990946647,
      altitude: 0.4,
      color: '#f85525'
    }
  ]

  const globeWaterColor = new MeshPhongMaterial({
    color: '#79616F'
  })

  useEffect(() => {
    if (globeRef.current) {
      globeRef.current.pointOfView({ lat: 35.18674966294979, lng: 41.81189004953553, altitude: 0.8 })
    }
  }, [])

  return (
    <div>
      <GlobeGL
        // width={400}
        ref={globeRef}
        pointsData={myData}
        pointAltitude={0.1}
        hexPolygonsData={globeData.features}
        hexPolygonColor={() => '#D87F81'}
        showAtmosphere={false}
        globeMaterial={globeWaterColor}
        onGlobeClick={(e) => console.log('globe clicked', e)}
        // transparent color
        backgroundColor={'#00000000'}
      />
    </div>
  )
}

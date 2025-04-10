import Particles, { initParticlesEngine } from '@tsparticles/react'
import { loadSlim } from '@tsparticles/slim'
import {
  type Container,
  type ISourceOptions,
  MoveDirection,
  OutMode
} from '@tsparticles/engine'
import { useEffect, useState, useMemo } from 'react'


export function Constellation({ style }: { style?: Partial<CSSStyleDeclaration> }) {
  const [ init, setInit ] = useState(false)
  useEffect(() => {
    initParticlesEngine(async engine => {
      await loadSlim(engine)
    }).then(() => {
      setInit(true)
    })
  }, [])

  const particlesLoaded = async (container?: Container): Promise<void> => {
    console.log('Loaded particles', container)
  }

  const options: ISourceOptions = useMemo(
    () => ({
      background: {
        color: {
          value: '#0A0A0A'
        }
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: false,
            mode: 'push'
          },
          onHover: {
            enable: true,
            mode: 'grab'
          }
        }
      },
      particles: {
        color: {
          value: '#ffffff'
        },
        links: {
          color: '#ffffff',
          distance: 150,
          enable: true,
          opacity: 0.5,
          width: 1
        },
        move: {
          direction: MoveDirection.none,
          enable: true,
          outModes: {
            default: OutMode.out
          },
          random: true,
          speed: 2,
          straight: false
        },
        number: {
          density: {
            enable: true
          },
          value: 200
        },
        opacity: {
          value: 0.5
        },
        shape: {
          type: 'circle'
        },
        size: {
          value: { min: 1, max: 3 }
        }
      },
      detectRetina: true,
      style
    }),
    [ style ]
  )

  if (init) {
    return (
      <Particles
        id="tsparticles"
        particlesLoaded={particlesLoaded}
        options={options}
      />
    )
  }

  return <></>
}

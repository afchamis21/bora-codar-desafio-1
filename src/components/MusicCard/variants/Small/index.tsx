import {
  CardContainer,
  CardHeader,
  SongController,
  SongInformation,
} from './styles'
import musicSplashImage from '../../../../assets/musicSplash.png'
import { SkipBack, Play, SkipForward } from 'phosphor-react'

export function SmallMusicCard() {
  return (
    <CardContainer>
      <CardHeader>
        <img src={musicSplashImage} alt="" />
        <SongInformation>
          <h2>Acorda Devinho</h2>
          <p>Banda Rocketseat</p>
        </SongInformation>
      </CardHeader>
      <SongController>
        <button type="button">
          <SkipBack size={28} weight="fill" />
        </button>
        <button type="button">
          <Play size={28} weight="fill" />
        </button>
        <button type="button">
          <SkipForward size={28} weight="fill" />
        </button>
      </SongController>
    </CardContainer>
  )
}

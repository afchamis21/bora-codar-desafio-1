import {
  CardContainer,
  SongController,
  SongInformation,
  TimeInfo,
  TimeTrack,
} from './styles'
import musicSplashImage from '../../../../assets/musicSplash.png'
import { SkipBack, Play, SkipForward } from 'phosphor-react'

export function LargeMusicCard() {
  return (
    <CardContainer>
      <img src={musicSplashImage} alt="" />
      <SongInformation>
        <h2>Acorda Devinho</h2>
        <p>Banda Rocketseat</p>
      </SongInformation>
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
      <TimeInfo>
        <TimeTrack css={{ $$timeCompleted: '50%' }} />
        <div>
          <span>03:20</span>
          <span>00:12</span>
        </div>
      </TimeInfo>
    </CardContainer>
  )
}

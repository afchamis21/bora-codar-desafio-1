import { LargeMusicCard } from './variants/Large'
import { MediumMusicCard } from './variants/Medium'
import { SmallMusicCard } from './variants/Small'

interface MusicCardProps {
  size: 'lg' | 'md' | 'sm'
}

export function MusicCard({ size }: MusicCardProps) {
  const cardVariants = {
    lg: <LargeMusicCard />,
    md: <MediumMusicCard />,
    sm: <SmallMusicCard />,
  }

  return cardVariants[size]
}

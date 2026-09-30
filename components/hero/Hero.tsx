import HeroSlider, {
  type HeroSlide,
} from './HeroSlider';

type HeroProps = {
  slides: HeroSlide[];
  height?: 'screen' | 'large' | 'medium';
};

export default function Hero({
  slides,
  height = 'screen',
}: HeroProps) {
  return (
    <HeroSlider
      slides={slides}
      height={height}
    />
  );
}
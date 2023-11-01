import {useState} from 'react'

type PillDetails = {
    heroId: string;
    heroText: string;
    imageUrl: string;
    alt?: string;
}[]

interface PillsProps {
  pills: PillDetails;
  updateHeroText: (value: string) => void;
  resetText: () => void;
}

export const Pills = (props: PillsProps) => {
    const [isActive, setIsActive] = useState<string>('');
    const updateSelectedImage = (e) => {
        setIsActive(e.target.alt)
        props.updateHeroText(e)
    }

    const resetImage = () => {
      setIsActive('')
      props.resetText()
    }

    const { pills } = props;
    const pill = pills.map((pill) => (
      <div key={`---${pill.heroId}`} className={`hero-image | ${isActive === pill.heroId ? 'active-true' : 'active-false'}`} id={pill.heroId} data-headertag={pill.heroText} onMouseOver={updateSelectedImage} onMouseOut={resetImage}>
        <img src={pill.imageUrl} alt={pill.alt}/> 
      </div>
    ));

  return (
    <>
    {pill}
    </>
  )
}

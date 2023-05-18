import DarkContainer from "@/components/UI/DarkContainer";
import Image from "next/image";
import {SkillType} from "@/components/pages/Home/OurTeam/StaticData/ourTeamData";


type Props = {
  skills: SkillType[]
}

function OurTeamSkills({skills}: Props) {
  return skills.map((skill, index) => (
    <DarkContainer key={index} className='flex flex-col space-y-4 h-64 md:h-full flex-1 aspect-square md:aspect-auto xl:aspect-square'>
      <div className='relative w-14 md:w-20 h-14 md:h-20'>
        <Image
          fill
          src={`/images/ourTeam/${skill.info.logo}`} alt={skill.info.logo}
          style={{objectFit: 'contain'}}
        />
      </div>

      <span className='text-white/70 font-light text-sm'>{skill.info.title}</span>

      <span>{skill.description}</span>
    </DarkContainer>
  ))
}

export default OurTeamSkills;
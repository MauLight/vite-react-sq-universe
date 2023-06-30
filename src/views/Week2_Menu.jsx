import { useEffect } from 'react'
import Myth_Lesson from '../components/week2-menu/Myth-Lesson'
import Dramatic1Lesson from '../components/week2-menu/Dramatic1-Lesson'
import Dramatic2Lesson from '../components/week2-menu/Dramatic2-Lesson'
import Dramatic3Lesson from '../components/week2-menu/Dramatic3-Lesson'
import Dramatic4Lesson from '../components/week2-menu/Dramatic4-Lesson'
import { Text } from '@nextui-org/react'

export default function Week2_Menu() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <div>
      <div className="flex flex-wrap md:mr-auto px-5 md:px-20 mt-[25px]">
        <Text className="font-secondary text-xl md:text-3xl xl:text-5xl">WEEK II : The Dramatic Basis of Story</Text>
      </div>
      <Myth_Lesson />
      <Dramatic1Lesson />
      <Dramatic2Lesson />
      <Dramatic3Lesson />
      <Dramatic4Lesson />
    </div>
  )
}

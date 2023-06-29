import React from 'react'
import Myth_Lesson from '../components/quest-menu/Myth-Lesson'
import Dramatic1Lesson from '../components/quest-menu/Dramatic1-Lesson'
import Dramatic2Lesson from '../components/quest-menu/Dramatic2-Lesson'
import Dramatic3Lesson from '../components/quest-menu/Dramatic3-Lesson'
import Dramatic4Lesson from '../components/quest-menu/Dramatic4-Lesson'

export default function QuestMenu() {
  return (
    <div>
      <Myth_Lesson />
      <Dramatic1Lesson />
      <Dramatic2Lesson />
      <Dramatic3Lesson />
      <Dramatic4Lesson />
    </div>
  )
}

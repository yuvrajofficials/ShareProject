import React from 'react'
import ButtonForStudyMaterial from '../buttons/ButtonForStudyMaterial'
import Study from './Study.css'

const StudyMaterialRender = () => {
  return (
    <>
      <div class="inline-flex overflow-hidden bg-white rounded-lg dark: rtl:flex-row-reverse dark: dark:divide-gray-700 w-screen justify-center border-b-2">
             
             <ButtonForStudyMaterial Linkofpage="/OnlineTeachingPlatform/studymaterial/studykids"typeofstudyMaterial="Kids "/>
             <ButtonForStudyMaterial Linkofpage="/OnlineTeachingPlatform/studymaterial/studyprimary"typeofstudyMaterial="Primary"/>
             <ButtonForStudyMaterial Linkofpage="/OnlineTeachingPlatform/studymaterial/studyjrcollege"typeofstudyMaterial="Jr. College"/>
             <ButtonForStudyMaterial Linkofpage="/OnlineTeachingPlatform/studymaterial/studyugpg"typeofstudyMaterial="UG & PG"/>
             <ButtonForStudyMaterial Linkofpage="/OnlineTeachingPlatform/studymaterial/studycoding"typeofstudyMaterial="Coding"/>
             <ButtonForStudyMaterial Linkofpage="/OnlineTeachingPlatform/studymaterial/studygovernment"typeofstudyMaterial="Government"/>
             <ButtonForStudyMaterial Linkofpage="/OnlineTeachingPlatform/studymaterial/studycreativity"typeofstudyMaterial="Creativity"/>
           </div>
    </>
  )
}

export default StudyMaterialRender

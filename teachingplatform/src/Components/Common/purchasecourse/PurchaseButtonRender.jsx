import React from 'react'
import ButtonForStudyMaterial from '../buttons/ButtonForStudyMaterial'
const PurchaseButtonRender = () => {
  return (
    <>
      <div class="inline-flex overflow-hidden bg-white rounded-lg dark: rtl:flex-row-reverse dark: dark:divide-gray-700 w-screen justify-center border-b-2">
             
             <ButtonForStudyMaterial Linkofpage="/OnlineTeachingPlatform/purchasecourse/purchasekids"typeofstudyMaterial="Kids "/>
             <ButtonForStudyMaterial Linkofpage="/OnlineTeachingPlatform/purchasecourse/purchaseprimary"typeofstudyMaterial="Primary"/>
             <ButtonForStudyMaterial Linkofpage="/OnlineTeachingPlatform/purchasecourse/purchasejrcollege"typeofstudyMaterial="Jr. College"/>
             <ButtonForStudyMaterial Linkofpage="/OnlineTeachingPlatform/purchasecourse/purchaseugpg"typeofstudyMaterial="UG & PG"/>
             <ButtonForStudyMaterial Linkofpage="/OnlineTeachingPlatform/purchasecourse/purchasecoding"typeofstudyMaterial="Coding"/>
             <ButtonForStudyMaterial Linkofpage="/OnlineTeachingPlatform/purchasecourse/purchasegovernment"typeofstudyMaterial="Government"/>
             <ButtonForStudyMaterial Linkofpage="/OnlineTeachingPlatform/purchasecourse/purchasecreativity"typeofstudyMaterial="Creativity"/>
           </div>
    </>
  )
}

export default PurchaseButtonRender

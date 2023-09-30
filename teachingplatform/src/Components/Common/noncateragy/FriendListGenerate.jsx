import React from 'react'

const FriendListGenerate = (props) => {
  return (
    <>
     <a href="#" class="flex flex-col items-center justify-center text-gray-800 hover:text-blue-600" title="View Profile">
                    <img src="https://vojislavd.com/ta-template-demo/assets/img/connections/connection7.jpg" class="w-16 rounded-full"/>
                    <p class="text-center font-bold text-sm mt-1">{props.friendname}</p>
                    <p class="text-xs text-gray-500 text-center">{props.friendfeatures}</p>
                </a> 
    </>
  )
}

export default FriendListGenerate

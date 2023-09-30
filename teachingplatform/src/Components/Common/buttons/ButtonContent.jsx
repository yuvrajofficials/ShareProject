import React from 'react'
import { useNavigate } from 'react-router-dom'
import ButtonGenerate from './ButtonGenerate';
import { ApartmentOutlined, Book, ChildFriendly, ComputerOutlined, DrawOutlined, Home, HomeMaxOutlined, ImportContacts, LocalPostOfficeOutlined,Man2Outlined,PagesOutlined, PageviewOutlined, SchoolOutlined, SchoolSharp } from '@mui/icons-material';
import { Paper } from '@mui/material';


  const ButtonContent = () => {
  const navigate = useNavigate();
  const renderInstitute = () => { navigate('/OnlineTeachingPlatform');  }
  const renderPrimary = () => { navigate('/OnlineTeachingPlatform/primary');  }
  const renderJrcollege = () => { navigate('/OnlineTeachingPlatform/jrcollege');  }
  const renderCreativity = () => { navigate('/OnlineTeachingPlatform/creativity');  }
  const renderUgcourse = () => { navigate('/OnlineTeachingPlatform/ugcourse');  }
  const renderCoding = () => { navigate('/OnlineTeachingPlatform/coding');  }
  const renderKids = () => { navigate('/OnlineTeachingPlatform/kids');  }

  const renderGovernment = () => { navigate('/OnlineTeachingPlatform/government');  }
 


  return (
  <>
 
  <div className='grid-container'>
  <ButtonGenerate className='grid-item ' seticons={<SchoolSharp/>} buttonText=" Institute Teaching Environment" pathto="/OnlineTeachingPlatform/instututelogin"  />
  <ButtonGenerate className='grid-item ' seticons={<ChildFriendly/>}  buttonText=" Kids Content" Getevent={renderKids} pathto= "/OnlineTeachingPlatform/kidscontent" />
  <ButtonGenerate className='grid-item ' seticons={<Book/>}  buttonText=" CLASS 1 - 10 &  Competitive Exams" Getevent={renderPrimary} pathto="/OnlineTeachingPlatform/primary"/>
  <ButtonGenerate className='grid-item ' seticons={<ImportContacts/>}  buttonText=" Class 11-12 & Competitive Exams" Getevent={renderJrcollege} pathto="/OnlineTeachingPlatform/jrcollege"/>
  <ButtonGenerate className='grid-item ' seticons={<ComputerOutlined/>}  buttonText=" CODING " Getevent={renderCoding} pathto="/OnlineTeachingPlatform/codingcontent" />
  <ButtonGenerate className='grid-item ' seticons={<SchoolOutlined/>}  buttonText="UG,PG & Competitive Exam" Getevent={renderUgcourse} pathto="/OnlineTeachingPlatform/ugpg" />
  <ButtonGenerate className='grid-item ' seticons={<ApartmentOutlined/>}  buttonText=" Government Exams" Getevent={renderGovernment} pathto="/OnlineTeachingPlatform/government" />
  <ButtonGenerate buttonText=" Creativity & Art" seticons={<DrawOutlined/>} Getevent={renderCreativity} pathto= "/OnlineTeachingPlatform/creativitycontent"  />

  
  </div>
  </>
  )
}

export default ButtonContent

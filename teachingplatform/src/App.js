import React from 'react';
import ReactDOM from 'react-dom/client';
import 'react-toastify/dist/ReactToastify.css';
import { Routes, Route } from "react-router-dom";

import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter, createBrowserRouter,
  RouterProvider
} from 'react-router-dom'

import HomePage from './Components/allmainpages/HomePage'
import StudyMaterial from './Components/allmainpages/StudyMaterial'
import MyCourses from '././Components/allmainpages/MyCourses'
import Profile from '././Components/allmainpages/Profile'
import LoginForm from './Components/Common/forms/LoginForm'
import PurchaseCourse from './Components/allmainpages/PurchaseCourse';
import RenderCreateAccount from './Components/Common/forms/RenderCreateAccount';
import PrimaryMaterial from './Components/Common/studymaterials/PrimaryMaterial';
import StudyMaterialRender from './Components/Common/studymaterials/StudyMaterialRender';
import InstituteLoginForm from './Components/Common/forms/InstituteLoginForm';
import CodingContent from './Components/Common/streams/CodingContent';
import CreativityContent from './Components/Common/streams/CreativityContent';
import Government from './Components/Common/streams/Government';
import JrCollege from './Components/Common/streams/JrCollege';
import Kidscontent from './Components/Common/streams/Kidscontent';
import UgCourses from './Components/Common/streams/UgCourse';
import Primary from './Components/Common/streams/Primary';
import StudyCreativity from './Components/Common/studymaterials/StudyCreativity';
import StudyKidsContent from './Components/Common/studymaterials/StudyKidsContent';
import StudyJrCollege from './Components/Common/studymaterials/StudyJrCollege';
import StudyPrimary from './Components/Common/studymaterials/StudyPrimary';
import StudyGovernment from './Components/Common/studymaterials/StudyGovernment';
import StudyCoding from './Components/Common/studymaterials/StudyCoding';
import StudyUgPg from './Components/Common/studymaterials/StudyUgPg';
import PurchasePrimary from './Components/Common/purchasecourse/PurchasePrimary';
import PurchaseGovernment from './Components/Common/purchasecourse/PurchaseGovernment';
import PurchaseCreativity from './Components/Common/purchasecourse/PurchaseCreativity';
import PurchaseKids from './Components/Common/purchasecourse/PuchaseKids';
import PurchaseCoding from './Components/Common/purchasecourse/PurchaseCoding';
import PurchaseJrCollege from './Components/Common/purchasecourse/PurchaseJrCollege';
import PurchaseUgPg from './Components/Common/purchasecourse/PurchaseUgPg';
import CourseVideo from './Components/Common/videoPlayers/CourseVideo';
import AllOptionGenerate from './Components/Common/flashcards/AllOptionGenerate';
import PageNotFound from './Components/Common/noncateragy/PageNotFound';
import Dashboard from './Components/Common/user/Dashboard';
import PrivateRoute from './Components/Common/routes/Private';
import ForgotPass from './Components/Common/forms/ForgotPass';
import AdminPrivateRoute from './Components/Common/routes/AdminPrivate';
import AdminDashboard from './Components/Common/Admin/AdminDashboard';
import UploadContent from './Components/Common/Admin/AdminContent/UploadContent';
import MySpace from './Components/Common/Admin/AdminContent/Myspace';
import OtherWork from './Components/Common/Admin/AdminContent/OtherWork';
import Settings from './Components/Common/Admin/AdminContent/Settings';
import UpdateContent from './Components/Common/Admin/AdminContent/UpdateContent';
import UploadMaterial from './Components/Common/Admin/AdminContent/UploadStudyMaterial';
import UsersAdmin from './Components/Common/Admin/AdminContent/UsersAdmin';
import CreateCategoryPage from './Components/Common/Admin/AdminContent/CreateCategoryPage';
import Content from './Components/Common/Admin/AdminContent/AdminContents/Content';
import DashboardTeacher from './Components/Common/TeacherManagement/DashboardTeacher';
import TeacherPrivateRoute from './Components/Common/routes/TeacherPrivateRoute';
import CreateCourse from './Components/Common/TeacherManagement/Teacher/CreateCourse';
import UploadVideo from './Components/Common/TeacherManagement/Teacher/UploadVideo';
import Notifications from './Components/Common/TeacherManagement/Teacher/Notifications';
import TeacherHome from './Components/Common/TeacherManagement/Teacher/TeacherHome';
import UploadAssignment from './Components/Common/TeacherManagement/Teacher/UploadAssignment';
import UploadStudyMaterial from './Components/Common/TeacherManagement/Teacher/UploadMaterial';


const App = () => {
  return (
    <>
    <Routes>
      <Route path="/OnlineTeachingPlatform" element={<HomePage />} />
      <Route path="*" element={<PageNotFound />} />
      <Route path="/" element={<HomePage />} />
      <Route path="/OnlineTeachingPlatform/studymaterial" element={<StudyMaterial />} />
      <Route path="/OnlineTeachingPlatform/mycourse" element={<MyCourses />} />
      <Route path="/OnlineTeachingPlatform/purchasecourse" element={<PurchaseCourse />} />
      <Route path="/OnlineTeachingPlatform/myprofile" element={<Profile />} />
      <Route path="/OnlineTeachingPlatform/createaccount" element={<RenderCreateAccount />} />
      <Route path="/OnlineTeachingPlatform/login" element={<LoginForm />} />
      <Route path="/OnlineTeachingPlatform/login/forgotpassword" element={<ForgotPass />} />
      <Route path="/OnlineTeachingPlatform/coursevideo" element={<CourseVideo />} />
      <Route path="/OnlineTeachingPlatform/instututelogin" element={<InstituteLoginForm />} />
      <Route path="/OnlineTeachingPlatform/kidscontent" element={<Kidscontent />} />
      <Route path="/OnlineTeachingPlatform/jrcollege" element={<JrCollege />} />
      <Route path="/OnlineTeachingPlatform/primary" element={<Primary />} />
      <Route path="/OnlineTeachingPlatform/ugpg" element={<UgCourses />} />
      <Route path="/OnlineTeachingPlatform/government" element={<Government />} />
      <Route path="/OnlineTeachingPlatform/codingcontent" element={<CodingContent />} />
      <Route path="/OnlineTeachingPlatform/creativitycontent" element={<CreativityContent />} />
      <Route path="/OnlineTeachingPlatform/studymaterial/studycreativity" element={<StudyCreativity />} />
      <Route path="/OnlineTeachingPlatform/studymaterial/studyjrcollege" element={<StudyJrCollege />} />
      <Route path="/OnlineTeachingPlatform/studymaterial/studyprimary" element={<StudyPrimary />} />
      <Route path="/OnlineTeachingPlatform/studymaterial/studycoding" element={<StudyCoding />} />
      <Route path="/OnlineTeachingPlatform/studymaterial/studykids" element={<StudyKidsContent />} />
      <Route path="/OnlineTeachingPlatform/studymaterial/studyugpg" element={<StudyUgPg />} />
      <Route path="/OnlineTeachingPlatform/studymaterial/studygovernment" element={<StudyGovernment />} />
      <Route path="/OnlineTeachingPlatform/purchasecourse/purchasecreativity" element={<PurchaseCreativity />} />
      <Route path="/OnlineTeachingPlatform/purchasecourse/purchasejrcollege" element={<PurchaseJrCollege />} />
      <Route path="/OnlineTeachingPlatform/purchasecourse/purchaseprimary" element={<PurchasePrimary />} />
      <Route path="/OnlineTeachingPlatform/purchasecourse/purchasecoding" element={<PurchaseCoding />} />
      <Route path="/OnlineTeachingPlatform/purchasecourse/purchasekids" element={<PurchaseKids />} />
      <Route path="/OnlineTeachingPlatform/purchasecourse/purchaseugpg" element={<PurchaseUgPg />} />
      <Route path="/OnlineTeachingPlatform/purchasecourse/purchasegovernment" element={<PurchaseGovernment />} />
      <Route path="/OnlineTeachingPlatform/mycourse/coursevideo" element={<CourseVideo />} />
      <Route path='/OnlineTeachingPlatform/mycourse/webdev' element={<AllOptionGenerate />} />
      <Route path="/OnlineTeachingPlatform/dashboard" element={<PrivateRoute />}>
        <Route path="user" element={<Dashboard/>}/>
      </Route>
   {/* for teacher */}
      <Route path="/OnlineTeachingPlatform/dashboard" element={<TeacherPrivateRoute />}>
        <Route path="teacher" element={<DashboardTeacher/>}/>
        <Route path="teacher/uploadmaterial" element={<UploadStudyMaterial/>}/>
        <Route path="teacher/uploadassignment" element={<UploadAssignment/>}/>
        <Route path="teacher/uploadvideo" element={<UploadVideo/>}/>
        <Route path="teacher/createcourse" element={<CreateCourse/>}/>
        <Route path="teacher/notifications" element={<Notifications/>}/>
        <Route path="teacher/home" element={<TeacherHome/>}/>
        
      </Route>
      <Route path="/OnlineTeachingPlatform/dashboard" element={<AdminPrivateRoute/>}>
        <Route path="admin" element={<AdminDashboard/>}/>
        <Route path="admin/uploadvideo" element={<UploadContent/>}/>
        <Route path="admin/uploadmaterial" element={<UploadMaterial/>}/>
        {/* <Route path="admin/updatecontent" element={<UpdateContent/>}/> */}
        <Route path="admin/otherwork" element={<OtherWork/>}/>
        <Route path="admin/myspace" element={<MySpace/>}/>
        <Route path="admin/mysettings" element={<Settings/>}/>
        <Route path="admin/usersadmin" element={<UsersAdmin/>}/>
        <Route path="admin/contents" element={<Content/>}/>
        <Route path="admin/createcategory" element={<CreateCategoryPage/>}/>        
        <Route path="admin/content/update/:slug" element={<UpdateContent />} />
      </Route>

      

    </Routes>

  </>

)
}

export default App



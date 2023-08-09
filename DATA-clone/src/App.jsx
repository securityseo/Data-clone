import React from 'react'
import './style.css'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import blockImg from '../public/img/image.png'
import blockImg2 from '../public/img/image2.png'

function App() {
  return (
   <div className="wrapper">
    <div className="container">
        
        <Tabs>ddwaw
  <TabList>
    <Tab>Barcha</Tab>
    <Tab>Foydali ma‘lumotlar</Tab>
    <Tab>Bitiruv kechalari</Tab>
    <Tab>Uchrashuvlar</Tab>
    <Tab>TEST</Tab>
  </TabList>

  <TabPanels>
    <TabPanel>
      <p>Barcha</p>
<div className="blocks">
    
<div className="block">
        <img src={blockImg} alt="" />
        <span>20-may, 2023</span>
        <h1>FAANG kompaniyalarga ishga kirish</h1>
        <p>Front end dasturlash kursini o‘qib o‘zingiz uchun
professilnal sohada yangi Front end dasturlash
kursini o‘qib o‘zingiz uchun</p>

      </div>
      <div className="block">
        <img src={blockImg2} alt="" />
        <span>21-may, 2023</span>
        <h1>DATA Scienceni o‘rganib uni qayerlarda
qo‘llashimiz?</h1>
        <p>Ta’lim olish jarayoningiz maroqli bo‘lishi uchun
qulayliklar yaratganmiz. Bilimni esa o‘z kasbining
ustalari beradi.</p>

      </div>
</div>
    </TabPanel>
    <TabPanel>
      <p>Foydali ma‘lumotlar</p>

      <div className="blocks">
    
    <div className="block">
            <img src={blockImg2} alt="" />
            <span>21-may, 2023</span>
            <h1>DATA Scienceni o‘rganib uni qayerlarda
qo‘llashimiz?</h1>
            <p>Ta’lim olish jarayoningiz maroqli bo‘lishi uchun
qulayliklar yaratganmiz. Bilimni esa o‘z kasbining
ustalari beradi.</p>
    
          </div>
          <div className="block">
            <img src={blockImg} alt="" />
            <span>20-may, 2023</span>
            <h1>FAANG kompaniyalarga ishga kirish</h1>
            <p>Front end dasturlash kursini o‘qib o‘zingiz uchun
    professilnal sohada yangi Front end dasturlash
    kursini o‘qib o‘zingiz uchun</p>
    
          </div>
    </div>
    </TabPanel>
    <TabPanel>
      <p>Bitiruv kechalari</p>

      <div className="blocks">
    
<div className="block">
        <img src={blockImg} alt="" />
        <span>20-may, 2023</span>
        <h1>FAANG kompaniyalarga ishga kirish</h1>
        <p>Front end dasturlash kursini o‘qib o‘zingiz uchun
professilnal sohada yangi Front end dasturlash
kursini o‘qib o‘zingiz uchun</p>

      </div>
      <div className="block">
        <img src={blockImg2} alt="" />
        <span>21-may, 2023</span>
        <h1>DATA Scienceni o‘rganib uni qayerlarda
qo‘llashimiz?</h1>
        <p>Ta’lim olish jarayoningiz maroqli bo‘lishi uchun
qulayliklar yaratganmiz. Bilimni esa o‘z kasbining
ustalari beradi.</p>

      </div>
</div>
    </TabPanel>
    <TabPanel>
      <p>Uchrashuvlar</p>

      <div className="blocks">
    
<div className="block">
        <img src={blockImg2} alt="" />
        <span>21-may, 2023</span>
        <h1>DATA Scienceni o‘rganib uni qayerlarda
qo‘llashimiz?</h1>
        <p>Ta’lim olish jarayoningiz maroqli bo‘lishi uchun
qulayliklar yaratganmiz. Bilimni esa o‘z kasbining
ustalari beradi.</p>

      </div>
      <div className="block">
        <img src={blockImg} alt="" />
        <span>20-may, 2023</span>
        <h1>FAANG kompaniyalarga ishga kirish</h1>
        <p>Front end dasturlash kursini o‘qib o‘zingiz uchun
professilnal sohada yangi Front end dasturlash
kursini o‘qib o‘zingiz uchun</p>

      </div>

  
</div>
    </TabPanel>
    <TabPanel>
      <p>TEST</p>

      <div className="blocks">
    
<div className="block">
        <img src={blockImg} alt="" />
        <span>20-may, 2023</span>
        <h1>FAANG kompaniyalarga ishga kirish</h1>
        <p>Front end dasturlash kursini o‘qib o‘zingiz uchun
professilnal sohada yangi Front end dasturlash
kursini o‘qib o‘zingiz uchun</p>

      </div>

</div>
    </TabPanel>
  </TabPanels>
</Tabs>
    </div>
   </div>
  )
}

export default App
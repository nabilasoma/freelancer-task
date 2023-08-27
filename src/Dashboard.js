
import {BsFillPeopleFill, BsChevronRight, BsFillSignRailroadFill, BsMenuButtonWide, BsSearch, BsFillQuestionCircleFill,BsCollectionFill, BsBorderAll, BsFillBasketFill, BsFillClipboardDataFill,BsFillHddFill,BsGraphUpArrow, BsFillFileEarmarkBarGraphFill, BsFillGrid3X3GapFill, BsFillHandbagFill} from "react-icons/bs";
import { VscBellDot } from "react-icons/vsc";
import { BiSolidDashboard } from "react-icons/bi";
import { MdInventory } from "react-icons/md";
import { FiSettings } from "react-icons/fi";
import { MdArrowDropDown } from "react-icons/md";
import { CiPaperplane } from "react-icons/ci";
import { RxCross1 } from "react-icons/rx";
import { useEffect, useState } from "react";



const Dashboard = () => {


   const [submenuOpen, setSubmenuOpen] = useState(true);
   const [menuOpen, subMenuOpen] = useState(false);
   const subMenu = [

    {"title": "Product"},
    {
        "title": "Variant"
    },
    {
        "title": "Batches"
    },
    {
        "title": "Price List"
    }
];
 
    return (
        <div className='border-4 border-orange-500'>
            <div className="drawer lg:drawer-open">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content flex flex-col">
    {/* Page content here */}
    <div className="navbar bg-base-100 border">
  <div className="flex-1">
    {/* search bar */}
   <input type="search" name="" placeholder="search" id="" className='px-12 py-2 bg-[#EFEBF6] rounded-lg'/>
   <span className=''><BsSearch className='-ml-64'></BsSearch></span>
  </div>
  <div className="flex-none gap-2">
   <span className='text-2xl'><BsFillQuestionCircleFill className='text-2xl'></BsFillQuestionCircleFill></span>
   <span><VscBellDot></VscBellDot></span>
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img src="https://cdn.xxl.thumbs.canstockphoto.com/small-profile-young-girl-standing-on-the-beach-looking-at-the-sand-head-shoulders-shot-of-young-stock-images_csp0704875.jpg" alt=""/>
        </div>
      </label>
    </div>
  </div>
  <small>Kaite pina</small>
</div>
{/* body start */}
        <div className='grid gird-cols-1 md:grid-cols-2 gap-6'>
        <div className='ml-6 mt-8'>
            <h2 className='font-bold text-lg'>Hi, Kaite Pina </h2>
            <small> Welcome back to Rhombus POS Dashboard</small>
        </div>
        <div className='border w-48 -mr-12 mt-8'><small>Date:Last7days(2jan 21-8jan 21)</small><MdArrowDropDown></MdArrowDropDown></div>
        </div>
        <div className='grid grid-cols-1 mx-4 md:grid-cols-2 lg:grid-cols-4 gap-2 mt-12'>
            <div className='px-6 py-4 border shadow-lg flex items-center gap-8'>
               <div className=''>
               <h1>New Sales</h1>
                <h2 className='font-bold text-lg mt-0'>$22,880.50</h2>
               </div>
               <div><BsFillHandbagFill className='text-purple-300'></BsFillHandbagFill></div>
            </div>
            <div className='px-6 py-2 bg-white border shadow-lg flex gap-8 items-center'>
                <div>
                <h1>Cost of goods sold</h1>
                <h2 className='font-bold text-lg mt-0'>Rp8,220.50</h2>
                </div>
                <div><BsFillHddFill className='text-red-400'></BsFillHddFill></div>
            </div>
            <div className='px-6 py-2 bg-white border shadow-lg flex gap-8 items-center'>
                <div>
                <h1>Gross Profit</h1>
                <h2 className='font-bold text-lg mt-0'>Rp22,880.50</h2>
                </div>
                <div><BsGraphUpArrow className='text-blue-400'></BsGraphUpArrow></div>
            </div>
            <div className='px-6 py-2 bg-white border shadow-lg flex gap-6 items-center'>
                <div>
                <h1>Quantity</h1>
                <h2 className='font-bold text-lg mt-0'>56</h2>
                </div>
                <div><CiPaperplane className='text-xl text-yellow-400'></CiPaperplane></div>
            </div>
        </div>
  {/* body end */}
    {/* <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label> */}
        {/* drawer  */}
  </div> 
  <div className="drawer-side border">
    <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
    
    <ul className="menu p-4 w-80 min-h-full bg-white text-base-content">
    <div className='flex items-center ml-8 gap-6'>
       <span className='text-xl'><BsMenuButtonWide className='text-slate-600 absolute -mt-2 font-bold cursor-pointer'></BsMenuButtonWide></span>
       <span className='text-xl ml-2'><BsFillSignRailroadFill></BsFillSignRailroadFill></span>
       <h2 className='text-xl font-bold overflow-hidden'>Rhombus</h2>
       <span><RxCross1 className='lg:hidden'></RxCross1></span>
      </div>
      {/* Sidebar content here */}
      <div className='mt-12 ml-8 flex gap-4 items-center bg-[#EFEBF6] w-48 rounded py-2'>
        <span className='font-bold text-2xl text-purple-700'><BiSolidDashboard></BiSolidDashboard></span>
        <h2 className='font-bold'>Dashboard</h2>
        </div>

       <div>
       <div className='mt-2 ml-8 flex gap-4 items-center w-48 rounded py-2 '>
        <span className='font-bold text-2xl'><MdInventory></MdInventory></span>
        <h2 className="font-bold">Inventory</h2>
        <span className='ml-12'><BsChevronRight onClick={()=> setSubmenuOpen(!submenuOpen)} className='cursor-pointer'></BsChevronRight></span>
        </div>
        <ul className=''>
            {subMenu.map((subMenu, index) => (
                <>
                    <li key={index} className={`flex rounded-md ml-8 cursor-pointer mt-2 item-center ${subMenu.gap? 'mt-3' : 'mt-2'}`}>
                        <span>{subMenu.title}</span>
                        {subMenu && (
                            <BsChevronRight onClick={()=>setSubmenuOpen(!subMenuOpen)} className={`${subMenu && 'rotate-180'}`}></BsChevronRight>
                        )}
                    </li>
                </>
            ))}
        </ul>
       </div>
        

        <div className='mt-2 ml-8 flex gap-4 items-center w-48 rounded py-2'>
        <span className='font-bold text-2xl'><BsFillPeopleFill></BsFillPeopleFill></span>
        <h2 className='font-bold'>Relationship</h2>
        <span className='ml-8'><BsChevronRight></BsChevronRight></span>
        </div>

        <div className='mt-2 ml-8 flex gap-4 items-center w-48 rounded py-2'>
        <span className='font-bold text-xl'><BsBorderAll></BsBorderAll></span>
        <h2 className='font-bold'>Sales orders</h2>
        <span className='ml-10'><BsChevronRight></BsChevronRight></span>
        </div>

        <div className='mt-2 ml-8 flex gap-4 items-center w-48 rounded py-2'>
        <span className='font-bold text-xl'><BsFillBasketFill></BsFillBasketFill></span>
        <h2 className='font-bold'>Stock Control</h2>
        <span className='ml-7'><BsChevronRight></BsChevronRight></span>
        </div>

        <div className='mt-2 ml-8 flex gap-4 items-center w-48 rounded py-2'>
        <span className='font-bold text-xl'><BsCollectionFill></BsCollectionFill></span>
        <h2 className='font-bold'>B2B Ecommerce</h2>
        </div>

        <div className='mt-2 ml-8 flex gap-4 items-center w-48 rounded py-2'>
        <span className='font-bold text-xl'><BsFillClipboardDataFill></BsFillClipboardDataFill></span>
        <h2 className='font-bold'>Reporting</h2>
        </div>

        <div className='mt-2 ml-8 flex gap-4 items-center w-48 rounded py-2'>
        <span className='font-bold text-xl'><BsFillFileEarmarkBarGraphFill></BsFillFileEarmarkBarGraphFill></span>
        <h2 className='font-bold'>Intelligence</h2>
        <span className='ml-8'><BsChevronRight></BsChevronRight></span>
        </div>

        <div className='mt-2 ml-8 flex gap-4 items-center w-48 rounded py-2'>
        <span className='font-bold text-xl'><BsFillGrid3X3GapFill></BsFillGrid3X3GapFill></span>
        <h2 className='font-bold'>Browse Apps</h2>
        </div>

        <div className='mt-2 ml-8 flex gap-4 items-center w-48 rounded py-2'>
        <span className='font-bold text-xl'><FiSettings></FiSettings></span>
        <h2 className='font-bold'>Settings</h2>
        </div>

        <div className='ml-8 flex gap-4 items-center w-48 rounded py-2 mt-16'>
        <h2><span className='font-bold'>Rhombus</span> UI Kit<br/>Want to get more info<br/>about Rhombus?<u>Contact Us</u></h2>
        </div>
    </ul>
  
  </div>
</div>
        </div>
    );
};

export default Dashboard;
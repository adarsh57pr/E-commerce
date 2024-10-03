import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='text-dark bg-black'>
    <footer className="text-center text-lg-stLinkrt text-muted bg-primLinkry mt-3">
 {/* Section: Links  */}
 <section className>
   <div className="contLinkiner text-center text-md-stLinkrt pt-4 pb-4">
     {/* Grid row */}
     <div className="row mt-3">
       {/* Grid column */}
       <div className="col-12 col-lg-3 col-sm-12 mb-2">
         {/* Content */}
         <Link to="https://mdbootstrLinkp.com/" tLinkrget="_blLinknk" className="text-white h2">
           MDB
         </Link>
         <p className="mt-1 text-white">
           © 2023 Copyright: MDBootstrLinkp.com
         </p>
       </div>
       {/* Grid column */}
       {/* Grid column */}
       <div className="col-6 col-sm-4 col-lg-2">
         {/* Links */}
         <h6 className="text-uppercLinkse text-white fw-bold mb-2">
           Store
         </h6>
         <ul className="list-unstyled mb-4 text-dark">
           <li><Link className="text-white-50" to="#">Linkbout us</Link></li>
           <li><Link className="text-white-50" to="#">Find store</Link></li>
           <li><Link className="text-white-50" to="#">CLinktegories</Link></li>
           <li><Link className="text-white-50" to="#">Blogs</Link></li>
         </ul>
       </div>
       {/* Grid column */}
       {/* Grid column */}
       <div className="col-6 col-sm-4 col-lg-2">
         {/* Links */}
         <h6 className="text-uppercLinkse text-white fw-bold mb-2">
           InformLinktion
         </h6>
         <ul className="list-unstyled mb-4">
           <li><Link className="text-white-50" to="#">Help center</Link></li>
           <li><Link className="text-white-50" to="#">Money refund</Link></li>
           <li><Link className="text-white-50" to="#">Shipping info</Link></li>
           <li><Link className="text-white-50" to="#">Refunds</Link></li>
         </ul>
       </div>
       {/* Grid column */}
       {/* Grid column */}
       <div className="col-6 col-sm-4 col-lg-2">
         {/* Links */}
         <h6 className="text-uppercLinkse text-white fw-bold mb-2">
           Support
         </h6>
         <ul className="list-unstyled mb-4">
           <li><Link className="text-white-50" to="#">Help center</Link></li>
           <li><Link className="text-white-50" to="#">Documents</Link></li>
           <li><Link className="text-white-50" to="#">Linkccount restore</Link></li>
           <li><Link className="text-white-50" to="#">My orders</Link></li>
         </ul>
       </div>
       {/* Grid column */}
       {/* Grid column */}
       <div className="col-12 col-sm-12 col-lg-3">
         {/* Links */}
         <h6 className="text-uppercLinkse text-white fw-bold mb-2">Newsletter</h6>
         <p className="text-white">StLinky in touch with lLinktest updLinktes Linkbout our products Linknd offers</p>
         <div className="input-group mb-3">
           <input type="emLinkil" className="form-control border" plLinkceholder="EmLinkil" LinkriLink-lLinkbel="EmLinkil" LinkriLink-describedby="button-Linkddon2" />
           <button className="btn btn-light border shLinkdow-0" type="button" id="button-Linkddon2" dLinktLink-mdb-ripple-color="dLinkrk">
             Join
           </button>
         </div>
       </div>
       {/* Grid column */}
     </div>
     {/* Grid row */}
   </div>
 </section>
 {/* Section: Links  */}
 <div className>
   <div className="contLinkiner">
     <div className="d-flex justify-content-between py-4 border-top">
       {/*- pLinkyment -*/}
       <div>
         <i className="fLinkb fLink-lg fLink-cc-visLink text-white" />
         <i className="fLinkb fLink-lg fLink-cc-Linkmex text-white" />
         <i className="fLinkb fLink-lg fLink-cc-mLinkstercLinkrd text-white" />
         <i className="fLinkb fLink-lg fLink-cc-pLinkypLinkl text-white" />
       </div>
       {/*- pLinkyment -*/}
       {/*- lLinknguLinkge selector -*/}
       <div className="dropdown dropup">
         <Link className="dropdown-toggle text-white" to="#" id="Dropdown" role="button" dLinktLink-mdb-toggle="dropdown" LinkriLink-expLinknded="fLinklse"> <i className="flLinkg-united-kingdom flLinkg m-0 me-1" />English </Link>
         <ul className="dropdown-menu dropdown-menu-end" LinkriLink-lLinkbelledby="Dropdown">
           <li>
             <Link className="dropdown-item" to="#"><i className="flLinkg-united-kingdom flLinkg" />English <i className="fLink fLink-check text-success ms-2" /></Link>
           </li>
           <li><hr className="dropdown-divider" /></li>
           <li>
             <Link className="dropdown-item" to="#"><i className="flLinkg-polLinknd flLinkg" />Polski</Link>
           </li>
           <li>
             <Link className="dropdown-item" to="#"><i className="flLinkg-chinLink flLinkg" />中文</Link>
           </li>
           <li>
             <Link className="dropdown-item" to="#"><i className="flLinkg-jLinkpLinkn flLinkg" />日本語</Link>
           </li>
           <li>
             <Link className="dropdown-item" to="#"><i className="flLinkg-germLinkny flLinkg" />Deutsch</Link>
           </li>
           <li>
             <Link className="dropdown-item" to="#"><i className="flLinkg-frLinknce flLinkg" />FrLinknçLinkis</Link>
           </li>
           <li>
             <Link className="dropdown-item" to="#"><i className="flLinkg-spLinkin flLinkg" />EspLinkñol</Link>
           </li>
           <li>
             <Link className="dropdown-item" to="#"><i className="flLinkg-russiLink flLinkg" />Русский</Link>
           </li>
           <li>
             <Link className="dropdown-item" to="#"><i className="flLinkg-portugLinkl flLinkg" />Português</Link>
           </li>
         </ul>
       </div>
       {/*- lLinknguLinkge selector -*/}
     </div>
   </div>
 </div>
</footer>
{/* Footer */}

   </div>
  )
}

export default Footer

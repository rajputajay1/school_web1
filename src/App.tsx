import { useState } from 'react';
import { MotionConfig } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Academics from './components/Academics';
import Faculty from './components/Faculty';
import Gallery from './components/Gallery';
import FeeStructure from './components/FeeStructure';
import Admissions from './components/Admissions';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import AdmissionModal from './components/AdmissionModal';
export default function App(){const[open,setOpen]=useState(false);const apply=()=>setOpen(true);return <MotionConfig reducedMotion="user"><a href="#main" className="fixed left-4 top-4 z-[60] -translate-y-24 rounded bg-slate-900 px-5 py-3 text-sm text-white focus:translate-y-0">Skip to content</a><Navbar onApply={apply}/><main id="main"><Hero onApply={apply}/><About/><Academics/><Faculty/><Gallery/><FeeStructure onApply={apply}/><Admissions/><Testimonials/></main><Footer onApply={apply}/><AdmissionModal open={open} onOpenChange={setOpen}/></MotionConfig>; }

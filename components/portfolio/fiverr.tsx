"use client";

import { useState } from "react";
import { ArrowUpRight, Bug, Check, Globe, ImageOff } from "lucide-react";

export const FIVERR_PROFILE = "https://www.fiverr.com/mujahid_zareen";
export const FIVERR_QA_GIG = "https://www.fiverr.com/mujahid_zareen/manually-test-your-website-or-mobile-app-and-report-detailed-bugs-d2b8";

// Verified Fiverr artwork and portfolio entries. Replace these URLs with approved
// local images if desired; descriptions do not imply unverified QA responsibilities.
const artwork = {
  qa: "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/506693372/original/fe6dd9eeef314b5cc185b39b1dfb9cc3a314d5b6/manually-test-your-website-or-mobile-app-and-report-detailed-bugs-d2b8.png",
  projects: [
    {
      name: "ISK Developments",
      category: "REAL ESTATE WEBSITE",
      description: "A property website from my website design portfolio, connecting real estate listings with a clear digital presence.",
      image: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/project_item/attachment/54c14676baa6dfdd441a55d4c3d12b1c-1744927685072/Picture1isk.jpg",
      alt: "ISK Developments real estate website, from Mujahid’s Fiverr portfolio",
      width: 936,
      height: 536,
    },
    {
      name: "AuditionMe",
      category: "MUSIC COLLABORATION PLATFORM",
      description: "A platform for songwriters and musicians to connect, share projects, audition, and collaborate. Featured in my Fiverr development portfolio.",
      image: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/project_item/attachment/5edb29aacb4874f512b657d5e3726c0f-1759697350448/aud1.png",
      alt: "AuditionMe music collaboration website, from Mujahid’s Fiverr portfolio",
      width: 1884,
      height: 826,
    },
  ],
};

function PortfolioImage({ src, alt, width, height }: { src: string; alt: string; width: number; height: number }) {
  const [failed, setFailed] = useState(false);
  return failed ? <div className="fiverr-image-fallback"><ImageOff size={26}/><span>Preview unavailable</span><small>View the original on Fiverr using the link below.</small></div> : <img src={src} alt={alt} width={width} height={height} loading="lazy" decoding="async" referrerPolicy="no-referrer" onError={() => setFailed(true)}/>;
}

export default function FiverrWork() {
  return <section id="fiverr" className="section fiverr-section" aria-labelledby="fiverr-heading">
    <div className="container">
      <div className="section-heading reveal">
        <div><p className="eyebrow">FREELANCE / ON FIVERR</p><h2 id="fiverr-heading">Your next project.<br/><span>My attention to detail.</span></h2></div>
        <div className="fiverr-heading-note"><p>Explore my QA service and a selection of website work from my Fiverr portfolio.</p><a href={FIVERR_PROFILE} target="_blank" rel="noopener noreferrer" className="text-link">View my Fiverr profile <ArrowUpRight size={17}/><span className="sr-only"> (opens in a new tab)</span></a></div>
      </div>

      <article className="fiverr-gig reveal">
        <div className="fiverr-gig-art"><PortfolioImage src={artwork.qa} alt="Mujahid Zareen’s manual website and mobile app testing gig artwork on Fiverr" width={680} height={408}/><span className="fiverr-art-caption">FIVERR GIG ARTWORK / ILLUSTRATIVE INTERFACES</span></div>
        <div className="fiverr-gig-copy"><p className="eyebrow"><Bug size={16}/> SOFTWARE QUALITY ASSURANCE</p><h3>A fresh pair of eyes.<br/>Actionable bug reports.</h3><p>I manually test websites and mobile apps, checking functionality and UI/UX and documenting defects with clear reproduction steps, expected results, and supporting evidence.</p><ul>{["Website & mobile app testing", "Functional & UI/UX checks", "Clear, reproducible bug reports"].map(item=><li key={item}><Check size={16}/>{item}</li>)}</ul><a href={FIVERR_QA_GIG} target="_blank" rel="noopener noreferrer" className="button primary">View My SQA Gig <ArrowUpRight size={18}/><span className="sr-only"> (opens in a new tab)</span></a><span className="fiverr-order-note">Discuss scope and order securely through Fiverr.</span></div>
      </article>

      <div className="fiverr-portfolio-title reveal"><div><Globe size={19}/><h3>From my development portfolio</h3></div><p>Original images from my Fiverr portfolio</p></div>
      <div className="fiverr-portfolio-grid">{artwork.projects.map(project=><article className="fiverr-project reveal" key={project.name}><div className="fiverr-browser-bar" aria-hidden="true"><span><i/><i/><i/></span><span>{project.name.toLowerCase()} / preview</span><ArrowUpRight size={13}/></div><div className="fiverr-project-image"><PortfolioImage src={project.image} alt={project.alt} width={project.width} height={project.height}/></div><div className="fiverr-project-copy"><p className="eyebrow">{project.category}</p><h4>{project.name}</h4><p>{project.description}</p><a href={FIVERR_PROFILE} target="_blank" rel="noopener noreferrer" className="text-link" aria-label={`Explore ${project.name} in my Fiverr portfolio (opens in a new tab)`}>Explore on my Fiverr profile <ArrowUpRight size={17}/></a></div></article>)}</div>
    </div>
  </section>;
}

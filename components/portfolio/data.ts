// Edit project copy and replace the illustrative preview component here as real assets become available.
export const projects = [
  {
    id: "cli",
    name: "CLI Mobile Modernization",
    category: "Mobile & warehouse",
    label: "Warehouse & Mobile QA",
    number: "01",
    tags: ["Blazor / MAUI", "CK65", "Barcode Testing", "Regression"],
    summary: "End-to-end validation of a Blazor mobile client against its MAUI baseline on Honeywell CK65 devices, covering warehouse workflows and barcode scanning.",
    platform: "An industrial warehouse and logistics platform with web configuration and mobile workflows for Receiving, Inventory, Shipping, Sequence, and Utilities.",
    responsibilities: "Manual functional, smoke, and regression testing on Honeywell CK65 devices; Blazor-versus-MAUI behavior and UI validation; 1D/2D barcode and supplier-label checks; reproducible Jira defect reporting, fix verification, and retesting.",
    approach: "Compare the same workflows in Blazor and MAUI, including planned and adhoc receiving, quantity calculations, inventory moves, container transfers, physical counts, and sequence picking. Exercise facility settings, barcode inputs, session behavior, navigation, and input focus; document expected versus actual behavior with reproducible steps and evidence, then retest fixes.",
    tools: "Honeywell CK65 · Blazor client · MAUI baseline · Jira · 1D/2D barcodes · Facility configuration",
  },
  { id: "finafy", name: "Finafy", category: "Manual & functional", label: "Fintech QA", number: "02", tags: ["Manual Testing", "Regression", "Fintech", "Jira"], summary: "Functional and regression testing across Dev and UAT environments for financial modules.", platform: "A fintech platform with financial modules, tested across Dev and UAT environments.", responsibilities: "Functional and regression testing, defect reporting, and validation across the development and user acceptance environments.", approach: "Check financial module workflows against requirements, document reproducible defects, and retest changes through regression testing.", tools: "Jira · Test cases · Dev and UAT environments" },
  { id: "asap", name: "ASAP CMS", category: "Manual & functional", label: "CMS Builder QA", number: "03", tags: ["CMS", "UI/UX Validation", "Functional Testing"], summary: "UI/UX and functional audits to validate dynamic CMS builder stability in the Dev environment.", platform: "A dynamic CMS builder in the Dev environment.", responsibilities: "UI/UX validation and functional audits of the builder experience.", approach: "Review dynamic builder interactions, validate interface behavior, and document functional and usability issues for reproducible follow-up.", tools: "Functional test cases · UI/UX audits · Dev environment" },
  { id: "iw360", name: "Industrial World 360", category: "Performance", label: "Performance Testing", number: "04", tags: ["JMeter", "Performance", "Data-driven Testing"], summary: "Load, stress, spike, and soak testing with CSV datasets for concurrent-user and search scenarios.", platform: "An industrial e-commerce platform with concurrent-user and search workflows.", responsibilities: "Performance testing with Apache JMeter and CSV-driven datasets.", approach: "Exercise load, stress, spike, and soak scenarios with realistic search data and concurrent-user activity.", tools: "Apache JMeter · CSV datasets · Performance test scenarios" },
  { id: "industrials", name: "Industrials Unlimited", category: "Performance", label: "Performance Testing", number: "05", tags: ["E-commerce", "JMeter", "Performance Testing"], summary: "Performance testing for an industrial e-commerce platform using realistic user and search scenarios.", platform: "An industrial e-commerce platform.", responsibilities: "Performance testing based on realistic user activity and search workflows.", approach: "Build JMeter scenarios around user and search behavior to examine the platform under simulated demand.", tools: "Apache JMeter · User and search scenarios" },
];
export const skillGroups = [
  { name: "Quality assurance", note: "From requirements to release", icon: "qa", skills: ["Manual Testing", "Functional Testing", "Regression Testing", "UI/UX Validation", "Cross-browser Testing", "WordPress Testing", "STLC", "SDLC"] },
  { name: "Performance", note: "Realistic scenarios. Meaningful tests.", icon: "performance", skills: ["Apache JMeter", "Load Testing", "Stress Testing", "Spike Testing", "Soak Testing", "CSV-driven test scenarios"] },
  { name: "API & defect management", note: "Clear signals for engineering teams", icon: "api", skills: ["Postman", "Jira", "Bug Life Cycle", "Test Plans", "Bug Reporting"] },
  { name: "Development background", note: "Understanding what’s under the hood", icon: "dev", skills: ["WordPress", "Elementor", "WP Bakery"] },
];
export const experiences = [
  { role: "SQA Engineer", company: "Tkxel", date: "January 1, 2026–June 6, 2026", location: "Lahore", text: "Manual and performance testing, Jira defect management, test plans, reproducible bug reports, and testing across Dev and UAT.", tag: "Quality engineering" },
  { role: "Client Relation Analyst", company: "Duseca Software & Infiniti", date: "October 2024–December 2025", location: "Islamabad", text: "Requirements gathering, communication with clients in the USA, UK, and Europe, engineering coordination, and initial UAT checks.", tag: "Connecting business & engineering" },
  { role: "WordPress Designer / Developer", company: "S. Software/Ecomesteam", date: "August 2023–July 2024", location: "Mirpur, AJK", text: "Responsive website development using Elementor and WP Bakery, cross-browser testing, and UI validation.", tag: "Development foundations" },
];
export const credentials = [
  ["Managing Agile Scrum Projects with JIRA", "10Pearls University", "February 2026"],
  ["Introduction to API Testing with Postman", "10Pearls University", "February 2026"],
  ["QA Fundamentals", "10Pearls University", "January 2026"],
  ["Front-end Developer Certification", "Coursera", ""],
  ["Web Developer Certification", "Moboroid Software House", ""],
  ["Innovative Ideas Winner, Engineering Category", "Pakistan Nuclear Society", ""],
];

export type Design = {
  title: string;
  slug: string;
  cover: string;
  category: string;
  year: string;
  subtitle?: string;
  gallery: { src: string; caption: string }[];
  specs: { label: string; value: string }[];
};

export const designs: Design[] = [
  {
    title: "TV Holder",
    slug: "clamp-bracket",
    category: "Mechanical",
    year: "2024",
    subtitle: "Wall-mounted TV holder",
    cover: "/designs/clamp-bracket/cover.png",
    gallery: [
      { src: "/designs/clamp-bracket/01.png", caption: "" },
      { src: "/designs/clamp-bracket/02.png", caption: "" },
      { src: "/designs/clamp-bracket/03.png", caption: "" },
      { src: "/designs/clamp-bracket/04.png", caption: "" },
      ],
    specs: [
      { label: "Software", value: "SolidWorks" },
      { label: "Material", value: "Aluminium 6061" },
    ],
  },

  {
    title: "Greenhouse Module",
    slug: "greenhouse-energy-module",
    category: "Sustainable Systems",
    year: "2024",
    subtitle: "Concept greenhouse integrating underground thermal exchange and passive ventilation.",
    cover: "/designs/greenhouse-energy-module/cover.png",
    gallery: [
      { src: "/designs/greenhouse-energy-module/01.png", caption: "" },
      { src: "/designs/greenhouse-energy-module/02.png", caption: "" },
    ],
    specs: [
      { label: "Type", value: "Concept design" },
      { label: "Focus", value: "Energy efficiency & passive climate control" },
      { label: "System", value: "Underground heat exchange + natural ventilation" },
      { label: "Status", value: "Design exploration" },
    ],
  },
  
  {
  title: "Canary Islands Tram System",
  slug: "canary-islands-tram-system",
  category: "Transport Design",
  year: "2025",
  subtitle: "Concept tram corridor design for the Canary Islands, focusing on low-impact mobility and visitor flow.",
  cover: "/designs/canary-islands-tram-system/cover.png",

  gallery: [
    { src: "/designs/canary-islands-tram-system/0.1.png", caption: "Figure 01" },
    { src: "/designs/canary-islands-tram-system/0.2.png", caption: "Figure 02" },
    { src: "/designs/canary-islands-tram-system/0.3.png", caption: "Figure 03" },
    { src: "/designs/canary-islands-tram-system/0.4.png", caption: "Figure 04" },
    { src: "/designs/canary-islands-tram-system/0.5.png", caption: "Figure 05" },
    { src: "/designs/canary-islands-tram-system/0.6.png", caption: "Figure 06" },
    { src: "/designs/canary-islands-tram-system/0.7.png", caption: "Figure 07" },
    { src: "/designs/canary-islands-tram-system/0.8.png", caption: "Figure 08" },
    { src: "/designs/canary-islands-tram-system/0.9.png", caption: "Figure 09" },
    { src: "/designs/canary-islands-tram-system/cover.png", caption: "Figure 10" },
  ],

  specs: [
    { label: "Scope", value: "Concept system design" },
    { label: "Focus", value: "Low-impact mobility, operations, user flow" },
    { label: "Deliverables", value: "Route, stations, system overview" },
  ],
},

{
  slug: "robot_projectt",
  title: "Telepresence Robot",
  cover: "/designs/robot_projectt/cover.jpg",
  gallery: [
    { src: "/designs/robot_projectt/11.png", caption: "Figure 01" },
    { src: "/designs/robot_projectt/12.png", caption: "Figure 02" },
    { src: "/designs/robot_projectt/13.png", caption: "Figure 03" },
    { src: "/designs/robot_projectt/14.png", caption: "Figure 04" },
    { src: "/designs/robot_projectt/15.png", caption: "Figure 05" },
    { src: "/designs/robot_projectt/16.png", caption: "Figure 06" },
    { src: "/designs/robot_projectt/17.png", caption: "Figure 07" },
    { src: "/designs/robot_projectt/18.jpg", caption: "Figure 08" },
    { src: "/designs/robot_projectt/19.jpg", caption: "Figure 09" },
    { src: "/designs/robot_projectt/01.jpg", caption: "Figure 10" },
    { src: "/designs/robot_projectt/02.jpg", caption: "Figure 11" },
    { src: "/designs/robot_projectt/03.jpg", caption: "Figure 12" },
    { src: "/designs/robot_projectt/04.jpg", caption: "Figure 13" },
    { src: "/designs/robot_projectt/05.jpg", caption: "Figure 14" },
    { src: "/designs/robot_projectt/06.jpg", caption: "Figure 15" }, 
    { src: "/designs/robot_projectt/07.jpg", caption: "Figure 16" }, 
    { src: "/designs/robot_projectt/08.jpg", caption: "Figure 17" },
    { src: "/designs/robot_projectt/09.jpg", caption: "Figure 18" },
    { src: "/designs/robot_projectt/cover.png", caption: "Figure 19" },  
  ],

  category: "Robotic",
  year: "2024",
  subtitle: "Telepresence Robot Project (Group)",
  specs: [
    { label: "Scope", value: "Development of a telepresence robot enabling remote physical interaction in healthcare and institutional environments through an integrated mobility and communication platform" },
    { label: "Focus", value: "Emphasis on modular chassis architecture, structural stability, weight distribution, and ergonomic human–robot interaction." },
    { label: "Deliverables", value: "Complete 3D CAD assembly, detailed technical drawings, exploded views, and high-quality rendered visualizations." },
  ]
},
  {
    title: "Pen",
    slug: "pen_design",
    category: "Regular Things",
    year: "2023",
    subtitle: "Regular item design",
    cover: "/designs/pen_design/cover.png",
    gallery: [
      { src: "/designs/pen_design/02.png", caption: "" },
      { src: "/designs/pen_design/cover.png", caption: "" },
    ],
    specs: [
    ],
  },
  {
    title: "Couch Design",
    slug: "couch_design",
    category: "Regular Things",
    year: "2023",
    subtitle: "Regular item design",
    cover: "/designs/couch_design/cover.png",
    gallery: [
      { src: "/designs/couch_design/02.png", caption: "" },
      { src: "/designs/couch_design/cover.png", caption: "" },
    ],
    specs: [
    ],
  },
];

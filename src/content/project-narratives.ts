import type { Design } from "./designs";

// Project-specific narratives use supplied descriptions and visible design features.
export const projectNarratives: Record<string, Partial<Design>> = {
  "clamp-bracket": {
    overview: "A wall-mounted TV holder exploring how a compact mechanical assembly can support a screen while maintaining a clear connection between the wall interface and the display. The project brings together CAD modelling, assembly definition and technical communication.",
    challenge: "The central engineering question is how to transfer the screen load through the support structure and into its fixings. Access for assembly, component clearances and the relationship between stiffness and material use are key design considerations.",
    approach: "The design is documented in SolidWorks through component and assembly views. Aluminium 6061 is the material specified in the project, giving the structural geometry and connection details a clear material context for further evaluation.",
    outcome: "The project presents a defined support assembly with CAD drawings and analysis visuals. It provides a basis for reviewing the mounting arrangement and planning load verification against a specified screen mass and wall construction.",
    tools: ["SolidWorks", "Mechanical assembly design", "Technical drawings"]
  },
  "greenhouse-energy-module": {
    overview: "A greenhouse concept that combines underground thermal exchange with passive ventilation. The project considers the growing enclosure and its environmental systems together, with energy efficiency as the organising design objective.",
    challenge: "The design must connect air movement, thermal exchange and the enclosure layout into a coherent system. Seasonal conditions, airflow resistance and the relationship between buried infrastructure and the occupied space shape the engineering problem.",
    approach: "The concept links an underground heat-exchange path with natural ventilation through the greenhouse. System views communicate the arrangement of these elements and the intended relationship between ground-coupled temperature moderation and enclosure airflow.",
    outcome: "The result is a system-level design exploration with a defined passive climate-control strategy. It establishes a configuration for subsequent assessment of thermal performance and ventilation under specified local conditions.",
    tools: ["Sustainable system design", "Passive ventilation concepts", "System visualisation"]
  },
  "canary-islands-tram-system": {
    overview: "A concept tram corridor for the Canary Islands, addressing low-impact mobility and visitor movement. The project treats the route, stations and operating logic as connected parts of a transport system.",
    challenge: "A useful corridor must relate travel demand to the places it serves while keeping passenger movement legible. Route coverage, station access and visitor flow are therefore considered alongside the physical transport infrastructure.",
    approach: "The proposal is communicated through route strategy, station concepts and system diagrams. These views connect the spatial design of the corridor with the movement of passengers and the intended operation of the service.",
    outcome: "The project provides a coordinated concept for the route, stations and overall system. It forms a basis for discussing transport priorities and for developing more detailed capacity, timetable and infrastructure requirements.",
    tools: ["Transport system design", "Route planning", "Station concept development"]
  },
  "robot_projectt": {
    overview: "A group project developing a telepresence robot for remote physical interaction in healthcare and institutional settings. The design integrates a mobility platform with the structural requirements of a communication system.",
    challenge: "The mechanical platform must accommodate its components while managing stability, weight distribution and access for assembly. The form also needs to support a clear and approachable human–robot interaction.",
    approach: "The group project develops a modular chassis architecture and communicates the assembly through 3D CAD, technical drawings, exploded views and rendered studies. The design documentation considers structural layout, component selection and the relationship between the mobile base and upper assembly.",
    outcome: "The documented outcome is a complete CAD assembly supported by drawings and visualisations. These communicate the robot's component arrangement and provide a shared reference for design review within the group project.",
    tools: ["Group design development", "3D CAD assembly", "Exploded views", "Technical drawings"]
  },
  "pen_design": {
    category: "Product Design",
    subtitle: "An everyday writing instrument explored through CAD form and proportion.",
    overview: "A pen design study focused on the form of a familiar everyday object. Its compact scale provides an opportunity to consider how proportion, visual continuity and contact surfaces work together in a handheld product.",
    challenge: "The design task is to establish a coherent silhouette while considering how the object would be held and controlled. Small changes in profile can affect both the visual character and the intended grip experience.",
    approach: "The CAD study uses multiple views to communicate the pen's geometry and overall proportions. The emphasis is on a consistent product form that can be reviewed from both a visual and a handling perspective.",
    outcome: "The result is a visual and geometric definition of the pen concept. It captures the exterior design for further development of grip dimensions, internal mechanism and assembly details.",
    tools: ["3D modelling", "Product proportion studies", "Design visualisation"]
  },
  "couch_design": {
    category: "Furniture Design",
    subtitle: "A seating concept exploring furniture proportions and visual form.",
    overview: "A couch design study examining the relationship between seating volume, overall proportions and the visual character of a domestic furniture piece. The project uses CAD to make the proposed form tangible and reviewable.",
    challenge: "A seating concept must balance an inviting appearance with a clear arrangement of the seat, back and supporting form. These relationships establish the starting point for later ergonomic and construction development.",
    approach: "The model communicates the couch through complementary views, allowing the silhouette and the relationship between its main volumes to be compared. This supports a focused review of form and proportion before specifying the internal construction.",
    outcome: "The project produces a defined furniture concept and visual presentation. The geometry offers a basis for progressing into seat dimensions, material choices and structural detailing.",
    tools: ["Furniture concept design", "3D modelling", "Design visualisation"]
  },
  "shop_project": {
    category: "Furniture Design",
    subtitle: "Shop shelving developed in collaboration with a carpenter to communicate customer requirements.",
    overview: "A shop shelving project developed to translate customer requirements into a clear design reference for a carpenter. The intended application is dry-stock display and storage, combining spatial organisation with practical communication.",
    challenge: "The key task is to communicate the required shelf arrangement and proportions precisely enough for a productive discussion between the customer and maker. Product access, usable storage and the available shop space guide the layout.",
    approach: "The design is presented through CAD views and drawing-based information that make the shelf configuration visible. Collaboration with the carpenter connects the customer's intended use with the practical interpretation of the design.",
    outcome: "The project delivers a visual design document for customer and carpenter review. It provides a shared reference for agreeing the layout and resolving construction details before manufacture.",
    specs: [
      { label: "Application", value: "Dry-stock display and storage" },
      { label: "Collaboration", value: "Customer and carpenter" },
      { label: "Deliverable", value: "CAD-based shelving design documentation" }
    ],
    tools: ["Requirements communication", "CAD visualisation", "Design-for-making collaboration"]
  },
  "churchill": {
    overview: "Churchill is a cat food bowl designed as a compact everyday feeding product. The model combines a recessed feeding area with a broad, rounded outer form and raised lettering that gives the object a distinct identity.",
    challenge: "The design balances access to the food with the proportions of the supporting base. Bowl depth, rim geometry and surfaces that can be cleaned are central considerations for turning the form into a practical pet product.",
    approach: "The geometry brings the feeding recess and outer base into one continuous body. Perspective views communicate the rounded profile, while a dimensioned model sheet records the overall envelope for discussion of size and use.",
    outcome: "The result is a defined bowl geometry with a coordinated visual and dimensional presentation. The model provides a basis for selecting an appropriate food-contact material and evaluating feeding access, cleanability and stability in a physical sample.",
    tools: ["Product form development", "3D modelling", "Dimensional documentation"]
  },
  "button-2": {
    overview: "A button developed for the textile market, using a hexagonal outline and a recessed face to give a small garment component a clear geometric identity. Two holes provide the visible attachment interface.",
    challenge: "The design needs to balance a distinctive appearance with its role as a sewn garment component. Edge profile, overall thickness and the relationship between the holes and surrounding material are important aspects of this balance.",
    approach: "The model defines the outer profile, inset face and two-hole arrangement as a compact, repeatable form. Multiple views communicate these features so that the surface treatment and attachment geometry can be reviewed together.",
    outcome: "The project establishes the button's geometry and visual language for textile applications. It provides a reference for subsequent material, finish and manufacturing decisions, with attachment and handling to be checked against the intended garment.",
    tools: ["Textile accessory design", "3D modelling", "Detail development"]
  },
  "eagle-3d": {
    overview: "An eagle-inspired storage container from the Animal concept collection. The design combines a cylindrical storage body with feather-like surface texture and an eagle-themed lid, connecting practical storage with a recognisable animal character.",
    challenge: "The central design task is to integrate decorative detail with a usable container form. The lid interface, grip surfaces and continuity of the animal-inspired detailing need to work as parts of the same product.",
    approach: "The model carries the textured design language around the body and into the sculptural lid. Perspective and top views communicate the overall proportions and show how the decorative elements relate to the storage form.",
    outcome: "The result is a coherent storage-product concept within the Animal collection. Its geometry defines the aesthetic direction and provides a basis for developing material choice, lid fit and the intended manufacturing process.",
    tools: ["Themed product development", "3D modelling", "Surface detailing"]
  },
  "candleholder": {
    overview: "A candleholder from the Household concept collection, built around a central candle opening and a broad radial base. Repeated curved fins turn a functional support object into a sculptural element for the home.",
    challenge: "The design explores the relationship between the candle interface, the supporting footprint and the surrounding sculptural form. Candle size, stability and material behaviour around heat are key requirements for its further engineering development.",
    approach: "The model distributes the radial forms around a central socket, creating a consistent transition from the centre to the outer footprint. Orthographic views and a dimensioned sheet document the overall model envelope alongside the perspective presentation.",
    outcome: "The project defines the candleholder's geometry and place within the Household collection. The model is a reference for selecting the intended candle size and a suitable material, followed by physical checks of fit, stability and thermal behaviour.",
    tools: ["Household product design", "Radial form development", "Dimensional documentation"]
  }
};

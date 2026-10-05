export const projects = [
  {
    title: 'Groundwater Level Data Compiler and Data Pipeline',
    description:
      'Automated Python pipeline for compiling and standardizing groundwater level and oil contamination data from multiple databases. Includes data cleaning, unit normalization, and structured export workflows ready for analysis and public release. Published as USGS data releases from the National Crude Oil Spill research site near Bemidji, Minnesota.',
    tags: ['Python', 'Pandas', 'Automation', 'Groundwater', 'Oil'],
    links: [
      { label: 'Bemidji data release', href: 'https://doi.org/10.5066/P9FJ8I0P' },
      { label: 'Site & well data release', href: 'https://doi.org/10.5066/F7736PDR' },
    ],
    github: null,
    demo: null,
    featured: true,
  },
  {
    title: 'Geospatial Data Summarization and Figure Automation',
    description:
      'ArcPy-based workflow for automatically generating publication-quality geospatial figures from hydrological model outputs — reducing manual GIS drafting from days to minutes. Transformed raw geogenic water contamination data into national percentiles by study basin. Produced figures 3–6 in Erickson et al. (Environmental Monitoring and Assessment, 2024).',
    tags: ['Python', 'ArcGIS Pro', 'ArcPy', 'GIS', 'Watershed'],
    links: [
      { label: 'Erickson et al. 2024', href: 'https://doi.org/10.1007/s10661-024-12362-2' },
    ],
    github: null,
    demo: null,
    featured: true,
  },

  {
    title: 'StreamStats Validation and Testing',
    description:
      'Developed validation tests for the USGS StreamStats application, including percent error checks, automated logging reports, and custom calculation test methods to ensure accurate streamflow statistics.',
    tags: ['Python', 'Geospatial', 'Hydrology', 'Watershed'],
    links: [
      { label: 'StreamStats', href: 'https://www.usgs.gov/streamstats' },
    ],
    github: null,
    demo: null,
    featured: true,
  },

  {
    title: 'SWB Model Calibration Toolkit',
    description:
      'Python toolkit for calibrating Soil Water Balance (SWB) models against observed groundwater recharge data. Implements iterative parameter estimation and uncertainty analysis for regional recharge assessments.',
    tags: ['Python', 'NumPy', 'Hydrology', 'Modeling'],
    github: null,
    demo: null,
    featured: false,
  },
 
  {
    title: 'Watershed Data Pipeline',
    description:
      'End-to-end data organization and preprocessing pipeline for watershed modeling teams. Automates ingestion of multi-source hydrological records into structured formats compatible with standard modeling frameworks.',
    tags: ['Python', 'Pandas', 'Data Engineering', 'Watershed'],
    github: null,
    demo: null,
    featured: false,
  },
  {
    title: 'Geologic Map Digitization Tool',
    description:
      'Utility for digitizing and standardizing legacy geologic map data into modern GIS-ready formats. Enables integration of historical field surveys into current USGS data workflows and spatial databases.',
    tags: ['Python', 'GIS', 'Geology', 'Data Processing'],
    github: null,
    demo: null,
    featured: false,
  },
  {
    title: 'Recharge Estimation Dashboard',
    description:
      'Interactive visualization tool for exploring groundwater recharge estimates across the Upper Midwest. Displays modeled vs. observed recharge data with spatial and temporal filtering capabilities.',
    tags: ['Python', 'Matplotlib', 'Visualization', 'Groundwater'],
    github: null,
    demo: null,
    featured: false,
  },
];

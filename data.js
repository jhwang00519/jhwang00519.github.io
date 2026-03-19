// ============================================================
//  data.js — 学术主页内容数据文件
//  ============================================================
//  如何添加新论文：在 PUBLICATIONS 数组开头（或末尾）新增一个对象：
//    {
//      title:    "论文完整标题",
//      authors:  ["J. Wang", "合作者1", "合作者2"],
//      venue:    "期刊/会议名称",
//      type:     "journal",   // "journal"（已发表）或 "preprint"（预印本）
//      year:     2026,
//      doi:      "10.xxxx/..."  // 可选
//    }
//
//  如何添加新学术活动：在 TALKS 数组开头新增：
//    {
//      year:       2026,
//      conference: "会议名称",
//      location:   "城市, 国家",
//      type:       "invited"   // "invited"、"poster" 或 null
//    }
// ============================================================

const SELF_NAME = "J. Wang";

// ── 论文列表（与 Google Scholar 保持一致，从新到旧）────────────
const PUBLICATIONS = [
  {
    title: "Monotone peridynamic neural operator for nonlinear material modeling with conditionally unique solutions",
    authors: ["J. Wang", "X. Tian", "Z. Zhang", "S. Silling", "S. Jafarzadeh", "Y. Yu"],
    venue: "Comput. Methods Appl. Mech. Eng.",
    type: "journal",
    year: 2026,
    doi: ""
  },
  {
    title: "A physics-guided smoothing method for material modeling with digital image correlation (DIC) measurements",
    authors: ["J. Wang", "C.-H. Lee", "W. Richardson", "Y. Yu"],
    venue: "IEEE Int. Conf. Image Process. (ICIP)",
    type: "conference",
    year: 2025,
    doi: ""
  },
  {
    title: "Asymptotic compatibility of the approximate-ball finite element method for 2D nonlocal Poisson problem with Neumann boundary conditions",
    authors: ["Y. Shi", "J. Wang", "J. Zhang"],
    venue: "arXiv:2512.00426",
    type: "preprint",
    year: 2025,
    doi: ""
  },
  {
    title: "Data generation-based operator learning for solving partial differential equations on unbounded domains",
    authors: ["J. Wang", "X. Wang", "J. Li", "B. Liu"],
    venue: "Commun. Comput. Phys.",
    type: "journal",
    year: 2025,
    doi: ""
  },
  {
    title: "Numerical simulation of the two-dimensional fractional Schrödinger equation for describing the quantum dynamics on a comb with the absorbing boundary conditions",
    authors: ["S. Zhang", "L. Liu", "Z. Ge", "Y. Liu", "L. Feng", "J. Wang"],
    venue: "Commun. Nonlinear Sci. Numer. Simul.",
    type: "journal",
    year: 2025,
    doi: ""
  },
  {
    title: "A stable and high-order numerical scheme with discrete DtN-type artificial boundary conditions for a 2D peridynamic diffusion model",
    authors: ["J. Wang", "Y. Di", "J. Z. Yang", "J. Zhang"],
    venue: "Comput. Math. Appl.",
    type: "journal",
    year: 2024,
    doi: ""
  },
  {
    title: "Numerical solution of convected wave equation in free field using artificial boundary method",
    authors: ["X. Wang", "J. Wang", "Y. Di", "J. Zhang"],
    venue: "Numer. Methods Partial Differ. Equ.",
    type: "journal",
    year: 2024,
    doi: ""
  },
  {
    title: "Construction of the absorbing boundary condition for the flow of Oldroyd-B fluid over a semi-infinite plate with magnetic effect",
    authors: ["L. Liu", "S. Zhang", "J. Wang", "L. Feng", "C. Xie"],
    venue: "Phys. Fluids",
    type: "journal",
    year: 2024,
    doi: ""
  },
  {
    title: "Stability and convergence analysis of high-order numerical schemes with DtN-type absorbing boundary conditions for nonlocal wave equations",
    authors: ["J. Wang", "J. Z. Yang", "J. Zhang"],
    venue: "IMA J. Numer. Anal.",
    type: "journal",
    year: 2024,
    doi: ""
  },
  {
    title: "Analysis of the anomalous diffusion in comb structure with absorbing boundary conditions",
    authors: ["L. Liu", "S. Chen", "L. Feng", "J. Wang", "S. Zhang", "Y. Chen", "X. Si", "L. Zheng"],
    venue: "J. Comput. Phys.",
    type: "journal",
    year: 2023,
    doi: ""
  },
  {
    title: "Implicit bias in understanding deep learning for solving PDEs beyond Ritz-Galerkin method",
    authors: ["J. Wang", "Z.-Q. J. Xu", "J. Zhang", "Y. Zhang"],
    venue: "CSIAM Trans. Appl. Math.",
    type: "journal",
    year: 2022,
    doi: ""
  },
  {
    title: "Stability and error analysis for a second-order approximation of the 1D nonlocal Schrödinger equation under DtN-type boundary conditions",
    authors: ["J. Wang", "J. Zhang", "C. Zheng"],
    venue: "Math. Comp.",
    type: "journal",
    year: 2022,
    doi: ""
  }
];

// ── 学术活动列表（从新到旧）─────────────────────────────────
const TALKS = [
  {
    year: 2025,
    conference: "AWM Research Symposium",
    location: "Madison, US",
    type: "invited"
  },
  {
    year: 2024,
    conference: "2024 SIAM New York–New Jersey–Pennsylvania Section Conference",
    location: "Rochester, NY, US",
    type: "invited"
  },
  {
    year: 2023,
    conference: "Workshop on Simulation of Multiphysics and Complex Systems",
    location: "Zhengzhou, China",
    type: "invited"
  },
  {
    year: 2023,
    conference: "Seminar on Numerical Computational Methods and Applications",
    location: "Chengdu, China",
    type: "invited"
  },
  {
    year: 2023,
    conference: "The 13th Annual Conference of Computational Mathematics",
    location: "Nanjing, China",
    type: "invited"
  },
  {
    year: 2021,
    conference: "Workshop and Summer School on Kinetic Theory and Related Applications",
    location: "Beijing, China",
    type: "poster"
  },
  {
    year: 2021,
    conference: "Workshop on Nonlocal Models: Theory and Computation",
    location: "Wuhan, China",
    type: null
  },
  {
    year: 2020,
    conference: "The 18th Annual Meeting of Chinese Industrial and Applied Mathematics",
    location: "Changsha, China",
    type: null
  },
  {
    year: 2020,
    conference: "The 4th Conference on Numerical Methods for Fractional-Derivative Problems",
    location: "Beijing, China",
    type: null
  },
  {
    year: 2019,
    conference: "Workshop on Modelling, Algorithm and Analysis on Complex Fluid Dynamics",
    location: "Beijing, China",
    type: "poster"
  },
  {
    year: 2019,
    conference: "Data Science Seminars, Institute of Natural Sciences",
    location: "Shanghai, China",
    type: "invited"
  },
  {
    year: 2019,
    conference: "The 14th SIAM East Asian Section Conference",
    location: "Wuhan, China",
    type: "invited"
  },
  {
    year: 2018,
    conference: "International Workshop on Numerical Analysis and Applications of Fractional Differential Equations",
    location: "Xuchang, China",
    type: null
  }
];

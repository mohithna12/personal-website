/**
 * Site content. Everything here comes from copy already on the site or from
 * the resumes it was built from. No metric is invented.
 *
 * Blocks marked DRAFT COPY are new writing for the redesign and need review.
 */

export type RunStep = { label: string; detail: string };

export type Project = {
  id: string;
  title: string;
  category: string;
  /** One-line catalog description. */
  blurb: string;
  /** Plain-language "what it does". */
  whatItDoes: string;
  stack: string[];
  /** Key technical decisions. */
  decisions: string[];
  /** Measured results — site/resume figures only. */
  results: string[];
  /** Stat strip shown under the run widget. */
  stats: { value: string; label: string }[];
  repo: string | null;
  /** Steps for the run widget. Only projects in the widget need these. */
  steps?: RunStep[];
};

/**
 * DRAFT COPY — every `steps` array below is new writing. Each step is derived
 * from that project's existing decisions/results; none adds a new claim.
 */
export const PROJECTS: Project[] = [
  {
    id: 'vandal',
    title: 'Vandal',
    category: 'AI agent safety',
    blurb: 'A self-healing guard that stops AI finance agents from being talked into fraud.',
    whatItDoes:
      'Sits between an AI finance agent and the money it can move. It searches for attack sequences against a simulated copy of the accounts, synthesizes controls that block them, and re-verifies those controls before they go live.',
    stack: ['Python', 'FastAPI', 'Next.js', 'Claude API'],
    decisions: [
      'Controls synthesized with CEGIS (counterexample-guided inductive synthesis).',
      'Bounded BFS attack search with state-hash dedup and partial-order reduction.',
      'Deterministic event-sourced financial twin (integer cents, simulated clock) for exact replay and delta-debugging.',
    ],
    results: [
      'Stopped 40/40 held-out fraud attacks with 0 false blocks.',
      'Re-verified 34K+ attack sequences.',
    ],
    stats: [
      { value: '40/40', label: 'HELD-OUT ATTACKS STOPPED' },
      { value: '0', label: 'FALSE BLOCKS' },
      { value: '34K+', label: 'SEQUENCES RE-VERIFIED' },
    ],
    // TODO(mohith): no public repo found for Vandal.
    repo: null,
  },
  {
    id: 'grandflow',
    title: 'GrandFLOW',
    category: 'Senior care platform',
    blurb: 'A senior care platform with voice agents and health dashboards.',
    whatItDoes:
      'A caregiver speaks to the platform instead of navigating it. It transcribes what they said, answers through a voice agent, and keeps the health and concierge dashboards in sync for the people watching over them.',
    stack: ['Next.js', 'TypeScript', 'Supabase', 'Whisper', 'Fish Audio'],
    decisions: [
      'Real-time voice interaction with Whisper STT and Fish Audio TTS.',
      'Supabase Realtime with role-based access behind both dashboards.',
      'Large fonts and simplified navigation, built with Tailwind and shadcn/ui.',
    ],
    results: ['Syncs 10+ wellness metrics across health and concierge dashboards.'],
    stats: [
      { value: '10+', label: 'WELLNESS METRICS SYNCED' },
      // TODO(mohith): no usage or adoption metric exists for GrandFLOW on the
      // site or in either resume. Send one and it goes here.
    ],
    repo: 'https://github.com/angadsingharora/GrandFLOW',
    steps: [
      { label: 'INPUT', detail: 'A caregiver speaks a request out loud.' },
      { label: 'TRANSCRIBE', detail: 'Whisper turns the audio into text in real time.' },
      { label: 'RESPOND', detail: 'The voice agent answers, and Fish Audio speaks it back.' },
      { label: 'SYNC', detail: 'Supabase Realtime pushes the update to every dashboard at once.' },
      { label: 'OUTPUT', detail: 'Health and concierge views reflect the change, scoped by role.' },
    ],
  },
  {
    id: 'cue-bot',
    title: 'Cue-Bot',
    category: 'Stream assistant',
    blurb: 'Eye tracking that switches your camera so you do not have to.',
    whatItDoes:
      'Watches where you are looking during a live stream and switches the OBS scene to match, so a solo broadcaster can run a two-camera show without touching the controls.',
    stack: ['Python', 'OpenCV', 'MediaPipe', 'OBS WebSocket'],
    decisions: [
      'Real-time eye tracking built on OpenCV and MediaPipe.',
      'OBS scene control driven through the WebSocket API.',
      'Debouncing plus 10-frame stability checks to suppress spurious switches.',
    ],
    results: [
      'Sub-200ms automatic camera switches during live streaming.',
      'Over 90% fewer false camera switches under live streaming conditions.',
    ],
    stats: [
      { value: '<200ms', label: 'SWITCH LATENCY' },
      { value: '90%', label: 'FEWER FALSE SWITCHES' },
      { value: '2', label: 'CAMERAS CONTROLLED' },
    ],
    repo: 'https://github.com/mohithna12/cue-bot',
    steps: [
      { label: 'INPUT', detail: 'The webcam feed streams in frame by frame.' },
      { label: 'TRACK', detail: 'MediaPipe locates the eyes and estimates gaze direction.' },
      { label: 'STABILISE', detail: 'A 10-frame stability check and debounce reject momentary glances.' },
      { label: 'DECIDE', detail: 'A sustained look at the second camera becomes a switch decision.' },
      { label: 'OUTPUT', detail: 'The OBS WebSocket API changes scene in under 200ms.' },
    ],
  },
  {
    id: 'robotics-telemetry',
    title: 'Robotics Telemetry',
    category: 'Data platform',
    blurb: 'Live dashboards that turned field-test guesswork into a readout.',
    whatItDoes:
      'Collects sensor readings off the robot during field testing and puts them on a live dashboard, so a failed autonomous run can be read off a chart instead of reconstructed from logs.',
    stack: ['Python', 'InfluxDB', 'Grafana'],
    decisions: [
      'Grafana telemetry covering 50+ robot metrics across 10 sensors.',
      'Python and InfluxDB pipelines to ingest and process field-test data.',
      'Dashboards surfacing route efficiency and navigation accuracy.',
    ],
    results: [
      'Autonomous debugging time cut from roughly 5 hours to under 1.5 hours.',
      'Over 100K data points processed during field testing and validation.',
    ],
    stats: [
      { value: '50+', label: 'METRICS TRACKED' },
      { value: '10', label: 'SENSORS' },
      { value: '5h → 1.5h', label: 'DEBUG TIME' },
      { value: '100K+', label: 'DATA POINTS' },
    ],
    // TODO(mohith): no public repo. Exo10A/High-Stakes-24-25 returns 404.
    repo: null,
    steps: [
      { label: 'INPUT', detail: '10 sensors emit readings throughout an autonomous run.' },
      { label: 'INGEST', detail: 'Python pipelines collect the stream and write it to InfluxDB.' },
      { label: 'PROCESS', detail: 'Over 100K data points are aggregated into route and accuracy series.' },
      { label: 'VISUALISE', detail: 'Grafana renders 50+ metrics as live dashboards.' },
      { label: 'OUTPUT', detail: 'A failed run is diagnosed in under 1.5 hours instead of roughly 5.' },
    ],
  },
  {
    id: 'kalshi',
    title: 'Kalshi Mispricing Engine',
    category: 'Market data',
    blurb: 'Reads live prediction-market prices and flags the ones that look wrong.',
    whatItDoes:
      'Follows NFL prediction markets as they move, compares each price against a win probability, and surfaces the ones that have drifted far enough to be worth a look.',
    stack: ['Rust', 'Tokio', 'WebSockets'],
    decisions: [
      'Order-book updates ingested over WebSocket through a concurrent Tokio pipeline.',
      'Candidates flagged by comparing live prices against win probabilities beyond 2 sigma.',
      'Strategy backtested against historical games, modelling transaction fees and slippage.',
    ],
    results: [
      'Ingests 12K+ NFL order-book updates per second over lock-free async channels.',
      'Surfaces 80+ candidate mispricings per week.',
      '14.7% simulated return across 1,200 historical games.',
    ],
    stats: [
      { value: '12K+/s', label: 'ORDER-BOOK UPDATES' },
      { value: '80+', label: 'CANDIDATES PER WEEK' },
      { value: '14.7%', label: 'SIMULATED RETURN' },
    ],
    repo: 'https://github.com/mohithna12/kalshi-alpha',
  },
  {
    id: 'gpt2',
    title: 'GPT-2 Inference Engine',
    category: 'Language models',
    blurb: 'Runs GPT-2 on a laptop CPU with no ML framework underneath.',
    whatItDoes:
      'A from-scratch implementation of GPT-2 text generation in C++, checked against a reference implementation so the outputs can be trusted.',
    stack: ['C++17', 'Multithreading'],
    decisions: [
      'GPT-2 implemented in C++17 with zero ML-framework dependencies.',
      'KV caching and multithreaded attention across 8 cores.',
      'Cache-blocked GEMM kernels for the matrix multiplies.',
      'Automated differential-testing harness against a reference implementation.',
    ],
    results: [
      '42 tokens/second on CPU.',
      'Per-token latency cut 61%.',
      'Logits within 1e-4 of HuggingFace outputs across 100 prompts.',
    ],
    stats: [
      { value: '42 tok/s', label: 'ON CPU' },
      { value: '61%', label: 'LOWER LATENCY' },
      { value: '1e-4', label: 'LOGIT AGREEMENT' },
    ],
    repo: 'https://github.com/mohithna12/gpt2-cpp',
  },
];

/** Projects featured in the run widget. */
export const RUN_WIDGET_IDS = ['grandflow', 'cue-bot', 'robotics-telemetry'];

export const COMPANIES = ['AWS', 'Stellantis', 'Fortinet', 'Maserati', 'CKTH', 'Mustang Math'];

export type Role = {
  title: string;
  company: string;
  location: string;
  period: string;
  summary: string;
};

export const AWS: Role = {
  title: 'Software Development Engineering Intern',
  company: 'Amazon Web Services',
  location: 'Seattle, WA',
  period: 'June 2026 — August 2026',
  summary:
    'Cut agreement lookup time to under 2 seconds by replacing manual search with a Python Bedrock agent mapping queries to 5 APIs. Caught 80% of regressions pre-deployment by replaying 61 labeled queries across 10 workflows, enforced a read-only API allowlist with 22 tests, and reduced lookup tickets 45% across 5 teams.',
};

export const CONTRACT_WORK: Role[] = [
  {
    title: 'Software Engineer',
    company: 'Stellantis',
    location: 'Berkeley, CA',
    period: 'September 2026 — Present',
    summary:
      'Building reservation-gated SSH through OpenSSH AuthorizedKeysCommand, admitting user keys only during active bookings, backed by a PostgreSQL/Prisma reservation engine with transactional conflict checks and waitlists. A systemd heartbeat agent reports load and active users every 30s over outbound-only HTTPS, and a containerized mock bench fleet with an OIDC provider tests SSH, SSO, and 3-tier RBAC end to end across 7 labs.',
  },
  {
    title: 'Technical Consultant',
    company: 'Fortinet',
    location: 'Berkeley, CA',
    period: 'August 2026 — Present',
    summary:
      'Building a ranking pipeline that scores 100K+ accounts on funding, hiring, and sector-growth signals, and a growth-potential model over 20+ behavioral and market features that raised high-growth precision 25%. Parallelized feature computation and scoring to cut batch inference time 70%, and serve model outputs through a FastAPI, PostgreSQL, and React monitoring platform that cut reporting time 60%.',
  },
  {
    title: 'Data Consultant',
    company: 'Maserati',
    location: 'Berkeley, CA',
    period: 'February 2026 — July 2026',
    summary:
      'Built a benchmarking model across 15+ luxury brands to identify EV and pricing gaps for a 5–10 year roadmap, analyzed 10K+ consumer reviews with NLP to quantify innovation-vs-heritage perception gaps, and automated trend dashboards that cut research time 40%.',
  },
  {
    title: 'Software Engineer',
    company: 'CKTH',
    location: 'Berkeley, CA',
    period: 'February 2026 — May 2026',
    summary:
      'Built 5 Next.js MVP pages and NestJS admin CRUD APIs supporting 1000+ records, with 20+ unit tests to improve staging release stability.',
  },
];

export const MUSTANG_MATH: Role = {
  title: 'Software Engineer',
  company: 'Mustang Math',
  location: 'Seattle, WA',
  period: 'May 2025 — August 2025',
  summary:
    'Led development on a test problem management platform used by Stanford and Berkeley, serving 10K+ students. Built a real-time collaborative testing system with a REST API, SvelteKit, and SQL used by 1.5K+ competitors, and optimized UI/UX with lazy loading to support growth to 75K+ monthly active users.',
};

/**
 * DRAFT COPY — footer dictionary entry. Two alternates were offered for review;
 * this is the one in place. Swap `word`, `pron`, `senses` and `footnote` to
 * change it.
 */
export const DEFINITION = {
  word: 'build',
  pron: '/bɪld/',
  senses: [
    { num: 'I.', pos: 'v.', text: 'To make a thing that did not exist, then keep it running.' },
    { num: 'II.', pos: 'n.', text: 'The working result, and the record of how it got there.' },
  ],
  footnote: 'Also see: Berkeley, where most of these were written.',
};
